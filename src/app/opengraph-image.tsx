import { ImageResponse } from "next/og";

export const alt = "[Company Name] preview image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #0e1a2b 0%, #161c24 100%)",
          color: "#f5f2ea",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(217,222,229,0.14)",
            padding: "48px",
            background: "radial-gradient(circle at top right, rgba(15,107,104,0.22), transparent 28%), radial-gradient(circle at top left, rgba(200,155,60,0.18), transparent 22%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: "1px solid rgba(200,155,60,0.28)",
              padding: "10px 16px",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c89b3c",
            }}
          >
            [Company Name]
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700 }}>
              Secure systems. Stronger brands. Better digital platforms.
            </div>
            <div style={{ fontSize: 30, lineHeight: 1.45, color: "rgba(245,242,234,0.78)" }}>
              Premium multi-service company across cybersecurity, web development, graphics and design, and civil engineering.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
