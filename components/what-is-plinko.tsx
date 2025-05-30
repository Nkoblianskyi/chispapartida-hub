import Image from "next/image";

export default function WhatIsPlinko() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }} className="fade-in">
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
              ¿Qué es Plinko?
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Plinko es un juego de habilidad y estrategia donde los jugadores dejan caer fichas desde la parte superior
              de un tablero lleno de clavijas. Las fichas rebotan de manera impredecible hasta llegar a diferentes
              ranuras en la parte inferior.
            </p>
            <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Es un juego que combina elementos de física, probabilidad y entretenimiento, creando una experiencia
              emocionante y educativa para jugadores de todas las edades.
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
                className="stagger-item"
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
                className="stagger-item"
              >
                Educativo
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
                className="stagger-item"
              >
                Estratégico
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Image
              src="/e8edb8cf77a5c909041541b95dff96f2.jpg"
              alt="Ilustración del juego Plinko"
              width={400}
              height={400}
              style={{ borderRadius: "1rem", boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
