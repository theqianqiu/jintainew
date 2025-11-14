"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { WaveBackgroundImg } from "./wave-background-img"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-white text-white py-12 relative">
      <div className="relative z-10 container pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="relative w-72 h-24 mx-auto md:mx-0">
                <Image src="/images/gintaik-logo.png" alt="GINTAIK Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-[#2a4399] text-sm text-center md:text-left">{t("aboutDesc1").substring(0, 100)}...</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#2a4399] text-center md:text-left">{t("products")}</h3>
            <ul className="space-y-2 text-[#2a4399] text-center md:text-left">
              <li>
                <Link href="/products" className="hover:text-[#1e3278] transition-colors">
                  {t("aviation")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1e3278] transition-colors">
                  {t("sportsGoods")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1e3278] transition-colors">
                  {t("outdoorProducts")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1e3278] transition-colors">
                  {t("medicalGoods")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#2a4399] text-center md:text-left">{t("aboutUs")}</h3>
            <ul className="space-y-2 text-[#2a4399] text-center md:text-left">
              <li>
                <Link href="/about" className="hover:text-[#1e3278] transition-colors">
                  {t("introduction")}
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-[#1e3278] transition-colors">
                  {t("sustainability")}
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="hover:text-[#1e3278] transition-colors">
                  {t("technology")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1e3278] transition-colors">
                  {t("vision2025")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#2a4399] text-center md:text-left">{t("contact")}</h3>
            <ul className="space-y-2 text-[#2a4399] text-center md:text-left">
              <li>
                <Link href="/contact" className="hover:text-[#1e3278] transition-colors">
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1e3278] transition-colors">
                  {t("email")}: info@gintaik.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1e3278] transition-colors">
                  {t("phone")}: 0769-22708251
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 text-center text-white relative z-10">
          <div className="text-xs opacity-80">{t("copyright")}</div>
        </div>
      </div>
      <WaveBackgroundImg />
    </footer>
  )
}
