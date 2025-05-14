"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube, Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp, Send, Moon, Sun } from "lucide-react"


const footerLinks = [
  {
    title: "PRODUCT",
    links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
  },
  {
    title: "SOLUTIONS",
    links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
  },
  {
    title: "RESOURCES",
    links: ["Help Center", "Blog", "Tutorials"],
  },
  {
    title: "COMPANY",
    links: ["About", "Press", "Events", "Careers"],
  },
]

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  // State for collapsible sections on mobile
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Toggle section expansion
  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <footer className="w-full px-6 md:px-12 lg:px-20 py-12 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-black">
              weeb
            </Link>

        
          </div>   

          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="border-b md:border-b-0 border-gray-200  pb-4 md:pb-0"
            >
              <div
                className="flex justify-between items-center cursor-pointer md:cursor-default mb-4 md:mb-0"
                onClick={() => toggleSection(column.title)}
              >
                <h3 className="text-sm font-medium text-gray-400 mb-[10px] dark:text-gray-300">{column.title}</h3>
                <span className="md:hidden">
                  {expandedSections[column.title] ? (
                    <ChevronUp className="h-4 w-4 text-black 0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                  )}
                </span>
              </div>

              <ul className={`space-y-3 ${expandedSections[column.title] ? "block" : "hidden"} md:block`}>
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px w-full "></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <p className="text-[12px] sm:text-sm text-black ">&copy; 2023 Weeb, Inc. All rights reserved.</p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full "
                asChild
              >
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5 text-gray-900 " />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}



// Theme toggle component

