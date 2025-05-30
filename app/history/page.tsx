import { Clock, Lightbulb, Users, Zap } from "lucide-react"

export default function HistoryPage() {
  const timeline = [
    {
      year: "1983",
      title: "Los Primeros Pasos",
      description:
        "El concepto de Plinko nace como un juego de entretenimiento familiar, basado en principios físicos simples pero fascinantes.",
      icon: Lightbulb,
    },
    {
      year: "1990s",
      title: "Expansión en Centros de Entretenimiento",
      description:
        "El juego se populariza en ferias y centros de entretenimiento, convirtiéndose en una atracción favorita para todas las edades.",
      icon: Users,
    },
    {
      year: "2000s",
      title: "Innovación Tecnológica",
      description:
        "Se introducen elementos digitales y sistemas de puntuación electrónicos, mejorando la experiencia interactiva.",
      icon: Zap,
    },
    {
      year: "2010s",
      title: "Aplicaciones Educativas",
      description:
        "Los educadores descubren el potencial del Plinko para enseñar física, matemáticas y probabilidad de manera divertida.",
      icon: Clock,
    },
  ]

  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      {/* Hero Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
            Historia del Plinko
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            Descubre la fascinante evolución de uno de los juegos más queridos del mundo, desde sus humildes comienzos
            hasta convertirse en una herramienta educativa y de entretenimiento global.
          </p>
        </div>
      </section>

      {/* Origins Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }}>
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
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
                Los Orígenes
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                El Plinko tiene sus raíces en los principios fundamentales de la física. Inspirado en el concepto de la
                distribución binomial y el movimiento browniano, este juego demuestra de manera visual cómo los objetos
                se comportan cuando interactúan con obstáculos.
              </p>
              <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                El nombre "Plinko" proviene del sonido característico que hacen las fichas al rebotar contra las
                clavijas, creando una experiencia auditiva única que complementa la emoción visual del juego.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <span
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fef3e2",
                    color: "#92400e",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Física Aplicada
                </span>
                <span
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fed7aa",
                    color: "#7c2d12",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Entretenimiento
                </span>
                <span
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fef7ed",
                    color: "#a16207",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  Innovación
                </span>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="/history.png"
                alt="Tablero Plinko histórico"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                className="float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
              Línea de Tiempo
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
              Un viaje a través de las décadas que marcaron la evolución del Plinko.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {timeline.map((event, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1fr auto 1fr" : "1fr auto 1fr",
                  gap: "2rem",
                  alignItems: "center",
                }}
                className="stagger-item"
              >
                {index % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: "right" }}>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem", color: "#7c2d12" }}>
                        {event.title}
                      </h3>
                      <p style={{ color: "#a16207", lineHeight: "1.6" }}>{event.description}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#fed7aa",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <event.icon size={24} style={{ color: "#7c2d12" }} />
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: "#7c2d12",
                          backgroundColor: "#fef3e2",
                          padding: "0.5rem 1rem",
                          borderRadius: "9999px",
                        }}
                      >
                        {event.year}
                      </span>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#fed7aa",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <event.icon size={24} style={{ color: "#7c2d12" }} />
                      </div>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: "#7c2d12",
                          backgroundColor: "#fef3e2",
                          padding: "0.5rem 1rem",
                          borderRadius: "9999px",
                        }}
                      >
                        {event.year}
                      </span>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem", color: "#7c2d12" }}>
                        {event.title}
                      </h3>
                      <p style={{ color: "#a16207", lineHeight: "1.6" }}>{event.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/edication.png"
                alt="Demostración científica del Plinko"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
                La Ciencia Detrás del Juego
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                El Plinko es una demostración perfecta de varios principios científicos fundamentales. Cada ficha que
                cae ilustra conceptos de probabilidad, gravedad, y distribución estadística de manera tangible y
                comprensible.
              </p>
              <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                Los educadores han adoptado este juego como una herramienta invaluable para enseñar matemáticas y
                física, ya que permite a los estudiantes ver en acción conceptos que de otra manera serían abstractos.
              </p>
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}
              >
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "#fef3e2",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <h4 style={{ fontWeight: "600", color: "#7c2d12", marginBottom: "0.5rem" }}>Probabilidad</h4>
                  <p style={{ fontSize: "0.875rem", color: "#a16207" }}>Distribución binomial visual</p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "#fed7aa",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <h4 style={{ fontWeight: "600", color: "#7c2d12", marginBottom: "0.5rem" }}>Física</h4>
                  <p style={{ fontSize: "0.875rem", color: "#a16207" }}>Gravedad y momentum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Era Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
              La Era Moderna
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "800px", margin: "0 auto" }}>
              Hoy en día, el Plinko ha evolucionado más allá de sus orígenes simples para convertirse en una plataforma
              versátil para el entretenimiento, la educación y la innovación tecnológica.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div
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
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                Entretenimiento Familiar
              </h3>
              <p style={{ color: "#a16207", lineHeight: "1.6" }}>
                Centros de entretenimiento y ferias utilizan versiones modernas con tecnología LED, sonidos interactivos
                y sistemas de puntuación digital.
              </p>
            </div>

            <div
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
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                Herramienta Educativa
              </h3>
              <p style={{ color: "#a16207", lineHeight: "1.6" }}>
                Escuelas y universidades emplean tableros Plinko para enseñar conceptos complejos de manera visual e
                interactiva.
              </p>
            </div>

            <div
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
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                Innovación Continua
              </h3>
              <p style={{ color: "#a16207", lineHeight: "1.6" }}>
                Nuevos materiales, diseños temáticos y tecnologías emergentes continúan expandiendo las posibilidades
                del Plinko.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
