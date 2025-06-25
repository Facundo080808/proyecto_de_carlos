"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function TestimonialSection() {
  const { theme } = useTheme()
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "Transformamos nossa pequena fazenda em um modelo de negócio rentável em tempo recorde. O Café Innova nos deu as ferramentas e conexões necessárias para inovar no mercado de cafés especiais.",
      name: "Maria Gomes",
      role: "Produtora",
      company: "Fazenda Esperança, Minas Gerais",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Saí do fim de semana com um protótipo validado e pronto para implementar. A metodologia focada no setor cafeeiro fez toda a diferença para identificar oportunidades reais de mercado.",
      name: "Carlos Vega",
      role: "Empreendedor",
      company: "Café Cultura",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "O networking foi excepcional. Conheci produtores, torrefadores e especialistas que agora fazem parte da minha rede de contatos. Isso abriu portas para parcerias que estão transformando meu negócio.",
      name: "Ana Ferreira",
      role: "Barista",
      company: "Grão Especial",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white dark:bg-coffee-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-900/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            O que dizem nossos participantes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Experiências reais de empreendedores e produtores que participaram do Café Innova.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "rounded-xl p-8 md:p-10",
                theme === "dark"
                  ? "bg-coffee-800 border border-coffee-700"
                  : "bg-coffee-50 border border-coffee-200 shadow-md",
              )}
            >
              <div className="absolute top-6 left-6 text-coffee-500 opacity-20">
                <Quote className="h-16 w-16" />
              </div>

              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl italic text-coffee-700 dark:text-coffee-300 mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-coffee-900 dark:text-coffee-100">{testimonials[current].name}</h4>
                    <p className="text-sm text-coffee-600 dark:text-coffee-400">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-coffee-600 dark:bg-coffee-400" : "bg-coffee-300 dark:bg-coffee-700"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 shadow-md flex items-center justify-center text-coffee-700 dark:text-coffee-300 hover:bg-coffee-50 dark:hover:bg-coffee-700 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-coffee-800 border border-coffee-200 dark:border-coffee-700 shadow-md flex items-center justify-center text-coffee-700 dark:text-coffee-300 hover:bg-coffee-50 dark:hover:bg-coffee-700 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
