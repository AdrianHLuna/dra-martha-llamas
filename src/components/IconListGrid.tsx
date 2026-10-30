import type { LucideIcon } from "lucide-react";
import { iconForText } from "@/lib/contentIcons";

interface IconListGridProps {
  items: string[];
  fallbackIcon?: LucideIcon;
}

/**
 * Reemplaza el <ul><li> plano de las vistas de detalle por un grid de
 * tarjetas con ícono contextual — mismo lenguaje visual "halo" del sitio
 * (rounded-[2rem]) aplicado a una composición nueva, no solo a EntityCard.
 */
export default function IconListGrid({ items, fallbackIcon }: IconListGridProps) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = iconForText(item, fallbackIcon);
        return (
          <div
            key={i}
            className="halo-card flex items-start gap-3 rounded-[1.5rem] border border-border bg-[color:var(--color-surface-soft)] p-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon size={18} aria-hidden="true" />
            </span>
            <p className="text-sm text-[color:var(--color-ink-soft)]">{item}</p>
          </div>
        );
      })}
    </div>
  );
}
