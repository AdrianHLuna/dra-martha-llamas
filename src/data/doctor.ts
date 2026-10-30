import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake de la usuaria (2026-10-29). Sin fabricar nada no
// entregado: email, COFEPRIS, redes sociales y ficha de Google quedan
// PENDIENTE — no inventados. Dirección y ciudad/estado confirmadas
// directamente por la doctora tras pregunta explícita (el intake original
// vino en blanco en esa sección). Logo y paleta SÍ son reales (carpetas
// LOGOS/ y "PALETA DE COLORES/" entregadas en el repo). Sin fotos reales
// todavía — doctor.photo apunta a un archivo que aún no existe a propósito;
// los componentes de imagen (CardImageHeader/DoctorPhotoFrame) degradan a un
// fallback clínico en vez de romper (ver MANUAL_PROMPTS.md para generarlas).
export const doctor: DoctorProfile = {
  name: "Martha Hayde Llamas Rangel",
  title: "Dra.",
  specialty: "Gineco-obstetricia",
  specialistTitle: "Ginecóloga y Obstetra",
  cedula: "3523951",
  cedulaInstitucion: "UAG",
  cedulaEspecialidad: "5179091",
  cedulaEspecialidadInstitucion: "U. Guanajuato",
  // Sin folio COFEPRIS confirmado todavía — se agrega cuando la doctora lo
  // proporcione (mismo patrón ya usado en Dr-Jeronimo-Castillo-Olivos-).
  cofepris: "",
  phone: "+529611468145",
  whatsapp: "+529611468145",
  // Línea de urgencias PROPIA de la doctora (post-consulta/post-procedimiento
  // para sus pacientes) — distinta del 911. Las señales de alarma reales
  // (AlarmSignsSection) siguen dirigiendo a la sala de urgencias del
  // hospital / 911; esta línea es un canal complementario, no sustituto.
  emergencyPhone: "+529617016578",
  address:
    "Alpha Medical Center, Paseo de las Fuentes 452, piso 3, consultorio 303, entre Boulevard Belisario Domínguez y Libramiento Sur, atrás del Hotel Marriott, Colonia Santa Elena, C.P. 29060, Tuxtla Gutiérrez, Chiapas",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Alpha+Medical+Center+Paseo+de+las+Fuentes+452+Colonia+Santa+Elena+Tuxtla+Guti%C3%A9rrez+Chiapas",
  // Consulta general base — las demás tarifas (PAP, colposcopia, paquetes,
  // procedimientos específicos) viven en cada entidad de servicios.ts y en
  // la sección "Precios y Promociones" de home, no solo aquí.
  consultationPrice: 1000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  insurances: ["Acepta todos los seguros médicos — pago por tabulador de cada aseguradora"],
  schedule: "Lunes a viernes 10:30am-1:30pm y 4pm-7:30pm · Sábados 10:00am-1:30pm",
  openingHours: ["Mo-Fr 10:30-13:30", "Mo-Fr 16:00-19:30", "Sa 10:00-13:30"],
  acceptingNewPatients: true,
  photo: "/doctor-photo.jpg",
  bio: "La Dra. Martha Hayde Llamas Rangel es ginecóloga y obstetra con 19 años de experiencia, más de 75,000 pacientes atendidas y más de 2,500 procedimientos y cirugías realizadas. Atiende en Alpha Medical Center, Tuxtla Gutiérrez, Chiapas, con un enfoque integral en salud ginecológica, control prenatal, colposcopia y climaterio.",
  philosophy:
    "Acompañar a cada paciente con escucha real y un diagnóstico preciso, en cada etapa de su salud ginecológica y obstétrica.",
  experience: [],
  stats: [
    { label: "Pacientes atendidas", value: "+75,000" },
    { label: "Procedimientos/cirugías", value: "+2,500" },
    { label: "Años de experiencia", value: "19" },
  ],
  certifications: [
    { name: "Federación Mexicana de Colegios de Obstetricia y Ginecología", institution: "FEMECOG" },
    { name: "Colegio Mexicano de Ginecólogos dedicados a la Colposcopia", institution: "COMEGIC" },
    { name: "Colegio de Ginecólogos y Obstetras en Chiapas", institution: "Colegio de Ginecólogos y Obstetras en Chiapas" },
    { name: "Asociación Mexicana de Mastología", institution: "AMM" },
    { name: "Asociación Mexicana para el Estudio del Climaterio", institution: "AMEC" },
    { name: "Asociación Mexicana de Endocrinología", institution: "AME" },
  ],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Autónoma de Guadalajara" },
    { degree: "Especialidad en Ginecología y Obstetricia", institution: "Universidad de Guanajuato" },
    { degree: "Diplomado en Endocrinología Ginecológica", institution: "Universidad Autónoma de Guadalajara" },
    { degree: "Diplomado en Alta Especialidad en Láser en Tracto Genital Inferior y Rejuvenecimiento", institution: "Universidad Autónoma de Guadalajara" },
    { degree: "Reconocimiento en curso de Infertilidad Básico/Avanzado", institution: "Universidad Autónoma de Guadalajara" },
    { degree: "Diplomado en Colposcopia y Patología del Tracto Genital Inferior", institution: "Colegio Mexicano de Ginecólogos dedicados a la Colposcopia" },
    { degree: "Diplomado en Colposcopia Avanzada", institution: "Colegio Mexicano de Ginecólogos dedicados a la Colposcopia" },
    { degree: "Diplomado en Alta Especialidad en Ginecología Estética Avanzada", institution: "Universidad Autónoma de Guadalajara" },
  ],
  sameAs: [],
};
