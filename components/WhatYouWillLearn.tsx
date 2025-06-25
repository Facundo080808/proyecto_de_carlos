"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WhatYouWillLearn() {
  const { theme } = useTheme()

  const learningPoints = [
    "Design thinking aplicado à experiência do consumidor de café",
    "Mapeamento da jornada do cliente e identificação de pontos de dor",
    "Técnicas de prototipagem rápida para testar soluções",
    "Métodos de pesquisa com usuários para validação de ideias",
    "Estratégias de fidelização e engajamento do consumidor",
    "Criação de experiências sensoriais memoráveis",
    "Implementação de tecnologia para melhorar a experiência",
    "Métricas para avaliar a satisfação do cliente",
  ]

  return (
    <section className="py-20 bg-white dark:bg-coffee-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-900/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
              Conteúdo do sprint
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-6">
              O que você aprenderá
            </h2>
            <p className="text-lg text-coffee-600 dark:text-coffee-400 mb-8">
              Durante as 54 horas do sprint, você adquirirá conhecimentos práticos e ferramentas essenciais para
              transformar a experiência do consumidor de café.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brazil-green mt-1 mr-3 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-coffee-700 dark:text-coffee-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "rounded-xl overflow-hidden",
              theme === "dark" ? "bg-coffee-900 border border-coffee-700" : "bg-coffee-50 border border-coffee-200",
            )}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-100">Metodologia do sprint</h3>
                <div className="relative w-8 h-5 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-brazil-green"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-brazil-yellow transform rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brazil-green/20 dark:bg-brazil-green/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-brazil-green dark:text-brazil-green">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-100 mb-1">Empatia e Descoberta</h4>
                    <p className="text-coffee-600 dark:text-coffee-400">
                      Entenda profundamente as necessidades, desejos e frustrações dos consumidores de café.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brazil-green/20 dark:bg-brazil-green/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-brazil-green dark:text-brazil-green">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-100 mb-1">Ideação e Prototipagem</h4>
                    <p className="text-coffee-600 dark:text-coffee-400">
                      Desenvolva soluções inovadoras e crie protótipos rápidos para testar com usuários reais.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brazil-yellow/20 dark:bg-brazil-yellow/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-brazil-yellow dark:text-brazil-yellow">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-100 mb-1">Teste e Validação</h4>
                    <p className="text-coffee-600 dark:text-coffee-400">
                      Valide suas ideias com consumidores reais e refine sua solução com base no feedback recebido.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brazil-yellow/20 dark:bg-brazil-yellow/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-brazil-yellow dark:text-brazil-yellow">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-100 mb-1">Implementação</h4>
                    <p className="text-coffee-600 dark:text-coffee-400">
                      Desenvolva um plano de ação detalhado para implementar sua solução no mundo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
