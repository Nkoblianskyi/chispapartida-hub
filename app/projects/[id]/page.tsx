import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/lib/mock-data"
import { Calendar, User, ArrowLeft, CheckCircle } from "lucide-react"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      {/* Back Button */}
      <section style={{ padding: "1rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fb923c",
              textDecoration: "none",
              fontWeight: "500",
            }}
            className="hover:text-orange-600"
          >
            <ArrowLeft size={20} />
            Volver a Proyectos
          </Link>
        </div>
      </section>

      {/* Project Hero */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fffbf7" }}>
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
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
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
                  {project.category}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#a16207" }}>
                  <Calendar size={16} />
                  <span>
                    {project.month} {project.year}
                  </span>
                </div>
              </div>

              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
                {project.title}
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                  color: "#a16207",
                }}
              >
                <User size={16} />
                <span>Cliente: {project.client}</span>
              </div>

              <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6" }}>{project.description}</p>
            </div>

            <div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fefefe" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              color: "#7c2d12",
              textAlign: "center",
            }}
          >
            Características del Proyecto
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {project.features.map((feature, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem",
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  boxShadow: "0 2px 4px -1px rgba(251, 146, 60, 0.1)",
                  border: "1px solid #fef3e2",
                }}
                className="stagger-item"
              >
                <CheckCircle size={20} style={{ color: "#fb923c", flexShrink: 0 }} />
                <span style={{ color: "#7c2d12" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            ¿Te Inspiró Este Proyecto?
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#a16207", marginBottom: "2rem" }}>
            Podemos colaborar contigo para crear algo similar o completamente único. Cuéntanos tu visión.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
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
              }}
              className="hover:bg-orange-500 btn-animate"
            >
              Colaborar en Mi Proyecto
            </Link>
            <Link
              href="/projects"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                backgroundColor: "transparent",
                color: "#fb923c",
                textDecoration: "none",
                borderRadius: "0.5rem",
                fontSize: "1.125rem",
                fontWeight: "600",
                border: "1px solid #fb923c",
              }}
              className="hover:bg-orange-50 btn-animate"
            >
              Ver Más Proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
