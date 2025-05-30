export const boardTypes = [
  {
    id: "clasico",
    name: "Clásico",
    title: "Tablero Plinko Clásico",
    description: "El diseño tradicional de Plinko con clavijas uniformemente distribuidas.",
    image: "/class.png",
    features: [
      "Diseño tradicional y atemporal",
      "Fácil de usar para todas las edades",
      "Perfecto para principiantes",
      "Construcción robusta y duradera",
      "Mantenimiento sencillo",
      "Ideal para uso familiar",
    ],
    detailedDescription:
      "Nuestro tablero Plinko Clásico representa la esencia pura de este fascinante juego. Con un diseño que respeta la tradición original, este tablero presenta una distribución uniforme de clavijas que garantiza una experiencia de juego equilibrada y emocionante. Fabricado con materiales de alta calidad, ofrece la durabilidad necesaria para años de entretenimiento continuo.",
    specifications: [
      "Dimensiones: 120cm x 80cm x 15cm",
      "Material: Madera de pino tratada",
      "Clavijas: Acero inoxidable",
      "Peso: 25kg aproximadamente",
      "Capacidad: 1-4 jugadores simultáneos",
      "Edad recomendada: 6+ años",
    ],
    applications: [
      "Entretenimiento familiar",
      "Centros recreativos",
      "Eventos corporativos",
      "Fiestas y celebraciones",
      "Actividades comunitarias",
    ],
  },
  {
    id: "tematico",
    name: "Temático",
    title: "Tablero Plinko Temático",
    description: "Tableros personalizados con temas específicos y diseños únicos.",
    image: "/tematico.png",
    features: [
      "Diseños personalizados únicos",
      "Temas variados disponibles",
      "Experiencia inmersiva completa",
      "Elementos visuales atractivos",
      "Sonidos temáticos opcionales",
      "Iluminación LED integrada",
    ],
    detailedDescription:
      "Los tableros Plinko Temáticos transforman la experiencia de juego tradicional en una aventura inmersiva. Cada tablero es diseñado cuidadosamente para transportar a los jugadores a mundos fantásticos, desde aventuras espaciales hasta exploraciones submarinas. Estos tableros no solo entretienen, sino que también educan y estimulan la imaginación.",
    specifications: [
      "Dimensiones: 130cm x 90cm x 20cm",
      "Material: Madera laminada con acabados temáticos",
      "Elementos decorativos: Resina y acrílico",
      "Sistema de iluminación: LED programable",
      "Peso: 30kg aproximadamente",
      "Temas disponibles: +15 opciones",
    ],
    applications: [
      "Parques temáticos",
      "Museos interactivos",
      "Centros de entretenimiento",
      "Eventos especiales",
      "Exposiciones educativas",
      "Campamentos de verano",
    ],
  },
  {
    id: "profesional",
    name: "Profesional",
    title: "Tablero Plinko Profesional",
    description: "Tableros de alta calidad para uso comercial y eventos especiales.",
    image: "/prof.png",
    features: [
      "Materiales premium de alta gama",
      "Durabilidad superior certificada",
      "Diseño profesional elegante",
      "Sistema de puntuación digital",
      "Garantía extendida incluida",
      "Soporte técnico especializado",
    ],
    detailedDescription:
      "El tablero Plinko Profesional está diseñado para satisfacer las demandas más exigentes del sector comercial. Construido con materiales de la más alta calidad y tecnología avanzada, este tablero ofrece una experiencia de juego premium que impresiona tanto a operadores como a usuarios. Su diseño sofisticado y funcionalidad superior lo convierten en la elección ideal para establecimientos de alto nivel.",
    specifications: [
      "Dimensiones: 150cm x 100cm x 25cm",
      "Material: Madera noble con acabados de lujo",
      "Sistema digital: Pantalla LCD integrada",
      "Conectividad: WiFi y Bluetooth",
      "Peso: 45kg aproximadamente",
      "Certificaciones: CE, ISO 9001",
    ],
    applications: [
      "Centros de entretenimiento premium",
      "Hoteles y resorts",
      "Eventos corporativos de alto nivel",
      "Ferias comerciales",
      "Casinos y salas de juego",
      "Centros comerciales exclusivos",
    ],
  },
  {
    id: "educativo",
    name: "Educativo",
    title: "Tablero Plinko Educativo",
    description: "Diseñados específicamente para entornos educativos y aprendizaje.",
    image: "/edu.png",
    features: [
      "Enfoque pedagógico especializado",
      "Materiales seguros certificados",
      "Fácil mantenimiento y limpieza",
      "Guías didácticas incluidas",
      "Adaptable a diferentes edades",
      "Conceptos STEM integrados",
    ],
    detailedDescription:
      "Nuestro tablero Plinko Educativo ha sido desarrollado en colaboración con educadores y pedagogos para maximizar su potencial como herramienta de aprendizaje. Diseñado para enseñar conceptos de física, matemáticas y probabilidad de manera práctica y divertida, este tablero convierte el aula en un laboratorio interactivo donde los estudiantes aprenden experimentando.",
    specifications: [
      "Dimensiones: 100cm x 70cm x 12cm",
      "Material: Madera ecológica certificada",
      "Elementos didácticos: Números y símbolos integrados",
      "Seguridad: Bordes redondeados, materiales no tóxicos",
      "Peso: 18kg aproximadamente",
      "Certificación educativa: Ministerio de Educación",
    ],
    applications: [
      "Aulas de primaria y secundaria",
      "Laboratorios de ciencias",
      "Centros de educación especial",
      "Bibliotecas públicas",
      "Museos de ciencias",
      "Programas de educación no formal",
    ],
  },
]

export function getBoardTypeById(id: string) {
  return boardTypes.find((board) => board.id === id)
}

export function getAllBoardTypes() {
  return boardTypes
}
