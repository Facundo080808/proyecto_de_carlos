"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Clock, Users, Calendar, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CourseOverview() {
  const { theme } = useTheme()

  const overviewItems = [
    {
      icon: <Calendar className="h-6 w-6 text-brazil-green" />,
      title: "Data",
      description: "15-17 Outubro, 2023",
    },
    {
      icon: <Clock className="h-6 w-6 text-brazil-green" />,
      title: "Duração",
      description: "54 horas intensivas",
    },
    {
      icon: <Users className="h-6 w-6 text-brazil-green" />,
      title: "Participantes",
      description: "25 vagas limitadas",
    },
    {
      icon: <Award className="h-6 w-6 text-brazil-green" />,
      title: "Inclui",
      description: "Certificado, materiais e refeições",
    },
  ]

  return (
    <section className={cn("py-16", theme === "dark" ? "bg-coffee-900" : "bg-coffee-50")}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-800/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Resumo do sprint
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Transforme a Experiência do Consumidor
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Um fim de semana intensivo para criar soluções inovadoras que melhorem a experiência do consumidor de café.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "rounded-xl p-6 text-center",
                theme === "dark"
                  ? "bg-coffee-800 border border-coffee-700"
                  : "bg-white border border-coffee-200 shadow-md",
              )}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brazil-green/10 dark:bg-brazil-green/20">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-coffee-900 dark:text-coffee-100 mb-2">{item.title}</h3>
              <p className="text-coffee-600 dark:text-coffee-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "mt-12 p-6 rounded-xl",
            theme === "dark" ? "bg-coffee-800 border border-coffee-700" : "bg-white border border-coffee-200 shadow-md",
          )}
        >
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-100">Descrição do sprint</h3>
            <div className="ml-auto relative w-8 h-5 overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-brazil-green"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-brazil-yellow transform rotate-45"></div>
              </div>
            </div>
          </div>
          <div className="prose prose-coffee dark:prose-invert max-w-none">
            <p>
              O <strong>Ship Fast edición Café</strong> é um sprint intensivo de 54 horas projetado para empreendedores
              e produtores do setor cafeeiro que querem inovar na experiência do consumidor. Durante um fim de semana
              completo, você trabalhará com mentores especialistas e uma equipe multidisciplinar para:
            </p>
            <ul>
              <li>Identificar pontos de atrito na jornada do consumidor de café</li>
              <li>Desenvolver soluções inovadoras para melhorar a experiência</li>
              <li>Criar protótipos de produtos ou serviços centrados no usuário</li>
              <li>Validar suas ideias com consumidores reais</li>
              <li>Preparar um plano de implementação viável</li>
            </ul>
            <p>
              Ao finalizar o sprint, você terá uma solução validada para melhorar a experiência do consumidor de café,
              pronta para ser implementada. Os melhores projetos receberão mentoria contínua e oportunidades de
              financiamento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
