import Link from "next/link"
import { getAllBoardTypes } from "@/lib/board-types-data"

export default function BoardTypes() {
  const boardTypes = getAllBoardTypes()

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }} className="fade-in">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Tipos de Tableros
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            Ofrecemos una amplia variedad de tableros Plinko para satisfacer diferentes necesidades y preferencias.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {boardTypes.map((board, index) => (
            <Link key={board.id} href={`/board-types/${board.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  backgroundColor: "#fffbf7",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)",
                  border: "1px solid #fef3e2",
                  transition: "all 0.3s ease",
                }}
                className="hover-scale stagger-item"
              >
                <img
                  src={board.image || "/placeholder.svg"}
                  alt={`Tablero ${board.name}`}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                    {board.name}
                  </h3>
                  <p style={{ color: "#a16207", marginBottom: "1.5rem", lineHeight: "1.6" }}>{board.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
                    {board.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                          color: "#92400e",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            backgroundColor: "#fb923c",
                            borderRadius: "50%",
                            marginRight: "0.75rem",
                          }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#fb923c",
                      color: "white",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    Ver Detalles →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
