"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowRight, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function CtaSection() {
  const { theme } = useTheme()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log("Submitted:", { name, email })
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setEmail("")
    }, 3000)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          theme === "dark" ? "from-blue-900 via-slate-900 to-slate-900" : "from-blue-50 via-blue-100 to-slate-100",
        )}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-green-500/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4">
              ¡Plazas limitadas!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Asegura tu lugar ahora
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
              No pierdas la oportunidad de vivir esta experiencia única. Las plazas son limitadas y se agotan
              rápidamente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "rounded-xl p-8 md:p-10 mb-8",
              theme === "dark"
                ? "bg-slate-800/80 backdrop-blur-sm border border-slate-700"
                : "bg-white/80 backdrop-blur-sm border border-slate-200 shadow-xl",
            )}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Pre-registro</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Completa el formulario para reservar tu plaza con descuento Early Bird del 30%.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-800 dark:text-green-300 flex items-center"
                  >
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>¡Gracias! Te hemos enviado un correo con los detalles.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                    >
                      Reservar mi plaza
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}

                <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                  Al registrarte, aceptas nuestros{" "}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    términos y condiciones
                  </a>{" "}
                  y{" "}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                    política de privacidad
                  </a>
                  .
                </div>
              </div>

              <div
                className={cn(
                  "rounded-lg p-6 flex-1",
                  theme === "dark" ? "bg-slate-900 border border-slate-700" : "bg-slate-50 border border-slate-200",
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 dark:text-white">Detalles del evento</h4>
                  <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 text-xs font-medium text-orange-800 dark:text-orange-300">
                    -30% Early Bird
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <span className="block text-slate-900 dark:text-white font-medium">Fecha</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">15-17 Octubre, 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-slate-900 dark:text-white font-medium">Ubicación</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Campus Innovación, Madrid</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <svg
                        className="h-4 w-4 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-slate-900 dark:text-white font-medium">Precio</span>
                      <div className="flex items-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400 line-through mr-2">€99</span>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">€69 (Early Bird)</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Plazas disponibles</span>
                  <span className="font-medium text-slate-900 dark:text-white">15 de 50</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              ¿Tienes alguna pregunta? Contáctanos en{" "}
              <a href="mailto:info@startupweekend.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@startupweekend.com
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Añadir al calendario
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Compartir evento
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
