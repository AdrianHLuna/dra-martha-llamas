"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, MapPin, Clock, PhoneCall, UserRound, CalendarClock } from "lucide-react";
import { doctor } from "@/data";

interface DetailSidebarProps {
  /** Nombre de la entidad actual en minúsculas, ej. "endometriosis". */
  entityName: string;
  /** Verbo a usar en la línea dinámica: "atiende" (enfermedades/síntomas) o "realiza" (servicios). */
  verb?: "atiende" | "realiza";
}

/**
 * Sidebar sticky de las vistas de detalle — 3 tarjetas (perfil de la
 * doctora, ubicación/horario, urgencias) en vez del CTA plano único al
 * final del artículo. Todo el contenido sale de doctor.ts real, nada
 * inventado. Se apila bajo el artículo en mobile (sin lg:sticky).
 */
export default function DetailSidebar({ entityName, verb = "atiende" }: DetailSidebarProps) {
  const [photoFailed, setPhotoFailed] = useState(false);

  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const whatsappMessage = `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${entityName} y me gustaría agendar una valoración.`;
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const cleanEmergency = doctor.emergencyPhone?.replace(/\D/g, "");

  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
      {/* Tarjeta 1 — perfil de la doctora */}
      <div className="halo-card rounded-[1.75rem] border border-border bg-background p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-primary/10">
            {doctor.photo && !photoFailed ? (
              <Image
                src={doctor.photo}
                alt={`${doctor.title} ${doctor.name}`}
                fill
                className="object-cover"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-primary">
                <UserRound size={28} aria-hidden="true" />
              </span>
            )}
          </div>
          <div>
            <p className="font-semibold text-[color:var(--color-ink)]">
              {doctor.title} {doctor.name.split(" ").slice(0, 2).join(" ")}
            </p>
            <p className="text-xs text-[color:var(--color-ink-soft)]">{doctor.specialistTitle}</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[color:var(--color-ink-soft)]">
          {doctor.title} {doctor.name} {verb} {entityName}.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Agendar por WhatsApp
        </a>
        <a
          href="https://www.doctoralia.com.mx/perfil/martha-hayde-llamas-rangel"
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          <CalendarClock size={18} aria-hidden="true" />
          Reservar en Doctoralia
        </a>
      </div>

      {/* Tarjeta 2 — ubicación y horario */}
      <div className="halo-card rounded-[1.75rem] border border-border bg-[color:var(--color-surface-soft)] p-6">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-[color:var(--color-ink-soft)]">{doctor.address}</p>
        </div>
        <div className="mt-3 flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-[color:var(--color-ink-soft)]">{doctor.schedule}</p>
        </div>
        <a href="/contacto" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
          Ver mapa y cómo llegar
        </a>
      </div>

      {/* Tarjeta 3 — urgencias */}
      {cleanEmergency && (
        <div className="rounded-[1.75rem] border border-[color:var(--color-blush)] bg-[color:var(--color-blush)]/30 p-6">
          <div className="flex items-start gap-3">
            <PhoneCall size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                Línea de urgencias de consultorio
              </p>
              <a href={`tel:${doctor.emergencyPhone}`} className="text-sm font-medium text-primary hover:underline">
                {doctor.emergencyPhone}
              </a>
              <p className="mt-2 text-xs text-[color:var(--color-ink-soft)]">
                Para pacientes en seguimiento tras consulta o procedimiento. Ante una emergencia médica grave,
                acude de inmediato a la sala de urgencias del hospital más cercano o llama al 911 — no esperes
                esta línea.
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
