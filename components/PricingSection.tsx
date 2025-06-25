"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PricingSection() {
  const { theme } = useTheme()
  const [isEarlyBird, setIsEarlyBird] = useState(true)

  const features = [
    "Acesso completo ao sprint de 54 horas",
    "Materiais e recursos exclusivos",
    "Mentoria personalizada com especialistas do café",
    "Refeições e cafés especiais durante o evento",
    "Networking com produtores e investidores",
    "Certificado de participação",
    "Oportunidade de ganhar prêmios",
    "30 dias de mentoria pós-evento",
  ]

  return (
    <section id="pricing" className={cn("py-20", theme === "dark" ? "bg-coffee-900" : "bg-coffee-50")}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-800/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Investimento
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Garanta sua vaga agora
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Invista no futuro do seu negócio cafeeiro com nosso sprint intensivo de inovação.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "rounded-xl overflow-hidden",
              theme === "dark"
                ? "bg-coffee-800 border border-coffee-700"
                : "bg-white border border-coffee-200 shadow-lg",
            )}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-coffee-900 dark:text-coffee-100">Café Innova Sprint</h3>
                {isEarlyBird && (
                  <span className="inline-flex items-center rounded-full bg-bean-100 dark:bg-bean-900/30 px-3 py-1 text-sm font-medium text-bean-600 dark:text-bean-400">
                    Últimas 5 vagas
                  </span>
                )}
              </div>

              <div className="flex items-baseline mb-6">
                {isEarlyBird ? (
                  <>
                    <span className="text-4xl font-bold text-coffee-900 dark:text-coffee-100">R$1.390</span>
                    <span className="ml-2 text-lg text-coffee-500 dark:text-coffee-400 line-through">R$1.990</span>
                    <span className="ml-2 text-sm text-leaf-600 dark:text-leaf-400">30% desconto</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-coffee-900 dark:text-coffee-100">R$1.990</span>
                )}
              </div>

              <p className="text-coffee-600 dark:text-coffee-400 mb-6">
                Tudo o que você precisa para transformar sua ideia em uma inovação viável para o setor cafeeiro em um
                fim de semana intensivo.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-leaf-500 mt-1 mr-3 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-coffee-700 dark:text-coffee-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-coffee-600 dark:text-coffee-400">Vagas disponíveis</span>
                  <span className="font-medium text-coffee-900 dark:text-coffee-100">5 de 25</span>
                </div>
                <div className="w-full h-2 bg-coffee-200 dark:bg-coffee-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-coffee-500 to-leaf-500 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-coffee-600 to-coffee-500 hover:from-coffee-700 hover:to-coffee-600 text-white"
                size="lg"
              >
                Garanta sua vaga agora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-coffee-500 dark:text-coffee-400 mt-4">
                Se após a primeira noite você não estiver convencido do valor da metodologia, devolvemos 100% do seu
                investimento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-coffee-600 dark:text-coffee-400">
              Tem alguma dúvida sobre o preço ou o sprint?{" "}
              <a href="mailto:info@cafeinnova.com" className="text-coffee-600 dark:text-coffee-400 hover:underline">
                Entre em contato
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
