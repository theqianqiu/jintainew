"use client"

import Image from "next/image"
import { ArrowRight, Recycle, Leaf, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingShapes } from "@/components/floating-shapes"
import { AtomicStructure } from "@/components/atomic-structure"
import { Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { LocationFooter } from "@/components/location-footer"
import Link from "next/link"

export default function Home() {
  // GINTAIK logo colors
  const primaryBlue = "#2a4399"
  const accentOrange = "#f59e0b"
  const { t } = useLanguage()

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
        {/* 移除这行：<BackgroundPaths /> */}
      </div>

      {/* Navigation */}
      <Header />

      <main className="flex-1 relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-32">
          <AnimatedBackground color={primaryBlue} density="medium" speed="slow" />
          <FloatingShapes color={accentOrange} count={7} />
          <div className="container flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2a4399]">
                {t("heroTitle1")} <br />
                <span className="text-[#f59e0b]">{t("heroTitle2")}</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">{t("heroDescription")}</p>
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="bg-[#2a4399] hover:bg-[#1e3278]">
                  {t("aboutButton")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-amber-200/50 backdrop-blur-sm"></div>
                {/* 删除了TPU图片 */}
                {/* 调整背景展示框的大小，使其与图片框的差距为 16px */}
                <div className="absolute inset-[8px] flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-white/30 backdrop-blur-md border border-white/50 shadow-lg"></div>
                </div>
              </div>
              <AtomicStructure
                className="absolute -bottom-10 -right-10 w-40 h-40"
                color1={primaryBlue}
                color2={accentOrange}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
        </section>
        {/* Product Applications Section - 简化为三格展示 */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-amber-50/30 to-blue-50/30 pointer-events-none"></div>
          <div className="container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2a4399]">{t("productApplications")}</h2>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{t("ourProductsDesc")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Aviation & Marine Lifesaving Products */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/images/aviation.png" alt={t("aviationMarineTitle")} fill className="object-cover" priority />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("aviationMarineTitle")}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{t("aviationMarineDesc").substring(0, 120)}...</p>
                <Link href="/products" className="text-[#2a4399] font-medium hover:underline flex items-center">
                  {t("learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>

              {/* Sports Goods & Outdoor Products */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/images/sports.png" alt={t("sportsOutdoorTitle")} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("sportsOutdoorTitle")}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{t("sportsOutdoorDesc").substring(0, 120)}...</p>
                <Link href="/products" className="text-[#2a4399] font-medium hover:underline flex items-center">
                  {t("learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>

              {/* Medical Protection Goods */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image src="/images/medical.png" alt={t("medicalTitle")} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("medicalTitle")}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{t("medicalDesc").substring(0, 120)}...</p>
                <Link href="/products" className="text-[#2a4399] font-medium hover:underline flex items-center">
                  {t("learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Technology Section - 合并了 Innovation Features 的内容 */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-blue-100/30 to-blue-50/30 pointer-events-none"></div>
          <AnimatedBackground color={primaryBlue} density="low" speed="medium" className="opacity-30" />
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#2a4399] mb-6">{t("advancedTechnology")}</h2>
                <p className="text-slate-600 mb-4">{t("advancedTechnologyDesc")}</p>
                <ul className="space-y-3">
                  {[
                    t("technologyFeature1"),
                    t("technologyFeature2"),
                    t("technologyFeature3"),
                    t("technologyFeature4"),
                    t("technologyFeature5"),
                    t("technologyFeature6"),
                    t("technologyFeature7"),
                    t("technologyFeature8"),
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
              </div>
              <div className="relative">
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
                <div className="absolute -top-6 -right-6 w-16 h-16" />
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing & Quality Control Section - 修改后 */}
        {/*
        <section className="py-16 md:py-24 relative">
          <div className="container relative">
            <h2 className="text-3xl font-bold text-[#2a4399] mb-6">{t("manufacturingAndQuality")}</h2>

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
        </section>
        */}

        {/* Sustainability Section - 修改标题和内容 */}
        <section className="py-16 md:py-24 relative">
          {/* 尝试使用蓝色渐变背景 */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/80 via-blue-200/60 to-blue-100/80 rounded-3xl mx-4 md:mx-12 pointer-events-none"></div>
          <FloatingShapes color={accentOrange} count={5} />
          <div className="container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2a4399]">{t("sustainabilityTitle")}</h2>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{t("sustainabilityDesc")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Recyclable */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mx-auto w-full max-w-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-[#2a4399]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("recyclable")}</h3>
                <p className="text-slate-600">{t("recyclableDesc")}</p>
              </motion.div>

              {/* Bio-base Development */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mx-auto w-full max-w-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("bioBaseDevelopment")}</h3>
                <p className="text-slate-600">{t("bioBaseDevelopmentDesc")}</p>
              </motion.div>

              {/* Durability */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mx-auto w-full max-w-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2a4399] mb-2">{t("durability")}</h3>
                <p className="text-slate-600">{t("durabilityDesc")}</p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* About Section - 已注释掉 */}
        {/*
<section id="about" className="py-16 md:py-24 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-blue-100/30 to-blue-50/30 pointer-events-none"></div>
  <div className="container relative">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <div className="relative">
          <Image
            src="/images/team.png"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>
          <AtomicStructure
            className="absolute -top-10 -left-10 w-32 h-32"
            color1={primaryBlue}
            color2={accentOrange}
          />
        </div>
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold text-[#2a4399] mb-6">{t("aboutTitle")}</h2>
        <p className="text-slate-600 mb-4">{t("aboutDesc1")}</p>
        <p className="text-slate-600 mb-6">{t("aboutDesc2")}</p>
        <Button className="bg-[#2a4399] hover:bg-[#1e3278]">{t("learnMoreAbout")}</Button>
      </div>
    </div>
  </div>
</section>
*/}
        {/* Contact Section - 保留在首页 */}
        <section className="relative">
          <LocationFooter />
        </section>
      </main>
    </div>
  )
}
