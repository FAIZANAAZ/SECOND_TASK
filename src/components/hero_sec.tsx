"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] p-4 md:p-8 lg:p-24 overflow-hidden text-white">
      {/* Header with title and ampersand */}
      <div className="relative w-full max-w-4xl mb-6 md:mb-12 flex items-center justify-center text-center">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Design <span className="sm:underline decoration-[#C084FC] ">Faster</span>{" "}
          <span className="text-[#531b8b]">&</span>{" "}
          <span className="relative inline-block">
            <span className="absolute top-0 left-0 right-0 border-t-4 border-[#C084FC]"></span>
            Better
          </span>
        </motion.span>
      </div>

      {/* Description text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6 md:mb-8 text-center text-[10px] sm:text-lg text-gray-300 max-w-3xl px-2 sm:px-4"
      >
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
        imperdiet ipsum ultrices amet, dui sit suspendisse.
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
          Join Now
        </Button>
        <Button className="hover:bg-purple-600 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg border-2 border-white w-full sm:w-auto">
          View Demo
        </Button>
      </div>

      {/* App Mockup with placeholder image */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="w-full max-w-5xl flex justify-center items-center mt-6 md:mt-8"
      >
        {/* Placeholder image */}
        <Image src="/Desktop.png" alt="App Mockup" width={700} height={400} className="rounded-lg w-full h-auto" />
      </motion.div>
    </main>
  )
}
