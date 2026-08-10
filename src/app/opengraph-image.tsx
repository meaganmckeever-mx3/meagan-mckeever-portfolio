import { ImageResponse } from "next/og";

export const alt = "Meagan McKeever — Scientific AI and Digital R&D";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#17243e",
          color: "#f1e4c2",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "58px 66px 54px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 86% 10%, rgba(216,136,114,.76), transparent 39%), radial-gradient(circle at 4% 100%, rgba(168,180,156,.56), transparent 41%)",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />

        <div
          style={{
            alignItems: "center",
            borderBottom: "2px solid rgba(241,228,194,.72)",
            display: "flex",
            fontSize: 20,
            fontWeight: 700,
            justifyContent: "space-between",
            letterSpacing: "0.24em",
            paddingBottom: 18,
            position: "relative",
            textTransform: "uppercase",
          }}
        >
          <span>Meagan McKeever</span>
          <span style={{ opacity: 0.72 }}>Portfolio</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 990,
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#f1e4c2",
              display: "flex",
              fontSize: 86,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              textTransform: "uppercase",
            }}
          >
            Scientific AI &amp; Digital R&amp;D
          </div>
          <div
            style={{
              color: "rgba(241,228,194,.78)",
              display: "flex",
              fontSize: 29,
              lineHeight: 1.35,
              marginTop: 30,
            }}
          >
            Production systems and scientific software delivering ROI.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            justifyContent: "space-between",
            letterSpacing: "0.14em",
            position: "relative",
            textTransform: "uppercase",
          }}
        >
          <span>Science · deployment · physical systems</span>
          <span style={{ color: "#df3027" }}>Amsterdam</span>
        </div>
      </div>
    ),
    size,
  );
}
