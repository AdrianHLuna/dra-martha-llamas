import {
  Droplet,
  Thermometer,
  Zap,
  AlertTriangle,
  Heart,
  Baby,
  Activity,
  Pill,
  Stethoscope,
  Microscope,
  ShieldAlert,
  Clock,
  Moon,
  Scissors,
  Syringe,
  HeartPulse,
  Flame,
  CircleDot,
  Waves,
  type LucideIcon,
} from "lucide-react";

/**
 * Heurística de palabras clave → ícono de lucide-react, para que cada ítem de
 * una lista clínica (síntoma/causa/factor de riesgo/tratamiento) tenga un
 * ícono contextual real en vez de repetir el mismo genérico — ver la
 * reestructuración de las vistas [slug] (dos columnas + tarjetas con ícono
 * en vez de <ul><li>). No es exhaustivo ni clínicamente normativo, solo un
 * criterio visual razonable basado en el texto en español.
 */
const KEYWORD_ICONS: Array<[RegExp, LucideIcon]> = [
  [/sangr|hemorrag|menstru/i, Droplet],
  [/fiebre|temperatura/i, Thermometer],
  [/dolor|cólico|molestia/i, Zap],
  [/urgen|alarma|grave|riesgo/i, AlertTriangle],
  [/embarazo|prenatal|parto|cesárea|fet/i, Baby],
  [/corazón|cardi/i, HeartPulse],
  [/picor|ardor|comezón|irrita/i, Flame],
  [/sequedad|lubrica/i, Waves],
  [/deseo|líbido|sexual/i, Heart],
  [/cirug|operac|resección|extirpa/i, Scissors],
  [/inyec|vacuna|aplicación/i, Syringe],
  [/estudio|análisis|biopsia|citología|colposcopia/i, Microscope],
  [/tiempo|duración|recuperación|semanas|días|meses/i, Clock],
  [/sueño|descanso|fatiga|cansancio/i, Moon],
  [/anticoncep|diu|implante/i, ShieldAlert],
  [/medicamento|tratamiento|terapia|hormonal/i, Pill],
  [/ciclo|ovula|hormona/i, CircleDot],
];

export function iconForText(text: string, fallback: LucideIcon = Activity): LucideIcon {
  const match = KEYWORD_ICONS.find(([pattern]) => pattern.test(text));
  return match ? match[1] : fallback;
}

export { Stethoscope as DefaultContentIcon };
