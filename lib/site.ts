export const SITE = {
  name: "Abogados de Sucesiones en La Plata",
  shortName: "Sucesiones La Plata",
  url: "https://www.sucesioneslaplata.com",
  email: "yorlanoabogados@gmail.com",
  phoneDisplay: "221 202-3887",
  phoneInternational: "+54 9 221 202-3887",
  whatsappNumber: "5492212023887",
  location: "La Plata, Provincia de Buenos Aires",
  updated: "2026-07-29",
};

export const defaultWhatsappMessage =
  "Hola. Quisiera hacer una consulta por una sucesión en la Provincia de Buenos Aires.";

export function whatsappUrl(message = defaultWhatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SeoPage = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  answer: string;
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export type OfficialSource = {
  name: string;
  detail: string;
  url: string;
};

export type GeoContent = {
  keyPoints: string[];
  scenario: string;
  questions: string[];
  sources: OfficialSource[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "declaratoria-de-herederos",
    eyebrow: "Declaratoria de herederos",
    title: "Declaratoria de herederos en la Provincia de Buenos Aires",
    metaTitle: "Declaratoria de herederos en La Plata y PBA",
    description:
      "Qué es la declaratoria de herederos, para qué sirve y cómo se tramita en la Provincia de Buenos Aires. Asesoramiento sucesorio en La Plata y PBA.",
    intro:
      "La declaratoria de herederos es la resolución judicial que reconoce quiénes tienen vocación hereditaria cuando no existe un testamento válido que resuelva la sucesión.",
    answer:
      "Permite acreditar judicialmente la calidad de heredero y avanzar con los bienes de la herencia. No reemplaza por sí sola todos los actos posteriores: según el caso, todavía puede ser necesario denunciar bienes, cumplir cargas, acordar una partición u ordenar inscripciones.",
    sections: [
      {
        title: "¿Para qué sirve?",
        paragraphs: [
          "La declaratoria identifica a quienes son reconocidos como herederos dentro del expediente sucesorio. Es un paso central para disponer jurídicamente de inmuebles, automotores, cuentas y otros bienes registrables que integran la herencia.",
          "Su alcance debe analizarse junto con la composición del patrimonio y el objetivo de los herederos: conservar, adjudicar, vender o regularizar los bienes.",
        ],
      },
      {
        title: "Documentación que suele revisarse",
        bullets: [
          "Partida de defunción de la persona fallecida.",
          "Partidas que acrediten el vínculo de quienes se presentan.",
          "Documento de identidad de los interesados.",
          "Información sobre el último domicilio del causante.",
          "Datos y títulos de los bienes conocidos.",
        ],
      },
      {
        title: "Después de la declaratoria",
        paragraphs: [
          "El trámite puede continuar con la determinación del acervo, informes registrales, valuaciones, pago de las cargas correspondientes, partición o adjudicación e inscripción. Los requisitos concretos dependen del bien y del juzgado interviniente.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿La declaratoria convierte automáticamente los bienes a nombre de los herederos?",
        answer:
          "No necesariamente. Reconoce la calidad de heredero, pero los bienes registrables suelen requerir una orden e inscripción posterior.",
      },
      {
        question: "¿Puede ampliarse una declaratoria?",
        answer:
          "Sí. Si aparece una persona con derecho hereditario, puede solicitarse una ampliación cuando corresponda.",
      },
      {
        question: "¿Todos los herederos deben usar el mismo abogado?",
        answer:
          "No es obligatorio. Cuando existe acuerdo puede resultar más simple coordinar una estrategia común; si hay intereses contrapuestos, cada parte puede contar con asesoramiento propio.",
      },
    ],
    related: ["documentos-para-iniciar-una-sucesion", "inscripcion-de-bienes-heredados", "sucesion-sin-testamento"],
  },
  {
    slug: "sucesion-sin-testamento",
    eyebrow: "Sucesión intestada",
    title: "Sucesión sin testamento en La Plata y Provincia de Buenos Aires",
    metaTitle: "Sucesión sin testamento en La Plata | Guía clara",
    description:
      "Cómo iniciar una sucesión sin testamento en La Plata y la Provincia de Buenos Aires: herederos, documentación, etapas y próximos pasos.",
    intro:
      "Cuando una persona fallece sin testamento, la ley determina quiénes son llamados a heredar. El proceso judicial permite acreditar esos vínculos y ordenar la transmisión de los bienes.",
    answer:
      "La falta de testamento no impide iniciar la sucesión. El primer análisis consiste en identificar el último domicilio del causante, los vínculos familiares, los posibles herederos y el patrimonio conocido.",
    sections: [
      {
        title: "Primeras decisiones",
        bullets: [
          "Identificar a todas las personas con posible derecho hereditario.",
          "Reunir partidas que acrediten nacimiento, matrimonio y defunción.",
          "Localizar títulos e información sobre inmuebles, vehículos y cuentas.",
          "Definir qué se busca hacer con cada bien.",
        ],
      },
      {
        title: "Orden legal y situación familiar",
        paragraphs: [
          "La respuesta depende de los vínculos existentes al momento del fallecimiento. Hijos, cónyuge, ascendientes y, en ciertos supuestos, parientes colaterales pueden ocupar posiciones diferentes. No conviene asumir porcentajes sin reconstruir primero la situación familiar completa.",
        ],
      },
      {
        title: "Cuando existe acuerdo",
        paragraphs: [
          "El consenso puede facilitar la coordinación del expediente y las decisiones sobre los bienes. Aun así, conviene dejar claros desde el comienzo el alcance del trabajo, los gastos, la documentación pendiente y el destino previsto para el patrimonio.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se puede iniciar si no están todos los bienes identificados?",
        answer:
          "En muchos casos sí. La composición del patrimonio puede completarse durante el trámite, aunque conocerla desde el inicio permite planificar mejor.",
      },
      {
        question: "¿Qué pasa si un heredero no quiere participar?",
        answer:
          "Su falta de iniciativa no siempre impide que otra persona legitimada promueva el proceso. La estrategia depende de la situación y de las notificaciones necesarias.",
      },
      {
        question: "¿Dónde se inicia?",
        answer:
          "Como regla, interviene el juez del último domicilio de la persona fallecida, con las excepciones previstas por la legislación aplicable.",
      },
    ],
    related: ["declaratoria-de-herederos", "bienes-propios-y-gananciales-en-una-sucesion", "conflictos-entre-herederos"],
  },
  {
    slug: "sucesion-con-testamento",
    eyebrow: "Sucesión testamentaria",
    title: "Sucesión con testamento en la Provincia de Buenos Aires",
    metaTitle: "Sucesión con testamento en La Plata y PBA",
    description:
      "Asesoramiento para sucesiones testamentarias en La Plata y Provincia de Buenos Aires: validez, presentación, herederos y bienes.",
    intro:
      "La existencia de un testamento cambia parte del recorrido, pero no elimina la necesidad del proceso sucesorio ni el control judicial de su validez y alcance.",
    answer:
      "El testamento debe presentarse y analizarse dentro del proceso correspondiente. Es necesario revisar su forma, vigencia, contenido y compatibilidad con los derechos que la ley reserva a determinados herederos.",
    sections: [
      {
        title: "Qué conviene revisar",
        bullets: [
          "Tipo de testamento y cumplimiento de sus formalidades.",
          "Existencia de disposiciones posteriores o revocaciones.",
          "Identidad de herederos y legatarios mencionados.",
          "Posibles derechos de herederos legitimarios.",
          "Bienes alcanzados y modo previsto de distribución.",
        ],
      },
      {
        title: "Testamento y herencia no son lo mismo",
        paragraphs: [
          "El documento expresa la voluntad del causante dentro de los límites legales. El proceso sucesorio permite verificarla, reconocer a quienes corresponda y ordenar la transmisión e inscripción del patrimonio.",
        ],
      },
      {
        title: "Posibles conflictos",
        paragraphs: [
          "Las diferencias pueden referirse a la autenticidad, la capacidad al momento de testar, la interpretación de una cláusula o la afectación de porciones protegidas. Una revisión temprana ayuda a separar los desacuerdos jurídicos de los familiares.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un testamento puede dejar todos los bienes a cualquier persona?",
        answer:
          "No siempre. Si existen herederos con una porción legítima protegida, la libertad de disponer puede estar limitada.",
      },
      {
        question: "¿Alcanza con tener el testamento?",
        answer:
          "No. Habitualmente debe ser presentado y aprobado en el marco del proceso sucesorio antes de avanzar con la transmisión registral.",
      },
      {
        question: "¿Qué ocurre si aparecen dos testamentos?",
        answer:
          "Debe determinarse su validez, fecha y compatibilidad. Un testamento posterior puede revocar total o parcialmente uno anterior.",
      },
    ],
    related: ["declaratoria-de-herederos", "inscripcion-de-bienes-heredados", "conflictos-entre-herederos"],
  },
  {
    slug: "tracto-abreviado",
    eyebrow: "Venta de bienes heredados",
    title: "Tracto abreviado en una sucesión: cuándo puede utilizarse",
    metaTitle: "Tracto abreviado en sucesiones | La Plata y PBA",
    description:
      "Qué es el tracto abreviado en una sucesión, cuándo puede utilizarse para vender un inmueble heredado y qué debe revisarse.",
    intro:
      "El tracto abreviado puede permitir que un inmueble pase del titular fallecido directamente al comprador, sin una inscripción intermedia a nombre de los herederos.",
    answer:
      "No evita la sucesión. Requiere que el expediente alcance el estado necesario, que exista acuerdo suficiente y que se cumplan las exigencias judiciales, notariales, registrales, fiscales y profesionales aplicables.",
    sections: [
      {
        title: "Cuándo puede ser útil",
        paragraphs: [
          "Suele evaluarse cuando los herederos ya decidieron vender un inmueble y no necesitan inscribirlo previamente a su nombre. Puede reducir pasos registrales, pero exige coordinar con precisión el expediente, la escribanía y la operación.",
        ],
      },
      {
        title: "Aspectos que deben estar ordenados",
        bullets: [
          "Declaratoria de herederos o aprobación del testamento.",
          "Título y estado registral del inmueble.",
          "Conformidad de quienes deban intervenir.",
          "Cargas, valuaciones, honorarios y aportes.",
          "Orden judicial y documentación para la escritura.",
        ],
      },
      {
        title: "La venta no debería improvisarse",
        paragraphs: [
          "Antes de reservar, prometer o fijar plazos con un comprador, conviene verificar la situación del expediente. Un compromiso comercial asumido demasiado pronto puede chocar con tiempos y requisitos todavía pendientes.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El tracto abreviado evita abrir la sucesión?",
        answer: "No. Es una modalidad de inscripción vinculada a una sucesión que debe tramitarse.",
      },
      {
        question: "¿Puede usarse si hay desacuerdo entre herederos?",
        answer:
          "La operación requiere las conformidades y autorizaciones que correspondan. Un conflicto puede impedir o demorar la venta.",
      },
      {
        question: "¿Sirve solamente para inmuebles?",
        answer:
          "La expresión se usa principalmente en materia registral inmobiliaria. Otros bienes tienen procedimientos propios.",
      },
    ],
    related: ["vender-inmueble-en-una-sucesion", "inscripcion-de-bienes-heredados", "declaratoria-de-herederos"],
  },
  {
    slug: "inscripcion-de-bienes-heredados",
    eyebrow: "Etapa registral",
    title: "Inscripción de bienes heredados en la Provincia de Buenos Aires",
    metaTitle: "Inscripción de bienes heredados | La Plata y PBA",
    description:
      "Cómo avanzar con la inscripción de inmuebles, automotores y otros bienes después de la declaratoria de herederos.",
    intro:
      "Obtener la declaratoria no siempre completa la regularización del patrimonio. Los bienes registrables requieren actos posteriores para que la transmisión resulte oponible y operativa.",
    answer:
      "La documentación cambia según se trate de un inmueble, automotor, participación societaria, cuenta u otro activo. El expediente debe coordinarse con el registro y, en ciertos casos, con una escribanía u otras instituciones.",
    sections: [
      {
        title: "Inmuebles",
        paragraphs: [
          "Suelen requerirse informes vigentes, título, valuación, declaración patrimonial, cumplimiento de cargas, orden judicial y piezas aptas para el Registro de la Propiedad. El juzgado puede establecer recaudos específicos.",
        ],
      },
      {
        title: "Automotores y otros activos",
        paragraphs: [
          "Los plazos de validez de informes y los formularios no son idénticos a los inmobiliarios. También deben revisarse deudas, titularidad, medidas cautelares y la documentación propia del registro correspondiente.",
        ],
      },
      {
        title: "Inscribir, adjudicar o vender",
        bullets: [
          "Inscripción conjunta a nombre de los herederos.",
          "Adjudicación de bienes determinados mediante partición.",
          "Venta mediante tracto abreviado cuando resulte viable.",
          "Regularización previa de observaciones registrales.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Es obligatorio inscribir inmediatamente?",
        answer:
          "Depende del objetivo y del tipo de bien. Postergar indefinidamente puede generar dificultades prácticas, documentales y familiares.",
      },
      {
        question: "¿Puede inscribirse un bien a nombre de un solo heredero?",
        answer:
          "Puede resultar posible mediante una partición o adjudicación válida, con los acuerdos, compensaciones y recaudos correspondientes.",
      },
      {
        question: "¿Los informes registrales vencen?",
        answer:
          "Sí. Muchos certificados e informes tienen vigencia limitada, por lo que su solicitud debe coordinarse con el momento procesal adecuado.",
      },
    ],
    related: ["sucesion-de-automotores-en-provincia-de-buenos-aires", "vender-inmueble-en-una-sucesion", "tracto-abreviado"],
  },
  {
    slug: "conflictos-entre-herederos",
    eyebrow: "Sucesiones complejas",
    title: "Conflictos entre herederos: cómo ordenar el problema",
    metaTitle: "Conflictos entre herederos | Sucesiones en PBA",
    description:
      "Orientación jurídica ante conflictos entre herederos por bienes, administración, ocupación, venta o distribución de una herencia.",
    intro:
      "Un desacuerdo familiar puede paralizar decisiones importantes, pero no todos los conflictos requieren la misma respuesta ni tienen que discutirse al mismo tiempo.",
    answer:
      "Lo primero es identificar el punto jurídico concreto: quiénes heredan, qué bienes existen, quién los administra, qué uso se les da, si hay deudas y cuál es la decisión que no logra acordarse.",
    sections: [
      {
        title: "Conflictos frecuentes",
        bullets: [
          "Un heredero ocupa o usa un bien en forma exclusiva.",
          "No hay acuerdo para vender, alquilar o adjudicar.",
          "Existen dudas sobre bienes, dinero o movimientos previos.",
          "Se cuestiona un testamento, una donación o una cesión.",
          "Hay gastos, deudas o mejoras pagadas por una sola persona.",
        ],
      },
      {
        title: "Separar urgencia de estrategia",
        paragraphs: [
          "Puede ser necesario preservar documentación, pedir informes o proteger un bien antes de discutir la distribución final. Distinguir esas medidas evita que el conflicto crezca por falta de información.",
        ],
      },
      {
        title: "Acuerdo y proceso judicial",
        paragraphs: [
          "La negociación es útil cuando protege los intereses y deja obligaciones claras. Si no existe una base mínima, el expediente ofrece herramientas para impulsar el proceso, pedir rendiciones, discutir derechos y promover la partición.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un heredero puede vender solo un bien de la sucesión?",
        answer:
          "No puede disponer por sí solo de un bien común como si fuera su único titular. Deben analizarse el estado del proceso y los derechos de los demás.",
      },
      {
        question: "¿La oposición de una persona bloquea para siempre la sucesión?",
        answer:
          "No necesariamente. Existen vías para continuar el proceso y resolver desacuerdos, aunque el conflicto puede volverlo más complejo.",
      },
      {
        question: "¿Conviene enviar una intimación de inmediato?",
        answer:
          "Depende del objetivo, la urgencia y la prueba disponible. Antes de formalizar una posición conviene definir qué se busca obtener y qué consecuencias puede producir.",
      },
    ],
    related: ["heredero-ocupa-inmueble-sucesion", "sucesion-sin-testamento", "declaratoria-de-herederos"],
  },
  {
    slug: "documentos-para-iniciar-una-sucesion",
    eyebrow: "Guía práctica",
    title: "Documentos para iniciar una sucesión en la Provincia de Buenos Aires",
    metaTitle: "Documentos para iniciar una sucesión en PBA",
    description:
      "Lista orientativa de documentos para iniciar una sucesión en La Plata y Provincia de Buenos Aires. Partidas, bienes y datos necesarios.",
    intro:
      "Reunir la información correcta desde el comienzo evita búsquedas duplicadas y permite detectar faltantes antes de presentar el expediente.",
    answer:
      "La base suele incluir la partida de defunción, las partidas que acreditan los vínculos, documentos de los interesados, información del último domicilio y datos de los bienes. La lista final depende de la familia y del patrimonio.",
    sections: [
      {
        title: "Documentación personal y familiar",
        bullets: [
          "Partida de defunción.",
          "Partidas de nacimiento de descendientes.",
          "Partida de matrimonio y documentación vinculada al estado civil.",
          "Documentos de identidad de quienes se presentan.",
          "Testamento, si existe o se conoce.",
        ],
      },
      {
        title: "Información patrimonial",
        bullets: [
          "Escrituras, datos catastrales o matrículas de inmuebles.",
          "Títulos y datos de dominio de automotores.",
          "Información de cuentas, inversiones o participaciones societarias.",
          "Créditos, deudas y gastos vinculados al patrimonio.",
          "Donaciones, cesiones o acuerdos anteriores relevantes.",
        ],
      },
      {
        title: "Si falta un documento",
        paragraphs: [
          "No siempre es necesario tener todo para realizar una primera evaluación. Conviene identificar qué falta, dónde puede obtenerse y si la ausencia impide iniciar o solamente condiciona una etapa posterior.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Sirven fotos o copias digitales?",
        answer:
          "Son útiles para una primera revisión. Para el expediente puede ser necesario obtener partidas actualizadas, testimonios o copias con requisitos específicos.",
      },
      {
        question: "¿Hay que conocer todos los bienes?",
        answer:
          "No siempre para iniciar, pero la búsqueda y denuncia patrimonial son esenciales para completar el trámite.",
      },
      {
        question: "¿Qué pasa si las partidas tienen diferencias de nombres?",
        answer:
          "Las discrepancias deben revisarse. Según su entidad, pueden requerir documentación adicional o una rectificación.",
      },
    ],
    related: ["declaratoria-de-herederos", "sucesion-sin-testamento", "costo-de-una-sucesion-en-provincia-de-buenos-aires"],
  },
  {
    slug: "costo-de-una-sucesion-en-provincia-de-buenos-aires",
    eyebrow: "Costos y honorarios",
    title: "¿Cuánto cuesta una sucesión en la Provincia de Buenos Aires?",
    metaTitle: "Costo de una sucesión en PBA",
    description:
      "Qué conceptos integran el costo de una sucesión en PBA: tasa de justicia, informes, aportes, inscripción y honorarios profesionales.",
    intro:
      "No existe una cifra única aplicable a todas las sucesiones. El costo depende del valor y tipo de bienes, las etapas necesarias, la existencia de conflictos y la modalidad de trabajo profesional.",
    answer:
      "Para estimar con seriedad hay que separar honorarios, tasa de justicia, sobretasa, informes, valuaciones, publicaciones, aportes, gastos registrales y, cuando corresponda, intervención notarial.",
    sections: [
      {
        title: "Conceptos que pueden integrar el presupuesto",
        bullets: [
          "Honorarios profesionales y aportes previsionales.",
          "Tasa de justicia y demás cargas del expediente.",
          "Partidas, informes, certificados y publicaciones.",
          "Valuaciones y documentación patrimonial.",
          "Gastos de inscripción o escritura.",
        ],
      },
      {
        title: "El patrimonio modifica la estimación",
        paragraphs: [
          "No tiene el mismo recorrido una sucesión sin bienes registrables que otra con varios inmuebles, automotores, sociedades o activos en distintas jurisdicciones. Tampoco es igual una presentación acordada que un proceso con controversias.",
        ],
      },
      {
        title: "Qué pedir antes de contratar",
        paragraphs: [
          "Conviene solicitar una explicación del alcance: qué etapas comprende el trabajo, qué gastos están incluidos, cuáles dependen de terceros y cómo se tratarán las actuaciones adicionales. La Ley 14.967 regula los honorarios profesionales en la Provincia.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puede darse un presupuesto sin conocer los bienes?",
        answer:
          "Solo de manera preliminar. Para una estimación responsable es necesario conocer el patrimonio y el objetivo del trámite.",
      },
      {
        question: "¿La tasa de justicia es lo mismo que los honorarios?",
        answer:
          "No. La tasa es una carga judicial; los honorarios retribuyen el trabajo profesional.",
      },
      {
        question: "¿Todos los gastos se pagan al iniciar?",
        answer:
          "No necesariamente. Distintos conceptos aparecen en diferentes etapas, por lo que conviene contar con un esquema de trabajo claro.",
      },
    ],
    related: ["documentos-para-iniciar-una-sucesion", "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires", "inscripcion-de-bienes-heredados"],
  },
  {
    slug: "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires",
    eyebrow: "Tiempos del trámite",
    title: "¿Cuánto tarda una sucesión en la Provincia de Buenos Aires?",
    metaTitle: "Cuánto tarda una sucesión en PBA",
    description:
      "Factores que influyen en la duración de una sucesión en PBA: documentación, juzgado, herederos, bienes, conflictos e inscripción.",
    intro:
      "No hay un plazo universal. La duración depende de la documentación, el juzgado competente, las notificaciones, el patrimonio, el acuerdo entre interesados y el objetivo final.",
    answer:
      "Una sucesión no termina necesariamente con la declaratoria de herederos. Si se busca vender, adjudicar o inscribir bienes, deben considerarse también las etapas posteriores.",
    sections: [
      {
        title: "Qué suele influir",
        bullets: [
          "Partidas completas y sin inconsistencias.",
          "Identificación y notificación de interesados.",
          "Existencia de testamento o conflictos.",
          "Cantidad y tipo de bienes.",
          "Informes, valuaciones y requisitos registrales.",
          "Tiempos propios del organismo judicial interviniente.",
        ],
      },
      {
        title: "La pregunta correcta",
        paragraphs: [
          "Más que preguntar únicamente cuándo saldrá la declaratoria, conviene definir qué resultado se necesita: acreditar herederos, cobrar fondos, vender un inmueble, adjudicar bienes o completar una inscripción.",
        ],
      },
      {
        title: "Cómo evitar demoras evitables",
        paragraphs: [
          "Una revisión inicial de vínculos, documentos y patrimonio permite ordenar pedidos y detectar problemas antes de que lleguen al expediente. No elimina los tiempos institucionales, pero reduce interrupciones previsibles.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se puede garantizar una fecha de finalización?",
        answer:
          "No resulta responsable garantizarla. Intervienen organismos, terceros y circunstancias que no dependen únicamente del profesional.",
      },
      {
        question: "¿Un conflicto siempre paraliza el expediente?",
        answer:
          "Puede complejizarlo, pero existen actuaciones que pueden impulsarse mientras se define la controversia.",
      },
      {
        question: "¿Tener todos los documentos acelera el trámite?",
        answer:
          "Ayuda a evitar observaciones y pedidos posteriores, aunque no controla todos los factores que inciden en la duración.",
      },
    ],
    related: ["documentos-para-iniciar-una-sucesion", "declaratoria-de-herederos", "conflictos-entre-herederos"],
  },
  {
    slug: "vender-inmueble-en-una-sucesion",
    eyebrow: "Venta de inmueble heredado",
    title: "Cómo vender un inmueble dentro de una sucesión",
    metaTitle: "Vender un inmueble en una sucesión",
    description:
      "Qué debe revisarse para vender un inmueble dentro de una sucesión en Provincia de Buenos Aires: declaratoria, acuerdo, título y tracto abreviado.",
    intro:
      "La venta de un inmueble heredado exige coordinar el expediente sucesorio, la situación registral y la operación comercial. Ofrecerlo antes de conocer esos elementos puede generar compromisos difíciles de cumplir.",
    answer:
      "Primero debe identificarse quiénes pueden disponer, en qué estado está la sucesión y qué documentación tiene el inmueble. Según el caso, puede inscribirse a nombre de los herederos, adjudicarse o transmitirse al comprador mediante tracto abreviado.",
    sections: [
      {
        title: "Qué revisar antes de ofrecer el inmueble",
        bullets: [
          "Declaratoria de herederos o aprobación judicial del testamento.",
          "Título, matrícula, nomenclatura catastral y estado registral.",
          "Conformidad de las personas que deben intervenir.",
          "Deudas, medidas cautelares, ocupación y estado material.",
          "Cargas del expediente y documentación requerida para escriturar.",
        ],
      },
      {
        title: "Inscripción previa o tracto abreviado",
        paragraphs: [
          "Una alternativa es completar primero la inscripción hereditaria y vender después. Otra es evaluar el tracto abreviado, que permite relacionar registralmente la transmisión hereditaria con la venta al tercero cuando el expediente y la documentación se encuentran en condiciones.",
          "La elección no depende solamente de una preferencia comercial: deben coordinarse el juzgado, la escribanía, el Registro de la Propiedad y las obligaciones aplicables al caso.",
        ],
      },
      {
        title: "Reservas, boletos y plazos",
        paragraphs: [
          "Antes de recibir una reserva o asumir una fecha de escritura conviene confirmar qué actuaciones faltan y quiénes deben firmar. El contrato comercial no reemplaza las conformidades hereditarias ni las órdenes necesarias para transmitir el dominio.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puede venderse antes de obtener la declaratoria de herederos?",
        answer:
          "La operación definitiva requiere que la legitimación sucesoria y el expediente alcancen el estado necesario. Antes de comprometer la venta debe revisarse qué actos son jurídicamente posibles.",
      },
      {
        question: "¿Qué ocurre si un heredero no quiere vender?",
        answer:
          "La venta del inmueble completo requiere las conformidades correspondientes. La falta de acuerdo puede llevar a negociar una adjudicación, una cesión o promover la partición, según el caso.",
      },
      {
        question: "¿El tracto abreviado evita inscribir la sucesión?",
        answer:
          "Evita una inscripción intermedia a nombre de los herederos cuando resulta procedente, pero no elimina el proceso sucesorio ni los controles judiciales, notariales y registrales.",
      },
    ],
    related: ["tracto-abreviado", "inscripcion-de-bienes-heredados", "heredero-ocupa-inmueble-sucesion"],
  },
  {
    slug: "heredero-ocupa-inmueble-sucesion",
    eyebrow: "Ocupación del inmueble",
    title: "Qué ocurre si un heredero ocupa el inmueble de la sucesión",
    metaTitle: "Heredero ocupa un inmueble de la sucesión",
    description:
      "Qué puede hacerse cuando un heredero ocupa en forma exclusiva un inmueble de la sucesión: uso, compensación, gastos, acuerdo y partición.",
    intro:
      "La ocupación exclusiva suele mezclar vivienda, administración, gastos y conflicto familiar. Para elegir una medida útil hay que separar esos problemas y precisar desde cuándo se conoce o cuestiona el uso.",
    answer:
      "Durante la indivisión, un heredero puede usar el bien en la medida compatible con los derechos de los demás. Si el uso es privativo, el Código Civil y Comercial prevé una indemnización desde que es requerida, salvo acuerdo en contrario; si no hay consenso, el juez puede regular provisionalmente el uso.",
    sections: [
      {
        title: "Uso compatible y uso exclusivo",
        paragraphs: [
          "Vivir en el inmueble no convierte a quien lo ocupa en único dueño ni extingue los derechos de los demás herederos. La situación cambia si el uso excluye a los otros, impide administrar el bien o frustra una decisión sobre alquiler, venta o partición.",
        ],
      },
      {
        title: "Qué conviene documentar",
        bullets: [
          "Quién ocupa el inmueble y desde cuándo.",
          "Si existió autorización, tolerancia o un acuerdo familiar.",
          "Qué pedidos se formularon y cómo fueron comunicados.",
          "Impuestos, servicios, reparaciones y mejoras afrontadas.",
          "Existencia de frutos, alquileres o aprovechamiento económico.",
        ],
      },
      {
        title: "Compensación, gastos y solución final",
        paragraphs: [
          "La eventual compensación por uso, los reintegros por gastos y la distribución final son cuestiones relacionadas pero diferentes. Pueden abordarse mediante un acuerdo documentado o dentro del proceso sucesorio.",
          "Si la convivencia patrimonial ya no es sostenible, también debe evaluarse la partición, adjudicación o venta del inmueble.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puede desalojarse automáticamente al heredero que ocupa?",
        answer:
          "No existe una respuesta automática. Deben analizarse la indivisión hereditaria, el título de la ocupación, los derechos concurrentes y la medida procesal adecuada.",
      },
      {
        question: "¿La compensación por uso nace desde el fallecimiento?",
        answer:
          "El artículo 2328 vincula la indemnización por uso privativo con el momento en que es requerida, excepto que exista un pacto diferente. La forma y alcance del reclamo deben revisarse en cada caso.",
      },
      {
        question: "¿Pagar impuestos otorga una porción mayor?",
        answer:
          "No por sí solo. Los gastos necesarios o mejoras pueden generar cuestiones de reintegro o recompensa, pero no modifican automáticamente la calidad ni la porción hereditaria.",
      },
    ],
    related: ["conflictos-entre-herederos", "vender-inmueble-en-una-sucesion", "bienes-propios-y-gananciales-en-una-sucesion"],
  },
  {
    slug: "bienes-propios-y-gananciales-en-una-sucesion",
    eyebrow: "Patrimonio matrimonial",
    title: "Bienes propios y gananciales en una sucesión",
    metaTitle: "Bienes propios y gananciales en una sucesión",
    description:
      "Cómo distinguir bienes propios y gananciales al tramitar una sucesión y por qué esa clasificación modifica el patrimonio y los derechos del cónyuge.",
    intro:
      "Cuando la persona fallecida estaba casada, no alcanza con mirar a nombre de quién figura cada bien. Primero debe determinarse el régimen matrimonial y el carácter propio o ganancial del patrimonio.",
    answer:
      "La liquidación del régimen matrimonial y la herencia son operaciones diferentes. Como regla, los bienes anteriores al matrimonio y los recibidos por herencia o donación son propios; los adquiridos onerosamente durante la comunidad suelen ser gananciales, con excepciones, recompensas y exigencias de prueba.",
    sections: [
      {
        title: "Bienes que pueden ser propios",
        bullets: [
          "Los que una persona ya tenía al comenzar la comunidad.",
          "Los recibidos por herencia, legado o donación.",
          "Los adquiridos mediante reinversión acreditada de bienes propios.",
          "Los demás supuestos contemplados por el artículo 464 del Código Civil y Comercial.",
        ],
      },
      {
        title: "Bienes que pueden ser gananciales",
        paragraphs: [
          "En el régimen de comunidad, suelen ser gananciales los bienes adquiridos a título oneroso durante su vigencia y los ingresos o frutos comprendidos por la ley. La fecha de adquisición, el origen de los fondos y las constancias del título pueden modificar la respuesta.",
          "También puede haber recompensas entre la comunidad y los patrimonios propios cuando fondos de una masa beneficiaron a la otra.",
        ],
      },
      {
        title: "Por qué cambia la distribución",
        paragraphs: [
          "Al fallecer uno de los cónyuges, primero debe identificarse qué corresponde por la liquidación de la comunidad y qué integra efectivamente la herencia. Recién después se aplican las reglas sucesorias según concurran descendientes, ascendientes, cónyuge u otros llamados.",
          "Cuando el cónyuge concurre con descendientes, participa como un hijo respecto del acervo alcanzado por el primer párrafo del artículo 2433, pero no hereda sobre la parte ganancial que correspondía al cónyuge fallecido; conserva, en cambio, los derechos derivados de la liquidación de la comunidad.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un bien a nombre del fallecido siempre es íntegramente hereditario?",
        answer:
          "No. La titularidad registral es un dato importante, pero también deben revisarse el régimen matrimonial, la fecha y causa de adquisición y el origen de los fondos.",
      },
      {
        question: "¿Lo recibido por herencia durante el matrimonio es ganancial?",
        answer:
          "Como regla, es propio del cónyuge que lo recibe, sin perjuicio de recompensas si la comunidad afrontó cargas o inversiones que legalmente deban computarse.",
      },
      {
        question: "¿El cónyuge siempre recibe la mitad más una parte hereditaria?",
        answer:
          "No puede aplicarse esa fórmula sin conocer los bienes y quiénes concurren. La liquidación de la comunidad y la vocación hereditaria responden a reglas diferentes.",
      },
    ],
    related: ["sucesion-sin-testamento", "declaratoria-de-herederos", "heredero-ocupa-inmueble-sucesion"],
  },
  {
    slug: "sucesion-de-automotores-en-provincia-de-buenos-aires",
    eyebrow: "Automotores heredados",
    title: "Sucesión de automotores en la Provincia de Buenos Aires",
    metaTitle: "Sucesión de automotores en PBA",
    description:
      "Cómo inscribir, adjudicar o vender un automotor incluido en una sucesión en Provincia de Buenos Aires y qué documentación debe revisarse.",
    intro:
      "Un automotor integra la herencia, pero su situación no se resuelve solamente con denunciarlo en el expediente. La orden judicial debe coordinarse con las exigencias del Registro Seccional correspondiente.",
    answer:
      "Según el objetivo, el vehículo puede inscribirse a nombre de los herederos, adjudicarse a una persona o transferirse a un tercero si el expediente y la orden judicial lo permiten. Antes deben revisarse dominio, documentación, deudas, prendas, cautelares y radicación.",
    sections: [
      {
        title: "Información que conviene obtener",
        bullets: [
          "Informe de dominio y radicación registral.",
          "Título, cédula y datos identificatorios del automotor.",
          "Deudas de patentes e infracciones que deban regularizarse.",
          "Prendas, embargos, inhibiciones u otras restricciones.",
          "Estado del vehículo, posesión actual y documentación para circular.",
        ],
      },
      {
        title: "Inscribir, adjudicar o vender",
        paragraphs: [
          "La comunicación judicial debe identificar el automotor y a las personas a cuyo favor se ordena la inscripción, además de incorporar las constancias sucesorias pertinentes. Si existe una partición o adjudicación válida, la inscripción puede ordenarse directamente a favor de su beneficiario.",
          "Las reglas registrales también contemplan ventas autorizadas y ordenadas dentro del juicio sucesorio a favor de terceros, sin exigir siempre una inscripción previa a nombre de los herederos.",
        ],
      },
      {
        title: "Uso del vehículo mientras tramita la sucesión",
        paragraphs: [
          "Tener físicamente el automotor no equivale a poder transferirlo ni garantiza que la documentación para circular esté vigente. Deben revisarse la cobertura de seguro, la identificación del vehículo y las autorizaciones aplicables antes de utilizarlo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puede venderse el automotor directamente a un tercero?",
        answer:
          "Puede resultar posible cuando la venta es autorizada y ordenada en el juicio sucesorio y se cumplen los recaudos registrales. Debe coordinarse el expediente con el Registro Seccional.",
      },
      {
        question: "¿Qué pasa si se perdió el título o la cédula?",
        answer:
          "La normativa registral contempla procedimientos ante el extravío. Es necesario informarlo y cumplir los recaudos que indique el Registro para el trámite concreto.",
      },
      {
        question: "¿Un heredero puede quedarse con el vehículo?",
        answer:
          "Puede adjudicarse a uno de los herederos mediante el acuerdo o la partición correspondiente, con la orden judicial y la inscripción registral necesarias.",
      },
    ],
    related: ["inscripcion-de-bienes-heredados", "declaratoria-de-herederos", "bienes-propios-y-gananciales-en-una-sucesion"],
  },
  {
    slug: "heredero-no-quiere-firmar-sucesion",
    eyebrow: "Falta de acuerdo",
    title: "Qué hacer si un heredero no quiere firmar la sucesión",
    metaTitle: "Heredero no quiere firmar la sucesión",
    description:
      "Qué puede hacerse si un heredero no quiere firmar o participar en una sucesión en La Plata y la Provincia de Buenos Aires.",
    intro:
      "Que un heredero no quiera firmar no significa que todo el proceso quede detenido. Primero debe distinguirse qué actuación se quiere realizar y si requiere la participación conjunta.",
    answer:
      "Una persona legitimada puede promover el proceso sucesorio y pedir las notificaciones correspondientes. La declaratoria, la administración, la partición y la venta son etapas diferentes: algunas pueden avanzar sin iniciativa conjunta y otras exigen acuerdo o una decisión judicial.",
    sections: [
      {
        title: "Qué puede avanzar sin una presentación conjunta",
        paragraphs: [
          "El proceso puede ser iniciado por una persona con interés legítimo, denunciando a los demás posibles herederos para que sean citados. La falta de firma de uno de ellos no equivale a una renuncia ni elimina sus derechos.",
          "También pueden solicitarse medidas de conservación o información cuando sean necesarias para proteger el patrimonio.",
        ],
      },
      {
        title: "Actos que requieren un análisis diferente",
        bullets: [
          "Administrar bienes de la herencia o celebrar locaciones.",
          "Vender, adjudicar o partir bienes indivisos.",
          "Retirar fondos o disponer de activos registrables.",
          "Aprobar convenios que afecten la porción de cada heredero.",
        ],
      },
      {
        title: "Si la negativa pone en riesgo los bienes",
        paragraphs: [
          "El Código Civil y Comercial permite pedir medidas urgentes cuando la negativa de un coheredero pone en peligro el interés común. La respuesta debe ser proporcional al problema y dependerá de la prueba disponible y del estado del expediente.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo iniciar la sucesión sin la firma de todos?",
        answer:
          "En muchos casos sí. Una persona legitimada puede promoverla y denunciar a quienes deben ser citados. Luego se analiza qué actos requieren conformidad o intervención judicial.",
      },
      {
        question: "¿El heredero que no participa pierde su parte?",
        answer:
          "No. La falta de participación no equivale por sí sola a renunciar a la herencia ni permite excluirlo del proceso.",
      },
      {
        question: "¿Se puede vender un bien si un heredero se opone?",
        answer:
          "No debe asumirse una venta automática. Puede ser necesario resolver la administración, la partición o una autorización judicial según el bien, el motivo de la oposición y el estado del expediente.",
      },
    ],
    related: ["conflictos-entre-herederos", "sucesion-sin-testamento", "cesion-de-derechos-hereditarios"],
  },
  {
    slug: "cesion-de-derechos-hereditarios",
    eyebrow: "Cesión de herencia",
    title: "Cesión de derechos hereditarios: alcance y requisitos",
    metaTitle: "Cesión de derechos hereditarios",
    description:
      "Qué significa ceder derechos hereditarios, qué forma exige la ley y qué debe revisarse antes de una cesión en una sucesión.",
    intro:
      "La cesión permite transferir a otra persona la posición que corresponde en una herencia ya abierta. No debe confundirse con vender directamente un bien determinado.",
    answer:
      "La cesión de derechos hereditarios debe otorgarse por escritura pública. Entre las partes produce efectos desde su celebración y, frente a otros herederos, legatarios y acreedores del cedente, desde que la escritura se incorpora al expediente sucesorio.",
    sections: [
      {
        title: "Qué adquiere el cesionario",
        paragraphs: [
          "Como regla, el cesionario recibe los derechos que correspondían al cedente en la herencia, con el alcance, cargas y exclusiones previstos en el contrato y en la ley. Por eso es importante reconstruir el patrimonio y el pasivo antes de fijar condiciones.",
          "La cesión puede ser onerosa o gratuita y sus consecuencias no son idénticas en materia de garantías, impuestos y obligaciones.",
        ],
      },
      {
        title: "Cesión de herencia y bien determinado",
        paragraphs: [
          "Ceder la participación hereditaria no transfiere automáticamente el dominio de una casa o un vehículo específico. Si el acuerdo se refiere a un bien determinado, su eficacia queda sujeta a que ese bien sea atribuido al cedente en la partición.",
        ],
      },
      {
        title: "Controles antes de firmar",
        bullets: [
          "Calidad de heredero y porción que se pretende ceder.",
          "Bienes, deudas, cargas y litigios conocidos.",
          "Precio, forma de pago y distribución de gastos e impuestos.",
          "Alcance de las garantías asumidas por cada parte.",
          "Incorporación de la escritura al expediente sucesorio.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Los demás herederos deben aprobar la cesión?",
        answer:
          "La cesión de la propia participación no se confunde con disponer de bienes comunes. Deben revisarse el contrato, la porción cedida y sus efectos en el expediente antes de afirmar qué conformidades son necesarias.",
      },
      {
        question: "¿Puede cederse solamente una casa de la herencia?",
        answer:
          "La ley diferencia la cesión de herencia de la cesión sobre un bien determinado. Esta última queda sujeta a que el bien sea atribuido al cedente en la partición.",
      },
      {
        question: "¿Cesión y renuncia son lo mismo?",
        answer:
          "No. La renuncia implica apartarse de la herencia en los términos legales; la cesión transfiere derechos a otra persona y puede incluir una contraprestación.",
      },
    ],
    related: ["declaratoria-de-herederos", "vender-inmueble-en-una-sucesion", "heredero-no-quiere-firmar-sucesion"],
  },
  {
    slug: "sucesion-con-deudas",
    eyebrow: "Pasivo sucesorio",
    title: "Sucesión con deudas: qué deben revisar los herederos",
    metaTitle: "Sucesión con deudas en PBA",
    description:
      "Cómo se tratan las deudas del fallecido y las cargas de la sucesión, qué responsabilidad tienen los herederos y qué conviene verificar.",
    intro:
      "La herencia puede incluir bienes, créditos, deudas y cargas. Antes de distribuir o vender activos conviene identificar el pasivo y separar las obligaciones del causante de los gastos propios del proceso.",
    answer:
      "Como regla, el heredero responde por las deudas y legados hasta el valor de los bienes hereditarios recibidos. Existen excepciones que pueden comprometer bienes propios, por ejemplo ante ocultamiento fraudulento o determinados actos de disposición, por lo que la administración del patrimonio exige cautela.",
    sections: [
      {
        title: "Qué obligaciones conviene relevar",
        bullets: [
          "Préstamos, tarjetas, impuestos, tasas y servicios.",
          "Expensas, contratos, juicios y obligaciones garantizadas.",
          "Gastos de conservación y cargas del proceso sucesorio.",
          "Créditos laborales, alimentarios o de otra naturaleza.",
          "Bienes afectados por hipotecas, prendas o embargos.",
        ],
      },
      {
        title: "Preferencia y responsabilidad",
        paragraphs: [
          "Los acreedores del causante y de la sucesión tienen preferencia sobre los bienes hereditarios frente a los acreedores personales de los herederos. Si hay varios herederos, la responsabilidad se atiende inicialmente con la masa indivisa.",
          "La limitación al valor recibido no debe interpretarse como una autorización para ocultar, retirar o vender bienes sin control. La ley contempla supuestos de responsabilidad con patrimonio propio.",
        ],
      },
      {
        title: "Antes de aceptar acuerdos o vender",
        paragraphs: [
          "Es útil comparar el activo conocido con el pasivo, conservar comprobantes y revisar intimaciones o procesos pendientes. La decisión sobre aceptación, renuncia, pago o negociación depende de información concreta y no de una estimación aislada.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Los herederos pagan siempre con su propio dinero?",
        answer:
          "Como regla, la responsabilidad se limita al valor de los bienes hereditarios recibidos. La ley prevé excepciones por determinadas conductas, por lo que cada caso debe revisarse.",
      },
      {
        question: "¿Puede renunciarse si hay muchas deudas?",
        answer:
          "La renuncia es posible mientras no haya mediado un acto de aceptación y debe cumplir la forma legal. Antes de decidir conviene revisar qué actos ya se realizaron y cuál es el patrimonio real.",
      },
      {
        question: "¿Se pueden repartir bienes antes de pagar?",
        answer:
          "Los acreedores y las cargas tienen reglas de preferencia. Distribuir o disponer de bienes sin considerar el pasivo puede generar conflictos y responsabilidad.",
      },
    ],
    related: ["costo-de-una-sucesion-en-provincia-de-buenos-aires", "cuentas-bancarias-y-plazos-fijos-en-una-sucesion", "declaratoria-de-herederos"],
  },
  {
    slug: "cuentas-bancarias-y-plazos-fijos-en-una-sucesion",
    eyebrow: "Fondos bancarios",
    title: "Cómo cobrar cuentas bancarias y plazos fijos de una sucesión",
    metaTitle: "Cuentas bancarias en una sucesión",
    description:
      "Cómo identificar y cobrar cuentas, saldos y plazos fijos de una persona fallecida dentro de una sucesión en Provincia de Buenos Aires.",
    intro:
      "Los fondos bancarios forman parte del patrimonio que debe identificarse y denunciarse. Tener una tarjeta, clave o ser cotitular no define por sí solo qué porción integra la herencia.",
    answer:
      "Habitualmente se solicita información a la entidad dentro del proceso, se acredita quiénes están legitimados y se obtiene la orden necesaria para transferir o distribuir los fondos. El recorrido depende del producto, la moneda, la titularidad y las medidas que existan sobre la cuenta.",
    sections: [
      {
        title: "Información útil para comenzar",
        bullets: [
          "Nombre de la entidad, sucursal y producto conocido.",
          "Constancias de cuentas, inversiones o plazos fijos.",
          "Titulares, cotitulares, autorizados y beneficiarios informados.",
          "Moneda, vencimientos y movimientos relevantes.",
          "Posibles deudas, débitos o medidas judiciales.",
        ],
      },
      {
        title: "Cómo se acredita el saldo",
        paragraphs: [
          "Cuando la información no está disponible, puede pedirse que la entidad informe productos y saldos a la fecha correspondiente. El secreto bancario y la seguridad de los fondos hacen que no baste una manifestación informal de parentesco.",
          "La existencia de una cuenta conjunta requiere analizar su modalidad y el origen de los fondos; no permite asumir que todo el saldo pertenece al sobreviviente o a la herencia.",
        ],
      },
      {
        title: "Cobro y distribución",
        paragraphs: [
          "Una vez acreditados los fondos y la legitimación, puede solicitarse su transferencia a una cuenta judicial o el mecanismo que corresponda. Antes de distribuirlos deben considerarse las deudas, cargas, porciones y órdenes vigentes.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puede retirarse dinero con la tarjeta del fallecido?",
        answer:
          "No es una vía adecuada para disponer del patrimonio hereditario. Los fondos deben identificarse y cobrarse mediante el procedimiento que preserve los derechos de herederos y acreedores.",
      },
      {
        question: "¿Qué ocurre con un plazo fijo?",
        answer:
          "Debe informarse en la sucesión y coordinarse con la entidad. El vencimiento, la renovación, la moneda y la titularidad pueden modificar la forma de cumplimiento.",
      },
      {
        question: "¿Una cuenta conjunta queda fuera de la sucesión?",
        answer:
          "No necesariamente. Deben analizarse el contrato de la cuenta, la titularidad y el origen de los fondos antes de determinar qué parte integra la herencia.",
      },
    ],
    related: ["declaratoria-de-herederos", "documentos-para-iniciar-una-sucesion", "sucesion-con-deudas"],
  },
  {
    slug: "heredero-con-domicilio-desconocido",
    eyebrow: "Heredero no localizado",
    title: "Sucesión con un heredero cuyo domicilio se desconoce",
    metaTitle: "Heredero con domicilio desconocido",
    description:
      "Cómo avanzar en una sucesión cuando se conoce la existencia de un heredero pero no su domicilio actual en Provincia de Buenos Aires.",
    intro:
      "No conocer el domicilio de un heredero exige demostrar qué información se tiene y realizar las diligencias de localización y notificación que ordene el juzgado.",
    answer:
      "La falta de domicilio conocido no elimina al heredero ni paraliza automáticamente el expediente. Debe ser denunciado con todos los datos disponibles, agotarse las medidas razonables de búsqueda y utilizar la forma de citación que corresponda según el resultado.",
    sections: [
      {
        title: "Datos que ayudan a localizarlo",
        bullets: [
          "Nombre completo, documento y fecha de nacimiento.",
          "Último domicilio o localidad conocida.",
          "Vínculo familiar y partidas que lo acrediten.",
          "Datos de contacto, actividad o familiares relacionados.",
          "Antecedentes de notificaciones o búsquedas anteriores.",
        ],
      },
      {
        title: "Búsqueda y notificación",
        paragraphs: [
          "El juzgado puede ordenar informes y diligencias antes de habilitar una notificación por edictos u otro medio. No conviene afirmar que el domicilio se desconoce sin documentar las gestiones realizadas.",
          "Las medidas dependen de la información disponible y de si se trata de una persona individualizada, un posible heredero o interesados todavía indeterminados.",
        ],
      },
      {
        title: "Si no se presenta",
        paragraphs: [
          "La incomparecencia no convierte automáticamente su porción en propiedad de los demás. El expediente puede requerir medidas de representación, reserva o administración para proteger derechos mientras continúa el trámite.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿La sucesión puede continuar si no se encuentra al heredero?",
        answer:
          "Puede continuar con las medidas de búsqueda, citación y protección que disponga el juzgado. El alcance depende de la etapa y de las decisiones que se pretendan adoptar.",
      },
      {
        question: "¿Publicar edictos siempre es suficiente?",
        answer:
          "No debe asumirse automáticamente. Primero pueden exigirse informes o diligencias para intentar determinar el domicilio de una persona conocida.",
      },
      {
        question: "¿Qué ocurre si aparece después?",
        answer:
          "Puede presentarse y ejercer los derechos que correspondan. La situación debe analizarse según las resoluciones y actos ya cumplidos.",
      },
    ],
    related: ["heredero-no-quiere-firmar-sucesion", "sucesion-sin-testamento", "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires"],
  },
  {
    slug: "sucesion-con-herederos-en-el-extranjero",
    eyebrow: "Herederos en el exterior",
    title: "Sucesión con herederos que viven en el extranjero",
    metaTitle: "Herederos en el extranjero",
    description:
      "Cómo participa un heredero que vive fuera de Argentina, qué documentos puede necesitar y cómo coordinar una sucesión en PBA.",
    intro:
      "Vivir en otro país no impide ser heredero ni obliga necesariamente a viajar para cada actuación. La representación y los documentos deben prepararse con la forma válida para producir efectos en Argentina.",
    answer:
      "El heredero puede intervenir personalmente o mediante un poder suficiente. Según el país y el documento, pueden ser necesarias apostilla o legalización, traducción pública y otras formalidades antes de incorporarlo al expediente.",
    sections: [
      {
        title: "Formas de participar",
        bullets: [
          "Otorgar un poder con facultades adecuadas para el trámite.",
          "Presentar documentación de identidad y vínculo en forma válida.",
          "Coordinar firmas y decisiones patrimoniales desde el exterior.",
          "Cumplir recaudos adicionales para particiones, cesiones o ventas.",
        ],
      },
      {
        title: "Documentos emitidos fuera de Argentina",
        paragraphs: [
          "La exigencia de apostilla, legalización consular o dispensa depende del país, los convenios vigentes y el tipo de documento. Si está redactado en otro idioma, puede requerir traducción pública y legalización profesional.",
          "Conviene definir primero para qué se utilizará el documento y qué facultades debe contener, evitando rehacer instrumentos por omisiones.",
        ],
      },
      {
        title: "Aspectos patrimoniales y fiscales",
        paragraphs: [
          "La residencia en el exterior puede influir en transferencias bancarias, identificación tributaria y obligaciones informativas. Estas cuestiones deben coordinarse con el objetivo final: conservar, adjudicar, ceder o vender.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El heredero debe viajar a Argentina?",
        answer:
          "No necesariamente. Muchas actuaciones pueden canalizarse mediante representación, pero ciertas decisiones requieren facultades expresas y documentación preparada para el acto concreto.",
      },
      {
        question: "¿Todo documento extranjero lleva apostilla?",
        answer:
          "No siempre. Depende del país de origen, los convenios aplicables, el tipo de instrumento y su destino. Debe verificarse antes de emitirlo.",
      },
      {
        question: "¿Una persona extranjera puede heredar en Argentina?",
        answer:
          "La nacionalidad no excluye por sí sola la vocación hereditaria. Deben analizarse el vínculo, la ley aplicable, la ubicación de los bienes y las exigencias documentales y fiscales.",
      },
    ],
    related: ["documentos-para-iniciar-una-sucesion", "declaratoria-de-herederos", "sucesion-con-bienes-en-otras-provincias-o-exterior"],
  },
  {
    slug: "sucesion-con-herederos-menores-de-edad",
    eyebrow: "Protección de menores",
    title: "Sucesión con herederos menores de edad",
    metaTitle: "Sucesión con herederos menores de edad",
    description:
      "Cómo intervienen y son representados los herederos menores de edad en una sucesión y qué controles existen sobre sus bienes.",
    intro:
      "Las personas menores de edad pueden heredar. Su participación requiere representación y controles destinados a proteger su interés patrimonial durante todo el proceso.",
    answer:
      "El representante legal actúa por el menor dentro de los límites de sus facultades y con intervención de los organismos de protección que correspondan. Los actos de disposición, partición o acuerdo pueden exigir autorización judicial y un control reforzado.",
    sections: [
      {
        title: "Representación en el expediente",
        paragraphs: [
          "Habitualmente intervienen quienes ejercen la responsabilidad parental o la representación legal. Si existe un conflicto de intereses entre representante y menor, puede ser necesario designar una representación especial.",
          "La aceptación realizada por el representante no puede obligar al menor por deudas más allá del valor de los bienes que le sean atribuidos.",
        ],
      },
      {
        title: "Decisiones que requieren especial cuidado",
        bullets: [
          "Particiones y adjudicaciones de bienes.",
          "Venta, hipoteca o cesión de activos hereditarios.",
          "Acuerdos que reduzcan o modifiquen su porción.",
          "Uso de dinero, indemnizaciones o rentas que le correspondan.",
          "Conflictos entre el interés del menor y el de sus representantes.",
        ],
      },
      {
        title: "Interés superior y control judicial",
        paragraphs: [
          "No alcanza con que los adultos estén de acuerdo. La propuesta debe mostrar por qué protege el patrimonio y el interés del menor, con valuaciones, condiciones y destino de los fondos cuando sean pertinentes.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un menor puede ser declarado heredero?",
        answer:
          "Sí. La edad no impide heredar; determina la forma de representación y los controles aplicables durante el proceso.",
      },
      {
        question: "¿Los padres pueden vender libremente un bien heredado por el menor?",
        answer:
          "No debe asumirse. Los actos de disposición sobre bienes del menor pueden requerir autorización judicial y demostrar que protegen su interés.",
      },
      {
        question: "¿Qué pasa si el padre o la madre también heredan?",
        answer:
          "Debe verificarse si sus intereses coinciden o entran en conflicto con los del menor. Si existe oposición de intereses, puede requerirse una representación especial.",
      },
    ],
    related: ["sucesion-sin-testamento", "vender-inmueble-en-una-sucesion", "bienes-propios-y-gananciales-en-una-sucesion"],
  },
  {
    slug: "sucesion-con-bienes-en-otras-provincias-o-exterior",
    eyebrow: "Bienes en otras jurisdicciones",
    title: "Sucesión con bienes en otras provincias o en el exterior",
    metaTitle: "Bienes sucesorios en otras jurisdicciones",
    description:
      "Cómo tramitar una sucesión con inmuebles, cuentas u otros bienes ubicados en distintas provincias argentinas o en el exterior.",
    intro:
      "Cuando el patrimonio está distribuido entre varias jurisdicciones, el primer paso es separar la competencia del proceso de los requisitos necesarios para reconocer e inscribir cada bien.",
    answer:
      "Como regla, intervienen los jueces del último domicilio del causante; para inmuebles situados en Argentina también existe competencia vinculada con su ubicación. Los bienes en otra provincia pueden requerir comunicaciones e inscripción local, mientras que los del exterior pueden exigir reconocimiento o actuación en ese país.",
    sections: [
      {
        title: "Bienes en otra provincia argentina",
        paragraphs: [
          "No siempre es necesario abrir procesos sucesorios independientes. Puede ser posible utilizar testimonios, oficios u otros instrumentos emitidos por el juzgado competente y cumplir las reglas del registro donde se encuentra el bien.",
          "Impuestos, valuaciones y formalidades registrales pueden variar entre jurisdicciones.",
        ],
      },
      {
        title: "Bienes situados en el exterior",
        paragraphs: [
          "Debe analizarse la ley del último domicilio del causante y la ley del lugar donde se ubica el activo. Un inmueble, una cuenta bancaria o una participación societaria pueden requerir recorridos diferentes.",
          "La documentación argentina puede necesitar apostilla, traducción y reconocimiento en el país de destino; también puede ser necesario un profesional local.",
        ],
      },
      {
        title: "Mapa patrimonial inicial",
        bullets: [
          "Tipo de bien, titularidad y país o provincia de ubicación.",
          "Último domicilio y nacionalidad del causante.",
          "Testamentos, poderes y procesos ya iniciados.",
          "Registros, entidades y documentación disponible.",
          "Impuestos y restricciones para transferir o cobrar.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Hay que iniciar una sucesión en cada provincia?",
        answer:
          "No necesariamente. Deben distinguirse la competencia del proceso y los trámites de inscripción o cumplimiento exigidos donde se encuentra cada bien.",
      },
      {
        question: "¿Una cuenta bancaria extranjera se cobra con la declaratoria argentina?",
        answer:
          "Puede ser necesario reconocer la documentación o cumplir un procedimiento local. La respuesta depende del país, la entidad y el tipo de cuenta.",
      },
      {
        question: "¿Qué ley rige un inmueble ubicado en Argentina?",
        answer:
          "El Código Civil y Comercial establece la aplicación del derecho argentino a los inmuebles situados en el país, además de reglas específicas de jurisdicción.",
      },
    ],
    related: ["sucesion-con-herederos-en-el-extranjero", "inscripcion-de-bienes-heredados", "cuentas-bancarias-y-plazos-fijos-en-una-sucesion"],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

const civilCodeSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Libro Quinto: transmisión de derechos por causa de muerte.",
  url: "https://www.argentina.gob.ar/normativa/nacional/235975/texto",
};

const proceduralCodeSource: OfficialSource = {
  name: "Código Procesal Civil y Comercial bonaerense",
  detail: "Decreto-Ley 7.425/68, texto actualizado; proceso sucesorio.",
  url: "https://normas.gba.gob.ar/documentos/VrQlgSOB.html",
};

const scbaSource: OfficialSource = {
  name: "Suprema Corte de Justicia de la Provincia de Buenos Aires",
  detail: "Información institucional, órganos judiciales y servicios del Poder Judicial.",
  url: "https://www.scba.gov.ar/",
};

const registryLawSource: OfficialSource = {
  name: "Ley Nacional Registral Inmobiliaria 17.801",
  detail: "Publicidad registral, tracto sucesivo y supuestos de tracto abreviado.",
  url: "https://www.argentina.gob.ar/normativa/nacional/norma-53050/texto",
};

const registryManualSource: OfficialSource = {
  name: "Registro de la Propiedad de la Provincia de Buenos Aires",
  detail: "Manual de Registración, módulo de tracto abreviado.",
  url: "https://www.rpba.gov.ar/files/Normas/Manual/M%C3%B3dulo713.pdf",
};

const feesSource: OfficialSource = {
  name: "Ley 14.967 de la Provincia de Buenos Aires",
  detail: "Régimen de honorarios de abogados y procuradores.",
  url: "https://normas.gba.gob.ar/documentos/BOa6XTk0.html",
};

const matrimonialPropertySource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 463 a 466 y 2433 a 2435: régimen de comunidad y sucesión del cónyuge.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const inheritanceUseSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 2323 a 2329: administración, uso y frutos durante la indivisión hereditaria.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const dnrpaTransferSource: OfficialSource = {
  name: "Dirección Nacional de los Registros de la Propiedad Automotor",
  detail: "Guía oficial del trámite de transferencia de dominio, incluida la transmisión por sucesión.",
  url: "https://www.dnrpa.gov.ar/portal_dnrpa/guia_tramites/transferencia.htm",
};

const dnrpaDigestoSource: OfficialSource = {
  name: "Digesto de Normas Técnico-Registrales de la DNRPA",
  detail: "Normativa vigente para transferencias ordenadas en juicios sucesorios.",
  url: "https://www.dnrpa.gov.ar/nuevodigesto/",
};

const inheritanceAssignmentSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 1618 y 2302 a 2309: forma, efectos y alcance de la cesión de herencia.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const inheritanceDebtsSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 2316 a 2322: responsabilidad de herederos y liquidación del pasivo.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const inheritanceAdministrationSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 2323 a 2327: administración y medidas urgentes durante la indivisión.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const minorsProtectionSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Representación, protección patrimonial y aceptación de herencias por personas menores de edad.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const internationalSuccessionSource: OfficialSource = {
  name: "Código Civil y Comercial de la Nación",
  detail: "Artículos 2643 y 2644: jurisdicción y derecho aplicable a las sucesiones internacionales.",
  url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/actualizacion",
};

const apostilleSource: OfficialSource = {
  name: "Cancillería Argentina",
  detail: "Información oficial sobre apostilla y legalización de documentos con validez internacional.",
  url: "https://cancilleria.gob.ar/es/servicios/apostilla-legalizacion-con-validez-internacional-tad",
};

export const geoContent: Record<string, GeoContent> = {
  "declaratoria-de-herederos": {
    keyPoints: [
      "Reconoce judicialmente a quienes acreditaron vocación hereditaria.",
      "No equivale, por sí sola, a inscribir cada bien a nombre de los herederos.",
      "Puede ampliarse si luego se presenta otra persona con derecho.",
    ],
    scenario:
      "Ejemplo orientativo: una familia obtiene la declaratoria, pero quiere vender un inmueble. Antes de comprometer la operación debe revisar el estado registral, las cargas del expediente y si corresponde inscribir o utilizar tracto abreviado.",
    questions: [
      "¿Quiénes tienen posible vocación hereditaria?",
      "¿Qué bienes integran el patrimonio conocido?",
      "¿El objetivo es conservar, adjudicar, cobrar o vender?",
    ],
    sources: [civilCodeSource, proceduralCodeSource, scbaSource],
  },
  "sucesion-sin-testamento": {
    keyPoints: [
      "La ley establece el orden de quienes pueden ser llamados a heredar.",
      "El último domicilio del causante es un dato central para determinar la competencia.",
      "Los porcentajes no deben estimarse sin reconstruir vínculos y régimen patrimonial.",
    ],
    scenario:
      "Ejemplo orientativo: fallece una persona casada y con descendientes. Para determinar derechos no alcanza con contar familiares: hay que distinguir vínculos, bienes propios y gananciales y la situación existente al fallecimiento.",
    questions: [
      "¿Existían cónyuge, descendientes, ascendientes u otros parientes?",
      "¿Cuál fue el último domicilio real de la persona fallecida?",
      "¿Hay bienes propios, gananciales o de titularidad dudosa?",
    ],
    sources: [civilCodeSource, proceduralCodeSource],
  },
  "sucesion-con-testamento": {
    keyPoints: [
      "El testamento debe analizarse dentro del proceso sucesorio.",
      "Su forma, vigencia y contenido pueden requerir control judicial.",
      "Las disposiciones deben respetar los límites legales aplicables.",
    ],
    scenario:
      "Ejemplo orientativo: aparece un testamento que asigna un bien concreto a una persona. Debe verificarse si es el último, si cumple las formalidades y cómo se relaciona con los derechos de los herederos legitimarios.",
    questions: [
      "¿Qué tipo de testamento existe y dónde está su original?",
      "¿Hay disposiciones posteriores o indicios de revocación?",
      "¿Existen herederos con porción legítima protegida?",
    ],
    sources: [civilCodeSource, proceduralCodeSource],
  },
  "tracto-abreviado": {
    keyPoints: [
      "Permite coordinar la transmisión hereditaria con el acto de disposición posterior.",
      "No reemplaza ni evita el proceso sucesorio.",
      "Exige coordinación entre expediente, escribanía y Registro de la Propiedad.",
    ],
    scenario:
      "Ejemplo orientativo: los herederos acuerdan vender un inmueble todavía registrado a nombre del causante. Si el expediente y la documentación están en condiciones, puede evaluarse que la inscripción hereditaria y la venta ingresen registralmente de manera relacionada.",
    questions: [
      "¿Ya existe declaratoria o aprobación judicial del testamento?",
      "¿Todas las personas que deben intervenir están de acuerdo?",
      "¿El título, los informes y las cargas del expediente están ordenados?",
    ],
    sources: [registryLawSource, registryManualSource, proceduralCodeSource],
  },
  "inscripcion-de-bienes-heredados": {
    keyPoints: [
      "Cada tipo de bien tiene requisitos registrales propios.",
      "Declaratoria, partición, adjudicación e inscripción cumplen funciones diferentes.",
      "Los informes y certificados deben coordinarse porque pueden tener vigencia limitada.",
    ],
    scenario:
      "Ejemplo orientativo: una sucesión incluye un inmueble y un automotor. Aunque ambos integren la misma herencia, su regularización requiere documentación, organismos y recaudos diferentes.",
    questions: [
      "¿Qué clase de bienes deben inscribirse?",
      "¿Se busca mantenerlos en común, adjudicarlos o venderlos?",
      "¿Existen deudas, cautelares u observaciones registrales?",
    ],
    sources: [civilCodeSource, registryLawSource, registryManualSource],
  },
  "conflictos-entre-herederos": {
    keyPoints: [
      "Primero debe identificarse cuál es el desacuerdo jurídicamente relevante.",
      "La falta de acuerdo no siempre impide impulsar el proceso sucesorio.",
      "Uso exclusivo, administración y partición son problemas distintos.",
    ],
    scenario:
      "Ejemplo orientativo: una persona ocupa el único inmueble y otra pretende venderlo. Antes de elegir una medida conviene determinar quiénes son los herederos, qué gastos afrontó cada parte, cuál es el uso actual y qué resultado concreto se busca.",
    questions: [
      "¿El conflicto es por ocupación, administración, venta o distribución?",
      "¿Qué documentos y comprobantes existen?",
      "¿Hay una urgencia patrimonial separable de la discusión familiar?",
    ],
    sources: [civilCodeSource, proceduralCodeSource, scbaSource],
  },
  "documentos-para-iniciar-una-sucesion": {
    keyPoints: [
      "Las partidas prueban fallecimiento y vínculos familiares.",
      "El último domicilio orienta la competencia judicial.",
      "La documentación patrimonial permite planificar las etapas posteriores.",
    ],
    scenario:
      "Ejemplo orientativo: si todavía no aparece la escritura de un inmueble, puede realizarse una evaluación inicial con sus datos de ubicación y titularidad, y definir qué informe o testimonio será necesario obtener.",
    questions: [
      "¿Qué partidas y documentos personales ya están disponibles?",
      "¿Qué bienes, cuentas o derechos se conocen?",
      "¿Hay diferencias de nombres, fechas o estado civil?",
    ],
    sources: [civilCodeSource, proceduralCodeSource],
  },
  "costo-de-una-sucesion-en-provincia-de-buenos-aires": {
    keyPoints: [
      "Honorarios, cargas judiciales y gastos de terceros son conceptos diferentes.",
      "El patrimonio y el objetivo del trámite modifican la estimación.",
      "Un presupuesto responsable debe aclarar alcance y etapas.",
    ],
    scenario:
      "Ejemplo orientativo: inscribir un inmueble para conservarlo y preparar su venta por tracto abreviado no generan exactamente las mismas tareas ni intervenciones. Por eso una cifra aislada puede resultar engañosa.",
    questions: [
      "¿Qué bienes integran la sucesión y dónde están registrados?",
      "¿Existe acuerdo o controversia entre interesados?",
      "¿Qué actuaciones y gastos de terceros incluye el presupuesto?",
    ],
    sources: [feesSource, proceduralCodeSource, registryLawSource],
  },
  "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires": {
    keyPoints: [
      "No existe un plazo universal aplicable a todas las sucesiones.",
      "La declaratoria puede no ser el último paso necesario.",
      "Documentación, notificaciones, conflictos y registros inciden en el recorrido.",
    ],
    scenario:
      "Ejemplo orientativo: dos expedientes iniciados el mismo día pueden requerir recorridos diferentes si uno solo busca acreditar herederos y el otro necesita vender un inmueble con documentación incompleta.",
    questions: [
      "¿Cuál es el resultado concreto que se necesita alcanzar?",
      "¿La documentación familiar y patrimonial está completa?",
      "¿Intervienen terceros, registros o personas que deben ser notificadas?",
    ],
    sources: [proceduralCodeSource, scbaSource, registryLawSource],
  },
  "vender-inmueble-en-una-sucesion": {
    keyPoints: [
      "La venta debe coordinar legitimación sucesoria, título y situación registral.",
      "El tracto abreviado puede evitar una inscripción hereditaria intermedia.",
      "No conviene asumir reservas o plazos antes de revisar el expediente.",
    ],
    scenario:
      "Ejemplo orientativo: tres herederos quieren vender una casa registrada a nombre del causante. Antes de publicarla verifican la declaratoria, el título, las deudas, la ocupación y si la escribanía puede trabajar mediante tracto abreviado.",
    questions: [
      "¿Quiénes deben prestar conformidad para la operación?",
      "¿El expediente ya permite ordenar la transmisión?",
      "¿Conviene inscribir, adjudicar o utilizar tracto abreviado?",
    ],
    sources: [civilCodeSource, registryLawSource, registryManualSource],
  },
  "heredero-ocupa-inmueble-sucesion": {
    keyPoints: [
      "El uso debe ser compatible con los derechos de los demás copartícipes.",
      "El uso privativo puede generar una indemnización desde que es requerida.",
      "Ocupación, reintegro de gastos y partición deben analizarse por separado.",
    ],
    scenario:
      "Ejemplo orientativo: una heredera vive en la casa familiar y afronta algunos gastos, mientras los demás quieren alquilarla. Para ordenar el conflicto se reconstruyen el acuerdo previo, los pagos acreditados, los pedidos realizados y el destino buscado para el inmueble.",
    questions: [
      "¿La ocupación fue acordada, tolerada o cuestionada?",
      "¿Cuándo y de qué manera se requirió modificar el uso?",
      "¿Qué gastos, frutos o mejoras pueden documentarse?",
    ],
    sources: [inheritanceUseSource, civilCodeSource, proceduralCodeSource],
  },
  "bienes-propios-y-gananciales-en-una-sucesion": {
    keyPoints: [
      "Primero se liquida el régimen matrimonial y después se determina la herencia.",
      "La fecha, causa de adquisición y origen de los fondos son datos centrales.",
      "La concurrencia del cónyuge cambia según los bienes y los demás herederos.",
    ],
    scenario:
      "Ejemplo orientativo: el causante deja una vivienda comprada durante el matrimonio y un lote heredado de sus padres. Aunque ambos estén a su nombre, su clasificación y el modo de distribuirlos no se resuelven de la misma manera.",
    questions: [
      "¿Qué régimen matrimonial estaba vigente al fallecimiento?",
      "¿Cuándo y por qué título se adquirió cada bien?",
      "¿Quiénes concurren como herederos y existen recompensas pendientes?",
    ],
    sources: [matrimonialPropertySource, civilCodeSource, proceduralCodeSource],
  },
  "sucesion-de-automotores-en-provincia-de-buenos-aires": {
    keyPoints: [
      "El expediente judicial y el trámite registral deben coordinarse.",
      "El informe de dominio permite detectar titularidad y restricciones.",
      "Puede evaluarse inscripción, adjudicación o transferencia a un tercero.",
    ],
    scenario:
      "Ejemplo orientativo: una sucesión incluye un vehículo que usa uno de los herederos. Antes de decidir su adjudicación o venta se revisan la radicación, el informe de dominio, la deuda de patentes, la cobertura y la documentación disponible.",
    questions: [
      "¿Dónde está radicado y a nombre de quién figura el vehículo?",
      "¿Existen prendas, cautelares, deudas o documentación faltante?",
      "¿Se busca mantenerlo, adjudicarlo o venderlo?",
    ],
    sources: [dnrpaTransferSource, dnrpaDigestoSource, civilCodeSource],
  },
  "heredero-no-quiere-firmar-sucesion": {
    keyPoints: [
      "Una persona legitimada puede promover el proceso y denunciar a los demás herederos.",
      "No firmar no equivale a renunciar ni a perder la porción hereditaria.",
      "Administración, disposición y partición tienen requisitos distintos.",
    ],
    scenario:
      "Ejemplo orientativo: una heredera quiere iniciar el trámite, pero su hermano no responde. Puede promover el expediente y pedir su citación; si luego pretende vender un inmueble, deberá resolver específicamente la falta de acuerdo.",
    questions: [
      "¿Qué actuación concreta se necesita firmar?",
      "¿El heredero fue correctamente identificado y notificado?",
      "¿La negativa pone en riesgo algún bien o solamente impide un acuerdo?",
    ],
    sources: [inheritanceAdministrationSource, proceduralCodeSource, civilCodeSource],
  },
  "cesion-de-derechos-hereditarios": {
    keyPoints: [
      "La cesión de derechos hereditarios requiere escritura pública.",
      "Transfiere una posición en la herencia, no automáticamente un bien determinado.",
      "La escritura debe incorporarse al expediente para producir determinados efectos frente a terceros.",
    ],
    scenario:
      "Ejemplo orientativo: uno de tres herederos quiere recibir dinero y apartarse del interés económico en la herencia. Antes de ceder se revisan su porción, las deudas, los bienes y las condiciones de la escritura.",
    questions: [
      "¿Se cede toda la participación o un alcance limitado?",
      "¿Qué activo y pasivo se conoce al momento de contratar?",
      "¿La escritura ya fue incorporada al proceso sucesorio?",
    ],
    sources: [inheritanceAssignmentSource, civilCodeSource, proceduralCodeSource],
  },
  "sucesion-con-deudas": {
    keyPoints: [
      "La herencia comprende activo, deudas y cargas.",
      "La responsabilidad se limita como regla al valor hereditario recibido.",
      "Ciertas conductas pueden generar responsabilidad con bienes propios.",
    ],
    scenario:
      "Ejemplo orientativo: la familia conoce una vivienda, un préstamo y deudas fiscales. Antes de distribuir el inmueble reconstruye el pasivo y evita actos que perjudiquen la preferencia de los acreedores.",
    questions: [
      "¿Qué obligaciones corresponden al causante y cuáles al proceso?",
      "¿Existen garantías, juicios o intimaciones pendientes?",
      "¿Ya se realizaron actos que puedan implicar aceptación o disposición?",
    ],
    sources: [inheritanceDebtsSource, proceduralCodeSource, civilCodeSource],
  },
  "cuentas-bancarias-y-plazos-fijos-en-una-sucesion": {
    keyPoints: [
      "Los saldos deben identificarse y acreditarse dentro del patrimonio sucesorio.",
      "Una cuenta conjunta no define por sí sola la propiedad de todo el dinero.",
      "El cobro debe coordinar legitimación, orden judicial, cargas y distribución.",
    ],
    scenario:
      "Ejemplo orientativo: los herederos encuentran un resumen de cuenta y un plazo fijo en dólares. Solicitan información sobre titularidad y saldo antes de pedir el mecanismo judicial de cobro.",
    questions: [
      "¿Qué entidad, producto, moneda y titulares figuran?",
      "¿Hay deudas, débitos o medidas sobre los fondos?",
      "¿El objetivo es conservar, distribuir o aplicar el dinero a cargas?",
    ],
    sources: [civilCodeSource, proceduralCodeSource, inheritanceDebtsSource],
  },
  "heredero-con-domicilio-desconocido": {
    keyPoints: [
      "El heredero debe denunciarse con todos los datos disponibles.",
      "Pueden exigirse búsquedas antes de autorizar una citación por edictos.",
      "La incomparecencia no elimina automáticamente sus derechos.",
    ],
    scenario:
      "Ejemplo orientativo: la familia conoce nombre y documento de un hermano, pero perdió contacto hace años. Informa el último domicilio y pide medidas de localización antes de avanzar con decisiones patrimoniales.",
    questions: [
      "¿La persona está individualizada y su vínculo está acreditado?",
      "¿Qué domicilios, contactos y búsquedas pueden documentarse?",
      "¿Qué medida se pretende adoptar mientras no comparece?",
    ],
    sources: [proceduralCodeSource, civilCodeSource, scbaSource],
  },
  "sucesion-con-herederos-en-el-extranjero": {
    keyPoints: [
      "Vivir fuera del país no impide heredar.",
      "Un poder debe contener facultades adecuadas para los actos previstos.",
      "Apostilla, legalización y traducción dependen del documento y del país.",
    ],
    scenario:
      "Ejemplo orientativo: una heredera vive en España y quiere participar sin viajar. Antes de otorgar el poder se definen las facultades necesarias y la forma en que el instrumento será válido en Argentina.",
    questions: [
      "¿En qué país reside y qué documentos debe otorgar?",
      "¿Necesita solamente intervenir o también vender, ceder o partir?",
      "¿Existen requisitos fiscales o bancarios asociados a su residencia?",
    ],
    sources: [apostilleSource, internationalSuccessionSource, proceduralCodeSource],
  },
  "sucesion-con-herederos-menores-de-edad": {
    keyPoints: [
      "Las personas menores de edad pueden heredar mediante representación.",
      "Un conflicto con sus representantes puede exigir representación especial.",
      "Particiones y actos de disposición están sujetos a control reforzado.",
    ],
    scenario:
      "Ejemplo orientativo: una madre y su hijo menor heredan un inmueble. Como ambos tienen interés en la distribución, se analiza la representación y la autorización necesaria antes de acordar una venta.",
    questions: [
      "¿Quién ejerce la representación legal del menor?",
      "¿Existe un conflicto de intereses en la propuesta?",
      "¿Cómo se protege la porción y el destino de los fondos del menor?",
    ],
    sources: [minorsProtectionSource, civilCodeSource, proceduralCodeSource],
  },
  "sucesion-con-bienes-en-otras-provincias-o-exterior": {
    keyPoints: [
      "La competencia sucesoria y la inscripción de cada bien son cuestiones diferentes.",
      "Los registros de otras provincias pueden exigir instrumentos y cargas locales.",
      "Los bienes en el exterior pueden requerir reconocimiento o actuación en ese país.",
    ],
    scenario:
      "Ejemplo orientativo: el causante tenía domicilio en La Plata, un inmueble en Córdoba y una cuenta en Uruguay. Se diseña un recorrido coordinado para acreditar la sucesión y cumplir en cada jurisdicción.",
    questions: [
      "¿Dónde tuvo su último domicilio el causante?",
      "¿Qué tipo de activo existe en cada jurisdicción?",
      "¿Qué documentos, impuestos y profesionales locales pueden intervenir?",
    ],
    sources: [internationalSuccessionSource, apostilleSource, registryLawSource],
  },
};

export function getGeoContent(slug: string) {
  return geoContent[slug];
}

export const homeFaqs = [
  {
    question: "¿Puedo iniciar una sucesión si otro heredero no quiere?",
    answer:
      "En muchos casos, una persona legitimada puede promover el proceso aunque no exista iniciativa conjunta. La forma de avanzar depende de quiénes intervienen y de las notificaciones necesarias.",
  },
  {
    question: "¿La sucesión debe iniciarse en La Plata?",
    answer:
      "Como regla, la competencia se vincula con el último domicilio de la persona fallecida. Atendemos consultas de toda la Provincia y analizamos qué departamento judicial corresponde.",
  },
  {
    question: "¿Necesito tener todos los documentos para consultar?",
    answer:
      "No. Podés hacer una primera consulta con la información disponible. Te indicaremos qué resulta necesario obtener y en qué momento.",
  },
  {
    question: "¿Cuánto cuesta y cuánto tarda?",
    answer:
      "Depende del patrimonio, la documentación, las etapas requeridas y la existencia de conflictos. No comunicamos cifras ni plazos genéricos sin revisar el caso.",
  },
];
