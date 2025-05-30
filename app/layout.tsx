import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChispaPartida Hub - Desarrolladores de Juegos Plinko",
  description:
    "Somos desarrolladores y diseñadores especializados en juegos Plinko. Creamos tableros únicos y experiencias de juego innovadoras.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="smooth-scroll">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main className="page-transition">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
