"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      style={{ backgroundColor: "#fed7aa", color: "#7c2d12", boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.1)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "#7c2d12", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
            ChispaPartida Hub
          </Link>

          <nav style={{ display: "none" }} className="md:block">
            <div style={{ display: "flex", gap: "2rem" }}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "#7c2d12", transition: "all 0.3s" }}
                className="hover:text-orange-800 transition-all duration-300 transform hover:scale-105"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "#7c2d12", transition: "all 0.3s" }}
                className="hover:text-orange-800 transition-all duration-300 transform hover:scale-105"
              >
                Nosotros
              </Link>
              <Link
                href="/history"
                style={{ textDecoration: "none", color: "#7c2d12", transition: "all 0.3s" }}
                className="hover:text-orange-800 transition-all duration-300 transform hover:scale-105"
              >
                Historia
              </Link>
              <Link
                href="/projects"
                style={{ textDecoration: "none", color: "#7c2d12", transition: "all 0.3s" }}
                className="hover:text-orange-800 transition-all duration-300 transform hover:scale-105"
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "#7c2d12", transition: "all 0.3s" }}
                className="hover:text-orange-800 transition-all duration-300 transform hover:scale-105"
              >
                Contacto
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ display: "block", background: "none", border: "none", color: "#7c2d12" }}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav style={{ marginTop: "1rem", display: "block" }} className="md:hidden">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link href="/" style={{ textDecoration: "none", color: "#7c2d12" }} onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link
                href="/about"
                style={{ textDecoration: "none", color: "#7c2d12" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/history"
                style={{ textDecoration: "none", color: "#7c2d12" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Historia
              </Link>
              <Link
                href="/projects"
                style={{ textDecoration: "none", color: "#7c2d12" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/contact"
                style={{ textDecoration: "none", color: "#7c2d12" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
