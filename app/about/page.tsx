import { Users, Award, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Proyectos Completados", value: "150+" },
    { icon: Award, label: "Años de Experiencia", value: "8+" },
    { icon: Clock, label: "Tiempo Promedio de Entrega", value: "3 semanas" },
    { icon: Globe, label: "Países Atendidos", value: "12" },
  ]

  const team = [
    {
      name: "Carlos Martínez",
      role: "Director Creativo",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista en diseño de experiencias de juego con más de 10 años en la industria.",
    },
    {
      name: "Ana García",
      role: "Ingeniera de Desarrollo",
      image: "/placeholder.svg?height=300&width=300",
      description: "Experta en mecánica de juegos y desarrollo de sistemas interactivos.",
    },
    {
      name: "Miguel Rodríguez",
      role: "Especialista en Fabricación",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maestro artesano con experiencia en materiales premium y técnicas avanzadas.",
    },
  ]

  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      {/* Hero Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fef7ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1f2937" }}>
            Sobre ChispaPartida Hub
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#6b7280", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Somos una empresa española especializada en el diseño y desarrollo de juegos Plinko innovadores. Desde 2016,
            hemos estado creando experiencias únicas que combinan entretenimiento, educación y calidad artesanal.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: "center", padding: "2rem" }} className="stagger-item">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                  <stat.icon size={48} style={{ color: "#ea580c" }} />
                </div>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "0.5rem" }}>
                  {stat.value}
                </div>
                <div style={{ color: "#6b7280", fontSize: "1.125rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fef7ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1f2937" }}>
                Nuestra Misión
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#6b7280", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                En ChispaPartida Hub, creemos que los juegos tienen el poder de unir a las personas, educar y crear
                momentos memorables. Nuestra misión es diseñar y fabricar tableros Plinko que no solo entretengan, sino
                que también inspiren creatividad y aprendizaje.
              </p>
              <p style={{ fontSize: "1.125rem", color: "#6b7280", lineHeight: "1.6" }}>
                Cada proyecto que emprendemos está impulsado por la pasión por la excelencia y el compromiso de crear
                experiencias educativas y de entretenimiento excepcionales.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="/nosotros.png"
                alt="Nuestro equipo trabajando"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
              Nuestro Equipo
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
              Conoce a los profesionales apasionados que hacen posible cada proyecto.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {team.map((member, index) => (
              <div
                key={index}
                style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fef7ed", borderRadius: "0.5rem" }}
                className="hover-scale stagger-item"
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
                  {member.name}
                </h3>
                <p style={{ color: "#3b82f6", fontWeight: "500", marginBottom: "1rem" }}>{member.role}</p>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
              Nuestros Valores
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>Calidad</h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Utilizamos solo los mejores materiales y técnicas de fabricación para garantizar productos duraderos.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Innovación
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Constantemente exploramos nuevas ideas y tecnologías para crear experiencias únicas.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
                Compromiso
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Nos dedicamos completamente a cada proyecto, asegurando la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
