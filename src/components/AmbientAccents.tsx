interface AmbientAccentsProps {
  /** Distintas combinaciones de posición/tamaño para que no se vea la misma
   * composición repetida en cada sección donde se usa este componente. */
  variant?: "about" | "pricing" | "cta" | "certifications";
}

/**
 * Detalles decorativos de fondo — mezcla de anillos huecos y puntos sólidos
 * (no solo "bolitas" de color plano) con latido/respiración continua muy
 * sutil, reforzando el motivo de anillos del Hero en vez de ser elementos
 * sueltos sin relación con el resto del sitio. Reutilizable en cualquier
 * sección, no solo "Sobre la doctora" (feedback del usuario, 2026-10-30).
 */
export default function AmbientAccents({ variant = "about" }: AmbientAccentsProps) {
  const layouts: Record<string, { cls: string; style: React.CSSProperties }[]> = {
    about: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[6%] top-12 h-9 w-9 rounded-full border-2 border-primary/25", style: {} },
      { cls: "motion-safe:animate-breathe absolute right-[10%] top-1/3 h-2.5 w-2.5 rounded-full bg-[color:var(--color-secondary)]/45", style: {} },
      { cls: "motion-safe:animate-breathe-slow absolute bottom-16 left-[18%] h-5 w-5 rounded-full border border-[color:var(--color-gold)]/50", style: {} },
      { cls: "motion-safe:animate-breathe absolute bottom-24 right-[22%] h-2 w-2 rounded-full bg-primary/35", style: {} },
    ],
    pricing: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[4%] top-8 h-6 w-6 rounded-full border border-primary/20", style: {} },
      { cls: "motion-safe:animate-breathe absolute right-[6%] top-1/4 h-2 w-2 rounded-full bg-[color:var(--color-gold)]/50", style: {} },
      { cls: "motion-safe:animate-breathe-slow absolute bottom-10 right-[14%] h-7 w-7 rounded-full border-2 border-[color:var(--color-secondary)]/20", style: {} },
    ],
    cta: [
      { cls: "motion-safe:animate-breathe-slow absolute left-[10%] bottom-10 h-10 w-10 rounded-full border border-white/25", style: {} },
      { cls: "motion-safe:animate-breathe absolute right-[8%] top-10 h-2.5 w-2.5 rounded-full bg-white/40", style: {} },
    ],
    certifications: [
      { cls: "motion-safe:animate-breathe-slow absolute right-[5%] top-4 h-7 w-7 rounded-full border border-primary/15", style: {} },
      { cls: "motion-safe:animate-breathe absolute left-[8%] bottom-6 h-2 w-2 rounded-full bg-[color:var(--color-secondary)]/35", style: {} },
    ],
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {layouts[variant].map((item, i) => (
        <span key={i} className={item.cls} style={item.style} />
      ))}
    </div>
  );
}
