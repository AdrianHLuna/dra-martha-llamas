"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  /** Valor real tal cual viene de doctor.ts, ej. "+75,000", "+2,500", "19". */
  value: string;
  label: string;
}

/**
 * Cuenta de 0 hasta el número real cuando la tarjeta entra en viewport
 * (IntersectionObserver, se activa una sola vez). Respeta
 * prefers-reduced-motion mostrando el valor final directo sin animar.
 */
export default function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!match) return; // no hay número reconocible, deja el texto tal cual

    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Si prefiere movimiento reducido, no hace falta hacer nada: `display`
    // ya arrancó en `value` (el estado inicial de useState) desde el primer
    // render, igual en servidor y cliente.
    if (reduceMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 1400;
        // El primer setState del conteo pasa dentro de un callback de
        // requestAnimationFrame, no de forma síncrona en el cuerpo del
        // efecto (react-hooks/set-state-in-effect) — además evita cualquier
        // desajuste de hidratación, ya que el primer render (servidor y
        // cliente) siempre muestra `value`, nunca "0".
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplay(`${prefix}${current.toLocaleString("es-MX")}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="text-center">
      <p ref={ref} className="text-3xl font-bold text-[color:var(--color-ink)] md:text-4xl">
        {display}
      </p>
      <p className="mt-1 text-sm font-medium text-[color:var(--color-ink)]/80">{label}</p>
    </div>
  );
}
