"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "#fed7aa",
        color: "#7c2d12",
        padding: "1rem",
        zIndex: 1000,
        boxShadow: "0 -4px 6px -1px rgba(251, 146, 60, 0.1)",
        animation: "slideInUp 0.5s ease-out",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <p style={{ marginBottom: "0.5rem" }}>Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.</p>
          <p style={{ fontSize: "0.875rem", color: "#a16207" }}>
            Al continuar navegando, aceptas nuestra{" "}
            <Link href="/cookies" style={{ color: "#7c2d12", textDecoration: "underline" }}>
              Política de Cookies
            </Link>{" "}
            y{" "}
            <Link href="/privacy" style={{ color: "#7c2d12", textDecoration: "underline" }}>
              Política de Privacidad
            </Link>
            .
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            onClick={rejectCookies}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "transparent",
              border: "1px solid #a16207",
              color: "#7c2d12",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
            className="hover:bg-orange-100 transition-colors duration-300"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#fb923c",
              border: "none",
              color: "white",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
            className="hover:bg-orange-500 btn-animate"
          >
            Aceptar
          </button>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              background: "none",
              border: "none",
              color: "#a16207",
              cursor: "pointer",
            }}
            className="hover:text-orange-900 transition-colors duration-300"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
