"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowDown, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GoogleCalendarButton } from "./ui/BtnGoogleCalendar"

// Event date - 30 days from now
const EVENT_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

const event = {
  title: "Mentoría com Carlos",
  description: "Sessão prática sobre Lean Startup",
  location: "Online",
  start: new Date("2025-07-10T15:00:00-03:00"),
  end: new Date("2025-07-10T16:00:00-03:00"),
};
export default function HeroSection() {
  const { theme } = useTheme()
  const [days, setDays] = useState(30)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const now = new Date()
      const difference = EVENT_DATE.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const heroContent = (
    <div className="flex flex-col space-y-6">
      {/* Early bird badge */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="inline-flex items-center self-start rounded-full bg-brazil-yellow/20 dark:bg-brazil-yellow/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-brazil-yellow border border-brazil-yellow/50 dark:border-brazil-yellow/40"
      >
        <span className="flex h-2 w-2 rounded-full bg-brazil-yellow mr-1.5 animate-pulse"></span>
        Últimas 5 vagas com 30% de desconto!
      </motion.div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-coffee-900 dark:text-coffee-100">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="block"
        >
          Ship Fast edición Café
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-brazil-green to-brazil-yellow"
        >
          Transforme a Experiência do Consumidor
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg md:text-xl text-coffee-700 dark:text-coffee-300 max-w-lg"
      >
        Sprint intensivo de inovação projetado exclusivamente para revolucionar a experiência do consumidor de café em
        apenas um final de semana.
      </motion.p>

      {/* Brazilian flag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex items-center"
      >
        <div className="relative w-12 h-8 mr-3 overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-brazil-green"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-brazil-yellow transform rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-brazil-blue rounded-full flex items-center justify-center">
                <div className="w-5 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        <span className="text-sm text-coffee-600 dark:text-coffee-400">
          Inovação para o café brasileiro de Minas Gerais
        </span>
      </motion.div>

      {/* Key info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-coffee-50 dark:bg-coffee-800/50 border border-coffee-200 dark:border-coffee-700"
      >
        <div className="flex flex-col">
          <span className="text-sm text-coffee-500 dark:text-coffee-400">Local</span>
          <span className="font-medium text-coffee-900 dark:text-coffee-100">Minas Gerais</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-coffee-500 dark:text-coffee-400">Formato</span>
          <span className="font-medium text-coffee-900 dark:text-coffee-100">Presencial</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-coffee-500 dark:text-coffee-400">Duração</span>
          <span className="font-medium text-coffee-900 dark:text-coffee-100">54 horas</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-coffee-500 dark:text-coffee-400">Vagas</span>
          <span className="font-medium text-coffee-900 dark:text-coffee-100">Limitadas (25)</span>
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <Button
        
          size="lg"
          className="bg-gradient-to-r from-brazil-green to-green-600 hover:from-green-700 hover:to-green-600 text-white"
        >
          <a href="#pricing">Garanta sua vaga</a>
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <GoogleCalendarButton
        event={event}
          variant="outline"
          size="lg"
          className="group border-brazil-yellow/50 dark:border-brazil-yellow/30 text-coffee-800 dark:text-coffee-200"
        >
          <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Adicionar ao calendário
        </GoogleCalendarButton>
        
      </motion.div>

      {/* Countdown timer - moved to be less prominent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-4"
      >
        <p className="text-sm text-coffee-600 dark:text-coffee-400 mb-2">O evento começa em:</p>
        <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md">
          <CountdownItem value={days} label="Dias" />
          <CountdownItem value={hours} label="Horas" />
          <CountdownItem value={minutes} label="Min" />
          <CountdownItem value={seconds} label="Seg" />
        </div>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex items-center mt-6 text-sm text-coffee-600 dark:text-coffee-400"
      >
        <div className="flex -space-x-2 mr-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-gradient-to-br from-brazil-green to-brazil-yellow border-2 border-white dark:border-coffee-900"
            />
          ))}
        </div>
        <span>+200 produtores e empreendedores já confirmaram presença</span>
      </motion.div>
    </div>
  )

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient animation */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-20",
          theme === "dark"
            ? "from-coffee-900 via-brazil-green/20 to-coffee-900"
            : "from-coffee-100 via-brazil-yellow/20 to-coffee-100",
        )}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-brazil-green/20 via-transparent to-brazil-yellow/20"
          animate={{
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            {heroContent}
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full bg-brazil-green/10 animate-pulse"></div>
              <div
                className="absolute w-48 h-48 rounded-full bg-brazil-yellow/10 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-coffee-800 dark:text-coffee-200">
                  Desafio: Melhorar a Experiência do Consumidor
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-coffee-500 dark:text-coffee-400 mb-2">Descubra mais</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown className="h-6 w-6 text-brazil-green dark:text-brazil-yellow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white dark:bg-coffee-800 rounded-lg shadow-md p-2 md:p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span
        className="text-2xl md:text-3xl font-bold text-brazil-green dark:text-brazil-yellow"
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="text-xs md:text-sm text-coffee-500 dark:text-coffee-400">{label}</span>
    </motion.div>
  )
}
