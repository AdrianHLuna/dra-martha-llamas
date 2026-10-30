import Image from "next/image";

interface InstitutionBadgeProps {
  institution: string;
  /** Logo real de la institución, si algún día se entrega — reemplaza el sello genérico. */
  logoSrc?: string;
}

function initialsFor(institution: string): string {
  const stopWords = new Set(["de", "del", "la", "las", "el", "los", "y", "en", "para"]);
  const words = institution.split(/\s+/).filter((w) => w && !stopWords.has(w.toLowerCase()));
  const letters = words.slice(0, 3).map((w) => w[0]?.toUpperCase() ?? "");
  return letters.join("") || institution.slice(0, 2).toUpperCase();
}

/**
 * Sello circular con las siglas de la institución — sustituye el logo real
 * que no tenemos (no se deben usar/descargar logos oficiales de terceros sin
 * verificar derechos de uso). Si `logoSrc` llega en el futuro con un archivo
 * real, se usa esa imagen en vez del sello genérico (AGENTS.md: "siempre
 * procurar el logo de la institución", 2026-10-29).
 */
export default function InstitutionBadge({ institution, logoSrc }: InstitutionBadgeProps) {
  if (logoSrc) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-white p-2">
        <Image src={logoSrc} alt={institution} width={56} height={56} unoptimized className="h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold tracking-wide"
      style={{
        borderColor: "color-mix(in oklab, var(--color-primary) 35%, transparent)",
        background: "color-mix(in oklab, var(--color-primary) 8%, white)",
        color: "var(--color-primary)",
      }}
      aria-hidden="true"
    >
      {initialsFor(institution)}
    </div>
  );
}
