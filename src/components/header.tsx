"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { div } from "framer-motion/client"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="px-4 py-4 bg-[#0F172A]  sm:px-[50px] md:px-[105px]">
      <header className=" sticky top-0 z-50 w-full bg-[#19202f] rounded-[15px] backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">weeb</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-white hover:text-gray-700 transition-colors duration-200">
            About Us
          </Link>
          <Link href="/solutions" className="text-white hover:text-gray-700 transition-colors duration-200">
            Solutions
          </Link>
          <Link href="/pricing" className="text-white hover:text-gray-700 transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/resources" className="text-white hover:text-gray-700 transition-colors duration-200">
            Resources
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-white hover:text-gray-700 transition-colors duration-200">
            Log In
          </Link>
          <Button asChild className="bg-purple-500 hover:bg-purple-600 text-white rounded-md px-6">
            <Link href="/signup">Join Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-black hover:text-gray-700 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/solutions"
              className="text-black hover:text-gray-700 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-black hover:text-gray-700 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/resources"
              className="text-black hover:text-gray-700 py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="flex flex-col space-y-3 pt-2 border-t">
              <Link
                href="/login"
                className="text-black hover:text-gray-700 py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Button asChild className="bg-purple-500 hover:bg-purple-600 text-white rounded-md w-full">
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
  )
}
