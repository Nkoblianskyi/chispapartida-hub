export default function CookiesPage() {
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
            Política de Cookies
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
              ¿Qué son las Cookies?
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio
              web. Nos ayudan a mejorar su experiencia de navegación y a entender cómo utiliza nuestro sitio.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              Tipos de Cookies que Utilizamos
            </h2>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
              Cookies Esenciales
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
              Incluyen cookies de sesión y preferencias de cookies.
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
              Cookies de Rendimiento
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionando información
              sobre las páginas visitadas, el tiempo de permanencia y cualquier mensaje de error.
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#1f2937" }}>
              Cookies de Funcionalidad
            </h3>
            <p style={{ marginBottom: "2rem" }}>
              Permiten que el sitio web recuerde las elecciones que hace (como su idioma preferido) y proporcione
              características mejoradas y más personales.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              Cookies de Terceros
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Utilizamos servicios de terceros que pueden establecer cookies en su dispositivo:
            </p>
            <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Google Analytics: Para analizar el tráfico del sitio web</li>
              <li style={{ marginBottom: "0.5rem" }}>Formularios de contacto: Para mejorar la funcionalidad</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              Control de Cookies
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su
              dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que
              visite un sitio y que algunos servicios y funcionalidades no funcionen.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              Configuración del Navegador
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>Puede configurar su navegador para rechazar cookies:</p>
            <ul style={{ marginBottom: "2rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Chrome: Configuración {">"} Privacidad y seguridad {">"} Cookies
              </li>
              <li style={{ marginBottom: "0.5rem" }}>Firefox: Opciones {">"} Privacidad y seguridad</li>
              <li style={{ marginBottom: "0.5rem" }}>Safari: Preferencias {">"} Privacidad</li>
              <li style={{ marginBottom: "0.5rem" }}>Edge: Configuración {">"} Cookies y permisos del sitio</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
              Actualizaciones de esta Política
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              Podemos actualizar esta Política de Cookies ocasionalmente. Le notificaremos sobre cualquier cambio
              publicando la nueva política en esta página con una fecha de actualización revisada.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>Contacto</h2>
            <p style={{ marginBottom: "1rem" }}>
              Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:
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
