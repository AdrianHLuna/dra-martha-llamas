import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * StickyHeader — composición propia de este sitio, distinta de las 6 ya
 * registradas en `.agents/rules/registro-disenos.md` para la fila principal
 * (Gustavo logo-izq/nav-der; Oliver/Wilfredo logo-centro+nav-a-los-lados;
 * Gregorio fila única asimétrica; Aldo logo-izq-compacto+nav+CTA-der; Tania
 * nav-izq+CTA-centro+logo-der): aquí los CTAs (Llamar/WhatsApp) van a la
 * IZQUIERDA, la navegación al CENTRO, y el logotipo real (con nombre +
 * especialidad integrados) al extremo DERECHO. Franja de credenciales
 * arriba (formato exacto, estándar del proyecto desde 2026-10-15).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur relative">
      <div className="hidden md:block bg-primary/5 px-4 py-1 text-center text-xs text-muted-foreground">
        {formatCredentials(doctor)}
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <a
            href={`tel:${doctor.phone}`}
            className="flex min-h-[44px] items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <Phone size={14} aria-hidden="true" /> Llamar
          </a>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[44px] items-center gap-1.5 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
          >
            <MessageCircle size={14} aria-hidden="true" /> WhatsApp
          </a>
        </div>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex min-w-0 shrink-0 items-center" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image
            src="/logotipo-completo.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={300}
            height={328}
            priority
            className="h-20 w-auto py-1 md:h-24"
          />
        </Link>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
