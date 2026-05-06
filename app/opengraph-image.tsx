import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const logo = readFileSync(join(process.cwd(), "public", "logo-og.png")).toString("base64");
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F8F7F2",
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
            background: "linear-gradient(135deg, #C9A84C 0%, #F4D86B 44%, #FFF8D8 100%)",
            borderRadius: "9999px",
            filter: "blur(58px)",
            height: 500,
            left: 610,
            opacity: 0.35,
            position: "absolute",
            top: 18,
            width: 500,
          }}
        />
        <div
          style={{
            background: "#0A1628",
            borderRadius: "9999px",
            filter: "blur(95px)",
            height: 360,
            left: -120,
            opacity: 0.12,
            position: "absolute",
            top: 360,
            width: 520,
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(rgba(10,22,40,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.055) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            height: "100%",
            opacity: 0.45,
            position: "absolute",
            width: "100%",
          }}
        />
        <div
          style={{
            background: "rgba(255, 255, 255, 0.86)",
            border: "1px solid rgba(10, 22, 40, 0.1)",
            borderRadius: 34,
            boxShadow: "0 34px 90px rgba(10, 22, 40, 0.12)",
            display: "flex",
            height: 510,
            overflow: "hidden",
            position: "relative",
            width: 1060,
          }}
        >
          <div
            style={{
              background: "#0A1628",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 40px",
              width: 316,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#FFFFFF",
                borderRadius: 18,
                display: "flex",
                height: 78,
                justifyContent: "center",
                padding: "0 20px",
                width: 218,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Delipat logo"
                src={logoSrc}
                style={{
                  height: 47,
                  objectFit: "contain",
                  width: 178,
                }}
              />
            </div>
            <div
              style={{
                color: "#F3DE91",
                display: "flex",
                flexDirection: "column",
                fontSize: 26,
                fontWeight: 700,
                gap: 15,
                lineHeight: 1.2,
              }}
            >
              <span>Missed calls</span>
              <span>Slow follow-up</span>
              <span>Lost retainers</span>
            </div>
            <div
              style={{
                borderTop: "1px solid rgba(243, 222, 145, 0.28)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 22,
                lineHeight: 1.35,
                paddingTop: 26,
              }}
            >
              Built for personal injury firms.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              height: 510,
              justifyContent: "center",
              padding: "56px 62px",
              width: 744,
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: 14,
              }}
            >
              <div
                style={{
                  background: "#C9A84C",
                  borderRadius: "9999px",
                  height: 11,
                  width: 11,
                }}
              />
              <div
                style={{
                  color: "#9A7B24",
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                }}
              >
                Free intake diagnostic
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 69,
                fontWeight: 900,
                letterSpacing: -2,
                lineHeight: 0.98,
              }}
            >
              <span>Turn more</span>
              <span>paid leads into</span>
              <span>signed cases.</span>
            </div>

            <div
              style={{
                color: "#4A5568",
                display: "flex",
                fontSize: 29,
                lineHeight: 1.32,
                maxWidth: 650,
              }}
            >
              Find the intake leaks costing your PI firm high-value cases before the first callback.
            </div>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 4,
              }}
            >
              {["30-minute call", "No pitch", "Actionable gaps"].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(201, 168, 76, 0.14)",
                    border: "1px solid rgba(201, 168, 76, 0.32)",
                    borderRadius: 999,
                    color: "#0A1628",
                    fontSize: 22,
                    fontWeight: 700,
                    padding: "12px 18px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
