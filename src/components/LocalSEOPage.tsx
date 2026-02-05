'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  ArrowLeft,
  Check,
  Menu,
  X,
  Clock,
  Shield,
  Euro,
  Star,
  ChevronRight,
  Calculator,
  Navigation,
  LucideIcon,
  Home,
} from 'lucide-react';
import { toast } from 'sonner';
import { SEOHead } from '@/components/seo/SEOHead';
import { COMPANY } from '@/config/company';
import {
  buildMovingCompanySchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from '@/utils/jsonLd';
import { trackCallClick, trackWhatsAppClick, trackFormSubmit, trackAngebotClick, ANGEBOT_UTM } from '@/utils/tracking';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PriceExample {
  label: string;
  price: string;
  note?: string;
}

export interface InternalLink {
  text: string;
  href: string;
}

type Language = 'de' | 'en' | 'ru';

interface Translations {
  nav: {
    home: string;
    services: string;
    prices: string;
    faq: string;
    contact: string;
    callNow: string;
  };
  hero: {
    backToHome: string;
    freeQuote: string;
    insuredTransport: string;
    fixedPrice: string;
    localTeam: string;
  };
  pricing: {
    transparentPrices: string;
    whatAffectsPrice: string;
    contactForQuote: string;
    requestQuote: string;
  };
  local: {
    localIn: string;
    weAreActiveIn: string;
    planRoute: string;
    ourLocation: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  related: {
    title: string;
  };
  contact: {
    readyToStart: string;
    requestFreeQuote: string;
    weWillContact: string;
    phone: string;
    email: string;
    sendRequest: string;
    weReplyIn24h: string;
    yourName: string;
    namePlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    yourRequest: string;
    requestPlaceholder: string;
    sending: string;
    send: string;
    messageSent: string;
    weWillContactYouSoon: string;
  };
  footer: {
    services: string;
    legal: string;
    imprint: string;
    privacy: string;
    copyright: string;
    planRoute: string;
    tagline: string;
  };
  toast: {
    success: string;
    error: string;
  };
  whatsappMessage: string;
}

const translations: Record<Language, Translations> = {
  de: {
    nav: {
      home: 'Home',
      services: 'Leistungen',
      prices: 'Preise',
      faq: 'FAQ',
      contact: 'Kontakt',
      callNow: 'Jetzt anrufen',
    },
    hero: {
      backToHome: 'Zurück zur Startseite',
      freeQuote: 'Kostenloses Angebot',
      insuredTransport: 'Versicherter Transport',
      fixedPrice: 'Festpreisgarantie',
      localTeam: 'Lokales Team aus Duisburg',
    },
    pricing: {
      transparentPrices: 'Transparente Preise',
      whatAffectsPrice: 'Was beeinflusst den Preis?',
      contactForQuote: 'Für ein genaues Angebot kontaktieren Sie uns. Die Besichtigung ist kostenlos.',
      requestQuote: 'Kostenloses Angebot anfordern',
    },
    local: {
      localIn: 'Lokal in Duisburg',
      weAreActiveIn: 'Wir sind aktiv in:',
      planRoute: 'Route zu uns planen',
      ourLocation: 'Unser Standort',
    },
    faq: {
      title: 'Häufige Fragen',
      subtitle: 'Antworten auf die wichtigsten Fragen unserer Kunden',
    },
    related: {
      title: 'Weitere Leistungen',
    },
    contact: {
      readyToStart: 'Bereit loszulegen?',
      requestFreeQuote: 'Jetzt kostenloses Angebot anfordern',
      weWillContact: 'Wir erstellen Ihnen ein unverbindliches Angebot nach einer kostenlosen Besichtigung vor Ort.',
      phone: 'Telefon',
      email: 'E-Mail',
      sendRequest: 'Anfrage senden',
      weReplyIn24h: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      yourName: 'Ihr Name',
      namePlaceholder: 'Max Müller',
      phoneNumber: 'Telefonnummer',
      phonePlaceholder: '+49 123 456 7890',
      yourRequest: 'Ihre Anfrage',
      requestPlaceholder: 'Beschreiben Sie Ihr Anliegen...',
      sending: 'Wird gesendet...',
      send: 'Anfrage senden',
      messageSent: 'Nachricht gesendet!',
      weWillContactYouSoon: 'Wir werden Sie in Kürze kontaktieren.',
    },
    footer: {
      services: 'Leistungen',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: 'Alle Rechte vorbehalten.',
      planRoute: 'Route planen',
      tagline: 'Ihr zuverlässiges Umzugsunternehmen in Duisburg. Faire Preise, professioneller Service.',
    },
    toast: {
      success: 'Vielen Dank! Wir werden Sie in Kürze kontaktieren.',
      error: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    },
    whatsappMessage: 'Hallo, ich interessiere mich für Ihre Dienstleistungen in Duisburg. Können Sie mir ein Angebot machen?',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      prices: 'Prices',
      faq: 'FAQ',
      contact: 'Contact',
      callNow: 'Call Now',
    },
    hero: {
      backToHome: 'Back to Home',
      freeQuote: 'Free Quote',
      insuredTransport: 'Insured Transport',
      fixedPrice: 'Fixed Price Guarantee',
      localTeam: 'Local Team from Duisburg',
    },
    pricing: {
      transparentPrices: 'Transparent Prices',
      whatAffectsPrice: 'What affects the price?',
      contactForQuote: 'Contact us for an accurate quote. The inspection is free.',
      requestQuote: 'Request Free Quote',
    },
    local: {
      localIn: 'Local in Duisburg',
      weAreActiveIn: 'We are active in:',
      planRoute: 'Plan Route to Us',
      ourLocation: 'Our Location',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to our customers\' most important questions',
    },
    related: {
      title: 'More Services',
    },
    contact: {
      readyToStart: 'Ready to start?',
      requestFreeQuote: 'Request Your Free Quote Now',
      weWillContact: 'We will provide you with a non-binding quote after a free on-site inspection.',
      phone: 'Phone',
      email: 'Email',
      sendRequest: 'Send Request',
      weReplyIn24h: 'We will contact you within 24 hours.',
      yourName: 'Your Name',
      namePlaceholder: 'John Smith',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '+49 123 456 7890',
      yourRequest: 'Your Request',
      requestPlaceholder: 'Describe your needs...',
      sending: 'Sending...',
      send: 'Send Request',
      messageSent: 'Message Sent!',
      weWillContactYouSoon: 'We will contact you shortly.',
    },
    footer: {
      services: 'Services',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      copyright: 'All rights reserved.',
      planRoute: 'Plan Route',
      tagline: 'Your reliable moving company in Duisburg. Fair prices, professional service.',
    },
    toast: {
      success: 'Thank you! We will contact you shortly.',
      error: 'Something went wrong. Please try again.',
    },
    whatsappMessage: 'Hello, I am interested in your services in Duisburg. Can you give me a quote?',
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      prices: 'Цены',
      faq: 'FAQ',
      contact: 'Контакты',
      callNow: 'Позвонить',
    },
    hero: {
      backToHome: 'На главную',
      freeQuote: 'Бесплатный расчёт',
      insuredTransport: 'Застрахованная перевозка',
      fixedPrice: 'Гарантия фиксированной цены',
      localTeam: 'Местная команда из Дуйсбурга',
    },
    pricing: {
      transparentPrices: 'Прозрачные цены',
      whatAffectsPrice: 'Что влияет на цену?',
      contactForQuote: 'Свяжитесь с нами для точного расчёта. Осмотр бесплатный.',
      requestQuote: 'Запросить бесплатный расчёт',
    },
    local: {
      localIn: 'Локально в Дуйсбурге',
      weAreActiveIn: 'Мы работаем в:',
      planRoute: 'Проложить маршрут',
      ourLocation: 'Наш адрес',
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Ответы на самые важные вопросы наших клиентов',
    },
    related: {
      title: 'Другие услуги',
    },
    contact: {
      readyToStart: 'Готовы начать?',
      requestFreeQuote: 'Запросите бесплатный расчёт сейчас',
      weWillContact: 'Мы составим вам предложение после бесплатного осмотра на месте.',
      phone: 'Телефон',
      email: 'Email',
      sendRequest: 'Отправить запрос',
      weReplyIn24h: 'Мы свяжемся с вами в течение 24 часов.',
      yourName: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      phoneNumber: 'Телефон',
      phonePlaceholder: '+49 123 456 7890',
      yourRequest: 'Ваш запрос',
      requestPlaceholder: 'Опишите ваши потребности...',
      sending: 'Отправка...',
      send: 'Отправить запрос',
      messageSent: 'Сообщение отправлено!',
      weWillContactYouSoon: 'Мы свяжемся с вами в ближайшее время.',
    },
    footer: {
      services: 'Услуги',
      legal: 'Правовая информация',
      imprint: 'Импрессум',
      privacy: 'Политика конфиденциальности',
      copyright: 'Все права защищены.',
      planRoute: 'Маршрут',
      tagline: 'Ваша надёжная компания по переездам в Дуйсбурге. Честные цены, профессиональный сервис.',
    },
    toast: {
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
      error: 'Что-то пошло не так. Пожалуйста, попробуйте ещё раз.',
    },
    whatsappMessage: 'Здравствуйте, меня интересуют ваши услуги в Дуйсбурге. Можете сделать мне предложение?',
  },
};

