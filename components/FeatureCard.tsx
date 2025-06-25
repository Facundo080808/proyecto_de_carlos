"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, color, delay = 0 }: FeatureCardProps) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "relative overflow-hidden rounded-xl p-6 h-full",
        theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200 shadow-md",
      )}
    >
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>

      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} w-0`}
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full opacity-10 bg-gradient-to-br from-blue-500 to-purple-500"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}
