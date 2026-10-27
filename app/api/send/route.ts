import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// shortcut: in-memory, so each serverless instance counts separately; move to Upstash/KV if spam gets through
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

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
      return Response.json(
        {
          error: "Too many messages. Please try again in a few minutes.",
        },
        {
          status: 429,
        },
      );
    }

    const body = await request.json();

    const { name, email, message, website } = body;

    // Honeypot filled: pretend success so bots don't retry
    if (typeof website === "string" && website.trim() !== "") {
      return Response.json(
        {
          success: true,
          message: "Email sent successfully.",
        },
        {
          status: 200,
        },
      );
    }

    // Make sure all values are strings
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json(
        {
          error: "Invalid request data.",
        },
        {
          status: 400,
        },
      );
    }

    // Remove unnecessary whitespace
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    // Required validation
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    // Name length validation
    if (cleanName.length > 100) {
      return Response.json(
        {
          error: "Name must be 100 characters or less.",
        },
        {
          status: 400,
        },
      );
    }

    // Email length validation
    if (cleanEmail.length > 254) {
      return Response.json(
        {
          error: "Email must be 254 characters or less.",
        },
        {
          status: 400,
        },
      );
    }

    // Message length validation
    if (cleanMessage.length > 2000) {
      return Response.json(
        {
          error: "Message must be 2000 characters or less.",
        },
        {
          status: 400,
        },
      );
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
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

      return Response.json(
        {
          error: "Failed to send email.",
        },
        {
          status: 500,
        },
      );
    }

    console.log("EMAIL SENT:", data);

    return Response.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return Response.json(
      {
        error: "Something went wrong on the server.",
      },
      {
        status: 500,
      },
    );
  }
}
