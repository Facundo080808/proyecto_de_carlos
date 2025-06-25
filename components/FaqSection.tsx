"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FaqSection() {
  const { theme } = useTheme()

  const faqs = [
    {
      question: "Preciso de experiência prévia em inovação?",
      answer:
        "Não é necessário. O Café Innova é projetado para todos os níveis de experiência. Nossa metodologia guiará você passo a passo no processo de inovação, independentemente do seu conhecimento prévio.",
    },
    {
      question: "Funciona para qualquer tamanho de negócio?",
      answer:
        "Sim! Temos participantes desde pequenos produtores familiares até representantes de grandes cooperativas. A metodologia é adaptável e funciona para negócios de todos os portes no setor cafeeiro.",
    },
    {
      question: "Refeições estão incluídas?",
      answer:
        "Sim, o ingresso inclui todas as refeições durante o evento (jantares de sexta e sábado, cafés da manhã e almoços de sábado e domingo). Servimos, é claro, excelentes cafés de Minas Gerais durante todo o evento.",
    },
    {
      question: "Existe acompanhamento posterior?",
      answer:
        "Sim, oferecemos 30 dias de mentoria pós-evento para os participantes, além de acesso à nossa comunidade exclusiva de inovadores do café, onde você poderá continuar recebendo feedback e construindo conexões.",
    },
    {
      question: "Como protegemos minhas ideias durante o sprint?",
      answer:
        "Todos os participantes assinam um acordo de confidencialidade no início do evento. Além disso, incentivamos a colaboração aberta, mas você decide o quanto quer compartilhar sobre sua propriedade intelectual.",
    },
    {
      question: "Como funciona o suporte de IA durante o processo?",
      answer:
        "Disponibilizamos ferramentas de IA especialmente treinadas para o setor cafeeiro que ajudam na pesquisa de mercado, geração de ideias e validação de conceitos. Nossos facilitadores auxiliarão você a utilizar essas ferramentas de forma eficaz.",
    },
  ]

  return (
    <section id="faq" className={cn("py-20", theme === "dark" ? "bg-coffee-900" : "bg-coffee-50")}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-800/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Tudo o que você precisa saber
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Respostas às perguntas mais comuns sobre o Café Innova.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  index: number
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "mb-4 rounded-lg overflow-hidden",
        theme === "dark" ? "bg-coffee-800 border border-coffee-700" : "bg-white border border-coffee-200 shadow-sm",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-coffee-900 dark:text-coffee-100">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-center w-6 h-6 rounded-full ${
            isOpen
              ? "bg-coffee-100 dark:bg-coffee-700 text-coffee-600 dark:text-coffee-400"
              : "bg-coffee-100 dark:bg-coffee-800 text-coffee-500 dark:text-coffee-400"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-coffee-600 dark:text-coffee-300">{answer}</div>
      </motion.div>
    </motion.div>
  )
}
