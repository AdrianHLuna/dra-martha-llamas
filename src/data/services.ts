import type { MedicalService } from "@/types/schema";

// Catálogo real de servicios/procedimientos de la Dra. Martha Llamas
// (intake 2026-10-29). Incluye los 10 procedimientos listados explícitamente
// en "Cirugías/procedimientos" + los que solo aparecían en la lista de
// precios/promociones (DIU x3, implante subdérmico, vacuna VPH, paquete
// check up) + "Control Prenatal", movido aquí desde diseases.ts por ser un
// proceso de seguimiento, no una enfermedad. Donde el intake no dio precio
// (cesárea, parto, labioplastia, control prenatal) se usa una nota de
// "costo variable/consultar" en vez de inventar una cifra.
export const services: MedicalService[] = [
  {
    id: "s-revision-vaginal",
    slug: "revision-vaginal",
    name: "Revisión Vaginal",
    description: "Exploración ginecológica dirigida para evaluar flujo, irritación o molestia vaginal.",
    longDescription:
      "La revisión vaginal es una exploración ginecológica enfocada en identificar la causa de síntomas como flujo anormal, picor, ardor o molestia vaginal. Incluye exploración física y, cuando es necesario, toma de muestra para identificar el agente causante exacto (hongos, bacterias, parásitos o una infección de transmisión sexual), para indicar el tratamiento específico que corresponde.",
    type: "consultorio",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Identifica la causa exacta del síntoma, no solo lo alivia temporalmente",
      "Permite tratamiento dirigido según el agente causante",
      "Detecta infecciones de transmisión sexual de forma oportuna",
    ],
    postOpRecommendations: [],
    priceRange: "$1,000 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "20 a 30 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Qué debo evitar antes de una revisión vaginal?",
        answer:
          "Se recomienda evitar relaciones sexuales y el uso de óvulos o duchas vaginales 48 horas antes, para no alterar los hallazgos de la exploración ni de una posible toma de muestra.",
      },
      {
        question: "¿Cuándo tengo resultados si se toma una muestra?",
        answer:
          "Depende del estudio solicitado; algunos resultados están disponibles en pocos días. La Dra. Llamas indica el tiempo exacto según el estudio que se requiera en cada caso.",
      },
    ],
    relatedConditions: ["d-its-ets", "d-cervicovaginitis", "d-vph", "d-cistitis"],
    lastReviewed: "2026-10-29",
    image: "/servicios/revision-vaginal.jpg",
    seo: {
      title: "Revisión Vaginal | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Revisión vaginal dirigida con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $1,000 MXN.",
      keywords: ["revisión vaginal Tuxtla Gutiérrez", "ginecóloga revisión Chiapas", "consulta flujo vaginal precio"],
    },
  },
  {
    id: "s-revision-anual",
    slug: "revision-ginecologica-anual",
    name: "Revisión Ginecológica Anual",
    description: "Chequeo ginecológico preventivo completo, recomendado al menos una vez al año.",
    longDescription:
      "La revisión ginecológica anual es una valoración preventiva integral que incluye historia clínica, exploración ginecológica y mamaria, y los estudios de detección que correspondan según la edad y antecedentes de la paciente (Papanicolaou, colposcopia si está indicada). Es la base de la prevención en salud ginecológica, incluso sin síntomas presentes.",
    type: "consultorio",
    duration: "30 a 45 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Detecta alteraciones tempranas sin esperar a que den síntomas",
      "Incluye revisión mamaria y ginecológica completa",
      "Punto de partida para seguimiento de climaterio, SOP u otras condiciones",
    ],
    postOpRecommendations: [],
    priceRange: "$2,000 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "30 a 45 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Cada cuánto debo hacerme la revisión ginecológica anual?",
        answer:
          "Se recomienda al menos una vez al año a partir del inicio de la vida sexual o los 21 años, lo que ocurra primero, y con mayor frecuencia si existen antecedentes o síntomas específicos.",
      },
      {
        question: "¿Incluye el Papanicolaou?",
        answer:
          "Se valora en la misma consulta si corresponde tomarlo según la edad y el historial de la paciente; cuando aplica, se realiza como parte de la misma revisión.",
      },
    ],
    relatedConditions: ["d-its-ets", "d-menopausia", "d-premenopausia", "d-sop", "d-quistes-ovaricos"],
    lastReviewed: "2026-10-29",
    image: "/servicios/revision-anual.jpg",
    seo: {
      title: "Revisión Ginecológica Anual | Tuxtla Gutiérrez",
      description:
        "Chequeo ginecológico preventivo anual con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $2,000 MXN.",
      keywords: ["revisión ginecológica anual Tuxtla Gutiérrez", "chequeo ginecológico Chiapas", "ginecóloga revisión preventiva"],
    },
  },
  {
    id: "s-histerectomia",
    slug: "histerectomia",
    name: "Histerectomía",
    description: "Cirugía para la extirpación del útero, indicada en condiciones ginecológicas específicas.",
    longDescription:
      "La histerectomía es la cirugía para extirpar el útero, indicada en condiciones como miomatosis sintomática, sangrado uterino que no responde a otros tratamientos, o como parte del manejo de ciertas enfermedades ginecológicas. Se realiza en medio hospitalario, y la vía de abordaje (abdominal, vaginal o laparoscópica) se define según cada caso en consulta.",
    type: "hospitalario",
    anesthesiaType: "General o regional, según la vía de abordaje",
    duration: "1 a 3 horas, según la vía de abordaje",
    recoveryTime: "2 a 6 semanas, según la técnica utilizada",
    isPainful: true,
    benefits: [
      "Resuelve de forma definitiva el sangrado o dolor asociado a la condición que la indica",
      "Vía de abordaje individualizada según el caso",
    ],
    postOpRecommendations: [
      "Reposo relativo según indicación médica",
      "Evitar esfuerzo físico intenso durante el periodo de recuperación indicado",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    priceRange: "$35,000 – $45,000 MXN",
    technicalSpecs: { Tipo: "Hospitalario", Duración: "1 a 3 horas", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿La histerectomía siempre implica retirar los ovarios?",
        answer:
          "No necesariamente. La extirpación del útero no siempre incluye los ovarios; la decisión depende de la condición que indica la cirugía y se explica con detalle antes del procedimiento.",
      },
      {
        question: "¿Cuánto tiempo de recuperación se necesita?",
        answer:
          "Generalmente entre 2 y 6 semanas, dependiendo de si la vía fue abdominal, vaginal o laparoscópica — la vía laparoscópica suele tener una recuperación más corta.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/histerectomia.jpg",
    seo: {
      title: "Histerectomía | Cirugía Ginecológica en Tuxtla Gutiérrez",
      description:
        "Histerectomía con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $35,000 – $45,000 MXN.",
      keywords: ["histerectomía Tuxtla Gutiérrez", "cirugía de útero Chiapas", "extirpación de útero precio"],
    },
  },
  {
    id: "s-cesarea",
    slug: "cesarea",
    name: "Cesárea",
    description: "Atención quirúrgica del nacimiento cuando el parto vaginal no es la vía indicada o recomendada.",
    longDescription:
      "La cesárea es la cirugía para la atención del nacimiento a través de una incisión abdominal, indicada cuando el parto vaginal no es seguro o recomendado para la madre o el bebé. La Dra. Llamas valora durante el control prenatal qué vía de nacimiento es la más adecuada para cada paciente, según la evolución del embarazo.",
    type: "hospitalario",
    anesthesiaType: "Regional (epidural o raquídea), en la mayoría de los casos",
    duration: "45 a 60 minutos aproximadamente",
    recoveryTime: "4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Vía segura cuando el parto vaginal no es recomendable",
      "Seguimiento cercano durante todo el embarazo para definir la mejor vía de nacimiento",
    ],
    postOpRecommendations: [
      "Reposo relativo durante las primeras semanas",
      "Cuidado de la herida quirúrgica según indicación",
      "Acudir a las revisiones postoperatorias y de la paciente y el recién nacido",
    ],
    priceRange: "Costo variable según institución hospitalaria — se brinda cotización en consulta",
    technicalSpecs: { Tipo: "Hospitalario", Duración: "45 a 60 minutos", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿Cuándo se recomienda una cesárea en lugar de parto vaginal?",
        answer:
          "Se valora según la evolución del embarazo y la salud de la madre y el bebé — por ejemplo, presentación anormal del bebé, cesárea previa según el caso, u otras indicaciones médicas identificadas durante el control prenatal.",
      },
      {
        question: "¿Por qué el precio de la cesárea no es un monto fijo?",
        answer:
          "El costo depende del hospital o clínica donde se atienda el nacimiento, no solo de los honorarios médicos; por eso se brinda una cotización específica una vez definida la institución.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/cesarea.jpg",
    seo: {
      title: "Cesárea | Atención del Nacimiento en Tuxtla Gutiérrez",
      description:
        "Atención de cesárea con la Dra. Martha Llamas, ginecóloga y obstetra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cesárea Tuxtla Gutiérrez", "atención del parto Chiapas", "ginecobstetra cesárea"],
    },
  },
  {
    id: "s-parto",
    slug: "atencion-de-parto",
    name: "Atención de Parto",
    description: "Acompañamiento y atención médica del nacimiento por vía vaginal.",
    longDescription:
      "La atención de parto es el acompañamiento médico del nacimiento por vía vaginal, con seguimiento del trabajo de parto y del bienestar materno-fetal en cada etapa. La Dra. Llamas da seguimiento durante todo el embarazo con control prenatal, lo que permite planear la atención del parto con información completa de cada caso.",
    type: "hospitalario",
    anesthesiaType: "Según preferencia y evolución del trabajo de parto (con o sin anestesia regional)",
    duration: "Variable según la evolución de cada trabajo de parto",
    recoveryTime: "1 a 2 semanas en un parto sin complicaciones",
    isPainful: true,
    benefits: [
      "Acompañamiento médico continuo durante el trabajo de parto",
      "Seguimiento del bienestar materno-fetal en tiempo real",
    ],
    postOpRecommendations: [
      "Reposo relativo durante los primeros días",
      "Vigilancia de la recuperación y la lactancia según indicación",
      "Acudir a la revisión postparto programada",
    ],
    priceRange: "Costo variable según institución hospitalaria — se brinda cotización en consulta",
    technicalSpecs: { Tipo: "Hospitalario", Duración: "Variable", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿Desde cuándo debo tener control con la doctora para el parto?",
        answer:
          "Se recomienda iniciar el control prenatal desde que se confirma el embarazo, lo que permite dar seguimiento completo al embarazo y planear la atención del parto con toda la información necesaria.",
      },
      {
        question: "¿Puedo elegir anestesia durante el parto?",
        answer:
          "Sí, las opciones de manejo del dolor se conversan durante el control prenatal y se ajustan según la evolución del trabajo de parto el día del nacimiento.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/parto.jpg",
    seo: {
      title: "Atención de Parto | Ginecobstetra en Tuxtla Gutiérrez",
      description:
        "Atención de parto con la Dra. Martha Llamas, ginecóloga y obstetra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["atención de parto Tuxtla Gutiérrez", "parto ginecobstetra Chiapas", "médico para dar a luz"],
    },
  },
  {
    id: "s-labioplastia",
    slug: "labioplastia",
    name: "Labioplastia",
    description: "Cirugía de reducción o remodelación de los labios vaginales por motivos funcionales o estéticos.",
    longDescription:
      "La labioplastia es un procedimiento quirúrgico que reduce o remodela los labios vaginales (generalmente los labios menores), indicado por molestia física (roce, irritación con la ropa o el ejercicio) o por decisión estética de la paciente. Se realiza de forma ambulatoria, con valoración individual previa en consulta.",
    type: "ambulatorio",
    anesthesiaType: "Local, con o sin sedación según el caso",
    duration: "45 a 90 minutos",
    recoveryTime: "2 a 4 semanas",
    isPainful: true,
    benefits: [
      "Reduce molestia física por roce o irritación",
      "Procedimiento ambulatorio, sin requerir hospitalización",
    ],
    postOpRecommendations: [
      "Reposo relativo durante la primera semana",
      "Evitar relaciones sexuales durante el periodo indicado por la doctora",
      "Cuidado de la zona según indicación postoperatoria",
    ],
    priceRange: "Consultar precio en valoración",
    technicalSpecs: { Tipo: "Ambulatorio", Duración: "45 a 90 minutos", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿La labioplastia es solo estética?",
        answer:
          "No siempre. Muchas pacientes la buscan por molestia física real con el roce de la ropa o el ejercicio, aunque también es una decisión válida por motivos estéticos — ambos casos se valoran igual en consulta.",
      },
      {
        question: "¿Cuánto tiempo de recuperación se necesita?",
        answer:
          "Generalmente entre 2 y 4 semanas para recuperación completa, con indicaciones específicas de cuidado e higiene durante ese periodo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/labioplastia.jpg",
    seo: {
      title: "Labioplastia | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Labioplastia con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas. Precio sujeto a valoración.",
      keywords: ["labioplastia Tuxtla Gutiérrez", "cirugía íntima ginecóloga", "labioplastia Chiapas precio"],
    },
  },
  {
    id: "s-revision-mamas",
    slug: "revision-de-mamas",
    name: "Revisión de Mamas",
    description: "Exploración mamaria clínica para detección de bultos, dolor o alteraciones.",
    longDescription:
      "La revisión de mamas es una exploración clínica dirigida a identificar bultos, dolor, cambios en la piel o secreción anormal del pezón. Es un estudio de detección importante tanto en revisiones de rutina como ante un síntoma específico, y orienta si se requieren estudios de imagen adicionales (ultrasonido o mastografía).",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Detección temprana de alteraciones mamarias",
      "Orienta la necesidad de estudios de imagen adicionales",
    ],
    postOpRecommendations: [],
    priceRange: "$1,000 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "15 a 20 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Cada cuánto debo hacerme una revisión de mamas?",
        answer:
          "Se recomienda como parte de la revisión ginecológica anual, y de inmediato si se detecta un bulto, dolor localizado o secreción anormal, sin esperar a la siguiente revisión programada.",
      },
      {
        question: "¿Siempre necesito un ultrasonido o mastografía?",
        answer:
          "No siempre; depende de los hallazgos de la exploración clínica y de la edad de la paciente. La doctora indica el estudio de imagen correspondiente solo cuando está indicado.",
      },
    ],
    relatedConditions: ["d-mastitis"],
    lastReviewed: "2026-10-29",
    image: "/servicios/revision-mamas.jpg",
    seo: {
      title: "Revisión de Mamas | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Revisión clínica de mamas con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $1,000 MXN.",
      keywords: ["revisión de mamas Tuxtla Gutiérrez", "exploración mamaria ginecóloga", "revisión de senos Chiapas"],
    },
  },
  {
    id: "s-electrocirugia",
    slug: "electrocirugia-ginecologica",
    name: "Electrocirugía Ginecológica",
    description: "Procedimiento para tratar lesiones cervicales mediante corriente eléctrica controlada.",
    longDescription:
      "La electrocirugía ginecológica utiliza corriente eléctrica controlada para remover lesiones del cuello uterino identificadas en colposcopia, como las asociadas a VPH o cervicovaginitis persistente. Es un procedimiento ambulatorio y una de las opciones de tratamiento tras la detección de una lesión que lo amerita.",
    type: "ambulatorio",
    anesthesiaType: "Local",
    duration: "20 a 30 minutos",
    recoveryTime: "2 a 4 semanas",
    isPainful: true,
    benefits: [
      "Remueve lesiones cervicales identificadas de forma precisa",
      "Procedimiento ambulatorio con anestesia local",
    ],
    postOpRecommendations: [
      "Evitar relaciones sexuales durante el periodo indicado",
      "Evitar duchas vaginales y tampones durante la recuperación",
      "Acudir a la revisión de control programada",
    ],
    priceRange: "$5,000 MXN",
    technicalSpecs: { Tipo: "Ambulatorio", Duración: "20 a 30 minutos", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿La electrocirugía duele durante el procedimiento?",
        answer:
          "Se realiza con anestesia local, por lo que durante el procedimiento la molestia es mínima; puede haber cólico leve en las horas posteriores, manejable con analgésicos indicados por la doctora.",
      },
      {
        question: "¿Cuándo se indica electrocirugía en lugar de solo vigilancia?",
        answer:
          "Se indica cuando la colposcopia identifica una lesión que, por su tipo o tamaño, se beneficia de ser removida, en lugar de solo vigilarse con estudios de control.",
      },
    ],
    relatedConditions: ["d-cervicovaginitis", "d-vph"],
    lastReviewed: "2026-10-29",
    image: "/servicios/electrocirugia.jpg",
    seo: {
      title: "Electrocirugía Ginecológica | Tuxtla Gutiérrez",
      description:
        "Electrocirugía para lesiones cervicales con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $5,000 MXN.",
      keywords: ["electrocirugía Tuxtla Gutiérrez", "tratamiento lesión cervical Chiapas", "electrocirugía ginecológica precio"],
    },
  },
  {
    id: "s-cono",
    slug: "conizacion-cervical-cono",
    name: "Conización Cervical (Cono)",
    description: "Remoción de un fragmento de tejido cervical en forma de cono para tratar lesiones de alto grado.",
    longDescription:
      "La conización cervical (cono) consiste en extraer un fragmento de tejido del cuello uterino en forma de cono, indicado para tratar lesiones precancerosas de alto grado identificadas por colposcopia y biopsia, generalmente asociadas a VPH persistente. Además de tratamiento, la pieza extraída se analiza para confirmar que la lesión fue removida por completo.",
    type: "ambulatorio",
    anesthesiaType: "Regional o local con sedación, según el caso",
    duration: "30 a 45 minutos",
    recoveryTime: "3 a 4 semanas",
    isPainful: true,
    benefits: [
      "Trata lesiones cervicales de alto grado de forma definitiva en la mayoría de los casos",
      "La pieza extraída se analiza para confirmar la remoción completa de la lesión",
    ],
    postOpRecommendations: [
      "Evitar relaciones sexuales durante el periodo indicado",
      "Evitar esfuerzo físico intenso durante la recuperación",
      "Acudir a la revisión de control con resultado de patología",
    ],
    priceRange: "$6,000 MXN",
    technicalSpecs: { Tipo: "Ambulatorio", Duración: "30 a 45 minutos", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿El cono siempre significa que tengo cáncer?",
        answer:
          "No. Se indica ante lesiones precancerosas de alto grado para tratarlas antes de que progresen, precisamente como medida preventiva — no implica un diagnóstico de cáncer ya establecido.",
      },
      {
        question: "¿Afecta la fertilidad futura?",
        answer:
          "En la mayoría de los casos no compromete la fertilidad, aunque en embarazos futuros puede requerir vigilancia adicional del cuello uterino — se explica el detalle según la extensión de cada procedimiento.",
      },
    ],
    relatedConditions: ["d-vph"],
    lastReviewed: "2026-10-29",
    image: "/servicios/cono.jpg",
    seo: {
      title: "Conización Cervical (Cono) | Tuxtla Gutiérrez",
      description:
        "Conización cervical (cono) con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $6,000 MXN.",
      keywords: ["cono cervical Tuxtla Gutiérrez", "conización Chiapas", "tratamiento lesión de alto grado VPH"],
    },
  },
  {
    id: "s-legrado",
    slug: "legrado-por-aspiracion",
    name: "Legrado por Aspiración",
    description: "Procedimiento para vaciar el contenido uterino de forma segura, indicado en casos específicos.",
    longDescription:
      "El legrado por aspiración es un procedimiento ginecológico para evacuar el contenido uterino de forma controlada, indicado en situaciones como aborto incompleto o restos de tejido tras un evento obstétrico. Se realiza en un entorno controlado con seguimiento médico estrecho antes y después del procedimiento.",
    type: "ambulatorio",
    anesthesiaType: "Local o sedación, según el caso",
    duration: "15 a 30 minutos",
    recoveryTime: "1 a 2 semanas",
    isPainful: true,
    benefits: [
      "Resuelve de forma segura la causa que lo indica",
      "Procedimiento breve, generalmente ambulatorio",
    ],
    postOpRecommendations: [
      "Reposo relativo durante los primeros días",
      "Vigilancia de sangrado y signos de alarma indicados por la doctora",
      "Acudir a la revisión de control programada",
    ],
    priceRange: "$5,000 MXN",
    technicalSpecs: { Tipo: "Ambulatorio", Duración: "15 a 30 minutos", Doloroso: "Sí" },
    faqs: [
      {
        question: "¿Cuándo se indica un legrado por aspiración?",
        answer:
          "Se indica en situaciones específicas valoradas en consulta, como la presencia de restos de tejido uterino tras un evento obstétrico, confirmadas con exploración y ultrasonido previos.",
      },
      {
        question: "¿Cuánto tiempo de recuperación se necesita?",
        answer:
          "Generalmente entre 1 y 2 semanas, con indicaciones específicas sobre actividad física y signos de alarma a vigilar durante ese periodo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/legrado.jpg",
    seo: {
      title: "Legrado por Aspiración | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Legrado por aspiración con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $5,000 MXN.",
      keywords: ["legrado por aspiración Tuxtla Gutiérrez", "legrado ginecóloga Chiapas", "legrado precio"],
    },
  },
  {
    id: "s-diu-cobre",
    slug: "diu-de-cobre",
    name: "DIU de Cobre",
    description: "Colocación de dispositivo intrauterino de cobre, método anticonceptivo no hormonal de larga duración.",
    longDescription:
      "El DIU de cobre es un dispositivo intrauterino anticonceptivo no hormonal, de larga duración (hasta 10 años según el modelo), colocado en consulta tras una valoración ginecológica. Es una opción habitual para pacientes que buscan anticoncepción efectiva sin hormonas.",
    type: "consultorio",
    anesthesiaType: "No requiere, puede indicarse analgesia previa",
    duration: "15 a 20 minutos",
    recoveryTime: "Reincorporación inmediata a actividades habituales",
    isPainful: true,
    benefits: [
      "Anticoncepción no hormonal de larga duración",
      "Reversible: la fertilidad se recupera al retirarlo",
    ],
    postOpRecommendations: ["Acudir a la revisión de control tras la colocación según indicación"],
    priceRange: "$2,000 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "15 a 20 minutos", Doloroso: "Sí (breve)" },
    faqs: [
      {
        question: "¿El DIU de cobre duele al colocarlo?",
        answer:
          "Puede causar un cólico breve durante la colocación, que generalmente mejora en minutos a horas; la doctora puede indicar analgesia previa según cada caso.",
      },
      {
        question: "¿Cuánto tiempo dura el DIU de cobre?",
        answer:
          "Según el modelo, puede durar hasta 10 años, aunque se puede retirar antes si la paciente lo decide, recuperando la fertilidad de inmediato.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/diu-cobre.jpg",
    seo: {
      title: "DIU de Cobre | Ginecóloga en Tuxtla Gutiérrez",
      description: "Colocación de DIU de cobre con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $2,000 MXN.",
      keywords: ["DIU de cobre Tuxtla Gutiérrez", "anticonceptivo DIU Chiapas", "dispositivo intrauterino precio"],
    },
  },
  {
    id: "s-diu-plata",
    slug: "diu-de-plata",
    name: "DIU de Plata",
    description: "Colocación de dispositivo intrauterino de cobre y plata, anticonceptivo no hormonal de larga duración.",
    longDescription:
      "El DIU de plata combina un núcleo de plata con cobre, lo que según su diseño puede reducir algunos efectos secundarios frente al DIU de cobre convencional. Es otra opción de anticoncepción no hormonal de larga duración, colocada en consulta tras valoración ginecológica.",
    type: "consultorio",
    anesthesiaType: "No requiere, puede indicarse analgesia previa",
    duration: "15 a 20 minutos",
    recoveryTime: "Reincorporación inmediata a actividades habituales",
    isPainful: true,
    benefits: [
      "Anticoncepción no hormonal de larga duración",
      "Alternativa al DIU de cobre convencional",
    ],
    postOpRecommendations: ["Acudir a la revisión de control tras la colocación según indicación"],
    priceRange: "$2,500 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "15 a 20 minutos", Doloroso: "Sí (breve)" },
    faqs: [
      {
        question: "¿Cuál es la diferencia entre el DIU de cobre y el de plata?",
        answer:
          "Ambos son anticonceptivos no hormonales de larga duración; el de plata combina cobre con un núcleo de plata, lo que en algunos diseños busca reducir ciertos efectos secundarios. La doctora orienta cuál conviene más según cada caso.",
      },
      {
        question: "¿Es doloroso colocarlo?",
        answer:
          "Puede causar un cólico breve durante la colocación, similar al DIU de cobre convencional, que mejora en minutos a horas.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/diu-plata.jpg",
    seo: {
      title: "DIU de Plata | Ginecóloga en Tuxtla Gutiérrez",
      description: "Colocación de DIU de plata con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $2,500 MXN.",
      keywords: ["DIU de plata Tuxtla Gutiérrez", "anticonceptivo DIU Chiapas", "dispositivo intrauterino plata precio"],
    },
  },
  {
    id: "s-diu-medicado",
    slug: "diu-medicado-hormonal",
    name: "DIU Medicado (Hormonal)",
    description: "Colocación de dispositivo intrauterino hormonal, anticonceptivo de larga duración.",
    longDescription:
      "El DIU medicado (hormonal) libera una dosis baja y constante de hormona directamente en el útero, lo que además de anticoncepción puede reducir el sangrado menstrual en muchas pacientes. Se coloca en consulta tras valoración ginecológica individual.",
    type: "consultorio",
    anesthesiaType: "No requiere, puede indicarse analgesia previa",
    duration: "15 a 20 minutos",
    recoveryTime: "Reincorporación inmediata a actividades habituales",
    isPainful: true,
    benefits: [
      "Anticoncepción hormonal de larga duración",
      "Puede reducir el sangrado menstrual en muchas pacientes",
    ],
    postOpRecommendations: ["Acudir a la revisión de control tras la colocación según indicación"],
    priceRange: "$4,500 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "15 a 20 minutos", Doloroso: "Sí (breve)" },
    faqs: [
      {
        question: "¿El DIU hormonal reduce el sangrado menstrual?",
        answer:
          "En muchas pacientes sí, es uno de sus beneficios además del efecto anticonceptivo; el grado de reducción varía de una persona a otra y se explica en consulta según el perfil de cada paciente.",
      },
      {
        question: "¿Cuánto dura el efecto del DIU medicado?",
        answer:
          "Depende del modelo específico; la doctora indica la duración exacta y la fecha de reemplazo recomendada al momento de la colocación.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/diu-medicado.jpg",
    seo: {
      title: "DIU Medicado (Hormonal) | Ginecóloga en Tuxtla Gutiérrez",
      description: "Colocación de DIU hormonal con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $4,500 MXN.",
      keywords: ["DIU hormonal Tuxtla Gutiérrez", "DIU medicado Chiapas", "anticonceptivo hormonal precio"],
    },
  },
  {
    id: "s-implante-subdermico",
    slug: "implante-subdermico",
    name: "Implante Subdérmico",
    description: "Colocación de implante anticonceptivo hormonal bajo la piel, con duración de 3 años.",
    longDescription:
      "El implante subdérmico es un pequeño dispositivo anticonceptivo hormonal que se coloca bajo la piel del brazo, con una duración aproximada de 3 años. Es una opción de anticoncepción de larga duración que no requiere recordatorio diario, colocada en un procedimiento breve en consultorio.",
    type: "consultorio",
    anesthesiaType: "Local",
    duration: "10 a 15 minutos",
    recoveryTime: "Reincorporación inmediata a actividades habituales",
    isPainful: false,
    benefits: [
      "Anticoncepción de larga duración (3 años) sin recordatorio diario",
      "Procedimiento breve y de colocación sencilla",
      "Reversible: la fertilidad se recupera al retirarlo",
    ],
    postOpRecommendations: ["Mantener seco y cubierto el sitio de colocación los primeros días", "Acudir a la revisión de control indicada"],
    priceRange: "$4,500 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "10 a 15 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿El implante subdérmico duele al colocarlo?",
        answer:
          "Se coloca con anestesia local, por lo que la molestia durante el procedimiento es mínima; puede quedar una sensibilidad leve en la zona durante los primeros días.",
      },
      {
        question: "¿Cuánto dura el implante subdérmico?",
        answer:
          "Aproximadamente 3 años, después de los cuales se recomienda su reemplazo si la paciente desea continuar con este método anticonceptivo.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/implante-subdermico.jpg",
    seo: {
      title: "Implante Subdérmico | Ginecóloga en Tuxtla Gutiérrez",
      description: "Colocación de implante subdérmico con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $4,500 MXN.",
      keywords: ["implante subdérmico Tuxtla Gutiérrez", "implante anticonceptivo Chiapas", "implante hormonal brazo precio"],
    },
  },
  {
    id: "s-vacuna-vph",
    slug: "vacuna-contra-el-vph",
    name: "Vacuna contra el VPH",
    description: "Aplicación de la vacuna contra el virus del papiloma humano, medida preventiva clave.",
    longDescription:
      "La vacuna contra el VPH protege contra los tipos del virus del papiloma humano más asociados a verrugas genitales y cáncer cervicouterino. Aplicada en consulta, es una de las medidas preventivas más efectivas disponibles, recomendada según el esquema y la edad de cada paciente.",
    type: "consultorio",
    duration: "10 a 15 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Reduce significativamente el riesgo de los tipos de VPH que cubre",
      "Medida preventiva clave contra el cáncer cervicouterino",
    ],
    postOpRecommendations: [],
    priceRange: "$4,200 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "10 a 15 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿A qué edad se recomienda la vacuna contra el VPH?",
        answer:
          "Es más efectiva cuando se aplica antes del inicio de la vida sexual, pero puede tener beneficio en edades posteriores — la recomendación específica para cada caso se valora en consulta.",
      },
      {
        question: "¿Cuántas dosis requiere el esquema?",
        answer:
          "El número de dosis depende de la edad de inicio del esquema; la doctora indica el esquema completo y el intervalo entre dosis al momento de la primera aplicación.",
      },
    ],
    relatedConditions: ["d-vph"],
    lastReviewed: "2026-10-29",
    image: "/servicios/vacuna-vph.jpg",
    seo: {
      title: "Vacuna contra el VPH | Ginecóloga en Tuxtla Gutiérrez",
      description: "Aplicación de vacuna contra el VPH con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $4,200 MXN.",
      keywords: ["vacuna VPH Tuxtla Gutiérrez", "vacuna contra el papiloma Chiapas", "vacuna VPH precio"],
    },
  },
  {
    id: "s-checkup",
    slug: "paquete-check-up-ginecologico",
    name: "Paquete Check Up Ginecológico",
    description: "Paquete de revisión ginecológica integral a precio preferencial.",
    longDescription:
      "El paquete check up ginecológico agrupa la revisión ginecológica completa y los estudios de detección básicos más solicitados en una sola visita, a precio preferencial frente a solicitarlos por separado. Es una opción recomendada para quienes buscan una valoración integral de su salud ginecológica, incluyendo seguimiento de climaterio o SOP.",
    type: "consultorio",
    duration: "45 a 60 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Revisión integral en una sola visita",
      "Precio preferencial frente a servicios solicitados por separado",
    ],
    postOpRecommendations: [],
    priceRange: "$2,000 MXN",
    technicalSpecs: { Tipo: "Consultorio", Duración: "45 a 60 minutos", Doloroso: "No" },
    faqs: [
      {
        question: "¿Qué incluye el paquete check up ginecológico?",
        answer:
          "Incluye la revisión ginecológica integral y los estudios de detección básicos correspondientes según la edad y antecedentes de cada paciente; el detalle exacto se confirma al agendar la cita.",
      },
      {
        question: "¿Es lo mismo que la revisión ginecológica anual?",
        answer:
          "Es un paquete relacionado, pensado como una opción integral a precio preferencial; la doctora orienta cuál conviene más según si ya se tienen estudios recientes o se busca una valoración completa desde cero.",
      },
    ],
    relatedConditions: ["d-menopausia", "d-premenopausia", "d-sop", "d-quistes-ovaricos"],
    lastReviewed: "2026-10-29",
    image: "/servicios/checkup.jpg",
    seo: {
      title: "Paquete Check Up Ginecológico | Tuxtla Gutiérrez",
      description: "Paquete de revisión ginecológica integral con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas. Precio: $2,000 MXN.",
      keywords: ["check up ginecológico Tuxtla Gutiérrez", "paquete revisión ginecóloga Chiapas", "chequeo integral mujer"],
    },
  },
  {
    id: "s-control-prenatal",
    slug: "control-prenatal",
    name: "Control Prenatal",
    description: "Seguimiento médico integral del embarazo, desde su confirmación hasta el nacimiento.",
    longDescription:
      "El control prenatal es el seguimiento médico periódico del embarazo, con revisiones programadas que incluyen signos vitales, crecimiento del bebé, estudios de laboratorio y ultrasonido según la etapa gestacional. Permite identificar y manejar oportunamente cualquier complicación, y planear con información completa la vía de nacimiento más adecuada junto con la paciente.",
    type: "consultorio",
    duration: "20 a 40 minutos por visita",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Seguimiento continuo del bienestar materno-fetal durante todo el embarazo",
      "Identificación oportuna de complicaciones",
      "Planeación informada de la vía de nacimiento",
    ],
    postOpRecommendations: [],
    priceRange: "Costo por consulta, consultar en cita — varía según el estudio del trimestre correspondiente",
    technicalSpecs: { Tipo: "Consultorio", Duración: "20 a 40 minutos por visita", Doloroso: "No" },
    faqs: [
      {
        question: "¿Cuándo debo iniciar el control prenatal?",
        answer:
          "Se recomienda iniciar en cuanto se confirma el embarazo, idealmente en las primeras semanas, para contar con seguimiento completo desde el inicio de la gestación.",
      },
      {
        question: "¿Con qué frecuencia son las citas de control prenatal?",
        answer:
          "La frecuencia varía según la etapa del embarazo: generalmente mensual en el primer y segundo trimestre, y más frecuente conforme se acerca la fecha probable de parto.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-10-29",
    image: "/servicios/control-prenatal.jpg",
    seo: {
      title: "Control Prenatal | Ginecobstetra en Tuxtla Gutiérrez",
      description: "Control prenatal integral con la Dra. Martha Llamas, ginecóloga y obstetra en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["control prenatal Tuxtla Gutiérrez", "seguimiento de embarazo Chiapas", "ginecobstetra control de embarazo"],
    },
  },
];
