import { ImageResponse } from "next/og";
import { doctor } from "@/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #880361 0%, #59214c 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>
          {`${doctor.title} ${doctor.name}`}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 28, opacity: 0.92 }}>
          {`${doctor.specialistTitle} · ${doctor.city}, ${doctor.state}`}
        </div>
      </div>
    ),
    size
  );
}
