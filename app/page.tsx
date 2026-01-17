import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <FloatingWhatsApp />
    </>
  )
}
