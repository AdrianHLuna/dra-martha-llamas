import type { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import EntityCard from "@/components/EntityCard";
import HeroOrbitMotif from "@/components/HeroOrbitMotif";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";
import AnimatedStat from "@/components/AnimatedStat";
import InstitutionBadge from "@/components/InstitutionBadge";
import AmbientAccents from "@/components/AmbientAccents";

// Logos reales de instituciones, descargados directamente de sus sitios
// oficiales (uag.mx, ugto.mx/Wikimedia Commons —dominio público por ley de
// derechos de autor mexicana para escudos—, femecog.org.mx, comegic.org.mx,
// amec.mx) — nunca de bancos de logos de terceros sin verificar. Las que no
// tienen entrada aquí (AMM, "Colegio de Ginecólogos y Obstetras en Chiapas",
// "Asociación Mexicana de Endocrinología" —nombre ambiguo entre varias
// asociaciones reales, no se pudo confirmar cuál con certeza— se quedan con
// el sello genérico de InstitutionBadge.
const INSTITUTION_LOGOS: Record<string, string> = {
  "Universidad Autónoma de Guadalajara": "/institution-logos/uag.svg",
  "Universidad de Guanajuato": "/institution-logos/ug.png",
  "FEMECOG": "/institution-logos/femecog.png",
  "COMEGIC": "/institution-logos/comegic.png",
  "Colegio Mexicano de Ginecólogos dedicados a la Colposcopia": "/institution-logos/comegic.png",
  "AMEC": "/institution-logos/amec.png",
};
import { iconForText } from "@/lib/contentIcons";
import { Banknote, CreditCard, ArrowLeftRight, ShieldCheck } from "lucide-react";

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

      {/* Barra de estadísticas reales — tarjetas con ícono + anillo
          decorativo (eco del motivo del Hero) y conteo animado al entrar en
          viewport, en vez de solo texto sobre un fondo plano (feedback del
          usuario, 2026-10-29). */}
      {doctor.stats && doctor.stats.length > 0 && (
        <section className="bg-[color:var(--color-surface-soft)] px-4 py-14">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {doctor.stats.map((stat) => {
              const Icon = iconForText(stat.label);
              return (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background p-6 text-center"
                >
                  <span
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border-2 border-[color:var(--color-gold)]/40"
                    aria-hidden="true"
                  />
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-gold)]/25 text-[color:var(--color-primary-dark)]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="relative mt-3">
                    <AnimatedStat value={stat.value} label={stat.label} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Sobre la doctora — franja a todo el ancho, split visual (acento de
          anillos + cita de su filosofía) en vez de un bloque de texto
          centrado. Rompe el patrón "columna centrada max-w-5xl" del resto
          del sitio (feedback del usuario, 2026-10-29). */}
      <section aria-labelledby="about-heading" className="relative overflow-hidden bg-[color:var(--color-surface-blush)] py-20">
        {/* Mezcla de anillos huecos y puntos (no solo "bolitas" sólidas),
            eco del motivo del Hero — mismo componente reutilizado en otras
            secciones del sitio, no exclusivo de aquí (feedback del usuario,
            2026-10-30). */}
        <AmbientAccents variant="about" />

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

      {/* Certificaciones y Formación — insignia de institución (sello con
          siglas, o logo real si algún día se entrega) en vez de una lista
          plana de tarjetas idénticas; membresías y diplomados con
          tratamiento ligeramente distinto para dar más cuerpo a una sección
          que tiene mucho contenido real (feedback del usuario, 2026-10-29). */}
      <section aria-labelledby="certifications-heading" className="relative overflow-hidden bg-[color:var(--color-surface-blush)] px-4 py-16">
        <AmbientAccents variant="certifications" />
        <div className="relative mx-auto max-w-5xl">
          <h2 id="certifications-heading" className="text-2xl font-bold">
            Certificaciones y Formación
          </h2>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
            Membresías Profesionales
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {doctor.certifications.map((cert, i) => (
              <div key={i} className="halo-card flex items-center gap-4 rounded-[1.5rem] border border-border bg-background p-5">
                <InstitutionBadge institution={cert.institution} logoSrc={INSTITUTION_LOGOS[cert.institution]} />
                <div className="min-w-0">
                  <p className="font-semibold text-[color:var(--color-ink)]">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-[color:var(--color-ink-soft)]">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
            Educación y Diplomados
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {doctor.education.map((ed, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl bg-background/60 p-4">
                <InstitutionBadge institution={ed.institution} logoSrc={INSTITUTION_LOGOS[ed.institution]} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[color:var(--color-ink)]">{ed.degree}</p>
                  <p className="text-xs text-[color:var(--color-ink-soft)]">{ed.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Enfermedades — grid de tarjetas (el patrón más convencional
          de los 3, a propósito, para que la variación esté en los otros
          dos), con el contenedor desplazado (no centrado) sobre una franja a
          todo el ancho del viewport. Sin tope de ancho a la derecha — de lo
          contrario la mitad derecha de la franja queda vacía, justo lo
          opuesto a "aprovechar el ancho" (feedback del usuario, 2026-10-29). */}
      <section aria-labelledby="diseases-heading" className="bg-[color:var(--color-surface-soft)] py-16">
        <div className="max-w-6xl px-4 lg:ml-[7%] lg:mr-[4%] lg:max-w-none">
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
                {services[0].image && (
                  <Image
                    src={services[0].image}
                    alt={services[0].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
                <div className="relative z-10">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-secondary)] text-sm font-bold text-white shadow-sm">
                    01
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-secondary)]">
                    Servicio destacado
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[color:var(--color-ink)]">{services[0].name}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{services[0].description}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Ver ficha del procedimiento →
                  </span>
                </div>
              </Link>
            )}
            <div className="flex flex-col gap-4">
              {services.slice(1, PREVIEW_COUNT).map((service, i) => (
                <Link
                  key={service.id}
                  href={`/servicios/${service.slug}` as Route}
                  className="halo-card group flex items-center gap-4 rounded-[1.5rem] border border-border bg-background p-3 sm:p-4"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-[color:var(--color-ink)]">{service.name}</p>
                    <p className="truncate text-xs text-[color:var(--color-ink-soft)]">{service.description}</p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-secondary)]/15 text-xs font-bold text-[color:var(--color-secondary)]">
                    {String(i + 2).padStart(2, "0")}
                  </span>
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
        {/*
         * Bug real encontrado 2026-10-29: usar padding del propio contenedor
         * para alinear el carrusel con el encabezado, combinado con
         * snap-mandatory, hacía que el navegador calculara mal la posición
         * inicial de scroll (scrollLeft arrancaba en ~700px en vez de 0,
         * mostrando el carrusel ya "descuadrado" desde la carga, y al volver
         * a la izquierda quedaba un hueco enorme antes de la primera
         * tarjeta). Fix: usar `scroll-padding` (pensado exactamente para
         * insets de scroll-snap, no afecta la posición inicial de scroll)
         * en vez de `padding`, y espaciadores reales al inicio/final para el
         * respiro visual, en vez de padding del contenedor.
         */}
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] snap-x snap-mandatory scroll-px-4 sm:scroll-px-[max(1rem,calc((100vw-72rem)/2))]">
          <div className="w-0 shrink-0 sm:w-[max(0px,calc((100vw-72rem)/2))]" aria-hidden="true" />
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
          <div className="w-4 shrink-0 sm:w-[max(1rem,calc((100vw-72rem)/2))]" aria-hidden="true" />
        </div>
      </section>

      {/* Precio y Forma de Pago — tarjetas en vez de tabla (feedback del
          usuario, 2026-10-29: evitar listas/tablas para casi todo), y
          métodos de pago/seguros con la misma jerarquía visual que el
          precio de consulta, con ícono — ya no una leyenda pequeña. */}
      <section aria-labelledby="price-heading" className="relative overflow-hidden bg-[color:var(--color-surface-blush)] px-4 py-16">
        <AmbientAccents variant="pricing" />
        <div className="relative mx-auto max-w-4xl">
          <h2 id="price-heading" className="text-center text-2xl font-bold">
            Precios y Promociones
          </h2>
          <p className="mt-4 text-center text-5xl font-bold text-primary">${doctor.consultationPrice.toLocaleString("es-MX")} MXN</p>
          <p className="text-center text-sm text-[color:var(--color-ink-soft)]">Consulta general</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {services
              .filter((s) => s.priceRange && /^\$/.test(s.priceRange))
              .map((s, i) => (
                <div
                  key={s.id}
                  className="halo-card flex items-center justify-between gap-3 rounded-[1.5rem] border border-border bg-background p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="truncate text-sm font-medium text-[color:var(--color-ink)]">{s.name}</p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-primary">{s.priceRange}</p>
                </div>
              ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                Métodos de Pago
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {doctor.paymentMethods.map((method) => {
                  const lower = method.toLowerCase();
                  const Icon = lower.includes("efectivo")
                    ? Banknote
                    : lower.includes("tarjeta")
                      ? CreditCard
                      : ArrowLeftRight;
                  return (
                    <span
                      key={method}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                    >
                      <Icon size={14} aria-hidden="true" />
                      {method}
                    </span>
                  );
                })}
              </div>
            </div>
            {doctor.insurances && doctor.insurances.length > 0 && (
              <div className="rounded-[1.5rem] border border-border bg-background p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                  Seguros Médicos
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.insurances.map((ins) => (
                    <span
                      key={ins}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-secondary)]/15 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-secondary)]"
                    >
                      <ShieldCheck size={14} aria-hidden="true" />
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
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

      {/* CTA final — motivo de anillos concéntricos de fondo (eco del Hero)
          en vez de solo texto sobre un color plano (feedback del usuario,
          2026-10-29, con el Hero de dra-tania-diestel como precedente de
          "no dejar un CTA de solo texto"). */}
      <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-primary px-4 py-20 text-center text-white">
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="1.5" />
        </svg>
        <AmbientAccents variant="cta" />
        <div className="relative">
          <h2 id="cta-heading" className="text-2xl font-bold">
            No dejes pasar tu salud
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/90">
            Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera
            consulta.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-transform hover:scale-105"
          >
            Agendar Cita Ahora
          </a>
        </div>
      </section>
    </>
  );
}
