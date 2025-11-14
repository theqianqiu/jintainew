"use client"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { WaveBackgroundImg } from "./wave-background-img"
import { motion } from "framer-motion"

export function LocationFooter() {
  const { t, language } = useLanguage()
  const [activeLocation, setActiveLocation] = useState<"dongguan" | "shanwei">("dongguan")

  return (
    <footer id="contact" className="bg-white relative py-12">
      <div className="relative z-10 container pt-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2a4399] mb-8">{t("getInTouchTitle")}</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2a4399]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#2a4399]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#2a4399] mb-2">{t("addressLabel")}</h4>

                  {/* Dongguan Office */}
                  <div className="mb-4">
                    <p className="font-medium text-[#2a4399] mb-1">{t("dongguanOffice")}</p>
                    <p className="text-slate-600 text-sm">
                      {language === "en"
                        ? "Room 1001, Building 7, Tiansheng Industrial Park, Wanjiang Street, Dongguan City, Guangdong Province"
                        : "广东省东莞市万江街道添盛产业园7栋1001室"}
                    </p>
                  </div>

                  {/* Shanwei Production Center */}
                  <div>
                    <p className="font-medium text-[#2a4399] mb-1">{t("shanweiProduction")}</p>
                    <p className="text-slate-600 text-sm">
                      {language === "en"
                        ? "Tianxinghu Industrial Zone, Meilong Town, Haifeng County, Shanwei City, Guangdong Province"
                        : "广东省汕尾市海丰县梅陇镇天星湖工业区"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2a4399]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#2a4399]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#2a4399] mb-1">{t("telLabel")}</h4>
                  <p className="text-slate-600">0769-22708251</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2a4399]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#2a4399]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#2a4399] mb-1">{t("emailLabel")}</h4>
                  <p className="text-slate-600">zhq@gintaik.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setActiveLocation("dongguan")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeLocation === "dongguan"
                    ? "bg-[#2a4399] text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {language === "en" ? "Dongguan" : "东莞"}
              </button>
              <button
                onClick={() => setActiveLocation("shanwei")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeLocation === "shanwei"
                    ? "bg-[#2a4399] text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {language === "en" ? "Shanwei" : "汕尾"}
              </button>
            </div>

            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-slate-200">
              {activeLocation === "dongguan" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6883!2d113.7267!3d23.0489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzU2LjAiTiAxMTPCsDQzJzM2LjEiRQ!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dongguan Office Location"
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6883!2d115.3233!3d22.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzAwLjEiTiAxMTXCsDE5JzIzLjkiRQ!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shanwei Production Center Location"
                />
              )}
            </div>
          </motion.div>
        </div>
        <div className="mt-16 pt-8 text-center relative z-10">
          <div className="text-sm text-white mb-2">{t("copyright")}</div>
          <div className="text-xs text-white">{t("icp")}</div>
        </div>
      </div>
      <WaveBackgroundImg />
    </footer>
  )
}
