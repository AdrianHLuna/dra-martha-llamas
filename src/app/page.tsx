import type { Route } from "next";
import Link from "next/link";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import EntityCard from "@/components/EntityCard";
import HeroOrbitMotif from "@/components/HeroOrbitMotif";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

const PREVIEW_COUNT = 6;

export default function Home() {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero — motivo de anillos concéntricos "que respiran", sin foto (ver
          HeroOrbitMotif.tsx). min-h-screen obligatorio (AGENTS.md §5). */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[color:var(--color-surface-soft)] px-4 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[color:var(--color-ink-soft)]">
              {formatCredentials(doctor)}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[color:var(--color-ink)] md:text-5xl">
              <span className="font-signature text-5xl text-primary md:text-6xl">{doctor.name.split(" ").slice(0, 2).join(" ")}</span>
              <br />
              {doctor.specialistTitle} en {doctor.city}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--color-ink-soft)]">{doctor.philosophy}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#reservar"
                className="rounded-2xl border-2 border-primary px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Reservar en línea
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
            <HeroOrbitMotif />
          </div>
        </div>
      </section>

      {/* Barra de estadísticas reales. */}
      {doctor.stats && doctor.stats.length > 0 && (
        <section className="bg-[color:var(--color-gold)] px-4 py-10">
          <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
            {doctor.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[color:var(--color-ink)] md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-[color:var(--color-ink)]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sobre la doctora — franja a todo el ancho, split visual (acento de
          anillos + cita de su filosofía) en vez de un bloque de texto
          centrado. Rompe el patrón "columna centrada max-w-5xl" del resto
          del sitio (feedback del usuario, 2026-10-29). */}
      <section aria-labelledby="about-heading" className="relative overflow-hidden bg-[color:var(--color-surface-blush)] py-20">
        {/* Elementos decorativos flotando muy lento — vida ambiental, no una
            sola entrada. */}
        <span
          className="motion-safe:animate-breathe-slow absolute left-[8%] top-10 h-3 w-3 rounded-full bg-primary/30"
          aria-hidden="true"
        />
        <span
          className="motion-safe:animate-breathe absolute right-[12%] top-1/3 h-2 w-2 rounded-full bg-[color:var(--color-secondary)]/40"
          aria-hidden="true"
        />
        <span
          className="motion-safe:animate-breathe-slow absolute bottom-12 left-[20%] h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold)]/50"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-xs" aria-hidden="true">
            <div className="motion-safe:animate-breathe-slow absolute inset-0 rounded-full border-2 border-primary/25" />
            <div className="absolute inset-6 rounded-full border border-[color:var(--color-secondary)]/30" />
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
              <p className="text-lg font-medium italic leading-snug text-primary">“{doctor.philosophy}”</p>
            </div>
          </div>
          <div>
            <h2 id="about-heading" className="text-2xl font-bold text-[color:var(--color-ink)]">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-[color:var(--color-ink-soft)]">{doctor.bio}</p>
            <p className="mt-4 text-xs text-[color:var(--color-ink-soft)]">{formatCredentials(doctor)}</p>
          </div>
        </div>
      </section>

      {/* Certificaciones y Formación */}
      <section aria-labelledby="certifications-heading" className="bg-[color:var(--color-surface-blush)] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 id="certifications-heading" className="text-2xl font-bold">
            Certificaciones y Formación
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {doctor.certifications.map((cert, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold">{cert.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{cert.institution}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-lg font-semibold">Educación y Diplomados</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {doctor.education.map((ed, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-semibold">{ed.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{ed.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Enfermedades — grid de tarjetas (el patrón más convencional
          de los 3, a propósito, para que la variación esté en los otros
          dos), pero con el contenedor desplazado (no centrado) sobre una
          franja a todo el ancho del viewport. */}
      <section aria-labelledby="diseases-heading" className="bg-[color:var(--color-surface-soft)] py-16">
        <div className="max-w-6xl px-4 lg:ml-[7%] lg:mr-auto lg:max-w-[62rem]">
          <div className="flex items-end justify-between">
            <h2 id="diseases-heading" className="text-2xl font-bold text-[color:var(--color-ink)]">
              Enfermedades que Atendemos
            </h2>
            <Link href="/enfermedades" className="text-sm font-semibold text-primary hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, PREVIEW_COUNT).map((disease, i) => (
              <EntityCard
                key={disease.id}
                href={`/enfermedades/${disease.slug}` as Route}
                index={i}
                name={disease.name}
                excerpt={`${disease.description.slice(0, 110)}...`}
                image={disease.image}
                categoryLabel="Enfermedad"
                ctaLabel="Ver guía médica"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Preview Servicios — composición "destacado + secundarios": una
          tarjeta grande con el primer servicio (el que la doctora enfatizó
          más al dar el catálogo) y el resto en una columna angosta al lado,
          en vez de un grid uniforme. */}
      <section aria-labelledby="services-heading" className="bg-[color:var(--color-surface-blush)] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <h2 id="services-heading" className="text-2xl font-bold text-[color:var(--color-ink)]">
              Servicios
            </h2>
            <Link href="/servicios" className="text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            {services[0] && (
              <Link
                href={`/servicios/${services[0].slug}` as Route}
                className="halo-card group relative flex flex-col justify-end overflow-hidden rounded-[2rem] border border-border bg-background p-8 min-h-[22rem]"
              >
                <span className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-secondary)] text-sm font-bold text-white">
                  01
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-secondary)]">
                  Servicio destacado
                </span>
                <h3 className="mt-2 text-2xl font-bold text-[color:var(--color-ink)]">{services[0].name}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{services[0].description}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Ver ficha del procedimiento →
                </span>
              </Link>
            )}
            <div className="flex flex-col gap-4">
              {services.slice(1, PREVIEW_COUNT).map((service, i) => (
                <Link
                  key={service.id}
                  href={`/servicios/${service.slug}` as Route}
                  className="halo-card flex items-center gap-4 rounded-[1.5rem] border border-border bg-background p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-secondary)]/15 text-xs font-bold text-[color:var(--color-secondary)]">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[color:var(--color-ink)]">{service.name}</p>
                    <p className="truncate text-xs text-[color:var(--color-ink-soft)]">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preview Síntomas — carrusel horizontal con scroll-snap (válido en
          Home por AGENTS.md §2, "solo como preview"). */}
      <section aria-labelledby="symptoms-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 id="symptoms-heading" className="text-2xl font-bold text-[color:var(--color-ink)]">
              Síntomas
            </h2>
            <Link href="/sintomas" className="text-sm font-semibold text-primary hover:underline">
              Ver todos
            </Link>
          </div>
        </div>
        <div className="mt-8 flex gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] snap-x snap-mandatory sm:px-[max(1rem,calc((100vw-72rem)/2))]">
          {symptoms.slice(0, PREVIEW_COUNT).map((symptom, i) => (
            <div key={symptom.id} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
              <EntityCard
                href={`/sintomas/${symptom.slug}` as Route}
                index={i}
                name={symptom.name}
                excerpt={`${symptom.description.slice(0, 90)}...`}
                image={symptom.image}
                categoryLabel="Síntoma"
                ctaLabel="Ver orientación médica"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Precio y Forma de Pago — tabla completa, la doctora dio precios reales
          detallados por procedimiento, no solo la consulta base. */}
      <section aria-labelledby="price-heading" className="bg-[color:var(--color-surface-blush)] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 id="price-heading" className="text-center text-2xl font-bold">
            Precios y Promociones
          </h2>
          <p className="mt-4 text-center text-5xl font-bold text-primary">${doctor.consultationPrice.toLocaleString("es-MX")} MXN</p>
          <p className="text-center text-sm text-[color:var(--color-ink-soft)]">Consulta general</p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full text-left text-sm">
              <tbody>
                {services
                  .filter((s) => s.priceRange && /^\$/.test(s.priceRange))
                  .map((s) => (
                    <tr key={s.id} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-medium">{s.name}</td>
                      <td className="px-5 py-3 text-right text-[color:var(--color-ink-soft)]">{s.priceRange}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-[color:var(--color-ink-soft)]">
            Métodos de pago: {doctor.paymentMethods.join(", ")}
          </p>
          {doctor.insurances && doctor.insurances.length > 0 && (
            <p className="mt-1 text-center text-sm text-[color:var(--color-ink-soft)]">
              {doctor.insurances.join(". ")}
            </p>
          )}
        </div>
      </section>

      {/* Reserva en línea — widget real de Doctoralia (excepción deliberada). */}
      <section id="reservar" aria-labelledby="reservar-heading" className="px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="reservar-heading" className="text-2xl font-bold">
            Reserva tu Cita en Línea
          </h2>
          <p className="mt-3 text-[color:var(--color-ink-soft)]">
            Elige el horario que mejor te convenga directamente desde el calendario de Doctoralia.
          </p>
          <div className="mt-8">
            <DoctoraliaWidget />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-heading" className="bg-primary px-4 py-16 text-center text-white">
        <h2 id="cta-heading" className="text-2xl font-bold">
          No dejes pasar tu salud
        </h2>
        <p className="mt-3 text-white/90">
          Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera consulta.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-transform hover:scale-105"
        >
          Agendar Cita Ahora
        </a>
      </section>
    </>
  );
}
