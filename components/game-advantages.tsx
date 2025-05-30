import { Brain, Heart, Users, Trophy } from "lucide-react"

export default function GameAdvantages() {
  const advantages = [
    {
      icon: Brain,
      title: "Desarrolla Habilidades",
      description: "Mejora la coordinación ojo-mano, el pensamiento estratégico y la comprensión de la física básica.",
    },
    {
      icon: Heart,
      title: "Entretenimiento Sano",
      description: "Proporciona diversión limpia y saludable para toda la familia, sin elementos nocivos.",
    },
    {
      icon: Users,
      title: "Social e Interactivo",
      description: "Perfecto para jugar en grupo, fomentando la interacción social y la competencia amistosa.",
    },
    {
      icon: Trophy,
      title: "Fácil de Aprender",
      description:
        "Reglas simples que cualquiera puede entender, pero con suficiente profundidad para mantener el interés.",
    },
  ]

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }} className="fade-in">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Ventajas del Juego Plinko
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Descubre por qué Plinko es más que un simple juego: es una experiencia completa de entretenimiento y
            aprendizaje.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              style={{
                padding: "2rem",
                backgroundColor: "white",
                border: "1px solid #fef3e2",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
                textAlign: "center",
              }}
              className="hover-scale stagger-item"
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <advantage.icon size={48} style={{ color: "#fb923c" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                {advantage.title}
              </h3>
              <p style={{ color: "#a16207", lineHeight: "1.6" }}>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
