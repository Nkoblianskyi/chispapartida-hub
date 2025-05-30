import Link from "next/link"
import { getAllBoardTypes } from "@/lib/board-types-data"
import { ArrowLeft } from "lucide-react"

export default function BoardTypesPage() {
    const boardTypes = getAllBoardTypes()

    return (
        <div style={{ paddingTop: "2rem" }} className="page-transition">
            {/* Back Button */}
            <section style={{ padding: "1rem 0", backgroundColor: "#fffbf7" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                    <Link
                        href="/"
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
                        Volver al Inicio
                    </Link>
                </div>
            </section>

            {/* Hero Section */}
            <section style={{ padding: "3rem 0", backgroundColor: "#fffbf7" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
                        Tipos de Tableros Plinko
                    </h1>
                    <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "800px", margin: "0 auto" }}>
                        Descubre nuestra completa gama de tableros Plinko, cada uno diseñado para satisfacer necesidades específicas
                        y crear experiencias únicas de entretenimiento y aprendizaje.
                    </p>
                </div>
            </section>

            {/* Board Types Grid */}
            <section style={{ padding: "3rem 0", backgroundColor: "#fefefe" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                        {boardTypes.map((board, index) => (
                            <Link
                                key={board.id}
                                href={`/board-types/${board.id}`}
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
                                        src={board.image || "/placeholder.svg"}
                                        alt={board.title}
                                        style={{ width: "100%", height: "250px", objectFit: "cover" }}
                                    />
                                    <div style={{ padding: "2rem" }}>
                                        <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#7c2d12" }}>
                                            {board.title}
                                        </h3>
                                        <p style={{ color: "#a16207", lineHeight: "1.6", marginBottom: "1.5rem" }}>{board.description}</p>
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
                                                padding: "0.75rem 1.5rem",
                                                backgroundColor: "#fb923c",
                                                color: "white",
                                                borderRadius: "0.5rem",
                                                fontSize: "1rem",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Ver Detalles Completos →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "5rem 0", backgroundColor: "#fffbf7" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
                        ¿No encuentras lo que buscas?
                    </h2>
                    <p style={{ fontSize: "1.25rem", color: "#a16207", marginBottom: "2rem" }}>
                        También creamos tableros completamente personalizados. Cuéntanos tu idea y la haremos realidad.
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
                        Solicitar Tablero Personalizado
                    </Link>
                </div>
            </section>
        </div>
    )
}
