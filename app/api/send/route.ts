import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

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
      from: "Portfolio <onboarding@resend.dev>",
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
