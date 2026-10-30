import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";

export const metadata: Metadata = {
  title: "Servicios y Procedimientos",
  description: "Catálogo de servicios y procedimientos médicos disponibles en consulta.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Servicios y Procedimientos</h1>
      </header>
      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="overflow-hidden rounded-2xl border border-border bg-background">
            <CardImageHeader alt={service.name} />
            <div className="p-5">
              <h2 className="font-semibold">{service.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              <Link
                href={`/servicios/${service.slug}`}
                className="mt-4 flex items-center justify-between rounded-2xl bg-primary px-6 py-4 text-sm leading-snug font-medium text-primary-foreground"
              >
                Ver Ficha del Procedimiento
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