interface FooterLinks {
  de: InternalLink[];
  en: InternalLink[];
  ru: InternalLink[];
}

const footerServiceLinks: FooterLinks = {
  de: [
    { text: 'Privatumzug', href: '/privatumzug-duisburg' },
    { text: 'Firmenumzug', href: '/firmenumzug-duisburg' },
    { text: 'Entrümpelung', href: '/entruempelung-duisburg' },
    { text: 'Möbeltransport', href: '/moebeltransport-duisburg' },
    { text: 'Hausmeisterservice', href: '/hausmeisterservice-duisburg' },
    { text: 'Renovierung', href: '/renovierung-duisburg' },
  ],
  en: [
    { text: 'Residential Moves', href: '/en/services/residential-moves' },
    { text: 'Office Relocations', href: '/en/services/office-relocations' },
    { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
    { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
    { text: 'Handyman Services', href: '/en/services/handyman-services' },
    { text: 'Renovation', href: '/en/services/renovation' },
  ],
  ru: [
    { text: 'Частные переезды', href: '/ru/services/chastnye-pereezdy' },
    { text: 'Офисные переезды', href: '/ru/services/ofisnye-pereezdy' },
    { text: 'Уборка и вывоз', href: '/ru/services/uborka-vyvoz' },
    { text: 'Перевозка мебели', href: '/ru/services/perevozka-mebeli' },
    { text: 'Услуги мастеров', href: '/ru/services/uslugi-masterov' },
    { text: 'Ремонт', href: '/ru/services/remont' },
  ],
};

export interface LocalSEOPageProps {
  // Meta
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;

  // Language
  lang?: Language;

  // Breadcrumbs (optional - will generate default if not provided)
  breadcrumbLabel?: string;

  // Hero
  icon: LucideIcon;
  badge: string;
  h1: string;
  subtitle: string;

  // Content
  introText: string;

  // Process
  processTitle: string;
  processSteps: { title: string; description: string }[];

  // Features
  featuresTitle: string;
  features: string[];

  // Benefits
  benefitsTitle: string;
  benefits: string[];

  // Pricing
  pricingTitle: string;
  pricingIntro: string;
  priceExamples: PriceExample[];
  priceFactors: string[];

  // Local
  localTitle: string;
  localText: string;
  neighborhoods: string[];

  // FAQ
  faqs: FAQItem[];

  // Internal Links
  relatedServices: InternalLink[];

  // Images
  heroImage: string;
}

export default function LocalSEOPage({
  metaTitle,
  metaDescription,
  canonicalPath,
  lang = 'de',
  breadcrumbLabel,
  icon: Icon,
  badge,
  h1,
  subtitle,
  introText,
  processTitle,
  processSteps,
  featuresTitle,
  features,
  benefitsTitle,
  benefits,
  pricingTitle,
  pricingIntro,
  priceExamples,
  priceFactors,
  localTitle,
  localText,
  neighborhoods,
  faqs,
  relatedServices,
  heroImage,
}: LocalSEOPageProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[lang];
  const homePath = lang === 'de' ? '/' : `/${lang}`;

  const whatsappLink = `${COMPANY.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`;
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address.full)}`;

  // Full canonical URL
  const canonicalUrl = `${COMPANY.url}${canonicalPath}`;

  // Build breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { name: t.nav.home, url: COMPANY.url },
    { name: breadcrumbLabel || h1, url: canonicalUrl },
  ];

  // Build JSON-LD schemas
  const schemas = [
    buildMovingCompanySchema({ url: canonicalUrl }),
    buildBreadcrumbSchema(breadcrumbs),
    ...(faqs.length > 0 ? [buildFAQSchema(faqs, canonicalUrl)] : []),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdznqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.details,
          _gotcha: formData._gotcha,
          page: canonicalPath,
          language: lang,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackFormSubmit('quick_contact', canonicalPath);
        toast.success(t.toast.success);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error(t.toast.error);
      }
    } catch {
      toast.error(t.toast.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title={`${metaTitle} | ${COMPANY.name}`}
        description={metaDescription}
        canonical={canonicalUrl}
        jsonLd={schemas}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href={homePath} className="text-xl font-bold">
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href={homePath} className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.home}
              </Link>
              <a href="#leistungen" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.services}
              </a>
              <a href="#preise" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.prices}
              </a>
              <a href="#faq" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.faq}
              </a>
              <a href="#kontakt" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {t.nav.contact}
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'navbar_cta')}>
                  <Phone className="w-4 h-4 mr-2" />
                  {t.nav.callNow}
                </a>
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-2xl rounded-b-3xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link href={homePath} className="text-lg font-medium text-slate-700 py-2">{t.nav.home}</Link>
              <a href="#leistungen" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.services}</a>
              <a href="#preise" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.prices}</a>
              <a href="#faq" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.faq}</a>
              <a href="#kontakt" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'mobile_navbar_cta')}><Phone className="w-4 h-4 mr-2" />{t.nav.callNow}</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb UI */}
      <div className="pt-24 bg-slate-100">
        <div className="container mx-auto px-6 md:px-12 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href={homePath} className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <Home className="w-4 h-4" />
              <span>{t.nav.home}</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">{breadcrumbLabel || h1}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-8 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href={homePath} className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              {t.hero.backToHome}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {h1}
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">{subtitle}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl" asChild>
                <Link href={`/angebot${ANGEBOT_UTM}`} onClick={() => trackAngebotClick('hero_cta')}><Calculator className="mr-2 w-5 h-5" />{t.hero.freeQuote}</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'hero_cta')}><Phone className="mr-2 w-5 h-5" />{t.nav.callNow}</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-6 text-lg rounded-xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('hero_cta')}>
                  <MessageCircle className="mr-2 w-5 h-5" />WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span>{t.hero.insuredTransport}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Euro className="w-5 h-5 text-green-400" />
                <span>{t.hero.fixedPrice}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="w-5 h-5 text-green-400" />
                <span>{t.hero.localTeam}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative w-full h-80 rounded-3xl shadow-lg overflow-hidden">
                <Image src={heroImage} alt={h1} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="prose prose-lg max-w-none">
                {introText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{processTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm text-center h-full">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-orange-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section id="leistungen" className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{featuresTitle}</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{benefitsTitle}</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preise" className="py-16 bg-orange-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              {t.pricing.transparentPrices}
            </div>
            <h2 className="text-3xl font-bold text-slate-900">{pricingTitle}</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">{pricingIntro}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {priceExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm text-center"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{example.label}</h3>
                <p className="text-3xl font-bold text-orange-500">{example.price}</p>
                {example.note && <p className="text-slate-500 text-sm mt-2">{example.note}</p>}
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">{t.pricing.whatAffectsPrice}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {priceFactors.map((factor, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-600">
                  <Euro className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-600 mb-4">{t.pricing.contactForQuote}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'pricing_cta')}><Phone className="w-4 h-4 mr-2" />{t.pricing.requestQuote}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                {t.local.localIn}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{localTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{localText}</p>

              <h3 className="font-semibold text-slate-900 mb-3">{t.local.weAreActiveIn}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {neighborhoods.map((hood, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {hood}
                  </span>
                ))}
              </div>

              <Button variant="outline" className="rounded-xl" asChild>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  {t.local.planRoute}
                </a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">{t.local.ourLocation}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">TopSicher Umzüge</p>
                      <p className="text-slate-400">{COMPANY.address.street}</p>
                      <p className="text-slate-400">{COMPANY.address.postalCode} {COMPANY.address.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <a href={COMPANY.phoneLink} className="hover:text-orange-400 transition-colors">{COMPANY.phoneDisplay}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-orange-400 transition-colors">{COMPANY.email}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <div>
                      <p>Mo-Fr: 08:00 - 20:00</p>
                      <p>Sa: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t.faq.title}</h2>
            <p className="text-slate-600 mt-4">{t.faq.subtitle}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-xl px-6 shadow-sm border-none">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t.related.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Link
                  href={service.href}
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-slate-900 group-hover:text-orange-500 transition-colors">{service.text}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">{t.contact.readyToStart}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">{t.contact.requestFreeQuote}</h2>
              <p className="text-slate-400 mt-4">{t.contact.weWillContact}</p>

              <div className="mt-10 space-y-4">
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'contact_section')} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{t.contact.phone}</p>
                    <p className="text-white font-medium">{COMPANY.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{t.contact.email}</p>
                    <p className="text-white font-medium">{COMPANY.email}</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />WhatsApp Chat
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.sendRequest}</h3>
                <p className="text-slate-500 mb-8">{t.contact.weReplyIn24h}</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">{t.contact.messageSent}</h4>
                    <p className="text-slate-500 text-center mt-2">{t.contact.weWillContactYouSoon}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.yourName}</label>
                      <Input placeholder={t.contact.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.phoneNumber}</label>
                      <Input type="tel" placeholder={t.contact.phonePlaceholder} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.yourRequest}</label>
                      <Textarea placeholder={t.contact.requestPlaceholder} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} required rows={4} className="rounded-xl resize-none" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl">
                      {isSubmitting ? (<><Loader2 className="mr-2 w-5 h-5 animate-spin" />{t.contact.sending}</>) : (<><Send className="mr-2 w-5 h-5" />{t.contact.send}</>)}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href={homePath} className="text-xl font-bold">
                <span className="text-white">TopSicher</span>
                <span className="text-orange-500"> Umzüge</span>
              </Link>
              <p className="text-slate-400 mt-4 text-sm">{t.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-sm">
                {footerServiceLinks[lang].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-slate-400 hover:text-orange-400 transition-colors">{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t.nav.contact}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>{COMPANY.address.street}</li>
                <li>{COMPANY.address.postalCode} {COMPANY.address.city}</li>
                <li><a href={COMPANY.phoneLink} className="hover:text-orange-400">{COMPANY.phoneDisplay}</a></li>
                <li><a href={`mailto:${COMPANY.email}`} className="hover:text-orange-400">{COMPANY.email}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-slate-400 hover:text-orange-400 transition-colors">{t.footer.imprint}</Link></li>
                <li><Link href="/datenschutz" className="text-slate-400 hover:text-orange-400 transition-colors">{t.footer.privacy}</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TopSicher Umzüge. {t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">{t.footer.planRoute}</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </>
  );
}
