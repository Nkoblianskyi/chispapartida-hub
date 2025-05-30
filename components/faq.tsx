"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué materiales utilizan para construir los tableros?",
      answer:
        "Utilizamos materiales de alta calidad como madera contrachapada, acrílico resistente y componentes metálicos duraderos. Todos nuestros materiales son seguros y cumplen con las normativas europeas de seguridad.",
    },
    {
      question: "¿Cuánto tiempo tarda el desarrollo de un tablero personalizado?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Generalmente, un tablero estándar tarda entre 2-3 semanas, mientras que proyectos personalizados pueden requerir 4-6 semanas para completarse.",
    },
    {
      question: "¿Ofrecen servicios de instalación?",
      answer:
        "Sí, ofrecemos servicios completos de instalación en toda España. Nuestro equipo técnico se encarga de la instalación profesional y proporciona capacitación sobre el uso y mantenimiento.",
    },
    {
      question: "¿Qué garantía tienen los tableros?",
      answer:
        "Todos nuestros tableros incluyen una garantía de 2 años contra defectos de fabricación. Los modelos premium incluyen garantía extendida de hasta 5 años.",
    },
    {
      question: "¿Pueden crear diseños completamente personalizados?",
      answer:
        "Absolutamente. Nos especializamos en crear diseños únicos según las especificaciones del cliente. Trabajamos estrechamente contigo para desarrollar el tablero perfecto para tus necesidades.",
    },
    {
      question: "¿Qué mantenimiento requieren los tableros?",
      answer:
        "Nuestros tableros requieren mantenimiento mínimo. Recomendamos limpieza regular con productos suaves y revisiones periódicas de las piezas móviles. Proporcionamos un manual de mantenimiento detallado.",
    },
  ]

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }} className="fade-in">
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Preguntas Frecuentes
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207" }}>
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #fef3e2",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  textAlign: "left",
                  backgroundColor: openIndex === index ? "#fffbf7" : "white",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#7c2d12",
                  transition: "all 0.3s ease",
                }}
                className="hover:bg-orange-50"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {openIndex === index && (
                <div
                  style={{
                    padding: "0 1.5rem 1.5rem",
                    backgroundColor: "#fffbf7",
                    borderTop: "1px solid #fef3e2",
                  }}
                >
                  <p style={{ color: "#a16207", lineHeight: "1.6" }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
