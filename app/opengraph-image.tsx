import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#FAFAFA",
          color: "#0A1628",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F3DE91 100%)",
            borderRadius: "9999px",
            filter: "blur(70px)",
            height: 420,
            left: 500,
            opacity: 0.35,
            position: "absolute",
            top: 80,
            width: 420,
          }}
        />
        <div
          style={{
            border: "1px solid rgba(10, 22, 40, 0.12)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            height: 510,
            justifyContent: "center",
            padding: "64px 72px",
            position: "relative",
            width: 1040,
          }}
        >
          <div
            style={{
              color: "#9A7B24",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Delipat
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              maxWidth: 920,
            }}
          >
            <span>Faster intake.</span>
            <span>Better follow-up.</span>
            <span>More signed cases.</span>
          </div>
          <div
            style={{
              color: "#4A5568",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Intake systems and diagnostics for personal injury firms.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
