import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fdba74", color: "#7c2d12", padding: "3rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>ChispaPartida Hub</h3>
            <p style={{ color: "#a16207", lineHeight: "1.6" }}>
              Desarrolladores y diseñadores especializados en juegos Plinko. Creamos experiencias únicas e innovadoras.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Enlaces</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link
                href="/about"
                style={{ color: "#a16207", textDecoration: "none" }}
                className="hover:text-orange-900 transition-colors duration-300"
              >
                Nosotros
              </Link>
              <Link
                href="/history"
                style={{ color: "#a16207", textDecoration: "none" }}
                className="hover:text-orange-900 transition-colors duration-300"
              >
                Historia
              </Link>
              <Link
                href="/projects"
                style={{ color: "#a16207", textDecoration: "none" }}
                className="hover:text-orange-900 transition-colors duration-300"
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                style={{ color: "#a16207", textDecoration: "none" }}
                className="hover:text-orange-900 transition-colors duration-300"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "#a16207" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Mail size={16} />
                <span>info@chispapartidahub.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} />
                <span>+34 688 284 527</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <MapPin size={16} />
                <span>Barcelona, España</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #a16207",
            marginTop: "2rem",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#a16207" }}>© 2024 ChispaPartida Hub. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link
              href="/privacy"
              style={{ color: "#a16207", textDecoration: "none", fontSize: "0.875rem" }}
              className="hover:text-orange-900 transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies"
              style={{ color: "#a16207", textDecoration: "none", fontSize: "0.875rem" }}
              className="hover:text-orange-900 transition-colors duration-300"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
