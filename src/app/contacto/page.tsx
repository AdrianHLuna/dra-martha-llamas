import type { Metadata } from "next";
import { MapPin, Clock, Phone, MessageCircle, PhoneCall } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name} en ${doctor.city}. Dirección, horario, mapa y reserva en línea.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark={false} />

      <MapFacade address={doctor.address} whatsapp={doctor.whatsapp} />

      {/* Ficha vertical tipo línea de tiempo en vez de 3 columnas planas, y
          el bloque de reserva integrado al costado en el mismo grid, no
          como una sección aparte centrada debajo — composición distinta a
          la del resto del sitio (feedback del usuario, 2026-10-29). */}
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative space-y-8 border-l-2 border-[color:var(--color-border)] pl-8">
          <div className="relative">
            <span className="absolute -left-[2.45rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <MapPin size={13} aria-hidden="true" />
            </span>
            <h2 className="font-semibold text-[color:var(--color-ink)]">Dirección</h2>
            <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{doctor.address}</p>
          </div>

          <div className="relative">
            <span className="absolute -left-[2.45rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <Clock size={13} aria-hidden="true" />
            </span>
            <h2 className="font-semibold text-[color:var(--color-ink)]">Horario</h2>
            <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{doctor.schedule}</p>
          </div>

          <div className="relative">
            <span className="absolute -left-[2.45rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <Phone size={13} aria-hidden="true" />
            </span>
            <h2 className="font-semibold text-[color:var(--color-ink)]">Contacto Directo</h2>
            <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">
              Tel: {doctor.phone}
              <br />
              WhatsApp: {doctor.whatsapp}
            </p>
          </div>

          {doctor.emergencyPhone && (
            <div className="relative">
              <span className="absolute -left-[2.45rem] flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-secondary)] text-white">
                <PhoneCall size={13} aria-hidden="true" />
              </span>
              <h2 className="font-semibold text-[color:var(--color-ink)]">Urgencias de Consultorio</h2>
              <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{doctor.emergencyPhone}</p>
            </div>
          )}

          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar por WhatsApp
          </a>
        </div>

        <div className="rounded-[1.75rem] bg-[color:var(--color-surface-blush)] p-8">
          <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">Reserva tu Cita en Línea</h2>
          <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
            También puedes elegir tu horario directamente desde el calendario de Doctoralia.
          </p>
          <div className="mt-6">
            <DoctoraliaWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
