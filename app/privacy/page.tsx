export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "2rem" }} className="page-transition">
      <section style={{ padding: "3rem 0", backgroundColor: "#fef7ed" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#1f2937",
              textAlign: "center",
            }}
          >
            Política de Privacidad
          </h1>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "2rem" }}>
            Última actualización: 1 de enero de 2025
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 0", backgroundColor: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ lineHeight: "1.6", color: "#374151" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              1. Información que Recopilamos
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              En ChispaPartida Hub recopilamos información que usted nos proporciona directamente cuando:
            </p>
            <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Se pone en contacto con nosotros a través de nuestros formularios
              </li>
              <li style={{ marginBottom: "0.5rem" }}>Solicita información sobre nuestros servicios</li>
              <li style={{ marginBottom: "0.5rem" }}>Se suscribe a nuestro boletín informativo</li>
              <li style={{ marginBottom: "0.5rem" }}>Participa en encuestas o promociones</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              2. Cómo Utilizamos su Información
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>Utilizamos la información recopilada para:</p>
            <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Responder a sus consultas y solicitudes</li>
              <li style={{ marginBottom: "0.5rem" }}>Proporcionar cotizaciones y servicios personalizados</li>
              <li style={{ marginBottom: "0.5rem" }}>Enviar información relevante sobre nuestros productos</li>
              <li style={{ marginBottom: "0.5rem" }}>Mejorar nuestros servicios y experiencia del usuario</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              3. Compartir Información
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento,
              excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              4. Seguridad de los Datos
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
              personal contra el acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              5. Sus Derechos
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>Bajo el RGPD, usted tiene derecho a:</p>
            <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Acceder a sus datos personales</li>
              <li style={{ marginBottom: "0.5rem" }}>Rectificar datos inexactos</li>
              <li style={{ marginBottom: "0.5rem" }}>Solicitar la eliminación de sus datos</li>
              <li style={{ marginBottom: "0.5rem" }}>Limitar el procesamiento de sus datos</li>
              <li style={{ marginBottom: "0.5rem" }}>Portabilidad de datos</li>
              <li style={{ marginBottom: "0.5rem" }}>Oponerse al procesamiento</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              6. Retención de Datos
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos para
              los que fue recopilada, incluidos los requisitos legales, contables o de informes.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              7. Contacto
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos, puede contactarnos:
            </p>
            <div style={{ backgroundColor: "#fef7ed", padding: "1.5rem", borderRadius: "0.5rem" }}>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Email:</strong> info@chispapartidahub.com
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                <strong>Teléfono:</strong> +34 688 284 527
              </p>
              <p>
                <strong>Dirección:</strong> Carrer de Provença, 112, 08029 Barcelona, España
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
