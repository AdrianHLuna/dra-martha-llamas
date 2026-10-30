import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types/schema";

/**
 * Acordeón real con <details>/<summary> nativo (sin JS de cliente, sin
 * estado) en vez de preguntas siempre expandidas — reemplaza el patrón
 * <h3>/<p> plano usado antes en las 3 vistas de detalle.
 */
export default function FaqAccordion({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="mt-4 space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group halo-card rounded-[1.5rem] border border-border bg-[color:var(--color-surface-soft)] px-5 py-4"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[color:var(--color-ink)] marker:content-none">
            {faq.question}
            <ChevronDown
              size={18}
              className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm text-[color:var(--color-ink-soft)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
