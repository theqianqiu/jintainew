"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { BackgroundPaths } from "@/components/background-paths"
import { AnimatedBackground } from "@/components/animated-background"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { LocationFooter } from "@/components/location-footer"

export default function ProductsPage() {
  const { t } = useLanguage()
  const primaryBlue = "#2a4399"

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-blue-50/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white/80 to-amber-50/50"></div>
        <BackgroundPaths />
      </div>

      {/* Navigation */}
      <Header />

      <main className="flex-1 relative z-10 pt-20">
        <div className="relative">
          <AnimatedBackground color={primaryBlue} density="low" speed="slow" className="opacity-20" />
          <div className="container py-16 relative">
            <Link href="/" className="flex items-center text-[#2a4399] mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("backToHome")}
            </Link>

            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-[#2a4399]">
                Product & Applications
                <span className="block text-lg font-normal text-warm-yellow mt-2">GINTAIK TPU Solutions</span>
              </h1>
            </div>

            {/* Product Applications Section */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-16 bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("productApplications")}</h2>

              <motion.div variants={fadeIn} className="mb-10">
                <h3 className="text-2xl font-bold text-[#2a4399] mb-4">Aviation & Marine Lifesaving Products</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center bg-blue-50/50 p-6 rounded-xl">
                  <div className="order-2 md:order-1">
                    <p className="text-slate-600">{t("aviationMarineDesc")}</p>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden order-1 md:order-2">
                    <Image
                      src="/images/aviation.png"
                      alt="Aviation and Marine Lifesaving Products"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="mb-10">
                <h3 className="text-2xl font-bold text-[#2a4399] mb-4">Sports Goods & Outdoor Products</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center bg-blue-50/50 p-6 rounded-xl">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/sports.png"
                      alt="Sports Goods & Outdoor Products"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-slate-600">{t("sportsOutdoorDesc")}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-bold text-[#2a4399] mb-4">Medical Protection Goods</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center bg-blue-50/50 p-6 rounded-xl">
                  <div className="order-2 md:order-1">
                    <p className="text-slate-600">{t("medicalDesc")}</p>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden order-1 md:order-2">
                    <Image src="/images/medical.png" alt="Medical Protection Goods" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Technical Competence Section */}
            <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("technicalCompetence")}</h2>

              <motion.div variants={fadeIn} className="mb-10">
                <h3 className="text-2xl font-bold text-[#2a4399] mb-4">{t("highFlatnessTpu")}</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center bg-blue-50/50 p-6 rounded-xl">
                  <div>
                    <p className="text-slate-600">{t("highFlatnessTpuDesc")}</p>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image src="/images/tpu-film-1.jpg" alt="High-flatness TPU films" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-bold text-[#2a4399] mb-4">{t("highStrengthTpu")}</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center bg-blue-50/50 p-6 rounded-xl">
                  <div className="relative h-64 rounded-lg overflow-hidden md:order-1 order-2">
                    <Image
                      src="/images/tpu-film-2.jpg"
                      alt="High-strength TPU laminated fabric"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:order-2 order-1">
                    <p className="text-slate-600">{t("highStrengthTpuDesc")}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Product Features Section */}
            <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">Product Features</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="bg-blue-50 p-6 rounded-lg"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399] mb-4">Superior Protection</h3>
                  <p className="text-slate-600">
                    Our TPU laminated fabric provides excellent protection against scratches, UV damage, and
                    environmental factors.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-amber-50 p-6 rounded-lg"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399] mb-4">Eco-Friendly</h3>
                  <p className="text-slate-600">
                    Made from sustainable materials, our fabric is biodegradable and reduces environmental impact.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-green-50 p-6 rounded-lg"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399] mb-4">Fully Recyclable</h3>
                  <p className="text-slate-600">
                    Our products are designed for a circular economy, with full recyclability at end of life.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Location Maps */}
      <LocationFooter />
    </div>
  )
}
