import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

// shortcut: in-memory, so each serverless instance counts separately; move to Upstash/KV if spam gets through
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fail = (error: string, status = 400) =>
  Response.json({ error }, { status });

// Honeypot hits get this too, so bots don't retry
const sent = () =>
  Response.json({ success: true, message: "Email sent successfully." });

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT) {
    recentRequests.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  recentRequests.set(ip, timestamps);

  // Keep the map from growing without bound
  if (recentRequests.size > 1000) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) {
        recentRequests.delete(key);
      }
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return fail("Too many messages. Please try again in a few minutes.", 429);
    }

    const { name, email, message, website } = await request.json();

    if (typeof website === "string" && website.trim() !== "") return sent();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return fail("Invalid request data.");
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return fail("All fields are required.");
    }
    if (cleanName.length > 100) {
      return fail("Name must be 100 characters or less.");
    }
    if (cleanEmail.length > 254) {
      return fail("Email must be 254 characters or less.");
    }
    if (cleanMessage.length > 2000) {
      return fail("Message must be 2000 characters or less.");
    }
    if (!emailPattern.test(cleanEmail)) {
      return fail("Please enter a valid email address.");
    }

    // Checked before creating the client: `new Resend()` throws without a key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      return fail("Email service is not configured.", 500);
    }

    const { data, error } = await new Resend(
      process.env.RESEND_API_KEY,
    ).emails.send({
      // Set RESEND_FROM (e.g. "Portfolio <hello@yourdomain.com>") once a domain is verified in Resend
      from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: ["arrafiandroid@gmail.com"],
      replyTo: cleanEmail,
      subject: `Portfolio Contact from ${cleanName}`,
      react: EmailTemplate({
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
      }),
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return fail("Failed to send email.", 500);
    }

    console.log("EMAIL SENT:", data);
    return sent();
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return fail("Something went wrong on the server.", 500);
  }
}
