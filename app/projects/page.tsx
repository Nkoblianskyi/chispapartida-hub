import Link from "next/link"
import { projects } from "@/lib/mock-data"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      {/* Hero Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
            Nuestros Proyectos
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Explora nuestra colección de tableros Plinko únicos, cada uno diseñado con pasión y precisión.
          </p>
        </div>
      </section>

      {/* Projects Grid - Staggered Layout */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fefefe" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "3rem",
                  alignItems: "center",
                }}
                className="stagger-item"
              >
                {index % 2 === 0 ? (
                  // Image on left, text on right
                  <>
                    <div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "1rem",
                          boxShadow: "0 10px 15px -3px rgba(251, 146, 60, 0.1)",
                        }}
                        className="hover-scale"
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#a16207",
                            fontSize: "0.875rem",
                          }}
                        >
                          <Calendar size={14} />
                          <span>
                            {project.month} {project.year}
                          </span>
                        </div>
                      </div>

                      <h3 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                        {project.title}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "1.5rem",
                          color: "#a16207",
                          fontSize: "0.875rem",
                        }}
                      >
                        <User size={14} />
                        <span>{project.client}</span>
                      </div>

                      <p style={{ color: "#a16207", lineHeight: "1.6", marginBottom: "2rem", fontSize: "1.125rem" }}>
                        {project.description}
                      </p>

                      <Link
                        href={`/projects/${project.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.75rem 1.5rem",
                          backgroundColor: "#fb923c",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "0.5rem",
                          fontWeight: "500",
                          transition: "all 0.3s",
                        }}
                        className="hover:bg-orange-500 btn-animate"
                      >
                        Ver Detalles
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </>
                ) : (
                  // Text on left, image on right
                  <>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#a16207",
                            fontSize: "0.875rem",
                          }}
                        >
                          <Calendar size={14} />
                          <span>
                            {project.month} {project.year}
                          </span>
                        </div>
                      </div>

                      <h3 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                        {project.title}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "1.5rem",
                          color: "#a16207",
                          fontSize: "0.875rem",
                        }}
                      >
                        <User size={14} />
                        <span>{project.client}</span>
                      </div>

                      <p style={{ color: "#a16207", lineHeight: "1.6", marginBottom: "2rem", fontSize: "1.125rem" }}>
                        {project.description}
                      </p>

                      <Link
                        href={`/projects/${project.id}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.75rem 1.5rem",
                          backgroundColor: "#fb923c",
                          color: "white",
                          textDecoration: "none",
                          borderRadius: "0.5rem",
                          fontWeight: "500",
                          transition: "all 0.3s",
                        }}
                        className="hover:bg-orange-500 btn-animate"
                      >
                        Ver Detalles
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "1rem",
                          boxShadow: "0 10px 15px -3px rgba(251, 146, 60, 0.1)",
                        }}
                        className="hover-scale"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            ¿Tienes una Idea en Mente?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", marginBottom: "2rem" }}>
            Cada proyecto es único. Cuéntanos tu visión y colaboremos para crear algo extraordinario juntos.
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
            }}
            className="hover:bg-orange-500 btn-animate"
          >
            Colaborar con Nosotros
          </Link>
        </div>
      </section>
    </div>
  )
}
