import type { MedicalCondition } from "@/types/schema";

// Catálogo real de enfermedades/patologías que más atiende la Dra. Martha
// Llamas (intake 2026-10-29). El intake traía "ITS" y "ETS" como dos
// entradas separadas — son el mismo padecimiento (Infecciones/Enfermedades
// de Transmisión Sexual), se fusionaron en una sola entidad para no
// duplicar contenido clínico. "Control Prenatal" se movió a services.ts
// (es un proceso de seguimiento, no una enfermedad). Se añadió "Quistes
// Ováricos" (conocimiento clínico general real de la especialidad) para
// mantener el catálogo en el rango 10-15 de AGENTS.md §3 tras la fusión.
export const diseases: MedicalCondition[] = [
  {
    id: "d-mastitis",
    slug: "mastitis",
    name: "Mastitis",
    technicalName: "Mastitis Puerperal e Inflamatoria",
    colloquialNames: ["infección en el pecho", "pecho inflamado"],
    description:
      "La mastitis es la inflamación del tejido mamario, con o sin infección bacteriana asociada, que provoca dolor, enrojecimiento y endurecimiento de una zona del seno. Es más frecuente durante la lactancia, por obstrucción de los conductos de leche, aunque también puede presentarse fuera del periodo de lactancia. Un diagnóstico oportuno evita que progrese a un absceso mamario que requiera drenaje.",
    symptoms: [
      "Dolor e inflamación localizada en el seno",
      "Enrojecimiento y calor en la zona afectada",
      "Fiebre y malestar general",
      "Secreción de líquido anormal por el pezón",
      "Bulto o zona endurecida al tacto",
    ],
    causes: [
      "Obstrucción de un conducto de leche durante la lactancia",
      "Entrada de bacterias a través de grietas en el pezón",
      "Vaciado incompleto del seno al amamantar",
      "Uso de sostenes demasiado ajustados",
    ],
    riskFactors: [
      "Lactancia materna, especialmente en las primeras semanas",
      "Grietas o lesiones en el pezón",
      "Episodios previos de mastitis",
      "Mal acople del bebé al pecho",
    ],
    mexicoStats:
      "La mastitis es una de las principales causas de consulta ginecológica durante el puerperio en México, y una causa frecuente de abandono temprano de la lactancia cuando no se atiende a tiempo.",
    complications: [
      "Absceso mamario que requiere drenaje quirúrgico",
      "Infección recurrente",
      "Suspensión no planeada de la lactancia",
    ],
    treatments: [
      "Vaciado completo y frecuente del seno afectado",
      "Manejo del dolor y la inflamación bajo supervisión médica",
      "Tratamiento antimicrobiano cuando hay infección confirmada",
      "Revisión de la técnica de lactancia con la paciente",
    ],
    faqs: [
      {
        question: "¿La mastitis obliga a suspender la lactancia?",
        answer:
          "No. En la mayoría de los casos se recomienda continuar amamantando del lado afectado, ya que el vaciado frecuente del seno ayuda a resolver la obstrucción. La decisión siempre debe confirmarse en consulta, según la gravedad del cuadro.",
      },
      {
        question: "¿Cómo distingo una mastitis de un conducto obstruido simple?",
        answer:
          "Un conducto obstruido suele causar un bulto doloroso localizado sin fiebre. La mastitis añade enrojecimiento extendido, calor local y, con frecuencia, fiebre y malestar general. Ante fiebre, siempre se requiere valoración médica.",
      },
      {
        question: "¿Cuándo se vuelve urgente una mastitis?",
        answer:
          "Cuando aparece fiebre alta persistente, una zona muy dura y dolorosa que no mejora, o salida de pus por el pezón — son señales de un posible absceso que requiere valoración médica inmediata, no manejo casero.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la mastitis puerperal"],
    relatedServices: ["s-revision-mamas"],
    relatedSymptoms: ["sy-dolor-mamario", "sy-secrecion-mamas"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/mastitis.jpg",
    seo: {
      title: "Mastitis | Gineco-obstetra en Tuxtla Gutiérrez",
      description:
        "Dolor, enrojecimiento o bulto en el seno durante la lactancia? Diagnóstico y tratamiento de mastitis con la Dra. Martha Llamas en Tuxtla Gutiérrez.",
      keywords: ["mastitis Tuxtla Gutiérrez", "dolor en el pecho lactancia", "ginecóloga mastitis Chiapas"],
    },
  },
  {
    id: "d-its-ets",
    slug: "infecciones-de-transmision-sexual",
    name: "Infecciones de Transmisión Sexual",
    technicalName: "ITS / ETS",
    colloquialNames: ["ETS", "enfermedades venéreas", "infecciones de transmisión sexual"],
    description:
      "Las infecciones de transmisión sexual (ITS), también llamadas enfermedades de transmisión sexual (ETS), son infecciones que se transmiten principalmente por contacto sexual. Muchas cursan sin síntomas evidentes al inicio, por lo que la revisión ginecológica periódica y la detección oportuna son la forma más confiable de identificarlas antes de que generen complicaciones.",
    symptoms: [
      "Flujo vaginal anormal en color, cantidad u olor",
      "Ardor o picor vaginal",
      "Dolor al orinar o durante las relaciones sexuales",
      "Lesiones, ampollas o verrugas genitales",
      "Sangrado fuera del periodo menstrual",
    ],
    causes: [
      "Transmisión por contacto sexual sin protección",
      "Exposición a bacterias, virus o parásitos de transmisión sexual",
    ],
    riskFactors: [
      "Relaciones sexuales sin preservativo",
      "Múltiples parejas sexuales",
      "Antecedente de otra ITS previa",
      "Ausencia de revisión ginecológica periódica",
    ],
    mexicoStats:
      "Las infecciones de transmisión sexual se encuentran entre los motivos de consulta ginecológica más frecuentes en mujeres en edad reproductiva en México, con una proporción relevante de casos asintomáticos detectados solo en revisión de rutina.",
    complications: [
      "Enfermedad pélvica inflamatoria",
      "Infertilidad si no se trata a tiempo",
      "Mayor riesgo de otras infecciones asociadas",
      "Complicaciones en el embarazo si no se detecta antes",
    ],
    treatments: [
      "Tratamiento dirigido según el agente identificado en el estudio",
      "Revisión y tratamiento conjunto de la pareja cuando aplica",
      "Control de seguimiento tras el tratamiento",
    ],
    faqs: [
      {
        question: "¿Una ITS siempre da síntomas?",
        answer:
          "No. Varias infecciones de transmisión sexual cursan sin síntomas evidentes durante meses, lo que hace que la revisión ginecológica periódica sea la forma más confiable de detectarlas, no esperar a sentir molestias.",
      },
      {
        question: "¿Es lo mismo ITS que ETS?",
        answer:
          "Sí, son el mismo grupo de infecciones. 'ITS' (infecciones de transmisión sexual) es el término clínico actual; 'ETS' (enfermedades de transmisión sexual) es el término más antiguo y todavía de uso común. Ambos se refieren a la misma condición.",
      },
      {
        question: "¿Debo revisarme aunque no tenga síntomas?",
        answer:
          "Sí, especialmente si hubo un cambio de pareja sexual reciente o relaciones sin protección. La detección oportuna en consulta evita complicaciones como la enfermedad pélvica inflamatoria.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y manejo de infecciones de transmisión sexual"],
    relatedServices: ["s-revision-vaginal", "s-revision-anual"],
    relatedSymptoms: ["sy-flujo-vaginal-anormal", "sy-ardor-vaginal", "sy-picor-vaginal"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/its-ets.jpg",
    seo: {
      title: "ITS/ETS | Infecciones de Transmisión Sexual, Chiapas",
      description:
        "Detección y tratamiento de infecciones de transmisión sexual (ITS/ETS) con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["ITS Tuxtla Gutiérrez", "ETS ginecóloga Chiapas", "infecciones de transmisión sexual consulta"],
    },
  },
  {
    id: "d-cervicovaginitis",
    slug: "cervicovaginitis",
    name: "Cervicovaginitis",
    technicalName: "Cervicovaginitis Infecciosa",
    colloquialNames: ["infección vaginal", "flujo con infección"],
    description:
      "La cervicovaginitis es la inflamación del cuello uterino y la vagina, generalmente por una infección bacteriana, fúngica o parasitaria, que altera el equilibrio natural de la flora vaginal. Es una de las causas más frecuentes de consulta ginecológica y, aunque molesta, suele resolverse bien con tratamiento dirigido según el agente causante identificado en la revisión.",
    symptoms: [
      "Flujo vaginal abundante o con cambio de color/olor",
      "Picor o ardor vaginal",
      "Molestia o dolor durante las relaciones sexuales",
      "Enrojecimiento o irritación de la zona vaginal",
    ],
    causes: [
      "Desequilibrio de la flora vaginal normal",
      "Infecciones por hongos, bacterias o parásitos",
      "Uso de productos de higiene íntima irritantes",
      "Relaciones sexuales sin protección con pareja infectada",
    ],
    riskFactors: [
      "Uso frecuente de duchas vaginales",
      "Cambios hormonales (embarazo, anticonceptivos)",
      "Diabetes no controlada",
      "Uso prolongado de antibióticos",
    ],
    mexicoStats:
      "La cervicovaginitis es uno de los diagnósticos ginecológicos más comunes en consulta de primer contacto en mujeres mexicanas en edad reproductiva.",
    complications: [
      "Infección ascendente hacia el útero o las trompas si no se trata",
      "Molestia persistente que afecta la calidad de vida",
      "Mayor susceptibilidad a otras infecciones vaginales",
    ],
    treatments: [
      "Tratamiento dirigido según el agente identificado (antifúngico, antibiótico o antiparasitario)",
      "Ajustes en hábitos de higiene íntima",
      "Revisión de pareja cuando el origen es de transmisión sexual",
    ],
    faqs: [
      {
        question: "¿La cervicovaginitis es una infección de transmisión sexual?",
        answer:
          "No siempre. Puede originarse por desequilibrio de la flora vaginal propia (por ejemplo, por hongos) sin relación con contacto sexual, o puede deberse a una infección de transmisión sexual — el estudio en consulta determina la causa exacta.",
      },
      {
        question: "¿Puedo autotratarme con un óvulo de farmacia?",
        answer:
          "No es recomendable sin diagnóstico. Distintos agentes causan síntomas similares pero requieren tratamientos diferentes; automedicarse sin saber la causa puede retrasar el tratamiento correcto y enmascarar el diagnóstico en consulta.",
      },
      {
        question: "¿Puede repetirse después de tratada?",
        answer:
          "Sí, especialmente si persisten los factores que la favorecen (diabetes no controlada, uso de duchas vaginales, pareja no tratada). Por eso la revisión también identifica y corrige esos factores, no solo el episodio actual.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de vaginitis infecciosa"],
    relatedServices: ["s-revision-vaginal", "s-electrocirugia"],
    relatedSymptoms: ["sy-flujo-vaginal-anormal", "sy-picor-vaginal", "sy-ardor-vaginal"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/cervicovaginitis.jpg",
    seo: {
      title: "Cervicovaginitis | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Flujo anormal, ardor o picor vaginal? Diagnóstico y tratamiento de cervicovaginitis con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cervicovaginitis Tuxtla Gutiérrez", "infección vaginal ginecóloga", "flujo vaginal tratamiento Chiapas"],
    },
  },
  {
    id: "d-vph",
    slug: "virus-del-papiloma-humano",
    name: "Virus del Papiloma Humano",
    technicalName: "VPH",
    colloquialNames: ["papiloma", "VPH"],
    description:
      "El virus del papiloma humano (VPH) es una infección de transmisión sexual muy frecuente que, en la mayoría de los casos, el cuerpo elimina por sí solo. Algunos tipos de VPH pueden causar verrugas genitales y otros, de alto riesgo, están asociados al desarrollo de cáncer cervicouterino si la infección persiste sin seguimiento. La colposcopia y el Papanicolaou periódicos son la forma de vigilar su evolución.",
    symptoms: [
      "Verrugas genitales visibles (en los tipos de bajo riesgo)",
      "Con frecuencia no produce ningún síntoma",
      "Cambios celulares detectados solo en Papanicolaou o colposcopia",
    ],
    causes: ["Transmisión por contacto sexual con una persona portadora del virus"],
    riskFactors: [
      "Inicio de vida sexual a edad temprana",
      "Múltiples parejas sexuales",
      "Tabaquismo",
      "No tener el esquema de vacunación contra el VPH",
      "Sistema inmunológico debilitado",
    ],
    mexicoStats:
      "El VPH es la infección de transmisión sexual más frecuente en México, y la detección persistente de tipos de alto riesgo es la principal causa prevenible de cáncer cervicouterino cuando no hay seguimiento médico periódico.",
    complications: [
      "Lesiones precancerosas del cuello uterino",
      "Cáncer cervicouterino en infección persistente no vigilada",
      "Verrugas genitales recurrentes",
    ],
    treatments: [
      "Vigilancia con Papanicolaou y colposcopia periódicos",
      "Remoción de lesiones o verrugas identificadas (electrocirugía, cono/conización según el caso)",
      "Vacunación contra el VPH como medida preventiva",
    ],
    faqs: [
      {
        question: "¿Tener VPH significa que voy a tener cáncer?",
        answer:
          "No. La mayoría de las infecciones por VPH son eliminadas por el propio sistema inmunológico en uno o dos años. Solo la persistencia de ciertos tipos de alto riesgo, sin vigilancia médica, se asocia a mayor riesgo de cáncer cervicouterino — por eso el seguimiento periódico es la medida clave, no motivo de pánico inmediato.",
      },
      {
        question: "¿Sirve vacunarme si ya tuve relaciones sexuales?",
        answer:
          "Sí puede tener beneficio, ya que protege contra los tipos de VPH a los que aún no se ha estado expuesta. La recomendación específica para cada caso se valora en consulta.",
      },
      {
        question: "¿Con qué frecuencia debo hacerme el Papanicolaou si tengo VPH?",
        answer:
          "La frecuencia de seguimiento la determina el resultado específico de cada estudio y el tipo de VPH identificado; por eso el control periódico en consulta es indispensable, nunca un esquema genérico sin revisión médica.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Prevención y detección oportuna del cáncer cervicouterino"],
    relatedServices: ["s-revision-vaginal", "s-cono", "s-electrocirugia", "s-vacuna-vph"],
    relatedSymptoms: ["sy-flujo-vaginal-anormal"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/vph.jpg",
    seo: {
      title: "VPH | Virus del Papiloma Humano, Tuxtla Gutiérrez",
      description:
        "Diagnóstico, colposcopia y seguimiento del VPH con la Dra. Martha Llamas, ginecóloga certificada en colposcopia en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["VPH Tuxtla Gutiérrez", "colposcopia Chiapas", "virus del papiloma humano ginecóloga"],
    },
  },
  {
    id: "d-menopausia",
    slug: "menopausia",
    name: "Menopausia",
    technicalName: "Menopausia",
    colloquialNames: ["el cambio", "la pausa"],
    description:
      "La menopausia es el cese definitivo y permanente de la menstruación, confirmado tras 12 meses consecutivos sin periodo, y marca el fin de la etapa reproductiva natural de la mujer. Se acompaña de cambios hormonales que pueden generar síntomas como bochornos, sequedad vaginal y cambios de ánimo, todos manejables con acompañamiento médico especializado en climaterio.",
    symptoms: [
      "Ausencia de menstruación por 12 meses consecutivos",
      "Bochornos y sudoración nocturna",
      "Sequedad vaginal",
      "Cambios en el estado de ánimo",
      "Disminución del deseo sexual",
    ],
    causes: [
      "Disminución natural de la producción hormonal de los ovarios con la edad",
      "Menopausia quirúrgica tras extirpación de ambos ovarios",
    ],
    riskFactors: [
      "Edad (generalmente entre 45 y 55 años)",
      "Tabaquismo (puede adelantar su inicio)",
      "Antecedente familiar de menopausia temprana",
      "Cirugía previa de ovarios",
    ],
    mexicoStats:
      "La edad promedio de la menopausia en mujeres mexicanas se ubica alrededor de los 48-50 años, y una proporción importante de mujeres no recibe acompañamiento médico específico durante esta etapa.",
    complications: [
      "Osteoporosis por pérdida de densidad ósea",
      "Mayor riesgo cardiovascular",
      "Atrofia vaginal sintomática sin tratamiento",
    ],
    treatments: [
      "Valoración individualizada de terapia hormonal cuando está indicada",
      "Manejo de síntomas vasomotores y vaginales",
      "Vigilancia de salud ósea y cardiovascular",
      "Acompañamiento continuo durante la transición",
    ],
    faqs: [
      {
        question: "¿A qué edad es normal que inicie la menopausia?",
        answer:
          "La mayoría de las mujeres la presenta entre los 45 y 55 años, con un promedio cercano a los 48-50 años en México. Antes de los 40 años se considera menopausia precoz y amerita valoración específica.",
      },
      {
        question: "¿Es necesario tomar hormonas en la menopausia?",
        answer:
          "No es automático para todas las pacientes. La terapia hormonal se valora de forma individual según síntomas, antecedentes y factores de riesgo de cada mujer — es una decisión de consulta, no un tratamiento estándar para todas.",
      },
      {
        question: "¿La menopausia se puede confirmar con un estudio?",
        answer:
          "Se confirma clínicamente tras 12 meses consecutivos sin menstruación; en algunos casos se apoya con estudios hormonales cuando hay duda diagnóstica, por ejemplo en menopausia temprana.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la perimenopausia y posmenopausia"],
    relatedServices: ["s-revision-anual", "s-checkup"],
    relatedSymptoms: ["sy-sintomas-perimenopausia", "sy-sequedad-vaginal", "sy-falta-deseo-sexual"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/menopausia.jpg",
    seo: {
      title: "Menopausia | Acompañamiento en Climaterio, Tuxtla Gutiérrez",
      description:
        "Bochornos, sequedad vaginal o cambios de ánimo? Acompañamiento en menopausia con la Dra. Martha Llamas, experta en climaterio, Tuxtla Gutiérrez.",
      keywords: ["menopausia Tuxtla Gutiérrez", "climaterio ginecóloga Chiapas", "bochornos tratamiento"],
    },
  },
  {
    id: "d-premenopausia",
    slug: "premenopausia",
    name: "Premenopausia",
    technicalName: "Perimenopausia",
    colloquialNames: ["perimenopausia", "la transición"],
    description:
      "La premenopausia (o perimenopausia) es la etapa de transición hormonal previa a la menopausia, en la que los ciclos menstruales empiezan a volverse irregulares y pueden aparecer los primeros síntomas del climaterio. Puede durar varios años antes de que la menstruación cese por completo, y un seguimiento ginecológico ayuda a diferenciar estos cambios de otras causas de irregularidad menstrual.",
    symptoms: [
      "Ciclos menstruales irregulares en duración o cantidad",
      "Bochornos ocasionales",
      "Cambios en el estado de ánimo",
      "Alteraciones del sueño",
    ],
    causes: ["Fluctuación progresiva en la producción hormonal de los ovarios conforme se acerca la menopausia"],
    riskFactors: [
      "Edad (generalmente entre 40 y 50 años)",
      "Tabaquismo",
      "Antecedente familiar de menopausia temprana",
    ],
    mexicoStats:
      "La perimenopausia suele iniciar varios años antes de la menopausia; en México es una etapa frecuentemente subdiagnosticada, atribuida erróneamente solo al estrés o la edad sin valoración ginecológica.",
    complications: [
      "Sangrado menstrual abundante que requiere valoración si es persistente",
      "Confusión diagnóstica con otras causas de irregularidad menstrual si no se estudia",
    ],
    treatments: [
      "Seguimiento ginecológico de los cambios del ciclo",
      "Manejo de síntomas según intensidad",
      "Descarte de otras causas de sangrado irregular cuando es necesario",
    ],
    faqs: [
      {
        question: "¿La premenopausia es lo mismo que la menopausia?",
        answer:
          "No. La premenopausia (o perimenopausia) es la etapa de transición previa, con ciclos aún presentes pero irregulares. La menopausia se confirma hasta que la menstruación cesa por completo durante 12 meses consecutivos.",
      },
      {
        question: "¿Cuánto dura la premenopausia?",
        answer:
          "Varía de una mujer a otra; puede durar desde pocos meses hasta varios años antes de la menopausia. El seguimiento en consulta ayuda a identificar en qué punto de la transición se encuentra cada paciente.",
      },
      {
        question: "¿Todo sangrado irregular en esta etapa es normal?",
        answer:
          "No todo. Aunque la irregularidad es esperable, un sangrado muy abundante, prolongado o fuera de patrón debe valorarse en consulta para descartar otras causas, no asumirse automáticamente como parte normal de la transición.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETTEC: Diagnóstico y tratamiento de la perimenopausia y posmenopausia"],
    relatedServices: ["s-revision-anual", "s-checkup"],
    relatedSymptoms: ["sy-sintomas-perimenopausia", "sy-sangrado-intermenstrual"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/premenopausia.jpg",
    seo: {
      title: "Premenopausia (Perimenopausia) | Ginecóloga Tuxtla Gutiérrez",
      description:
        "Ciclos irregulares o primeros síntomas del climaterio? Seguimiento de premenopausia con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["premenopausia Tuxtla Gutiérrez", "perimenopausia ginecóloga", "ciclos irregulares Chiapas"],
    },
  },
  {
    id: "d-sop",
    slug: "sindrome-de-ovario-poliquistico",
    name: "Síndrome de Ovario Poliquístico",
    technicalName: "SOP",
    colloquialNames: ["SOP", "ovarios poliquísticos"],
    description:
      "El síndrome de ovario poliquístico (SOP) es un trastorno hormonal frecuente en mujeres en edad reproductiva, caracterizado por ciclos menstruales irregulares, exceso de hormonas androgénicas y, con frecuencia, múltiples folículos pequeños en los ovarios visibles por ultrasonido. Es una de las causas más comunes de dificultad para embarazarse, pero se controla bien con manejo médico individualizado.",
    symptoms: [
      "Ciclos menstruales irregulares o ausentes",
      "Acné y exceso de vello corporal (hirsutismo)",
      "Dificultad para lograr un embarazo",
      "Aumento de peso difícil de controlar",
      "Dolor pélvico ocasional",
    ],
    causes: ["Desequilibrio hormonal (exceso de andrógenos)", "Resistencia a la insulina", "Predisposición genética"],
    riskFactors: [
      "Antecedentes familiares de SOP",
      "Sobrepeso u obesidad",
      "Resistencia a la insulina o diabetes",
    ],
    mexicoStats:
      "El síndrome de ovario poliquístico afecta a una proporción considerable de mujeres mexicanas en edad reproductiva y es una de las principales causas hormonales de infertilidad estudiadas en consulta ginecológica.",
    complications: [
      "Infertilidad si no se maneja oportunamente",
      "Diabetes tipo 2 a largo plazo",
      "Engrosamiento anormal del endometrio por ciclos irregulares prolongados",
    ],
    treatments: [
      "Manejo hormonal individualizado para regular el ciclo",
      "Cambios en estilo de vida y control de peso cuando aplica",
      "Manejo específico de la fertilidad cuando la paciente busca embarazo",
      "Vigilancia metabólica periódica",
    ],
    faqs: [
      {
        question: "¿El SOP impide tener hijos?",
        answer:
          "No necesariamente. Muchas mujeres con SOP logran embarazarse con manejo médico adecuado; es una de las causas tratables de infertilidad de baja complejidad, por lo que la valoración y el seguimiento son clave, no un diagnóstico definitivo de infertilidad.",
      },
      {
        question: "¿El SOP se cura?",
        answer:
          "El SOP es una condición que se maneja y controla a largo plazo, no un episodio que se cura de forma definitiva. Con seguimiento médico continuo se controlan bien sus síntomas y riesgos asociados.",
      },
      {
        question: "¿Necesito un ultrasonido para confirmar SOP?",
        answer:
          "El diagnóstico se basa en una combinación de síntomas clínicos, estudios hormonales y, con frecuencia, ultrasonido pélvico — ningún estudio aislado lo confirma por sí solo, se evalúa el cuadro completo en consulta.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del síndrome de ovario poliquístico"],
    relatedServices: ["s-revision-anual", "s-checkup"],
    relatedSymptoms: ["sy-ausencia-menstruacion", "sy-falta-deseo-sexual", "sy-dolor-pelvico"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/sop.jpg",
    seo: {
      title: "Síndrome de Ovario Poliquístico (SOP) | Tuxtla Gutiérrez",
      description:
        "Ciclos irregulares, acné o dificultad para embarazarte? Diagnóstico y manejo del SOP con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["SOP Tuxtla Gutiérrez", "ovarios poliquísticos ginecóloga", "síndrome de ovario poliquístico Chiapas"],
    },
  },
  {
    id: "d-cistitis",
    slug: "cistitis",
    name: "Cistitis",
    technicalName: "Cistitis Aguda",
    colloquialNames: ["infección de orina", "infección urinaria"],
    description:
      "La cistitis es la inflamación de la vejiga, generalmente causada por una infección bacteriana, muy frecuente en mujeres por la anatomía corta de la uretra femenina. Aunque suele resolverse bien con tratamiento oportuno, su recurrencia frecuente amerita valoración ginecológica para identificar y corregir los factores que la favorecen.",
    symptoms: [
      "Ardor o dolor al orinar",
      "Necesidad urgente y frecuente de orinar",
      "Dolor pélvico bajo",
      "Orina turbia o con olor fuerte",
      "Sensación de vaciado incompleto",
    ],
    causes: [
      "Infección bacteriana ascendente desde la uretra",
      "Higiene inadecuada tras la evacuación",
      "Retención prolongada de orina",
    ],
    riskFactors: [
      "Actividad sexual frecuente",
      "Embarazo",
      "Episodios previos de cistitis",
      "Uso de métodos anticonceptivos de barrera con espermicida",
    ],
    mexicoStats:
      "La cistitis es una de las infecciones más frecuentes en mujeres mexicanas en edad reproductiva, con una tasa relevante de recurrencia cuando no se identifican los factores de riesgo asociados.",
    complications: [
      "Infección ascendente hacia los riñones (pielonefritis) si no se trata",
      "Cistitis recurrente",
      "Complicaciones si ocurre durante el embarazo sin tratamiento",
    ],
    treatments: [
      "Tratamiento antimicrobiano dirigido según urocultivo cuando está indicado",
      "Hidratación adecuada",
      "Identificación y manejo de factores de recurrencia",
    ],
    faqs: [
      {
        question: "¿La cistitis se puede confundir con una infección vaginal?",
        answer:
          "Sí, ambas pueden causar molestia en la zona pélvica, pero la cistitis se distingue por ardor al orinar y urgencia urinaria, mientras que una infección vaginal se asocia más a flujo anormal y picor. La valoración en consulta distingue ambas con precisión.",
      },
      {
        question: "¿Es normal tener cistitis varias veces al año?",
        answer:
          "No debería ser frecuente. Si ocurre más de 2-3 veces al año, amerita valoración para identificar la causa de la recurrencia, en lugar de tratar cada episodio por separado sin investigar el origen.",
      },
      {
        question: "¿Puedo tratarme la cistitis sin ir a consulta?",
        answer:
          "No es recomendable automedicarse de forma repetida: el tratamiento dirigido según urocultivo evita resistencia bacteriana y asegura que se resuelva por completo, no solo que mejoren los síntomas temporalmente.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la infección de vías urinarias en la mujer"],
    relatedServices: ["s-revision-vaginal"],
    relatedSymptoms: ["sy-dolor-pelvico", "sy-ardor-vaginal"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/cistitis.jpg",
    seo: {
      title: "Cistitis | Infección Urinaria, Ginecóloga Tuxtla Gutiérrez",
      description:
        "Ardor al orinar o infección urinaria recurrente? Diagnóstico y tratamiento de cistitis con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cistitis Tuxtla Gutiérrez", "infección urinaria ginecóloga", "infección de orina Chiapas"],
    },
  },
  {
    id: "d-infertilidad-baja-complejidad",
    slug: "infertilidad-de-baja-complejidad",
    name: "Infertilidad de Baja Complejidad",
    technicalName: "Infertilidad Femenina de Origen Manejable",
    colloquialNames: ["dificultad para embarazarse"],
    description:
      "La infertilidad de baja complejidad se refiere a la dificultad para lograr un embarazo con causas identificables y tratables sin recurrir a técnicas de reproducción asistida de alta complejidad — por ejemplo, alteraciones ovulatorias, irregularidades hormonales leves o factores corregibles del ciclo. El estudio inicial de la pareja identifica la causa probable y guía el tratamiento más adecuado.",
    symptoms: [
      "Más de 6-12 meses buscando embarazo sin éxito",
      "Ciclos menstruales irregulares o ausentes",
      "Antecedente de abortos recurrentes",
    ],
    causes: [
      "Alteraciones en la ovulación",
      "Síndrome de ovario poliquístico",
      "Factores hormonales leves",
      "Alteraciones menores del ciclo menstrual",
    ],
    riskFactors: [
      "Edad mayor a 35 años",
      "Ciclos menstruales irregulares previos",
      "Sobrepeso u obesidad",
      "Antecedente de SOP u otra alteración hormonal",
    ],
    mexicoStats:
      "La infertilidad afecta a una proporción considerable de parejas mexicanas en edad reproductiva, y una parte importante de los casos corresponde a causas de baja complejidad, manejables sin técnicas de alta especialidad.",
    complications: [
      "Prolongación innecesaria del tiempo de búsqueda de embarazo sin diagnóstico",
      "Desgaste emocional de la pareja ante la falta de diagnóstico claro",
    ],
    treatments: [
      "Estudio hormonal y de ovulación dirigido",
      "Inducción de la ovulación cuando está indicada",
      "Seguimiento del ciclo con ultrasonido folicular",
      "Corrección de factores hormonales identificados",
    ],
    faqs: [
      {
        question: "¿Cuándo debo buscar ayuda si no logro embarazarme?",
        answer:
          "Se recomienda valoración tras 12 meses de búsqueda sin éxito en menores de 35 años, o tras 6 meses en mujeres de 35 años o más, ya que la fertilidad disminuye con la edad y un estudio oportuno amplía las opciones de tratamiento.",
      },
      {
        question: "¿La infertilidad de baja complejidad requiere fecundación in vitro?",
        answer:
          "No en la mayoría de los casos. Muchas causas de baja complejidad se resuelven con inducción de la ovulación y seguimiento del ciclo, sin necesidad de técnicas de reproducción asistida de alta especialidad.",
      },
      {
        question: "¿Qué estudios se piden primero?",
        answer:
          "Generalmente un perfil hormonal, seguimiento de la ovulación por ultrasonido y una valoración general del ciclo menstrual; según esos resultados se define si el caso puede resolverse como baja complejidad o requiere referencia a un nivel de mayor especialidad.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la infertilidad en la pareja"],
    relatedServices: [],
    relatedSymptoms: ["sy-ausencia-menstruacion"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/infertilidad.jpg",
    seo: {
      title: "Infertilidad de Baja Complejidad | Tuxtla Gutiérrez",
      description:
        "Dificultad para embarazarte? Estudio y manejo de infertilidad de baja complejidad con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["infertilidad Tuxtla Gutiérrez", "dificultad para embarazarse ginecóloga", "infertilidad baja complejidad Chiapas"],
    },
  },
  {
    id: "d-quistes-ovaricos",
    slug: "quistes-ovaricos",
    name: "Quistes Ováricos",
    technicalName: "Quistes de Ovario",
    colloquialNames: ["bolsitas en el ovario"],
    description:
      "Los quistes ováricos son acumulaciones de líquido que se forman dentro o sobre la superficie del ovario. La mayoría son funcionales, se relacionan con el ciclo menstrual normal y desaparecen solos en semanas; otros requieren vigilancia o tratamiento según su tamaño, tipo y síntomas asociados, por lo que el seguimiento por ultrasonido es clave para diferenciarlos.",
    symptoms: [
      "Dolor pélvico de un lado, constante o intermitente",
      "Sensación de hinchazón o pesadez abdominal",
      "Alteraciones del ciclo menstrual",
      "Dolor durante las relaciones sexuales",
    ],
    causes: ["Formación funcional durante el ciclo ovulatorio normal", "Endometriosis", "Síndrome de ovario poliquístico"],
    riskFactors: [
      "Ciclos menstruales irregulares",
      "Antecedente de endometriosis",
      "Antecedente de quistes ováricos previos",
    ],
    mexicoStats:
      "Los quistes ováricos funcionales son un hallazgo frecuente en ultrasonidos ginecológicos de rutina en mujeres mexicanas en edad reproductiva, y la mayoría no requiere tratamiento quirúrgico.",
    complications: [
      "Torsión ovárica (urgencia que requiere atención inmediata)",
      "Ruptura del quiste con dolor agudo",
      "Crecimiento que requiere manejo quirúrgico en quistes no funcionales",
    ],
    treatments: [
      "Vigilancia con ultrasonido de control en quistes funcionales pequeños",
      "Manejo hormonal según el caso",
      "Manejo quirúrgico cuando el quiste es grande, persistente o sospechoso",
    ],
    faqs: [
      {
        question: "¿Todos los quistes ováricos requieren cirugía?",
        answer:
          "No. La mayoría son funcionales y desaparecen solos en uno o dos ciclos menstruales, por lo que se vigilan con ultrasonido de control. Solo una proporción menor, según tamaño o características, requiere manejo quirúrgico.",
      },
      {
        question: "¿Un quiste ovárico puede ser una urgencia?",
        answer:
          "Sí, si se tuerce sobre su propio eje (torsión ovárica) o se rompe, causa dolor pélvico súbito e intenso que requiere atención de urgencia inmediata, no una cita programada.",
      },
      {
        question: "¿Los quistes ováricos afectan la fertilidad?",
        answer:
          "Depende del tipo: los quistes funcionales simples generalmente no la afectan, mientras que algunos relacionados con endometriosis sí pueden hacerlo — por eso el seguimiento identifica el tipo exacto antes de dar una respuesta general.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de tumores anexiales (quistes de ovario)"],
    relatedServices: ["s-revision-anual", "s-checkup"],
    relatedSymptoms: ["sy-dolor-pelvico", "sy-sangrado-intermenstrual"],
    lastReviewed: "2026-10-29",
    image: "/enfermedades/quistes-ovaricos.jpg",
    seo: {
      title: "Quistes Ováricos | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Dolor pélvico de un lado o quiste detectado por ultrasonido? Diagnóstico y seguimiento con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["quistes ováricos Tuxtla Gutiérrez", "quiste de ovario ginecóloga", "dolor pélvico Chiapas"],
    },
  },
];
