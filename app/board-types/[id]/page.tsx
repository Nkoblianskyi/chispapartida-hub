import { notFound } from "next/navigation"
import Link from "next/link"
import { getBoardTypeById, getAllBoardTypes } from "@/lib/board-types-data"
import { ArrowLeft, CheckCircle, Settings, Users, Lightbulb } from "lucide-react"

interface BoardTypePageProps {
    params: {
        id: string
    }
}

export default function BoardTypePage({ params }: BoardTypePageProps) {
    const boardType = getBoardTypeById(params.id)

    if (!boardType) {
        notFound()
    }

    return (
        <div style={{ paddingTop: "2rem" }} className="page-transition">
            {/* Back Button */}
            <section style={{ padding: "1rem 0", backgroundColor: "#fffbf7" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                    <Link
                        href="/#tipos-tableros"
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
                        Volver a Tipos de Tableros
                    </Link>
                </div>
            </section>

            {/* Hero Section */}
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
                            <span
                                style={{
                                    padding: "0.5rem 1rem",
                                    backgroundColor: "#fef3e2",
                                    color: "#92400e",
                                    borderRadius: "9999px",
                                    fontSize: "0.875rem",
                                    fontWeight: "500",
                                    marginBottom: "1rem",
                                    display: "inline-block",
                                }}
                            >
                                Tablero {boardType.name}
                            </span>

                            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#7c2d12" }}>
                                {boardType.title}
                            </h1>

                            <p style={{ fontSize: "1.125rem", color: "#a16207", lineHeight: "1.6", marginBottom: "2rem" }}>
                                {boardType.detailedDescription}
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
                                Solicitar Información
                            </Link>
                        </div>

                        <div>
                            <img
                                src={boardType.image || "/placeholder.svg"}
                                alt={boardType.title}
                                style={{
                                    width: "100%",
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

            {/* Features Section */}
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
                        Características Principales
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {boardType.features.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "1.5rem",
                                    backgroundColor: "white",
                                    borderRadius: "1rem",
                                    boxShadow: "0 2px 4px -1px rgba(251, 146, 60, 0.1)",
                                    border: "1px solid #fef3e2",
                                }}
                                className="stagger-item hover-scale"
                            >
                                <CheckCircle size={24} style={{ color: "#fb923c", flexShrink: 0 }} />
                                <span style={{ color: "#7c2d12", fontSize: "1.125rem" }}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section style={{ padding: "3rem 0", backgroundColor: "#fffbf7" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                            gap: "3rem",
                        }}
                    >
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                                <Settings size={32} style={{ color: "#fb923c" }} />
                                <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#7c2d12" }}>Especificaciones Técnicas</h2>
                            </div>

                            <div
                                style={{ backgroundColor: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid #fef3e2" }}
                            >
                                {boardType.specifications.map((spec, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: "0.75rem 0",
                                            borderBottom: index < boardType.specifications.length - 1 ? "1px solid #fef3e2" : "none",
                                        }}
                                    >
                                        <span style={{ color: "#7c2d12", fontSize: "1rem" }}>{spec}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                                <Users size={32} style={{ color: "#fb923c" }} />
                                <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#7c2d12" }}>Aplicaciones Ideales</h2>
                            </div>

                            <div
                                style={{ backgroundColor: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid #fef3e2" }}
                            >
                                {boardType.applications.map((application, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            padding: "0.75rem 0",
                                            borderBottom: index < boardType.applications.length - 1 ? "1px solid #fef3e2" : "none",
                                        }}
                                    >
                                        <Lightbulb size={16} style={{ color: "#fb923c", flexShrink: 0 }} />
                                        <span style={{ color: "#7c2d12", fontSize: "1rem" }}>{application}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Board Types Section */}
            <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
                            Otros Tipos de Tableros
                        </h2>
                        <p style={{ fontSize: "1.125rem", color: "#a16207" }}>Explora nuestras otras opciones de tableros Plinko</p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {getAllBoardTypes()
                            .filter((board) => board.id !== boardType.id)
                            .map((board) => (
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
                                            style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                        />
                                        <div style={{ padding: "1.5rem" }}>
                                            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#7c2d12" }}>
                                                {board.name}
                                            </h3>
                                            <p style={{ color: "#a16207", lineHeight: "1.6", fontSize: "0.875rem" }}>{board.description}</p>
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
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
                        ¿Interesado en este Tablero?
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "#a16207", marginBottom: "2rem" }}>
                        Contáctanos para obtener más información sobre el tablero {boardType.name} y cómo puede adaptarse a tus
                        necesidades específicas.
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
                            Solicitar Información
                        </Link>
                        <Link
                            href="/#tipos-tableros"
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
                            Ver Todos los Tipos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Generate static params for all board types
export async function generateStaticParams() {
    const boardTypes = getAllBoardTypes()

    return boardTypes.map((board) => ({
        id: board.id,
    }))
}

// Generate metadata for each board type page
export async function generateMetadata({ params }: BoardTypePageProps) {
    const boardType = getBoardTypeById(params.id)

    if (!boardType) {
        return {
            title: "Tablero no encontrado",
        }
    }

    return {
        title: `${boardType.title} - ChispaPartida Hub`,
        description: boardType.description,
    }
}
