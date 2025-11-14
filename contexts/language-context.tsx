"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the available languages
export type Language = "en" | "zh"

// Define the structure of our translations
export type TranslationKey =
  | "companyName"
  | "tagline"
  | "home"
  | "products"
  | "technology"
  | "sustainability"
  | "aboutUs"
  | "contact"
  | "navHome"
  | "navProducts"
  | "navInnovation"
  | "navAbout"
  | "navContact"
  | "heroTitle1"
  | "heroTitle2"
  | "heroDescription"
  | "aboutButton"
  | "featuresTitle"
  | "featuresDescription"
  | "superiorProtection"
  | "superiorProtectionDesc"
  | "ecoFriendly"
  | "ecoFriendlyDesc"
  | "fullyRecyclable"
  | "fullyRecyclableDesc"
  | "ourProducts"
  | "ourProductsDesc"
  | "learnMore"
  | "viewAllProducts"
  | "advancedTechnology"
  | "advancedTechnologyDesc"
  | "technologyFeature1"
  | "technologyFeature2"
  | "technologyFeature3"
  | "technologyFeature4"
  | "technologyFeature5"
  | "technologyFeature6"
  | "technologyFeature7"
  | "technologyFeature8"
  | "learnMoreTechnology"
  | "sustainabilityTitle"
  | "sustainabilityDesc"
  | "recyclable"
  | "recyclableDesc"
  | "bioBaseDevelopment"
  | "bioBaseDevelopmentDesc"
  | "durability"
  | "durabilityDesc"
  | "carbonNeutral"
  | "carbonNeutralDesc"
  | "waterConservation"
  | "waterConservationDesc"
  | "zeroWaste"
  | "zeroWasteDesc"
  | "downloadReport"
  | "aboutTitle"
  | "aboutDesc1"
  | "aboutDesc2"
  | "learnMoreAbout"
  | "contactTitle"
  | "contactDesc"
  | "getInTouch"
  | "getInTouchTitle"
  | "getInTouchDesc"
  | "phone"
  | "email"
  | "address"
  | "name"
  | "message"
  | "sendMessage"
  | "copyright"
  | "productSeries"
  | "productDesc"
  | "viewDetails"
  | "backToHome"
  | "introduction"
  | "productsAndTechnology"
  | "manufacturingAndQuality"
  | "vision2025"
  | "companyIntroduction"
  | "dualCenterOperation"
  | "dongguan"
  | "shanwei"
  | "marketLayout"
  | "aviation"
  | "sportsGoods"
  | "outdoorProducts"
  | "medicalGoods"
  | "highQualityProducts"
  | "technicalCompetence"
  | "highFlatnessTpu"
  | "highFlatnessTpuDesc"
  | "highStrengthTpu"
  | "highStrengthTpuDesc"
  | "productApplications"
  | "aviationMarineTitle"
  | "aviationMarineDesc"
  | "sportsOutdoorTitle"
  | "sportsOutdoorDesc"
  | "medicalTitle"
  | "medicalDesc"
  | "technicalCompetenceDesc"
  | "manufacturingQuality"
  | "iqc"
  | "iqcDesc"
  | "productionControl"
  | "productionControlDesc"
  | "fqc"
  | "fqcDesc"
  | "newProjects"
  | "newFabrics"
  | "newFabricsDesc"
  | "environmentalTech"
  | "marineRecycled"
  | "recycleTpu"
  | "bioBased"
  | "bioBasedDesc"
  | "premiumInnovation"
  | "highBonding"
  | "solventFree"
  | "extremeEnvironment"
  | "extremeEnvironmentDesc"
  | "icp"
  | "contactUs"
  | "addressLabel"
  | "dongguanOffice"
  | "shanweiProduction"
  | "telLabel"
  | "emailLabel"

