import Link from "next/link"
import { projects } from "@/lib/mock-data"

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }} className="fade-in">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Nuestros Proyectos
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Explora algunos de nuestros proyectos más destacados y descubre la calidad de nuestro trabajo.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
                  border: "1px solid #fef3e2",
                }}
                className="hover-scale stagger-item"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        backgroundColor: "#fef3e2",
                        color: "#92400e",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ color: "#a16207", fontSize: "0.875rem" }}>{project.year}</span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#7c2d12" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "#a16207", lineHeight: "1.6" }}>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              backgroundColor: "#fb923c",
              color: "white",
              textDecoration: "none",
              borderRadius: "0.5rem",
              fontSize: "1.125rem",
              fontWeight: "600",
              transition: "background-color 0.3s",
            }}
            className="hover:bg-orange-500 btn-animate"
          >
            Explorar Todos los Proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
