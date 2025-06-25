"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SpeakerProps {
  name: string
  role: string
  company: string
  image: string
  bio: string
  expertise: string
  linkedin: string
  twitter: string
}

interface SpeakerCardProps {
  speaker: SpeakerProps
  delay?: number
}

export default function SpeakerCard({ speaker, delay = 0 }: SpeakerCardProps) {
  const { theme } = useTheme()
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-[380px] perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden rounded-xl overflow-hidden flex flex-col items-center p-6",
            theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200 shadow-md",
          )}
        >
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100 dark:border-blue-900">
            <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{speaker.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{speaker.role}</p>
          <p className="text-slate-500 dark:text-slate-400 mb-4">{speaker.company}</p>
          <p className="text-center text-slate-600 dark:text-slate-300 mb-4">{speaker.bio}</p>
          <div className="flex space-x-3 mt-auto">
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={speaker.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-blue-400 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 backface-hidden rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 rotateY-180",
            theme === "dark"
              ? "bg-gradient-to-br from-blue-900 to-slate-900 border border-slate-700"
              : "bg-gradient-to-br from-blue-50 to-blue-100 border border-slate-200 shadow-md",
          )}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Especialidad</h3>
          <p className="text-center text-slate-700 dark:text-slate-200 mb-6">{speaker.expertise}</p>
          <div className="w-full max-w-xs">
            <div className={cn("rounded-lg p-4 mb-4", theme === "dark" ? "bg-slate-800/50" : "bg-white/70")}>
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Disponible para:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Mentoría personalizada
                </li>
                <li className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Feedback de pitch
                </li>
                <li className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Networking post-evento
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-3 mt-auto">
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={speaker.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-700 hover:text-blue-400 dark:text-slate-200 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
