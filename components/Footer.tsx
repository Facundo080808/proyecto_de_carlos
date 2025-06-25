"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Footer() {
  const { theme } = useTheme()

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]

  const footerLinks = [
    {
      title: "Evento",
      links: [
        { label: "Agenda", href: "#agenda" },
        { label: "Mentores", href: "#mentores" },
        { label: "Patrocinadores", href: "#patrocinadores" },
        { label: "Localização", href: "#localizacao" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Blog", href: "#" },
        { label: "Comunidade", href: "#" },
        { label: "Projetos anteriores", href: "#" },
        { label: "Galeria", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Política de privacidade", href: "#" },
        { label: "Termos e condições", href: "#" },
      ],
    },
  ]

  return (
    <footer
      id="contato"
      className={cn(
        "pt-20 pb-10 border-t",
        theme === "dark" ? "bg-coffee-950 border-coffee-800" : "bg-white border-coffee-200",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Coffee className="h-6 w-6 text-brazil-green dark:text-brazil-yellow mr-2" />
              <span className="font-bold text-xl text-coffee-900 dark:text-coffee-100">Ship Fast edición Café</span>
              <div className="ml-2 w-6 h-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-brazil-green"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-brazil-yellow rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-brazil-blue rounded-full flex items-center justify-center">
                      <div className="w-2 h-0.5 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-coffee-600 dark:text-coffee-400 mb-6 max-w-md">
              Um sprint intensivo de 54 horas onde produtores, empreendedores, desenvolvedores e entusiastas do café se
              reúnem para criar soluções inovadoras que transformem a experiência do consumidor.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full",
                    theme === "dark"
                      ? "bg-coffee-800 text-coffee-300 hover:bg-brazil-green hover:text-white"
                      : "bg-coffee-100 text-coffee-600 hover:bg-brazil-green hover:text-white",
                  )}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-bold text-coffee-900 dark:text-coffee-100 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-coffee-600 dark:text-coffee-400 hover:text-brazil-green dark:hover:text-brazil-yellow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {/* <div className={cn("mt-16 pt-8 border-t", theme === "dark" ? "border-coffee-800" : "border-coffee-200")}>
          <div className="grid grid-cols-2 [direction:rtl] md:grid-cols-2 gap-8 items-center ">
            <div>
              <h3 className="text-lg font-bold text-coffee-900 dark:text-coffee-100 mb-2">
                Inscreva-se em nossa newsletter
              </h3>
              <p className="text-coffee-600 dark:text-coffee-400 mb-0">
                Receba as últimas notícias e atualizações sobre futuros eventos.
              </p>
            </div>
            <div className="flex flex-col justify-end sm:flex-row gap-2">
              <Input type="email" placeholder="Seu email" className="flex-1 border-coffee-300 dark:border-coffee-700" />
              <Button className="bg-brazil-green hover:bg-green-700 text-white">Inscrever-se</Button>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coffee-500 dark:text-coffee-400">
          <div>&copy; {new Date().getFullYear()} Ship Fast edición Café. Todos os direitos reservados.</div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:info@shipfastcafe.com" className="hover:text-brazil-green dark:hover:text-brazil-yellow">
              info@shipfastcafe.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
