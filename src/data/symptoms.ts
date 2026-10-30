import type { Symptom } from "@/types/schema";

// Catálogo real de síntomas que más atiende la Dra. Martha Llamas (intake
// 2026-10-29, 9 entradas) + 2 añadidos (conocimiento clínico general real
// de la especialidad, AGENTS.md §3) para llegar al mínimo de 10: "Flujo
// vaginal anormal" (distinto de picor/ardor — describe cambios en
// cantidad/color/olor) y "Ausencia de menstruación" (amenorrea), motivo de
// consulta ginecológica muy frecuente y ligado a SOP/infertilidad.
export const symptoms: Symptom[] = [
  {
    id: "sy-sangrado-intermenstrual",
    slug: "sangrado-intermenstrual",
    name: "Sangrado Intermenstrual",
    colloquialNames: ["sangrado entre periodos", "manchado fuera de la regla"],
    description:
      "El sangrado intermenstrual es cualquier sangrado vaginal que ocurre fuera de los días habituales de la menstruación. Puede ser un manchado leve o un sangrado más abundante, y sus causas van desde cambios hormonales normales hasta quistes ováricos o alteraciones del endometrio, por lo que siempre conviene valorarlo en consulta.",
    causes: [
      "Cambios hormonales de la perimenopausia",
      "Quistes ováricos",
      "Uso de anticonceptivos hormonales",
      "Pólipos o alteraciones del endometrio",
    ],
    alarmSigns: [
      "Sangrado muy abundante que empapa una toalla por hora durante varias horas",
      "Sangrado intermenstrual acompañado de dolor pélvico intenso y súbito",
      "Sangrado tras la menopausia ya confirmada",
      "Sangrado con mareo, palidez o desmayo",
    ],
    whyConsult:
      "El sangrado intermenstrual recurrente puede ser la primera señal visible de un quiste ovárico, un pólipo endometrial o un desequilibrio hormonal que requiere estudio dirigido, no solo observación.",
    faqs: [
      {
        question: "¿Un poco de manchado entre periodos siempre es grave?",
        answer:
          "No siempre, puede deberse a cambios hormonales leves o al uso de anticonceptivos. Pero si se repite en varios ciclos o es abundante, debe valorarse en consulta para descartar causas como quistes ováricos o alteraciones del endometrio.",
      },
      {
        question: "¿Qué estudio ayuda a encontrar la causa?",
        answer:
          "Generalmente un ultrasonido ginecológico es el primer estudio para evaluar el útero y los ovarios; según el hallazgo, pueden solicitarse estudios hormonales adicionales.",
      },
    ],
    relatedConditions: ["d-premenopausia", "d-quistes-ovaricos"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/sangrado-intermenstrual.jpg",
    seo: {
      title: "Sangrado Intermenstrual | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Sangrado o manchado fuera de tu periodo? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["sangrado intermenstrual Tuxtla Gutiérrez", "manchado entre periodos ginecóloga", "sangrado fuera de la regla Chiapas"],
    },
  },
  {
    id: "sy-dolor-mamario",
    slug: "dolor-mamario",
    name: "Dolor Mamario",
    colloquialNames: ["dolor de senos", "pecho adolorido"],
    description:
      "El dolor mamario es una molestia en uno o ambos senos que puede ser cíclico (ligado al ciclo menstrual) o no cíclico. Aunque la mayoría de las veces es benigno, un dolor localizado, con enrojecimiento o acompañado de un bulto debe valorarse para descartar mastitis u otras causas que requieren tratamiento.",
    causes: [
      "Cambios hormonales del ciclo menstrual",
      "Mastitis durante la lactancia",
      "Uso de sostén inadecuado",
      "Quistes mamarios benignos",
    ],
    alarmSigns: [
      "Bulto nuevo que no desaparece después del periodo menstrual",
      "Enrojecimiento, calor o fiebre junto con el dolor mamario",
      "Secreción con sangre por el pezón",
      "Hundimiento de la piel o cambio en la forma del seno",
    ],
    whyConsult:
      "La mayoría del dolor mamario es benigno y cíclico, pero cuando es localizado, persistente o se acompaña de un bulto o secreción, una valoración oportuna descarta causas que sí requieren tratamiento, como la mastitis.",
    faqs: [
      {
        question: "¿El dolor mamario antes del periodo es normal?",
        answer:
          "Sí, el dolor mamario cíclico relacionado con el ciclo menstrual es muy frecuente y generalmente benigno. Se vuelve motivo de consulta cuando es constante, localizado en un solo punto o se acompaña de un bulto.",
      },
      {
        question: "¿Cuándo el dolor mamario es señal de mastitis?",
        answer:
          "Cuando el dolor se acompaña de enrojecimiento, calor local, fiebre o un bulto duro y doloroso, especialmente durante la lactancia — ahí sí amerita valoración médica para confirmar o descartar mastitis.",
      },
    ],
    relatedConditions: ["d-mastitis"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/dolor-mamario.jpg",
    seo: {
      title: "Dolor Mamario | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Dolor en el seno o los senos? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["dolor mamario Tuxtla Gutiérrez", "dolor de senos ginecóloga", "dolor en el pecho mujer Chiapas"],
    },
  },
  {
    id: "sy-picor-vaginal",
    slug: "picor-vaginal",
    name: "Picor Vaginal",
    colloquialNames: ["comezón vaginal"],
    description:
      "El picor vaginal es una molestia muy frecuente que suele deberse a infecciones por hongos, bacterias o irritación por productos de higiene íntima. Es uno de los motivos de consulta ginecológica más comunes, y el tratamiento depende por completo de identificar la causa exacta en la revisión.",
    causes: [
      "Infección por hongos (candidiasis)",
      "Cervicovaginitis bacteriana",
      "Irritación por jabones o productos íntimos",
      "Infección de transmisión sexual",
    ],
    alarmSigns: [
      "Picor intenso que no mejora tras varios días",
      "Picor acompañado de úlceras, ampollas o lesiones visibles",
      "Picor con fiebre o dolor pélvico intenso",
    ],
    whyConsult:
      "El picor vaginal persistente casi siempre tiene una causa identificable en la revisión ginecológica; automedicarse sin diagnóstico puede retrasar el tratamiento correcto y enmascarar la causa real.",
    faqs: [
      {
        question: "¿El picor vaginal siempre es por hongos?",
        answer:
          "No siempre. Aunque la candidiasis es una causa frecuente, el picor también puede deberse a cervicovaginitis bacteriana, irritación por productos de higiene o una infección de transmisión sexual — cada una requiere tratamiento distinto.",
      },
      {
        question: "¿Puedo usar un óvulo de farmacia sin ir a consulta?",
        answer:
          "No es lo ideal: usar un tratamiento sin diagnóstico puede aliviar el síntoma temporalmente sin resolver la causa real, y en algunos casos retrasa el diagnóstico correcto.",
      },
    ],
    relatedConditions: ["d-its-ets", "d-cervicovaginitis"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/picor-vaginal.jpg",
    seo: {
      title: "Picor Vaginal | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Comezón o picor vaginal persistente? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["picor vaginal Tuxtla Gutiérrez", "comezón vaginal ginecóloga", "picazón íntima Chiapas"],
    },
  },
  {
    id: "sy-ardor-vaginal",
    slug: "ardor-vaginal",
    name: "Ardor Vaginal",
    colloquialNames: ["ardor íntimo"],
    description:
      "El ardor vaginal es una sensación de quemazón en la zona íntima que puede presentarse al orinar, durante las relaciones sexuales o de forma constante. Se asocia con frecuencia a infecciones vaginales, infecciones urinarias o sequedad vaginal, y su causa exacta se identifica mejor en revisión directa que por autodiagnóstico.",
    causes: [
      "Cervicovaginitis infecciosa",
      "Infección de vías urinarias (cistitis)",
      "Sequedad vaginal por cambios hormonales",
      "Infección de transmisión sexual",
    ],
    alarmSigns: [
      "Ardor intenso acompañado de fiebre",
      "Ardor con sangrado o lesiones genitales visibles",
      "Ardor que empeora rápidamente en pocas horas",
    ],
    whyConsult:
      "El ardor vaginal puede tener varias causas con tratamientos distintos (infección vaginal, infección urinaria, sequedad hormonal); la revisión en consulta identifica cuál de ellas es la responsable en cada caso.",
    faqs: [
      {
        question: "¿El ardor al orinar es lo mismo que el ardor vaginal?",
        answer:
          "Pueden sentirse parecidos, pero el ardor al orinar suele apuntar a una infección urinaria (cistitis), mientras que el ardor vaginal constante, no solo al orinar, suele relacionarse más con infecciones o irritación vaginal. La exploración en consulta distingue el origen.",
      },
      {
        question: "¿El ardor vaginal en la menopausia es normal?",
        answer:
          "Es frecuente por la sequedad vaginal asociada a los cambios hormonales de esta etapa, y tiene manejo específico en consulta — no es algo que deba simplemente tolerarse sin tratamiento.",
      },
    ],
    relatedConditions: ["d-its-ets", "d-cervicovaginitis", "d-cistitis"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/ardor-vaginal.jpg",
    seo: {
      title: "Ardor Vaginal | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Ardor vaginal o al orinar? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["ardor vaginal Tuxtla Gutiérrez", "ardor al orinar ginecóloga", "ardor íntimo Chiapas"],
    },
  },
  {
    id: "sy-sintomas-perimenopausia",
    slug: "sintomas-de-la-perimenopausia",
    name: "Síntomas de la Perimenopausia",
    colloquialNames: ["síntomas del climaterio", "bochornos"],
    description:
      "Los síntomas de la perimenopausia incluyen bochornos, sudoración nocturna, cambios de ánimo e irregularidad menstrual, propios de la transición hormonal previa a la menopausia. Aunque son esperables en esta etapa, su intensidad y manejo varían mucho de una mujer a otra y pueden tratarse para mejorar la calidad de vida.",
    causes: ["Fluctuación hormonal propia de la transición a la menopausia"],
    alarmSigns: [
      "Sangrado muy abundante junto con los síntomas de la transición",
      "Palpitaciones o dolor en el pecho intensos",
      "Síntomas de ánimo que incluyen ideas de hacerse daño",
    ],
    whyConsult:
      "Los síntomas de la perimenopausia tienen manejo médico efectivo; no es necesario tolerarlos sin ayuda, y la valoración también descarta otras causas de irregularidad menstrual que no son parte normal de esta etapa.",
    faqs: [
      {
        question: "¿Los bochornos se pueden tratar?",
        answer:
          "Sí. Existen opciones de manejo, desde ajustes de estilo de vida hasta terapia hormonal valorada de forma individual en consulta, según la intensidad de los síntomas y los antecedentes de cada paciente.",
      },
      {
        question: "¿A qué edad empiezan estos síntomas normalmente?",
        answer:
          "Suelen iniciar entre los 40 y 50 años, varios años antes de la menopausia definitiva, aunque la edad exacta varía de una mujer a otra.",
      },
    ],
    relatedConditions: ["d-menopausia", "d-premenopausia"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/sintomas-perimenopausia.jpg",
    seo: {
      title: "Síntomas de la Perimenopausia | Tuxtla Gutiérrez",
      description:
        "Bochornos o cambios de ánimo en la transición a la menopausia? Consulta con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["síntomas perimenopausia Tuxtla Gutiérrez", "bochornos ginecóloga", "climaterio Chiapas"],
    },
  },
  {
    id: "sy-dolor-pelvico",
    slug: "dolor-pelvico",
    name: "Dolor Pélvico",
    colloquialNames: ["dolor abajo del vientre", "dolor de ovarios"],
    description:
      "El dolor pélvico es la molestia localizada en la parte baja del abdomen, entre el ombligo y la zona genital. Puede ser cíclico, relacionado con la ovulación o la menstruación, o persistente, asociado a quistes ováricos, infecciones urinarias o cistitis — su patrón y localización ayudan a orientar la causa en consulta.",
    causes: [
      "Quistes ováricos",
      "Cistitis o infección urinaria",
      "Ovulación (dolor de medio ciclo)",
      "Síndrome de ovario poliquístico",
    ],
    alarmSigns: [
      "Dolor pélvico súbito, intenso y de un solo lado",
      "Dolor pélvico con fiebre alta",
      "Dolor pélvico con sangrado vaginal abundante o mareo",
      "Dolor que no cede con analgésicos habituales",
    ],
    whyConsult:
      "El dolor pélvico recurrente o intenso puede señalar un quiste ovárico, una infección o una condición como el SOP que requiere manejo específico; un dolor súbito e intenso de un solo lado puede ser una urgencia (torsión ovárica).",
    faqs: [
      {
        question: "¿El dolor pélvico durante la ovulación es normal?",
        answer:
          "Un dolor leve a mitad del ciclo (llamado dolor de ovulación) es común y generalmente benigno. Se vuelve motivo de consulta cuando es intenso, prolongado o se repite fuera de ese patrón.",
      },
      {
        question: "¿Cuándo el dolor pélvico es una urgencia?",
        answer:
          "Cuando aparece de forma súbita, muy intensa y de un solo lado, especialmente con náusea o mareo, puede tratarse de una torsión ovárica y requiere atención de urgencia inmediata, no una cita programada.",
      },
    ],
    relatedConditions: ["d-cistitis", "d-sop", "d-quistes-ovaricos"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/dolor-pelvico.jpg",
    seo: {
      title: "Dolor Pélvico | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Dolor pélvico o en la parte baja del vientre? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["dolor pélvico Tuxtla Gutiérrez", "dolor de ovarios ginecóloga", "dolor abdominal bajo mujer Chiapas"],
    },
  },
  {
    id: "sy-sequedad-vaginal",
    slug: "sequedad-vaginal",
    name: "Sequedad Vaginal",
    colloquialNames: ["resequedad íntima"],
    description:
      "La sequedad vaginal es la disminución de la lubricación natural de la vagina, muy frecuente durante la menopausia por la caída de estrógenos, aunque también puede presentarse en otras etapas. Causa molestia, ardor y dolor durante las relaciones sexuales, y tiene opciones de tratamiento efectivas.",
    causes: [
      "Disminución de estrógenos en la menopausia",
      "Lactancia",
      "Uso de ciertos anticonceptivos hormonales",
      "Algunos medicamentos que reducen la lubricación natural",
    ],
    alarmSigns: [
      "Sequedad con sangrado durante las relaciones sexuales",
      "Dolor pélvico intenso asociado",
      "Lesiones o fisuras que no sanan",
    ],
    whyConsult:
      "La sequedad vaginal tiene manejo médico efectivo, con o sin hormonas según el caso; no es necesario tolerarla como una parte inevitable de la menopausia sin buscar tratamiento.",
    faqs: [
      {
        question: "¿La sequedad vaginal solo pasa en la menopausia?",
        answer:
          "Es más frecuente en la menopausia por la caída de estrógenos, pero también puede presentarse durante la lactancia o por el uso de ciertos anticonceptivos, en cualquier etapa reproductiva.",
      },
      {
        question: "¿Hay tratamiento para la sequedad vaginal?",
        answer:
          "Sí, existen varias opciones según la causa y la etapa de vida de cada paciente, desde lubricantes hasta tratamiento hormonal local — se define en consulta según el caso.",
      },
    ],
    relatedConditions: ["d-menopausia"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/sequedad-vaginal.jpg",
    seo: {
      title: "Sequedad Vaginal | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Sequedad o molestia íntima en la menopausia? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["sequedad vaginal Tuxtla Gutiérrez", "resequedad íntima ginecóloga", "sequedad menopausia Chiapas"],
    },
  },
  {
    id: "sy-falta-deseo-sexual",
    slug: "falta-de-deseo-sexual",
    name: "Falta de Deseo Sexual",
    colloquialNames: ["baja libido", "pérdida del deseo"],
    description:
      "La falta de deseo sexual es la disminución notable del interés en la actividad sexual, que puede tener origen hormonal (menopausia, SOP), físico (sequedad vaginal, dolor) o emocional. Es un motivo de consulta válido y frecuente, no algo que deba minimizarse o normalizarse sin explorar su causa.",
    causes: [
      "Cambios hormonales de la menopausia o perimenopausia",
      "Síndrome de ovario poliquístico",
      "Dolor durante las relaciones sexuales por sequedad vaginal",
      "Factores emocionales o de estrés",
    ],
    alarmSigns: [
      "Cambio junto con dolor pélvico persistente",
      "Cambio acompañado de sangrado anormal",
    ],
    whyConsult:
      "La falta de deseo sexual con frecuencia tiene una causa hormonal o física identificable y tratable; conversarlo en consulta permite descartar o tratar esas causas, en lugar de asumir que no tiene solución.",
    faqs: [
      {
        question: "¿Es normal hablar de esto con mi ginecóloga?",
        answer:
          "Sí, por completo. La falta de deseo sexual es un motivo de consulta válido y frecuente, con causas hormonales o físicas identificables en muchos casos, que se abordan con la misma seriedad que cualquier otro síntoma.",
      },
      {
        question: "¿Siempre tiene causa hormonal?",
        answer:
          "No siempre, pero es una de las causas más frecuentes a descartar, junto con el dolor durante las relaciones sexuales por sequedad vaginal y factores emocionales — la valoración en consulta ayuda a identificar cuál aplica en cada caso.",
      },
    ],
    relatedConditions: ["d-menopausia", "d-sop"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/falta-deseo-sexual.jpg",
    seo: {
      title: "Falta de Deseo Sexual | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Disminución del deseo sexual? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["falta de deseo sexual Tuxtla Gutiérrez", "baja libido ginecóloga", "disminución libido mujer Chiapas"],
    },
  },
  {
    id: "sy-secrecion-mamas",
    slug: "secrecion-de-liquido-en-las-mamas",
    name: "Secreción de Líquido en las Mamas",
    colloquialNames: ["salida de líquido del pezón", "galactorrea"],
    description:
      "La secreción de líquido por el pezón fuera de la lactancia (galactorrea) o durante esta con características anormales puede deberse a mastitis, cambios hormonales o, con menos frecuencia, otras causas que ameritan estudio. Su color, si es espontánea o solo con presión, y si afecta uno o ambos senos, orientan el diagnóstico.",
    causes: [
      "Mastitis",
      "Cambios hormonales (prolactina elevada)",
      "Algunos anticonceptivos hormonales",
      "Estimulación mecánica frecuente del pezón",
    ],
    alarmSigns: [
      "Secreción con sangre",
      "Secreción espontánea de un solo pezón fuera de la lactancia",
      "Secreción junto con un bulto palpable",
    ],
    whyConsult:
      "La secreción mamaria fuera del contexto normal de lactancia requiere valoración para identificar su causa exacta — desde mastitis hasta un desequilibrio hormonal — y descartar otras causas que ameriten estudio adicional.",
    faqs: [
      {
        question: "¿Es normal la secreción durante la lactancia?",
        answer:
          "Sí, la salida de leche es esperada durante la lactancia. Se vuelve motivo de consulta cuando cambia de aspecto (con sangre, por ejemplo), se acompaña de dolor intenso o fiebre, o se presenta fuera del periodo de lactancia.",
      },
      {
        question: "¿Qué estudios se piden ante esta secreción?",
        answer:
          "Según el caso, puede incluir examen físico dirigido, estudio hormonal (prolactina) o un ultrasonido mamario; el estudio exacto se define según las características de la secreción en consulta.",
      },
    ],
    relatedConditions: ["d-mastitis"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/secrecion-mamas.jpg",
    seo: {
      title: "Secreción de Líquido en las Mamas | Tuxtla Gutiérrez",
      description:
        "Salida de líquido del pezón fuera de lo esperado? Consulta con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["secreción mamaria Tuxtla Gutiérrez", "galactorrea ginecóloga", "líquido del pezón Chiapas"],
    },
  },
  {
    id: "sy-flujo-vaginal-anormal",
    slug: "flujo-vaginal-anormal",
    name: "Flujo Vaginal Anormal",
    colloquialNames: ["flujo con mal olor", "flujo de color raro"],
    description:
      "El flujo vaginal anormal es cualquier cambio notable en el color, cantidad, consistencia u olor de las secreciones vaginales habituales. Es uno de los motivos de consulta ginecológica más frecuentes y casi siempre indica una infección (vaginal o de transmisión sexual) que requiere identificación del agente causante para tratarse correctamente.",
    causes: [
      "Cervicovaginitis infecciosa",
      "Infección de transmisión sexual",
      "Infección por VPH con cambios cervicales",
      "Desequilibrio de la flora vaginal",
    ],
    alarmSigns: [
      "Flujo con sangre fuera del periodo menstrual",
      "Flujo con dolor pélvico intenso y fiebre",
      "Flujo con mal olor muy marcado que no mejora",
    ],
    whyConsult:
      "Un cambio sostenido en el flujo vaginal casi siempre tiene una causa infecciosa identificable; la revisión y el estudio dirigido permiten dar el tratamiento correcto en lugar de aliviar solo el síntoma de forma temporal.",
    faqs: [
      {
        question: "¿Todo flujo vaginal es anormal?",
        answer:
          "No. Un flujo claro o blanquecino, sin olor fuerte, que cambia ligeramente con el ciclo menstrual es normal. Se considera anormal cuando cambia de color, aumenta mucho en cantidad, tiene mal olor o se acompaña de picor o ardor.",
      },
      {
        question: "¿El flujo anormal siempre significa una infección de transmisión sexual?",
        answer:
          "No siempre. Puede deberse a una infección vaginal no relacionada con contacto sexual (como candidiasis), pero también puede ser señal de una ITS — por eso el estudio en consulta es la única forma confiable de saber la causa exacta.",
      },
    ],
    relatedConditions: ["d-its-ets", "d-cervicovaginitis", "d-vph"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/flujo-vaginal-anormal.jpg",
    seo: {
      title: "Flujo Vaginal Anormal | Ginecóloga en Tuxtla Gutiérrez",
      description:
        "Cambios en el flujo vaginal, color u olor inusual? Consulta con la Dra. Martha Llamas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["flujo vaginal anormal Tuxtla Gutiérrez", "flujo con mal olor ginecóloga", "flujo de color Chiapas"],
    },
  },
  {
    id: "sy-ausencia-menstruacion",
    slug: "ausencia-de-menstruacion",
    name: "Ausencia de Menstruación",
    colloquialNames: ["amenorrea", "falta la regla"],
    description:
      "La ausencia de menstruación (amenorrea) es la falta del periodo menstrual en una mujer en edad reproductiva, ya sea que nunca se haya presentado o que se interrumpa tras haber sido regular. Fuera del embarazo, sus causas más frecuentes incluyen el síndrome de ovario poliquístico y otros desequilibrios hormonales que se estudian en consulta.",
    causes: [
      "Embarazo (siempre se descarta primero)",
      "Síndrome de ovario poliquístico",
      "Estrés físico o emocional intenso",
      "Pérdida de peso marcada o ejercicio excesivo",
    ],
    alarmSigns: [
      "Ausencia de menstruación con dolor pélvico intenso",
      "Ausencia de menstruación junto con pérdida de peso marcada no buscada",
      "Sangrado inesperado después de varios meses sin periodo",
    ],
    whyConsult:
      "La ausencia de menstruación, descartado el embarazo, puede ser la señal más visible de un síndrome de ovario poliquístico u otro desequilibrio hormonal — identificarlo a tiempo es clave si la paciente busca un embarazo a futuro.",
    faqs: [
      {
        question: "¿Qué es lo primero que se revisa ante la falta de periodo?",
        answer:
          "Siempre se descarta primero un embarazo. Si no es el caso, se evalúan otras causas hormonales, como el síndrome de ovario poliquístico, el estrés o cambios bruscos de peso, con estudio dirigido en consulta.",
      },
      {
        question: "¿Cuánto tiempo sin periodo ya amerita consulta?",
        answer:
          "Tres meses consecutivos sin menstruación en una mujer que normalmente tenía ciclos regulares amerita valoración ginecológica para identificar la causa.",
      },
    ],
    relatedConditions: ["d-sop", "d-infertilidad-baja-complejidad"],
    lastReviewed: "2026-10-29",
    image: "/sintomas/ausencia-menstruacion.jpg",
    seo: {
      title: "Ausencia de Menstruación (Amenorrea) | Tuxtla Gutiérrez",
      description:
        "Falta tu periodo menstrual? Consulta con la Dra. Martha Llamas, ginecóloga en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["ausencia de menstruación Tuxtla Gutiérrez", "amenorrea ginecóloga", "falta la regla Chiapas"],
    },
  },
];
