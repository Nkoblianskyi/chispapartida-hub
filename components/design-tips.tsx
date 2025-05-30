import { Lightbulb, Palette, Settings, Target } from "lucide-react"

export default function DesignTips() {
  const tips = [
    {
      icon: Target,
      title: "Define tu Objetivo",
      description: "Antes de diseñar, define claramente el propósito: entretenimiento, educación, o uso comercial.",
    },
    {
      icon: Palette,
      title: "Elige Colores Atractivos",
      description:
        "Utiliza colores vibrantes que llamen la atención pero que no sean demasiado agresivos para la vista.",
    },
    {
      icon: Settings,
      title: "Considera la Funcionalidad",
      description: "El diseño debe ser estéticamente agradable pero también funcional y fácil de mantener.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Creativa",
      description: "No tengas miedo de experimentar con elementos únicos que hagan tu tablero memorable.",
    },
  ]

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }} className="fade-in">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Consejos de Diseño
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Aprende de nuestra experiencia con estos consejos esenciales para crear tableros Plinko exitosos.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {tips.map((tip, index) => (
            <div
              key={index}
              style={{
                padding: "2rem",
                backgroundColor: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
                border: "1px solid #fef3e2",
                textAlign: "center",
              }}
              className="hover-scale stagger-item"
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <tip.icon size={48} style={{ color: "#fb923c" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                {tip.title}
              </h3>
              <p style={{ color: "#a16207", lineHeight: "1.6" }}>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
