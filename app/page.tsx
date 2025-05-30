import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhatIsPlinko from "@/components/what-is-plinko"
import GameAdvantages from "@/components/game-advantages"
import BoardTypes from "@/components/board-types"
import ProjectsSection from "@/components/projects-section"
import FAQ from "@/components/faq"
import DesignTips from "@/components/design-tips"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatIsPlinko />
      <GameAdvantages />
      <BoardTypes />
      <ProjectsSection />
      <FAQ />
      <DesignTips />
      <ContactForm />
    </>
  )
}