// Define the translations
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    companyName: "GINTAIK SPORTS GOODS CO. LTD",
    tagline: "Advanced TPU Laminated Fabric Solutions",
    home: "Home",
    products: "Products",
    technology: "Technology",
    sustainability: "Sustainability",
    aboutUs: "About Us",
    contact: "Contact",
    navHome: "Home",
    navProducts: "Product & Applications",
    navInnovation: "Innovation & Sustainability",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitle1: "From Materials",
    heroTitle2: "To Solutions",
    heroDescription: "Advanced materials for performance, reliability, and sustainability",
    aboutButton: "ABOUT GINTAIK",
    featuresTitle: "Innovative Features",
    featuresDescription: "Our TPU laminated fabric combines cutting-edge technology with eco-friendly materials",
    superiorProtection: "Superior Protection",
    superiorProtectionDesc:
      "Our TPU laminated fabric provides excellent protection against scratches, UV damage, and environmental factors.",
    ecoFriendly: "Eco-Friendly",
    ecoFriendlyDesc: "Made from sustainable materials, our fabric is biodegradable and reduces environmental impact.",
    fullyRecyclable: "Fully Recyclable",
    fullyRecyclableDesc: "Our products are designed for a circular economy, with full recyclability at end of life.",
    ourProducts: "Our Products",
    ourProductsDesc:
      "Explore our range of high-quality TPU films, TPU laminated fabrics and PVC material for diverse applications.",
    learnMore: "Learn more",
    viewAllProducts: "View All Products",
    advancedTechnology: "Advanced Technology",
    advancedTechnologyDesc: "Advanced material solutions, precisely engineered to meet every need.",
    technologyFeature1: "High bonding",
    technologyFeature2: "Easy weld-ability",
    technologyFeature3: "flame retardant treatment",
    technologyFeature4: "Anti-yellowing and UV Resistance",
    technologyFeature5: "Bio-compatibility",
    technologyFeature6: "Recyclability",
    technologyFeature7: "Wear and stain resistant surface treatment",
    technologyFeature8: "Long-lasting durability",
    learnMoreTechnology: "Learn More About Our Technology",
    sustainabilityTitle: "Explorations in Sustainability",
    sustainabilityDesc:
      "We're dedicated to creating products that minimize environmental impact while maximizing performance",
    recyclable: "Recyclable",
    recyclableDesc:
      "Our recyclable materials are designed for a circular economy, ensuring that they can be fully recycled at the end of their life, thereby reducing waste and lowering environmental impact.",
    bioBaseDevelopment: "Bio-base Development",
    bioBaseDevelopmentDesc:
      "Bio-based TPU films made from renewable resources like castor oil reduce petroleum dependence and environmental footprint.",
    durability: "Durability Reduces Environmental Pollution",
    durabilityDesc:
      "Through rigorous control of raw materials and product quality, our products deliver exceptional durability and resistance to environmental factors, extending their lifespan and reducing the need for frequent replacements.",
    carbonNeutral: "Carbon Neutral",
    carbonNeutralDesc: "Our manufacturing facilities operate on 100% renewable energy",
    waterConservation: "Water Conservation",
    waterConservationDesc: "Our closed-loop water system reduces water usage by 95%",
    zeroWaste: "Zero Waste",
    zeroWasteDesc: "100% of production waste is recycled or repurposed",
    downloadReport: "Download Sustainability Report",
    aboutTitle: "About GINTAIK",
    aboutDesc1:
      "Gintaik Sports Goods Co., Ltd. was established in 2004. Gintaik has been focusing on the R&D and production of TPU film and its laminations for twenty years, and has a wealth of production experience and innovation capability.",
    aboutDesc2:
      "With a team of dedicated scientists and engineers, we continuously innovate to improve our products and reduce environmental impact. Our facilities are certified carbon-neutral, and we're proud to lead the industry in sustainable practices.",
    learnMoreAbout: "Learn More About Us",
    contactTitle: "Contact Us",
    contactDesc: "Get in touch with our team for inquiries or collaboration opportunities",
    getInTouch: "Get In Touch",
    getInTouchTitle: "Get In Touch",
    getInTouchDesc: "We're here to answer any questions you have about our products and services.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    name: "Name",
    message: "Message",
    sendMessage: "Send Message",
    copyright: "© 2025 GINTAIK. All rights reserved.",
    productSeries: "GINTAIK Pro Series",
    productDesc: "High-performance TPU laminated fabric with enhanced durability and crystal-clear transparency.",
    viewDetails: "View Details",
    backToHome: "Back to Home",
    introduction: "INTRODUCTION",
    productsAndTechnology: "PRODUCTS & TECHNOLOGY COMPETENCE",
    manufacturingAndQuality: "MANUFACTURING & QUALITY CONTROL",
    vision2025: "2025 VISION AND DEVELOPMENT OF NEW PROJECTS",
    companyIntroduction:
      "Gintaik Sports Goods Co., Ltd. was established in 2004. Gintaik has been focusing on the R&D and production of TPU film and its laminations for twenty years, and has a wealth of production experience and innovation capability.",
    dualCenterOperation: "Dual-Center Operation:",
    dongguan: "Dongguan Financial Hub",
    shanwei: "Shanwei Manufacturing Base",
    marketLayout: "Market Layout:",
    aviation: "Aviation and Marine Lifesaving Products",
    sportsGoods: "Sports Goods & Outdoor Products",
    outdoorProducts: "Outdoor Products",
    medicalGoods: "Medical Protection Goods",
    highQualityProducts: "High quality products",
    technicalCompetence: "Technical competence & customized services",
    highFlatnessTpu: "High-flatness TPU films",
    highFlatnessTpuDesc:
      "TPU film produced in cooperation with Tailee. Precision cast process. High-precision control of film: the thickness variation of the general product can be controlled within ±2μm. Controls defects such as air spots and fish-eyes, etc. Able to cast TPU on substraes such as PET films, release paper or fabrics directly.",
    highStrengthTpu: "High-strength TPU laminated fabric",
    highStrengthTpuDesc:
      "Cast-coating and hot-pressing processes. The bonding strength of the product is at the leading level in the industry. Laminated fabric series can be flexibly adjusted to meet the needs of different environments.",
    productApplications: "Product Applications",
    aviationMarineTitle: "Aviation and Marine Lifesaving Products",
    aviationMarineDesc:
      "GINTAIK's high-strength laminated fabric products meet international standards, can be used in filling or inflatable products such as sea life jackets, inflatable beds, and armbands...",
    sportsOutdoorTitle: "Sports Goods & Outdoor Products",
    sportsOutdoorDesc:
      "Gintaik provides high-quality and high-performance TPU, PVC and their laminated materials for different outdoor sports products, which can be applied to camping tents, sleeping mats, waterproof storage bags...",
    medicalTitle: "Medical Protection Goods",
    medicalDesc:
      "Gintaik provides medical TPU and PVC films as well as laminated products, including for medical air beds, medical air cushions and other medical laminates...",
    technicalCompetenceDesc:
      "Able to match the needs of various customers accurately; TPU film products can be covered from standard to ultra-precision grade, as well as adjusted for special needs (such as flame retardant properties, UV resistance, etc.) TPU laminated fabrics are also available to fulfill various functional requirements according to customers' different product standards.",
    manufacturingQuality: "MANUFACTURING & QUALITY CONTROL",
    iqc: "IQC",
    iqcDesc:
      "According to Gintaik's IQC SOP, each batch of raw materials and fabrics is subject to inspection and control.",
    productionControl: "PRODUCTION CONTROL",
    productionControlDesc:
      "Ensure that each product is produced under the operational standards, and the process is recorded during the production",
    fqc: "FQC",
    fqcDesc:
      "Each batch of the final products is sampled and tested after production, with complete traceability records.",
    newProjects: "2025 VISION AND DEVELOPMENT OF NEW PROJECTS",
    newFabrics: "Development of new styles of fabrics",
    newFabricsDesc:
      "While meeting customers' strength performance needs, we also develop new styles and patterns to assist customers in opening new markets.",
    environmentalTech: "Environmental technology breakthroughs",
    marineRecycled: "Marine Recycled Fabrics",
    recycleTpu: "Recycle TPU Film & laminates",
    bioBased: "Bio-based TPU lamination",
    bioBasedDesc:
      "Bio-based TPU films made from raw materials such as castor to reduce oil dependence. Organic, eco-friendly and renewable fabric lamination: cornstalk recycled fabrics",
    premiumInnovation: "Premium innovation",
    highBonding: "High bonding of TPU laminated with nylon 66 fabrics",
    solventFree: "Solvent-free lamination",
    extremeEnvironment: "Extreme environmental adaptability:",
    extremeEnvironmentDesc:
      "High UV/Hydrolysis resistance: prolonging the service life at high altitude under strong UV rays (e.g. fabrics such as tents' outer accounts).",
    icp: "ICP License: Guangdong ICP XXXXXXXX | Public Security: XXXXXXXXXXXXX",
    contactUs: "Contact Us",
    addressLabel: "ADDRESS",
    dongguanOffice: "Dongguan Office",
    shanweiProduction: "Shanwei Production Center",
    telLabel: "TEL",
    emailLabel: "EMAIL",
  },
  zh: {
    companyName: "东莞市锦泰运动用品有限公司",
    tagline: "先进TPU贴合布解决方案",
    home: "首页",
    products: "产品",
    technology: "技术",
    sustainability: "可持续发展",
    aboutUs: "关于我们",
    contact: "联系我们",
    navHome: "首页",
    navProducts: "产品与应用",
    navInnovation: "创新与可持续",
    navAbout: "关于我们",
    navContact: "联系锦泰",
    heroTitle1: "从材料",
    heroTitle2: "到解决方案",
    heroDescription: "高性能、稳定可持续的先进材料",
    aboutButton: "关于锦泰",
    featuresTitle: "创新特性",
    featuresDescription: "我们的TPU贴合布结合了尖端技术和环保材料",
    superiorProtection: "卓越保护",
    superiorProtectionDesc: "我们的TPU贴合布能够提供出色的防刮擦、抗UV损伤和环境因素保护。",
    ecoFriendly: "环保友好",
    ecoFriendlyDesc: "采用可持续材料制造，我们的面料可生物降解，减少环境影响。",
    fullyRecyclable: "完全可回收",
    fullyRecyclableDesc: "我们的产品设计遵循循环经济理念，生命周期结束后可完全回收。",
    ourProducts: "我们的产品",
    ourProductsDesc: "探索我们广泛的高品质产品，包括TPU薄膜、TPU贴合布及PVC材料，适用于多种领域",
    learnMore: "了解更多",
    viewAllProducts: "查看所有产品",
    advancedTechnology: "先进的技术能力",
    advancedTechnologyDesc: "先进材料方案，精准满足多远需求",
    technologyFeature1: "高强贴合",
    technologyFeature2: "易熔接",
    technologyFeature3: "阻燃处理",
    technologyFeature4: "耐黄抗UV",
    technologyFeature5: "生物相容性",
    technologyFeature6: "回收再生",
    technologyFeature7: "耐磨耐污表面处理",
    technologyFeature8: "长效耐用",
    learnMoreTechnology: "了解更多关于我们的技术",
    sustainabilityTitle: "可持续发展探索",
    sustainabilityDesc: "我们致力于开发既能最大限度降低环境影响，又能实现最佳性能的产品。",
    recyclable: "环保可回收",
    recyclableDesc:
      "我们的可回收材料产品为循环经济而设计，确保产品寿命结束时可完全回收利用，从而减少废弃物并降低环境影响。",
    bioBaseDevelopment: "生物基材料开发",
    bioBaseDevelopmentDesc: "以可再生资源（如蓖麻油）为原料制成的生物基TPU薄膜，有助于减少对石油的依赖并降低环境影响。",
    durability: "长效耐用减少环境污染",
    durabilityDesc:
      "通过对原材料和产品质量的严格控制，我们的产品具备卓越的耐用性和抗环境因素能力，从而延长使用寿命并减少频繁更换的必要性。",
    carbonNeutral: "碳中和",
    carbonNeutralDesc: "我们的制造设施100%使用可再生能源运行",
    waterConservation: "水资源保护",
    waterConservationDesc: "我们的闭环水系统减少95%的用水量",
    zeroWaste: "零废弃",
    zeroWasteDesc: "100%的生产废料被回收或再利用",
    downloadReport: "下载可持续发展报告",
    aboutTitle: "关于锦泰",
    aboutDesc1:
      "东莞市锦泰运动用品有限公司成立于2004年，锦泰二十年来专注于TPU薄膜及其复合型材料的研发与生产，具有丰富的生产经验和一定的新产品开发能力。",
    aboutDesc2:
      "凭借一支专业的科学家和工程师团队，我们不断创新以改进产品并减少环境影响。我们的设施已获得碳中和认证，我们很自豪能在可持续实践方面引领行业。",
    learnMoreAbout: "了解更多关于我们",
    contactTitle: "联系我们",
    contactDesc: "与我们的团队联系，了解咨询或合作机会",
    getInTouch: "联系我们",
    getInTouchTitle: "联系我们",
    getInTouchDesc: "我们随时回答您关于我们产品和服务的任何问题。",
    phone: "电话",
    email: "电子邮件",
    address: "地址",
    name: "姓名",
    message: "留言",
    sendMessage: "发送消息",
    copyright: "© 2025 锦泰。保留所有权利。",
    productSeries: "锦泰专业系列",
    productDesc: "高性能TPU贴合布，具有增强的耐久性和水晶般的透明度。",
    viewDetails: "查看详情",
    backToHome: "返回首页",
    introduction: "公司简介",
    productsAndTechnology: "产品与技术能力",
    manufacturingAndQuality: "生产与质量管理",
    vision2025: "2025新项目的展望与开发",
    companyIntroduction:
      "东莞市锦泰运动用品有限公司成立于2004年，锦泰二十年来专注于TPU薄膜及其复合型材料的研发与生产，具有丰富的生产经验和一定的新产品开发能力。",
    dualCenterOperation: "双中心运营：",
    dongguan: "东莞财务中心",
    shanwei: "汕尾生产基地",
    marketLayout: "市场布局：",
    aviation: "航空航海救生",
    sportsGoods: "运动装备与户外用品",
    outdoorProducts: "户外用品",
    medicalGoods: "医疗应用",
    highQualityProducts: "高品质产品",
    technicalCompetence: "技术能力与客制化服务",
    highFlatnessTpu: "高平整度TPU薄膜",
    highFlatnessTpuDesc:
      "TPU薄膜与泰利合作生产。精密流延成型工艺。公差的高精度控制：一般产品可控制在±2μm以内。控制消除气泡、鱼眼等缺陷。可在PET膜、离型纸或布等基材上直接流延TPU。",
    highStrengthTpu: "高强度TPU贴合布",
    highStrengthTpuDesc:
      "流延涂布与热压工艺。基材与TPU层结合强度在同行业中属于领先水平。贴合布系列产品可以灵活调整工艺，满足不同环境应用需求。",
    productApplications: "产品应用",
    aviationMarineTitle: "航空航海救生",
    aviationMarineDesc: "锦泰高强复合材料符合国际标准，可应用于海上救生衣、水上充气床、手臂圈等填充或充气类产品...",
    sportsOutdoorTitle: "运动装备与户外用品",
    sportsOutdoorDesc:
      "锦泰为不同户外运动产品提供高质量高性能的TPU、PVC及其复合材料，可应用于露营帐篷、睡垫、防水收纳袋、蓄水袋、行李箱包...",
    medicalTitle: "医疗应用",
    medicalDesc: "锦泰提供医疗类TPU、PVC基材与复合材料的应用，含括医用气压床、医用气垫坐垫及其他医用类贴合布产品...",
    technicalCompetenceDesc:
      "锦泰的技术工艺使其有能力精准匹配各种客户需求。TPU薄膜类产品可实现从标准级到超精密级全覆盖，以及特殊需求调整（如阻燃性能，抗UV性能等）；TPU贴合布也可根据客户的不同产品标准，实现各种功能性需求。",
    manufacturingQuality: "生产与质量管理",
    iqc: "IQC",
    iqcDesc: "根据锦泰IQC标准，每批原料布品都进行品检管控",
    productionControl: "PRODUCTION CONTROL",
    productionControlDesc: "确保每种产品都根据操作标准进行生产，并在生产过程中做好工艺记录",
    fqc: "FQC",
    fqcDesc: "每批次产品生产后都进行取样检测，拥有完整可追溯记录",
    newProjects: "2025新项目的展望与开发",
    newFabrics: "包袋面料新风格开发",
    newFabricsDesc: "在满足客户强度性能需求的同时，也提供新风格新样式的开发，协助客户打开新市场",
    environmentalTech: "环保技术突破",
    marineRecycled: "海洋再生面料",
    recycleTpu: "回收TPU与贴合布",
    bioBased: "生物基TPU贴合",
    bioBasedDesc: "采用蓖麻油等生物基原料的TPU薄膜，降低石油依赖。有机环保可再生布料贴合：玉米梗面料",
    premiumInnovation: "高端面料开发",
    highBonding: "TPU与尼龙66的高牢度贴合",
    solventFree: "无溶剂贴合",
    extremeEnvironment: "极端环境适应性：",
    extremeEnvironmentDesc: "高抗UV/抗水解：延长高海拔强紫外线下的使用寿命（如帐篷外账等面料）",
    icp: "备案信息：粤ICP备XXXXXXXX号 | 粤公网安备XXXXXXXXXXXXX号",
    contactUs: "联系我们",
    addressLabel: "地址",
    dongguanOffice: "东莞办公室",
    shanweiProduction: "汕尾生产基地",
    telLabel: "联系电话",
    emailLabel: "邮箱",
  },
}

// Define the context type
interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")

  // Function to get translation
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  // Store language preference in localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && (storedLanguage === "en" || storedLanguage === "zh")) {
      setLanguage(storedLanguage)
    }
  }, [])

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Create a hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
