"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Recycle } from "lucide-react"
import { Header } from "@/components/header"
import { BackgroundPaths } from "@/components/background-paths"
import { AnimatedBackground } from "@/components/animated-background"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { LocationFooter } from "@/components/location-footer"
import { AtomicStructure } from "@/components/atomic-structure"
import { FloatingShapes } from "@/components/floating-shapes"

export default function InnovationPage() {
  const { t } = useLanguage()
  const primaryBlue = "#2a4399"
  const accentOrange = "#f59e0b"

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
                Innovation & Sustainability
                <span className="block text-lg font-normal text-warm-yellow mt-2">
                  Leading the Future of TPU Technology
                </span>
              </h1>
            </div>

            {/* Technology Section */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-16 bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("advancedTechnology")}</h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeIn}>
                  <p className="text-slate-600 mb-4">{t("advancedTechnologyDesc")}</p>
                  <ul className="space-y-3">
                    {[
                      t("technologyFeature1"),
                      t("technologyFeature2"),
                      t("technologyFeature3"),
                      t("technologyFeature4"),
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 w-5 h-5 rounded-full bg-[#2a4399]/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-[#2a4399]"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeIn} className="relative">
                  <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
                    <Image
                      src="/images/technology.png"
                      alt="Manufacturing Technology"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <AtomicStructure
                    className="absolute -bottom-10 -left-10 w-32 h-32"
                    color1={primaryBlue}
                    color2={accentOrange}
                  />
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Sustainability Section */}
            <div className="mb-16 bg-white p-8 rounded-xl shadow-md relative overflow-hidden">
              <FloatingShapes color={accentOrange} count={3} className="opacity-10" />
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("sustainabilityTitle")}</h2>

              <div className="text-center mb-8">
                <p className="text-slate-600 max-w-2xl mx-auto">{t("sustainabilityDesc")}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: t("carbonNeutral"),
                    description: t("carbonNeutralDesc"),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-green-600"
                      >
                        <path d="M2 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M7 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M12 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M17 22v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M2 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M7 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M12 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M17 17v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                        <path d="M7 12v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" />
                        <path d="M12 7V3l-3 2" />
                        <path d="M12 3l3 2" />
                      </svg>
                    ),
                  },
                  {
                    title: t("waterConservation"),
                    description: t("waterConservationDesc"),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-[#2a4399]"
                      >
                        <path d="M12 22a8 8 0 0 1-8-8c0-4.314 7-12 8-12s8 7.686 8 12a8 8 0 0 1-8 8Z" />
                      </svg>
                    ),
                  },
                  {
                    title: t("zeroWaste"),
                    description: t("zeroWasteDesc"),
                    icon: <Recycle className="h-6 w-6 text-[#f59e0b]" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mx-auto w-full max-w-sm"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* 删除了这个区块 */}
            </div>

            {/* Future Projects Section */}
            <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("newProjects")}</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={fadeIn}
                  className="space-y-4"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399]">{t("newFabrics")}</h3>
                  <p className="text-slate-600">{t("newFabricsDesc")}</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/tpu-film-2.jpg" alt="New fabric styles" fill className="object-cover" />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="space-y-4"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399]">{t("environmentalTech")}</h3>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>{t("marineRecycled")}</li>
                    <li>{t("recycleTpu")}</li>
                  </ul>
                  <h4 className="font-medium text-[#2a4399]">{t("bioBased")}</h4>
                  <p className="text-slate-600 text-sm">{t("bioBasedDesc")}</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/sustainability.jpg"
                      alt="Environmental technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="space-y-4"
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-[#2a4399]">{t("premiumInnovation")}</h3>
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>{t("highBonding")}</li>
                    <li>{t("solventFree")}</li>
                  </ul>
                  <h4 className="font-medium text-[#2a4399]">{t("extremeEnvironment")}</h4>
                  <p className="text-slate-600 text-sm">{t("extremeEnvironmentDesc")}</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/images/tpu-film-3.jpg" alt="Premium innovation" fill className="object-cover" />
                  </div>
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
