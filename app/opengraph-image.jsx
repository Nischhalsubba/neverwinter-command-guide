import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(16,30,52,1) 0%, rgba(9,19,33,1) 100%)",
          color: "#eef4ff",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(125,211,252,0.26), transparent 24%), radial-gradient(circle at 84% 16%, rgba(244,213,141,0.14), transparent 18%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 54,
            left: 56,
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(244,213,141,0.28)",
            background: "rgba(244,213,141,0.08)",
            color: "#f4d58d",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase"
          }}
        >
          Player Command Guide
        </div>
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            top: 150,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 700,
              maxWidth: 900,
              letterSpacing: -2
            }}
          >
            Search All Neverwinter Commands
          </div>
          <div
            style={{
              marginTop: 26,
              maxWidth: 860,
              color: "#d7e2f2",
              fontSize: 32,
              lineHeight: 1.35
            }}
          >
            Chat, whispers, alliance, emotes, utility tools, screenshots, combat logs, and
            player-ready syntax in one searchable reference.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            bottom: 54,
            display: "flex",
            gap: 18
          }}
        >
          {["Chat", "Private", "Party / Guild", "Utility", "Emotes", "Display"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 52,
                padding: "0 18px",
                borderRadius: 999,
                border: "1px solid rgba(154,182,214,0.2)",
                background: "rgba(9,19,33,0.88)",
                color: "#eef4ff",
                fontSize: 22
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
