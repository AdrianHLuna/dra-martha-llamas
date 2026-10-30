import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";

const MAX_LINKS = 6;

/**
 * Footer con "sitemap" de navegación — AGENTS.md §7: una columna por
 * categoría (Enfermedades/Servicios/Síntomas) con enlace a la vista general
 * y, debajo, una lista de las entidades más relevantes, enlazando directo a
 * su ficha. El logotipo real no tiene versión blanca/reversa (su propio
 * color es magenta/rosa sobre blanco, no un wordmark negro), así que se
 * monta sobre una placa blanca redondeada para mantener contraste legible
 * sobre el fondo oscuro del footer, en vez de forzar un filtro de color.
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto flex h-32 w-full max-w-[420px] items-center justify-center rounded-2xl bg-background p-4 md:h-40">
          <Image
            src="/logotipo-completo.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={300}
            height={328}
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
        <p className="mt-6 text-lg font-semibold">
          {doctor.title} {doctor.name}
        </p>
        <p className="mt-1 text-sm opacity-80">{doctor.specialty}</p>
        <address className="mt-4 not-italic text-sm opacity-80">
          {doctor.address}
          <br />
          {doctor.schedule}
          <br />
          Tel: {doctor.phone} · Urgencias (consultorio): {doctor.emergencyPhone}
        </address>

        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-background/20 pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="text-sm font-semibold uppercase tracking-wide opacity-90 hover:opacity-100">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm opacity-70">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:opacity-100 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:opacity-100">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-8 max-w-2xl text-xs opacity-60">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica
          profesional.
        </p>
      </div>
    </footer>
  );
}
