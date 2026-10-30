import { Quicksand, Work_Sans, Parisienne } from "next/font/google";

// Tipografía real sugerida por la guía de marca (Heiders Script + Artnoova,
// ver "PALETA DE COLORES Dra llamas_compressed.pdf"). Ambas son fuentes de
// marketplace de pago (no están en Google Fonts bajo licencia libre), así
// que se sustituyen por el par libre más cercano en carácter, mismo patrón
// ya usado en otros sitios del proyecto (ej. Oxanium por TT Supermolot en
// dr-aram-alarcon): Quicksand (geométrica redondeada, cercana a Artnoova,
// usada en encabezados/UI) + Work Sans (cuerpo de texto legible) + Parisienne
// (script elegante, cercana a Heiders Script, reservada SOLO para el
// tratamiento de firma del nombre de la doctora, nunca bloques de texto).
export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});
