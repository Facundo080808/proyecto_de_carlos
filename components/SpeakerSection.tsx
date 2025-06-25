"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import SpeakerCard from "./SpeakerCard"

export default function SpeakerSection() {
  const { theme } = useTheme()

  const speakers = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      company: "TechVentures",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Emprendedora en serie con 3 exits exitosos en el sector tech.",
      expertise: "Estrategia de negocio, captación de inversión y scaling.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      company: "InnovateLab",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Experto en desarrollo de producto y arquitectura de software.",
      expertise: "Desarrollo ágil, MVP y escalabilidad técnica.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Laura Martínez",
      role: "Inversora Angel",
      company: "SeedCapital",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Inversora en más de 30 startups tecnológicas en fase temprana.",
      expertise: "Valoración de startups, pitch y captación de capital.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Miguel Fernández",
      role: "CMO",
      company: "GrowthHackers",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Especialista en growth marketing para startups B2B y B2C.",
      expertise: "Adquisición de usuarios, retención y estrategias de crecimiento.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Elena Sánchez",
      role: "UX/UI Designer",
      company: "DesignLab",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Diseñadora de experiencias digitales centradas en el usuario.",
      expertise: "Diseño de producto, investigación de usuarios y prototipado.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Javier López",
      role: "Fundador",
      company: "StartupMentor",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Mentor de startups con experiencia en aceleradoras internacionales.",
      expertise: "Validación de ideas, lean startup y business model canvas.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="speakers" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
            Speakers & Mentores
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Aprende de los mejores</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Conoce a los expertos que te guiarán durante todo el evento y compartirán su experiencia.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
