"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function InstructorSection() {
  const { theme } = useTheme()

  const instructor = {
    name: "Carlos Riquelme",
    role: "Facilitador Principal",
    company: "Ship Fast edición Café",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carlos é um especialista em Lean Startup com mais de 10 anos de experiência ajudando empreendedores a validar e escalar suas ideias de negócio. Ele já trabalhou com mais de 500 startups e é especialista em metodologias de sprint de inovação e desenvolvimento de MVP.",
    expertise: [
      "Metodologia Lean Startup aplicada ao setor cafeeiro",
      "Sprint de inovação e design thinking",
      "Desenvolvimento e validação de MVP",
      "Prototipagem rápida de software e serviços",
    ],
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }

  return (
    <section id="mentores" className="py-20 bg-white dark:bg-coffee-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-900/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Seu facilitador
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Aprenda com um especialista em Lean Startup
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Carlos Riquelme facilitará presencialmente, enquanto seu conhecimento estará disponível 24 horas por dia, 7 dias por semana, através do nosso AI Mentor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brazil-green/20 dark:border-brazil-yellow/20">
              <Image src={instructor.image || "/placeholder.svg"} alt={instructor.name} fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-100 mb-2">{instructor.name}</h3>
            <p className="text-brazil-green dark:text-brazil-yellow font-medium mb-1">{instructor.role}</p>
            <p className="text-coffee-500 dark:text-coffee-400 mb-6">{instructor.company}</p>

            <p className="text-coffee-700 dark:text-coffee-300 mb-6">{instructor.bio}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-coffee-900 dark:text-coffee-100 mb-3">Especialidades:</h4>
              <ul className="space-y-2">
                {instructor.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brazil-green mt-1 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-coffee-700 dark:text-coffee-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brazil-green/10 dark:bg-brazil-green/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-coffee-900 dark:text-coffee-100 mb-2">💡 Inovação Única</h4>
              <p className="text-coffee-700 dark:text-coffee-300 text-sm">
                Todo o conhecimento do Carlos está disponível 24 horas por dia, 7 dias por semana, através do nosso AI Mentor treinado especificamente com a sua metodologia e experiência.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href={instructor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-coffee-600 hover:text-brazil-green dark:text-coffee-400 dark:hover:text-brazil-yellow hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={instructor.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-coffee-600 hover:text-brazil-green dark:text-coffee-400 dark:hover:text-brazil-yellow hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
