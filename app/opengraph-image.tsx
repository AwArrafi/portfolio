import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Awang Arrafi — Frontend-Focused Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "public/images/profile-professional.png"),
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "linear-gradient(135deg, #07111f 0%, #0b1424 60%, #0e2a3a 100%)",
          color: "#dae2fd",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={260}
          height={260}
          alt=""
          style={{
            borderRadius: 9999,
            border: "6px solid #8aebff",
            objectFit: "cover",
            background: "#ffffff",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#8aebff", letterSpacing: 2 }}>
            FULL-STACK DEVELOPER
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 12 }}>
            Awang Arrafi
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#bbc9cd",
              marginTop: 20,
              maxWidth: 620,
              lineHeight: 1.4,
            }}
          >
            Building clean, responsive web apps with React, Next.js, and
            Django.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
