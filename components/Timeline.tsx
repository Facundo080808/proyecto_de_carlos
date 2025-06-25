"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Calendar, Clock, Users, Lightbulb, PresentationIcon as PresentationChart, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Timeline() {
  const { theme } = useTheme()

  const timelineEvents = [
    {
      day: "Sexta",
      date: "Dia 1",
      color: "coffee",
      events: [
        { time: "18:30", title: "Registro e Networking", icon: <Users className="h-5 w-5" /> },
        { time: "19:00", title: "Apresentação do Evento", icon: <PresentationChart className="h-5 w-5" /> },
        { time: "19:30", title: "Imersão no problema", icon: <Lightbulb className="h-5 w-5" />, highlight: true },
        { time: "21:00", title: "Definição do desafio", icon: <Lightbulb className="h-5 w-5" />, highlight: true },
        { time: "22:30", title: "Encerramento do dia", icon: <Clock className="h-5 w-5" /> },
      ],
    },
    {
      day: "Sábado",
      date: "Dia 2",
      color: "leaf",
      events: [
        { time: "09:00", title: "Café da Manhã e Planejamento", icon: <Calendar className="h-5 w-5" /> },
        { time: "10:00", title: "Definição precisa do problema", icon: <Lightbulb className="h-5 w-5" /> },
        { time: "13:00", title: "Almoço", icon: <Clock className="h-5 w-5" /> },
        {
          time: "14:00",
          title: "Ideação e seleção de soluções",
          icon: <Lightbulb className="h-5 w-5" />,
          highlight: true,
        },
        {
          time: "16:00",
          title: "Início da prototipagem",
          icon: <PresentationChart className="h-5 w-5" />,
          highlight: true,
        },
        { time: "18:00", title: "Mentoria com especialistas", icon: <Users className="h-5 w-5" /> },
        { time: "20:00", title: "Jantar e Networking", icon: <Users className="h-5 w-5" /> },
      ],
    },
    {
      day: "Domingo",
      date: "Dia 3",
      color: "bean",
      events: [
        { time: "09:00", title: "Café da Manhã Final", icon: <Calendar className="h-5 w-5" /> },
        { time: "10:00", title: "Finalização do protótipo", icon: <PresentationChart className="h-5 w-5" /> },
        { time: "11:00", title: "Validação com usuários", icon: <Users className="h-5 w-5" />, highlight: true },
        { time: "13:00", title: "Almoço", icon: <Clock className="h-5 w-5" /> },
        { time: "14:00", title: "Pitch Final", icon: <PresentationChart className="h-5 w-5" />, highlight: true },
        { time: "16:00", title: "Premiação", icon: <Award className="h-5 w-5" />, highlight: true },
        { time: "17:00", title: "Encerramento do Evento", icon: <Users className="h-5 w-5" /> },
      ],
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="agenda" className={cn("py-20", theme === "dark" ? "bg-coffee-900" : "bg-coffee-50")}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-800/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Agenda
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            54 Horas de Inovação
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Um fim de semana intensivo para transformar ideias em projetos reais para o setor cafeeiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className={cn(
                "rounded-xl p-6",
                theme === "dark"
                  ? "bg-coffee-800 border border-coffee-700"
                  : "bg-white border border-coffee-200 shadow-md",
              )}
            >
              <div
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-4 ${
                  day.color === "coffee"
                    ? "bg-coffee-100 dark:bg-coffee-900/30 text-coffee-800 dark:text-coffee-300"
                    : day.color === "leaf"
                      ? "bg-leaf-100 dark:bg-leaf-900/30 text-leaf-800 dark:text-leaf-300"
                      : "bg-bean-100 dark:bg-bean-900/30 text-bean-800 dark:text-bean-300"
                }`}
              >
                {day.day}
              </div>
              <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-100 mb-6">{day.date}</h3>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 relative"
              >
                <div
                  className={`absolute left-[18px] top-0 bottom-0 w-0.5 ${
                    day.color === "coffee"
                      ? "bg-coffee-200 dark:bg-coffee-700"
                      : day.color === "leaf"
                        ? "bg-leaf-200 dark:bg-leaf-800"
                        : "bg-bean-200 dark:bg-bean-800"
                  }`}
                ></div>

                {day.events.map((event, eventIndex) => (
                  <motion.li key={eventIndex} variants={item} className="flex items-start">
                    <div
                      className={`relative flex items-center justify-center w-9 h-9 rounded-full mr-4 ${
                        event.highlight
                          ? day.color === "coffee"
                            ? "bg-coffee-500 text-white"
                            : day.color === "leaf"
                              ? "bg-leaf-500 text-white"
                              : "bg-bean-500 text-white"
                          : theme === "dark"
                            ? "bg-coffee-700 text-coffee-300"
                            : "bg-coffee-100 text-coffee-600"
                      }`}
                    >
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h4
                          className={`font-medium ${
                            event.highlight
                              ? day.color === "coffee"
                                ? "text-coffee-600 dark:text-coffee-400"
                                : day.color === "leaf"
                                  ? "text-leaf-600 dark:text-leaf-400"
                                  : "text-bean-600 dark:text-bean-400"
                              : "text-coffee-900 dark:text-coffee-100"
                          }`}
                        >
                          {event.title}
                        </h4>
                        <span className="text-sm text-coffee-500 dark:text-coffee-400">{event.time}</span>
                      </div>
                      {event.highlight && (
                        <div
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            day.color === "coffee"
                              ? "bg-coffee-100 dark:bg-coffee-900/30 text-coffee-800 dark:text-coffee-300"
                              : day.color === "leaf"
                                ? "bg-leaf-100 dark:bg-leaf-900/30 text-leaf-800 dark:text-leaf-300"
                                : "bg-bean-100 dark:bg-bean-900/30 text-bean-800 dark:text-bean-300"
                          }`}
                        >
                          Momento chave
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
