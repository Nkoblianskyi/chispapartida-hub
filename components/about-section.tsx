import { Users, Palette, Code } from "lucide-react"

export default function AboutSection() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }} className="fade-in">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Sobre Nosotros
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Somos un equipo apasionado de desarrolladores y diseñadores especializados en la creación de juegos Plinko
            innovadores.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
              border: "1px solid #fef3e2",
            }}
            className="hover-scale stagger-item"
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <Code size={48} style={{ color: "#fb923c" }} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
              Desarrollo
            </h3>
            <p style={{ color: "#a16207", lineHeight: "1.6" }}>
              Utilizamos las últimas tecnologías para crear juegos Plinko robustos, escalables y con un rendimiento
              excepcional.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
              border: "1px solid #fef3e2",
            }}
            className="hover-scale stagger-item"
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <Palette size={48} style={{ color: "#fb923c" }} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>Diseño</h3>
            <p style={{ color: "#a16207", lineHeight: "1.6" }}>
              Creamos diseños atractivos y funcionales que mejoran la experiencia del usuario y hacen que cada juego sea
              memorable.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
              border: "1px solid #fef3e2",
            }}
            className="hover-scale stagger-item"
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <Users size={48} style={{ color: "#fb923c" }} />
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
              Experiencia
            </h3>
            <p style={{ color: "#a16207", lineHeight: "1.6" }}>
              Con años de experiencia en el desarrollo de juegos, entendemos qué hace que un juego Plinko sea
              verdaderamente exitoso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
