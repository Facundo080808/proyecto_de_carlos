"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Send, Phone, Video, MoreVertical, ArrowLeft, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: string
  isTyping?: boolean
}

export default function WhatsAppMentorSection() {
  const { theme } = useTheme()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o AI Mentor treinado com todo o conhecimento de Carlos Riquelme em Lean Startup, Sprint de inovação e MVP. Em que posso te ajudar hoje? 🚀",
      sender: "ai",
      timestamp: "14:30",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedQuestions = [
    "¿Como valido minha ideia de negócio?",
    "¿O que é um MVP e como eu o crio?",
    "¿Quais são as etapas de um sprint de inovação?",
    "¿Como aplico Lean Startup ao café?",
  ]

  const aiResponses: { [key: string]: string } = {
    "¿Como valido minha ideia de negócio?":
      "Excelente pergunta! Para validar a sua ideia de negócio, Carlos recomenda seguir estes passos:\n\n1. **Defina sua hipótese** – Qual problema você resolve?\n2. **Identifique seu cliente ideal** – Quem tem esse problema?\n3. **Crie experimentos baratos** – Testes rápidos e econômicos\n4. **Meça e aprenda** – Analise os resultados\n\nGostaria de se aprofundar em alguma dessas etapas? 📊",
    "¿O que é um MVP e como eu o crio?":
      "Ótima pergunta! Um MVP (Produto Mínimo Viável) é a versão mais simples do seu produto que permite aprender com o mercado.\n\nPara criar seu MVP:\n\n✅ **Identifique a funcionalidade principal**\n✅ **Elimine tudo que não for essencial**\n✅ **Construa rápido e barato**\n✅ **Lance e meça o feedback**\n\nNo setor de café, pode ser desde uma degustação até um app simples. Que tipo de MVP você tem em mente? ☕",
    "¿Quais são as etapas de um sprint de inovação?":
      "Carlos estrutura os sprints em 4 etapas-chave:\n\n🎯 **DIA 1: Definir**\n- Mapear o problema\n- Estabelecer objetivos\n\n💡 **DIA 2: Idear & Decidir**\n- Brainstorming\n- Seleção de soluções\n\n🛠️ **DIA 3: Prototipar**\n- Criar MVP\n- Preparar testes\n\n📊 **DIA 4: Validar**\n- Testar com usuários\n- Analisar resultados\n\nEm qual etapa você precisa de mais ajuda?",
    "¿Como aplico Lean Startup ao café?":
      "Perfeito para o nosso setor! Lean Startup no café significa:\n\n☕ **Hipóteses sobre consumidores**\n- Que experiência eles buscam?\n- Quando e como consomem?\n\n🔬 **Experimentos rápidos**\n- Degustações\n- Pesquisas em cafeterias\n- Protótipos de serviço\n\n📈 **Métricas que importam**\n- Satisfação do cliente\n- Frequência de compra\n- Recomendação\n\nVocê tem alguma hipótese específica sobre seu consumidor de café? 🇧🇷",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim()
    if (!textToSend) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      const aiResponse =
        aiResponses[textToSend] ||
        "Pergunta interessante! No evento presencial poderemos aprofundar mais nesse tema. Carlos tem muitos casos práticos para compartilhar. Gostaria que explorássemos algum aspecto específico de Lean Startup ou MVP? 🤔"

      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }

  return (
    <section className="py-20 bg-white dark:bg-coffee-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-coffee-100 dark:bg-coffee-900/30 px-3 py-1 text-sm font-medium text-coffee-800 dark:text-coffee-300 mb-4">
            Mentor AI 24/7
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 dark:text-coffee-100 mb-4">
            Seu Mentor Pessoal no WhatsApp
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-coffee-600 dark:text-coffee-400">
            Acesse o conhecimento de Carlos Riquelme 24 horas por dia. Nosso AI Mentor está treinado com toda a sua experiência em Lean Startup, Sprint de inovação e MVP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Facilitator Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div
              className={cn(
                "rounded-xl p-6",
                theme === "dark" ? "bg-coffee-900 border border-coffee-700" : "bg-coffee-50 border border-coffee-200",
              )}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Carlos Riquelme"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-coffee-900 dark:text-coffee-100">Carlos Riquelme</h3>
                  <p className="text-coffee-600 dark:text-coffee-400">Facilitador Principal</p>
                </div>
              </div>
              <p className="text-coffee-700 dark:text-coffee-300 mb-4">
                Especialista em Lean Startup com mais de 10 anos ajudando empreendedores a validar e escalar suas ideias de negócio.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Mais de 500 startups mentoradas
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-yellow mr-2"></div>
                  Especialista em MVP e prototipagem
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Metodologia Sprint de Inovação
                </div>
              </div>
            </div>

            <div
              className={cn(
                "rounded-xl p-6",
                theme === "dark" ? "bg-coffee-900 border border-coffee-700" : "bg-coffee-50 border border-coffee-200",
              )}
            >
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-brazil-green mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-coffee-900 dark:text-coffee-100">AI Mentor</h3>
                  <p className="text-coffee-600 dark:text-coffee-400">Disponível 24/7 no WhatsApp</p>
                </div>
              </div>
              <p className="text-coffee-700 dark:text-coffee-300 mb-4">
               Treinado com toda a base de conhecimento do Carlos em Lean Startup, metodologias ágeis e desenvolvimento de MVP.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Respostas instantâneas
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-yellow mr-2"></div>
                  Casos práticos do setor de café
                </div>
                <div className="flex items-center text-sm text-coffee-600 dark:text-coffee-400">
                  <div className="w-2 h-2 rounded-full bg-brazil-green mr-2"></div>
                  Guias passo a passo
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800 dark:border-gray-700">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <ArrowLeft className="h-5 w-5 mr-3" />
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <div className="w-full h-full bg-brazil-green flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">AI Mentor Carlos</h4>
                    <p className="text-xs opacity-75">online</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Video className="h-5 w-5" />
                  <Phone className="h-5 w-5" />
                  <MoreVertical className="h-5 w-5" />
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-96 bg-[#ECE5DD] dark:bg-gray-800 p-4 overflow-y-auto">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg ${
                          message.sender === "user"
                            ? "bg-[#DCF8C6] text-gray-800"
                            : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                        }`}
                      >
                        {message.sender === "ai" && (
                          <div className="flex items-center mb-1">
                            <Bot className="h-3 w-3 text-brazil-green mr-1" />
                            <span className="text-xs text-brazil-green font-semibold">AI Mentor</span>
                          </div>
                        )}
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs text-gray-500 mt-1 text-right">{message.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start mb-3">
                    <div className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
                      <div className="flex items-center">
                        <Bot className="h-3 w-3 text-brazil-green mr-1" />
                        <span className="text-xs text-brazil-green font-semibold mr-2">AI Mentor</span>
                      </div>
                      <div className="flex space-x-1 mt-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="bg-white dark:bg-gray-900 p-3 border-t">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Perguntas frequentes:</p>
                <div className="grid grid-cols-1 gap-1">
                  {predefinedQuestions.slice(0, 2).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="text-left text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-[#F0F0F0] dark:bg-gray-800 p-3 flex items-center space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 text-sm border-none bg-white dark:bg-gray-700"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  size="sm"
                  className="bg-[#075E54] hover:bg-[#064e45] text-white p-2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-[#25D366] hover:bg-[#20b358] text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Conversar com o AI Mentor
              </Button>
              <p className="text-xs text-coffee-500 dark:text-coffee-400 mt-2">
                Disponível para participantes registrados
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
