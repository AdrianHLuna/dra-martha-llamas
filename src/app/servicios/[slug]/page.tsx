import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import IconListGrid from "@/components/IconListGrid";
import FaqAccordion from "@/components/FaqAccordion";
import DetailSidebar from "@/components/DetailSidebar";
import { FileText } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));
  const specEntries = service.technicalSpecs ? Object.entries(service.technicalSpecs) : [];

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: service.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 lg:grid lg:grid-cols-[1fr_380px] lg:items-start lg:gap-12">
        <article>
          <header className="mb-6">
            <div className="mb-6 overflow-hidden rounded-[1.75rem]">
              <CardImageHeader src={service.image} alt={service.name} aspect="16/10" />
            </div>
            <span className="inline-block rounded-full bg-[color:var(--color-secondary)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-secondary)]">
              Servicio
            </span>
            <h1 className="mt-3 text-3xl font-bold text-[color:var(--color-ink)]">{service.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={service.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">
              ¿En qué consiste {service.name.toLowerCase()}?
            </h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">{service.longDescription}</p>
          </section>

          {specEntries.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Datos Técnicos</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {specEntries.map(([key, value], i) => (
                  <div
                    key={key}
                    className="halo-card flex items-start gap-3 rounded-[1.5rem] border border-border bg-[color:var(--color-surface-soft)] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-secondary)]/15 text-[color:var(--color-secondary)]">
                      <span className="text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[color:var(--color-ink-soft)]">{key}</p>
                      <p className="font-medium text-[color:var(--color-ink)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Beneficios</h2>
            <IconListGrid items={service.benefits} fallbackIcon={FileText} />
          </section>

          {service.faqs && service.faqs.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Preguntas Frecuentes</h2>
              <FaqAccordion faqs={service.faqs} />
            </section>
          )}

          {service.priceRange && (
            <section className="mt-8 rounded-[1.5rem] bg-[color:var(--color-surface-blush)] p-5">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Precio</h2>
              <p className="mt-2 text-[color:var(--color-ink-soft)]">{service.priceRange}</p>
            </section>
          )}

          {relatedConditions.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Relacionados</h2>
              <ul className="mt-2 space-y-1">
                {relatedConditions.map((d) => (
                  <li key={d.id}>
                    <Link href={`/enfermedades/${d.slug}`} className="text-primary underline">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <div className="mt-10 lg:mt-0">
          <DetailSidebar entityName={service.name.toLowerCase()} verb="realiza" />
        </div>
      </div>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
