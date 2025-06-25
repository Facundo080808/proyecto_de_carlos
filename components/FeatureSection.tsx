"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Award, Rocket } from "lucide-react"
import FeatureCard from "./FeatureCard"

export default function FeatureSection() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Networking de Alto Valor",
      description:
        "Conecta con emprendedores, inversores y mentores que pueden impulsar tu proyecto al siguiente nivel.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-500" />,
      title: "Mentoría Personalizada",
      description:
        "Recibe feedback y consejos de expertos en diferentes áreas para validar y mejorar tu idea de negocio.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Rocket className="h-10 w-10 text-orange-500" />,
      title: "De Idea a MVP",
      description: "Transforma tu concepto en un producto mínimo viable en solo 54 horas con metodologías ágiles.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Award className="h-10 w-10 text-purple-500" />,
      title: "Premios y Financiación",
      description: "Compite por premios en efectivo y oportunidades de inversión para llevar tu startup al mercado.",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
            Por qué participar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Una experiencia transformadora
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Descubre todo lo que Startup Weekend puede ofrecerte para impulsar tu carrera emprendedora.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
