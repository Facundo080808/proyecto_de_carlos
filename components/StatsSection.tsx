"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"
import { Users, Building, Award, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedCounter from "./AnimatedCounter"

export default function StatsSection() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      value: 200,
      label: "Participantes",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Building className="h-8 w-8 text-green-500" />,
      value: 45,
      label: "Startups Creadas",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      value: 12,
      label: "Premios Entregados",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      value: 1.2,
      label: "Millones en Inversión",
      prefix: "$",
      suffix: "M",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className={cn("py-20", theme === "dark" ? "bg-slate-800" : "bg-slate-50")}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
            Impacto
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nuestros Resultados</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            El impacto de Startup Weekend en números que demuestran el éxito del programa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                },
              }}
              className={cn(
                "rounded-xl p-6 text-center",
                theme === "dark"
                  ? "bg-slate-900 border border-slate-700"
                  : "bg-white border border-slate-200 shadow-md",
              )}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter from={0} to={stat.value} duration={2} isInView={isInView} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              <div className={`h-1 w-16 mx-auto mt-4 rounded-full bg-gradient-to-r ${stat.color}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
