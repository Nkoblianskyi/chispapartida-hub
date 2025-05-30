import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(254, 215, 170, 0.3), rgba(253, 186, 116, 0.4)), url(/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#7c2d12",
      }}
      className="fade-in"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "2rem", borderRadius: "2rem" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
          }}
          className="slide-in-left float"
        >
          ChispaPartida Hub
        </h1>
        <p
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)",
            color: "#92400e",
          }}
          className="slide-in-right"
        >
          Desarrolladores y diseñadores especializados en juegos Plinko. Creamos experiencias únicas e innovadoras que
          cautivan a los jugadores y fomentan el aprendizaje.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            backgroundColor: "#fb923c",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontSize: "1.125rem",
            fontWeight: "600",
            boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.2)",
          }}
          className="hover:bg-orange-500 btn-animate pulse-soft"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  )
}
