import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import CardImageHeader from "./CardImageHeader";

interface EntityCardProps {
  href: Route;
  index: number;
  name: string;
  excerpt: string;
  image?: string;
  categoryLabel: "Enfermedad" | "Servicio" | "Síntoma";
  ctaLabel: string;
}

const categoryStyles: Record<EntityCardProps["categoryLabel"], string> = {
  Enfermedad: "bg-primary text-white",
  Servicio: "bg-[color:var(--color-secondary)] text-white",
  Síntoma: "bg-[color:var(--color-gold)] text-[color:var(--color-ink)]",
};

/**
 * Tarjeta "halo": esquinas muy redondeadas (rounded-[2rem]), folio circular
 * (eco del motivo ovalado del logo real) y, en hover, un resplandor de color
 * en vez de zoom/bounce/borde simple — ver `.halo-card` en globals.css.
 * Composición propia de este sitio, distinta de las ya registradas.
 */
export default function EntityCard({ href, index, name, excerpt, image, categoryLabel, ctaLabel }: EntityCardProps) {
  return (
    <article className="halo-card overflow-hidden rounded-[2rem] border border-border bg-background">
      <div className="relative">
        <CardImageHeader src={image} alt={name} aspect="16/10" />
        <span
          className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${categoryStyles[categoryLabel]}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
          {categoryLabel}
        </span>
        <h3 className="mt-1 text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          {ctaLabel} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
