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

export default function AboutPage() {
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
                {t("companyName")}
                {/* 移除了日期展示 */}
              </h1>
            </div>

            {/* Table of Contents */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-16 bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("introduction")}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2a4399]">01. {t("introduction")}</h3>
                  <p className="text-slate-600">{t("companyIntroduction")}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-[#2a4399]">{t("dualCenterOperation")}</p>
                    <ul className="list-disc pl-5 text-slate-600">
                      <li>{t("dongguan")}</li>
                      <li>{t("shanwei")}</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-[#2a4399]">{t("marketLayout")}</p>
                    <ul className="list-disc pl-5 text-slate-600">
                      <li>{t("aviation")}</li>
                      <li>{t("sportsGoods")}</li>
                      <li>{t("outdoorProducts")}</li>
                      <li>{t("medicalGoods")}</li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2a4399]">02. {t("productsAndTechnology")}</h3>
                  <div className="space-y-2">
                    <p className="font-medium text-[#2a4399]">{t("highQualityProducts")}</p>
                    <p className="font-medium text-[#2a4399]">{t("technicalCompetence")}</p>
                  </div>

                  <h3 className="text-xl font-semibold text-[#2a4399] mt-6">03. {t("manufacturingAndQuality")}</h3>
                  <div className="space-y-2">
                    <p className="text-slate-600">{t("iqc")}</p>
                    <p className="text-slate-600">{t("productionControl")}</p>
                    <p className="text-slate-600">{t("fqc")}</p>
                  </div>

                  <h3 className="text-xl font-semibold text-[#2a4399] mt-6">04. {t("vision2025")}</h3>
                  <div className="space-y-2">
                    <p className="text-slate-600">{t("newFabrics")}</p>
                    <p className="text-slate-600">{t("environmentalTech")}</p>
                    <p className="text-slate-600">{t("premiumInnovation")}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Manufacturing & Quality Control */}
            <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[#2a4399] mb-6">{t("manufacturingAndQuality")}</h2>

              {/* 使用指定的渐变背景 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
                <div className="relative z-10 p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                      variants={fadeIn}
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <h3 className="text-xl font-semibold text-[#2a4399] mb-4">{t("iqc")}</h3>
                      <p className="text-slate-600">{t("iqcDesc")}</p>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <h3 className="text-xl font-semibold text-[#2a4399] mb-4">{t("productionControl")}</h3>
                      <p className="text-slate-600">{t("productionControlDesc")}</p>
                    </motion.div>

                    <motion.div
                      variants={fadeIn}
                      className="bg-white p-6 rounded-lg shadow-md"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <h3 className="text-xl font-semibold text-[#2a4399] mb-4">{t("fqc")}</h3>
                      <p className="text-slate-600">{t("fqcDesc")}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2025 Vision */}
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
