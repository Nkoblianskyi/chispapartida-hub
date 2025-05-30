"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fefefe" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#7c2d12" }}>
            Contáctanos
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#a16207", maxWidth: "600px", margin: "0 auto" }}>
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem", color: "#1f2937" }}>
              Información de Contacto
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    padding: "0.75rem",
                    backgroundColor: "#fef3e2",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={20} style={{ color: "#fb923c" }} />
                </div>
                <div>
                  <p style={{ fontWeight: "600", color: "#1f2937" }}>Email</p>
                  <p style={{ color: "#6b7280" }}>info@chispapartidahub.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    padding: "0.75rem",
                    backgroundColor: "#fed7aa",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={20} style={{ color: "#fb923c" }} />
                </div>
                <div>
                  <p style={{ fontWeight: "600", color: "#1f2937" }}>Teléfono</p>
                  <p style={{ color: "#6b7280" }}>+34 688 284 527</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    padding: "0.75rem",
                    backgroundColor: "#fecaca",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={20} style={{ color: "#fb923c" }} />
                </div>
                <div>
                  <p style={{ fontWeight: "600", color: "#1f2937" }}>Dirección</p>
                  <p style={{ color: "#6b7280" }}>
                    Carrer de Provença, 112
                    <br />
                    08029 Barcelona, España
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                backgroundColor: "white",
                border: "1px solid #fef3e2",
                borderRadius: "1rem",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#7c2d12" }}
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#7c2d12" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#7c2d12" }}
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#7c2d12" }}
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  style={{ marginTop: "0.25rem" }}
                />
                <label htmlFor="acceptTerms" style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: "1.4" }}>
                  Acepto el procesamiento de mis datos personales de acuerdo con la{" "}
                  <a href="/privacy" style={{ color: "#3b82f6", textDecoration: "underline" }}>
                    Política de Privacidad
                  </a>{" "}
                  y la{" "}
                  <a href="/cookies" style={{ color: "#3b82f6", textDecoration: "underline" }}>
                    Política de Cookies
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#fb923c",
                  color: "white",
                  border: "none",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                className="hover:bg-orange-500 btn-animate"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {isSubmitted && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#fef3e2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <Send size={24} style={{ color: "#fb923c" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
              ¡Mensaje Enviado!
            </h3>
            <p style={{ color: "#6b7280" }}>Gracias por contactarnos. Te responderemos pronto.</p>
          </div>
        )}

        {isSubmitted && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          />
        )}
      </div>
    </section>
  )
}
