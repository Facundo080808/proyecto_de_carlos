import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import InstructorSection from "@/components/InstructorSection"
import CourseOverview from "@/components/CourseOverview"
import WhatYouWillLearn from "@/components/WhatYouWillLearn"
import WhatsAppMentorSection from "@/components/WhatsAppMentorSection"
import Timeline from "@/components/Timeline"
import TestimonialSection from "@/components/TestimonialSection"
import FaqSection from "@/components/FaqSection"
import PricingSection from "@/components/PricingSection"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Ship Fast edición Café | Sprint de Transformação para o Setor Cafeeiro",
  description:
    "Sprint intensivo de inovação projetado exclusivamente para revolucionar a experiência do consumidor de café.",
  keywords: "café, inovação, empreendedorismo, Minas Gerais, café especial, sprint, experiência do consumidor",
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />
        <InstructorSection />
        <CourseOverview />
        <WhatYouWillLearn />
        <WhatsAppMentorSection />
        <Timeline />
        {/* <TestimonialSection /> */}
        <PricingSection />
        <FaqSection />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
