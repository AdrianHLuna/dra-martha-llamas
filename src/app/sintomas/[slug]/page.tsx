import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import IconListGrid from "@/components/IconListGrid";
import FaqAccordion from "@/components/FaqAccordion";
import DetailSidebar from "@/components/DetailSidebar";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Síntomas", href: "/sintomas" },
          { label: symptom.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 lg:grid lg:grid-cols-[1fr_380px] lg:items-start lg:gap-12">
        <article>
          <header className="mb-6">
            <div className="mb-6 overflow-hidden rounded-[1.75rem]">
              <CardImageHeader src={symptom.image} alt={symptom.name} aspect="16/10" />
            </div>
            <span className="inline-block rounded-full bg-[color:var(--color-gold)]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink)]">
              Síntoma
            </span>
            <h1 className="mt-3 text-3xl font-bold text-[color:var(--color-ink)]">{symptom.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">
              ¿Qué es {symptom.name.toLowerCase()}?
            </h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">{symptom.description}</p>
          </section>

          <AlarmSignsSection signs={symptom.alarmSigns} />

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Causas Posibles</h2>
            <IconListGrid items={symptom.causes} />
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">¿Por qué consultar?</h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">{symptom.whyConsult}</p>
          </section>

          {symptom.faqs && symptom.faqs.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Preguntas Frecuentes</h2>
              <FaqAccordion faqs={symptom.faqs} />
            </section>
          )}

        </article>

        <div className="mt-10 lg:mt-0">
          <DetailSidebar
            entityName={symptom.name.toLowerCase()}
            verb="atiende"
            relatedItems={relatedConditions.map((d) => ({
              label: d.name,
              href: `/enfermedades/${d.slug}`,
              categoryLabel: "Enfermedad" as const,
            }))}
          />
        </div>
      </div>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
