/**
 * Motivo gráfico propio del Hero — anillos concéntricos que "respiran"
 * lentamente (ver .animate-breathe/.animate-breathe-slow en globals.css).
 * No depende de ninguna fotografía real (aún no entregada): es el primer
 * Hero del proyecto construido 100% con un motivo SVG en vez de un panel de
 * foto/fallback de foto. Inspirado en el óvalo del logotipo real de la
 * doctora, sin reproducirlo literalmente.
 */
export default function HeroOrbitMotif() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full"
      role="img"
      aria-label="Motivo gráfico decorativo de anillos concéntricos"
    >
      <circle
        cx="200"
        cy="200"
        r="170"
        fill="none"
        stroke="var(--color-blush)"
        strokeWidth="2"
        className="animate-breathe-slow"
        style={{ transformOrigin: "200px 200px" }}
      />
      <circle
        cx="200"
        cy="200"
        r="135"
        fill="none"
        stroke="var(--color-secondary)"
        strokeWidth="2.5"
        opacity="0.7"
      />
      <circle
        cx="200"
        cy="200"
        r="95"
        fill="var(--color-peach)"
        opacity="0.35"
        className="animate-breathe"
        style={{ transformOrigin: "200px 200px" }}
      />
      <circle cx="200" cy="200" r="60" fill="var(--color-primary)" opacity="0.9" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
    </svg>
  );
}
