"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function SponsorStrip() {
  const { theme } = useTheme()

  const sponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sponsor 2", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sponsor 3", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sponsor 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sponsor 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Sponsor 6", logo: "/placeholder.svg?height=60&width=120" },
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
    <section className={`py-12 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-4"
          >
            Powered by
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
          >
            Nuestros Patrocinadores
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`relative h-16 w-32 ${theme === "dark" ? "opacity-80 hover:opacity-100" : "opacity-70 hover:opacity-100"} transition-opacity`}
            >
              <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
