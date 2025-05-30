"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
      acceptTerms: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      {/* Hero Section */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fef7ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1f2937" }}>
            Contáctanos
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            ¿Listo para crear tu proyecto Plinko ideal? Estamos aquí para ayudarte a convertir tu visión en realidad.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section style={{ padding: "3rem 0", backgroundColor: "#fef7ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fef7ed", borderRadius: "0.5rem" }}
              className="stagger-item"
            >
              <Mail size={48} style={{ color: "#ea580c", margin: "0 auto 1rem" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
                Email
              </h3>
              <p style={{ color: "#6b7280" }}>info@chispapartidahub.com</p>
            </div>

            <div
              style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fef7ed", borderRadius: "0.5rem" }}
              className="stagger-item"
            >
              <Phone size={48} style={{ color: "#ea580c", margin: "0 auto 1rem" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
                Teléfono
              </h3>
              <p style={{ color: "#6b7280" }}>+34 688 284 527</p>
            </div>

            <div
              style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fef7ed", borderRadius: "0.5rem" }}
              className="stagger-item"
            >
              <MapPin size={48} style={{ color: "#ea580c", margin: "0 auto 1rem" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
                Oficina
              </h3>
              <p style={{ color: "#6b7280" }}>
                Carrer de Provença, 112
                <br />
                08029 Barcelona, España
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem",
                backgroundColor: "#fed7aa",
                borderRadius: "0.5rem",
              }}
              className="stagger-item"
            >
              <Clock size={24} style={{ color: "#ea580c" }} />
              <div>
                <h4 style={{ fontWeight: "600", color: "#1f2937" }}>Horario de Atención</h4>
                <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.5rem",
                backgroundColor: "#fef3c7",
                borderRadius: "0.5rem",
              }}
              className="stagger-item"
            >
              <MessageCircle size={24} style={{ color: "#f59e0b" }} />
              <div>
                <h4 style={{ fontWeight: "600", color: "#1f2937" }}>Respuesta Rápida</h4>
                <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Respondemos en 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "3rem 0", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
              Cuéntanos sobre tu Proyecto
            </h2>
            <p style={{ color: "#6b7280" }}>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
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
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
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
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
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
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="projectType"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
                >
                  Tipo de Proyecto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.375rem",
                    fontSize: "1rem",
                    backgroundColor: "white",
                  }}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="clasico">Tablero Clásico</option>
                  <option value="tematico">Tablero Temático</option>
                  <option value="profesional">Tablero Profesional</option>
                  <option value="educativo">Tablero Educativo</option>
                  <option value="personalizado">Diseño Personalizado</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "#1f2937" }}
              >
                Descripción del Proyecto *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos más detalles sobre tu proyecto, requisitos específicos, fechas importantes, etc."
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "2rem" }}>
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
                . *
              </label>
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "1rem",
                backgroundColor: "#ea580c",
                color: "white",
                border: "none",
                borderRadius: "0.375rem",
                fontSize: "1.125rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
              className="hover:bg-orange-700 btn-animate"
            >
              <Send size={20} />
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {isSubmitted && (
        <>
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
              maxWidth: "400px",
              width: "90%",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#dcfce7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <Send size={24} style={{ color: "#16a34a" }} />
              </div>
            </div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
              ¡Solicitud Enviada!
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
              Hemos recibido tu solicitud. Nuestro equipo la revisará y te contactará dentro de las próximas 24 horas.
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              Mientras tanto, puedes explorar nuestros proyectos anteriores en la sección de portfolio.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
