import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import CardImageHeader from "@/components/CardImageHeader";
import IconListGrid from "@/components/IconListGrid";
import FaqAccordion from "@/components/FaqAccordion";
import DetailSidebar from "@/components/DetailSidebar";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Enfermedades", href: "/enfermedades" },
          { label: disease.name },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-20 lg:grid lg:grid-cols-[1fr_380px] lg:items-start lg:gap-12">
        <article>
          <header className="mb-6">
            <div className="mb-6 overflow-hidden rounded-[1.75rem]">
              <CardImageHeader src={disease.image} alt={disease.name} aspect="16/10" />
            </div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Enfermedad
            </span>
            <h1 className="mt-3 text-3xl font-bold text-[color:var(--color-ink)]">{disease.name}</h1>
            <div className="mt-3">
              <MedicalReviewByline lastReviewed={disease.lastReviewed} />
            </div>
          </header>

          <section>
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">
              ¿Qué es {disease.name.toLowerCase()}?
            </h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">{disease.description}</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Síntomas</h2>
            <IconListGrid items={disease.symptoms} />
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Causas</h2>
            <IconListGrid items={disease.causes} />
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Factores de Riesgo</h2>
            <IconListGrid items={disease.riskFactors} />
          </section>

          {disease.mexicoStats && (
            <section className="mt-8 rounded-[1.5rem] bg-[color:var(--color-surface-blush)] p-5">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Estadísticas en México</h2>
              <p className="mt-2 text-[color:var(--color-ink-soft)]">{disease.mexicoStats}</p>
            </section>
          )}

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Complicaciones</h2>
            <IconListGrid items={disease.complications} />
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Tratamientos</h2>
            <IconListGrid items={disease.treatments} />
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Preguntas Frecuentes</h2>
            <FaqAccordion faqs={disease.faqs} />
          </section>

          {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Relacionados</h2>
              <ul className="mt-2 space-y-1">
                {relatedServices.map((s) => (
                  <li key={s.id}>
                    <Link href={`/servicios/${s.slug}`} className="text-primary underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
                {relatedSymptoms.map((s) => (
                  <li key={s.id}>
                    <Link href={`/sintomas/${s.slug}`} className="text-primary underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {disease.sources && disease.sources.length > 0 && (
            <section className="mt-8 text-sm text-[color:var(--color-ink-soft)]">
              <h2 className="font-semibold text-[color:var(--color-ink)]">Fuentes</h2>
              <ul className="mt-1 list-inside list-disc">
                {disease.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <div className="mt-10 lg:mt-0">
          <DetailSidebar entityName={disease.name.toLowerCase()} verb="atiende" />
        </div>
      </div>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
