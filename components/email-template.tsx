import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        lineHeight: "1.6",
        color: "#0f172a",
        backgroundColor: "#f6f9ff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "32px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h1
          style={{
            margin: "0 0 24px",
            fontSize: "24px",
            color: "#0f172a",
          }}
        >
          New Portfolio Message
        </h1>

        <p
          style={{
            margin: "0 0 8px",
            fontSize: "14px",
            color: "#64748b",
          }}
        >
          You received a new message from your portfolio website.
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e2e8f0",
            margin: "24px 0",
          }}
        />

        <p style={{ margin: "0 0 12px" }}>
          <strong>Name:</strong> {name}
        </p>

        <p style={{ margin: "0 0 20px" }}>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            style={{
              color: "#0891b2",
              textDecoration: "none",
            }}
          >
            {email}
          </a>
        </p>

        <div
          style={{
            backgroundColor: "#f8fbff",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontWeight: "700",
            }}
          >
            Message
          </p>

          <p
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </p>
        </div>

        <p
          style={{
            margin: "28px 0 0",
            fontSize: "12px",
            color: "#94a3b8",
          }}
        >
          Sent from your portfolio contact form.
        </p>
      </div>
    </div>
  );
}
