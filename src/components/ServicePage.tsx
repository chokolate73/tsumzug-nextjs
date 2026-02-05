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
  Globe,
  ChevronRight,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';
import SEO from './SEO';
import { ServiceData, services } from '@/data/services';

type Lang = 'de' | 'en' | 'ru';

interface ServicePageProps {
  service: ServiceData;
  lang: Lang;
}

const translations = {
  de: {
    backToHome: 'Zurück zur Startseite',
    ourServices: 'Unsere Leistungen',
    features: 'Leistungen',
    benefits: 'Ihre Vorteile',
    otherServices: 'Weitere Dienstleistungen',
    getQuote: 'Kostenloses Angebot anfordern',
    formSubtitle: 'Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    yourName: 'Ihr Name',
    namePlaceholder: 'Max Müller',
    phone: 'Telefonnummer',
    phonePlaceholder: '+49 123 456 7890',
    tellUs: 'Erzählen Sie uns von Ihrem Bedarf',
    detailsPlaceholder: 'Beschreiben Sie Ihre Anforderungen...',
    sendMessage: 'Nachricht senden',
    sending: 'Wird gesendet...',
    messageSent: 'Nachricht gesendet!',
    contactSoon: 'Wir werden Sie in Kürze kontaktieren.',
    thankYou: 'Vielen Dank! Wir werden Sie in Kürze kontaktieren.',
    errorMessage: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    callNow: 'Jetzt anrufen',
    whatsappChat: 'WhatsApp Chat',
    readyToStart: 'Bereit loszulegen?',
    contactUs: 'Kontaktieren Sie uns noch heute',
    navHome: 'Home',
    navServices: 'Leistungen',
    navAbout: 'Über uns',
    navContact: 'Kontakt',
    learnMore: 'Mehr erfahren',
    mainContact: 'Hauptkontakt',
    email: 'E-Mail',
    location: 'Standort',
  },
  en: {
    backToHome: 'Back to Home',
    ourServices: 'Our Services',
    features: 'Services',
    benefits: 'Your Benefits',
    otherServices: 'Other Services',
    getQuote: 'Get a Free Quote',
    formSubtitle: 'Fill out the form and we will contact you within 24 hours.',
    yourName: 'Your Name',
    namePlaceholder: 'John Smith',
    phone: 'Phone Number',
    phonePlaceholder: '+49 123 456 7890',
    tellUs: 'Tell us about your needs',
    detailsPlaceholder: 'Describe your requirements...',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent!',
    contactSoon: 'We will contact you shortly.',
    thankYou: 'Thank you! We will contact you shortly.',
    errorMessage: 'Something went wrong. Please try again.',
    callNow: 'Call Now',
    whatsappChat: 'WhatsApp Chat',
    readyToStart: 'Ready to start?',
    contactUs: 'Contact us today',
    navHome: 'Home',
    navServices: 'Services',
    navAbout: 'About Us',
    navContact: 'Contact',
    learnMore: 'Learn more',
    mainContact: 'Main Contact',
    email: 'Email',
    location: 'Location',
  },
  ru: {
    backToHome: 'На главную',
    ourServices: 'Наши услуги',
    features: 'Услуги',
    benefits: 'Ваши преимущества',
    otherServices: 'Другие услуги',
    getQuote: 'Получить бесплатное предложение',
    formSubtitle: 'Заполните форму, и мы свяжемся с вами в течение 24 часов.',
    yourName: 'Ваше имя',
    namePlaceholder: 'Иван Иванов',
    phone: 'Телефон',
    phonePlaceholder: '+49 123 456 7890',
    tellUs: 'Расскажите о ваших потребностях',
    detailsPlaceholder: 'Опишите ваши требования...',
    sendMessage: 'Отправить сообщение',
    sending: 'Отправка...',
    messageSent: 'Сообщение отправлено!',
    contactSoon: 'Мы свяжемся с вами в ближайшее время.',
    thankYou: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    errorMessage: 'Что-то пошло не так. Пожалуйста, попробуйте ещё раз.',
    callNow: 'Позвонить',
    whatsappChat: 'WhatsApp чат',
    readyToStart: 'Готовы начать?',
    contactUs: 'Свяжитесь с нами сегодня',
    navHome: 'Главная',
    navServices: 'Услуги',
    navAbout: 'О нас',
    navContact: 'Контакты',
    learnMore: 'Подробнее',
    mainContact: 'Основной контакт',
    email: 'Email',
    location: 'Локация',
  },
};

const languages = [
  { code: 'de' as Lang, label: 'Deutsch', flag: '🇩🇪', path: '/' },
  { code: 'en' as Lang, label: 'English', flag: '🇬🇧', path: '/en' },
  { code: 'ru' as Lang, label: 'Русский', flag: '🇷🇺', path: '/ru' },
];

export default function ServicePage({ service, lang }: ServicePageProps) {
  const router = useRouter();
  const t = translations[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const getHomePath = () => {
    return lang === 'de' ? '/' : `/${lang}`;
  };

  const getServicePath = (s: ServiceData) => {
    if (lang === 'de') {
      return `/services/${s.slug.de}`;
    }
    return `/${lang}/services/${s.slug[lang]}`;
  };

  const handleLanguageChange = (targetLang: Lang) => {
    const targetPath =
      targetLang === 'de'
        ? `/services/${service.slug.de}`
        : `/${targetLang}/services/${service.slug[targetLang]}`;
    router.push(targetPath);
  };

  const whatsappMessages = {
    de: `Hallo, ich interessiere mich für ${service.title.de}. Können Sie mir mehr Informationen geben?`,
    en: `Hello, I'm interested in ${service.title.en}. Can you provide more information?`,
    ru: `Здравствуйте, меня интересует ${service.title.ru}. Можете предоставить больше информации?`,
  };

  const whatsappLink = `https://wa.me/4917665197997?text=${encodeURIComponent(whatsappMessages[lang])}`;

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
          service: service.title[lang],
          language: lang,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success(t.thankYou);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error(t.errorMessage);
      }
    } catch {
      toast.error(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const otherServices = services.filter((s) => s.id !== service.id);

  const canonicalPath =
    lang === 'de' ? `/services/${service.slug.de}` : `/${lang}/services/${service.slug[lang]}`;

  // Generate correct alternate URLs for each language (with translated slugs)
  const alternates = {
    de: `/services/${service.slug.de}`,
    en: `/en/services/${service.slug.en}`,
    ru: `/ru/services/${service.slug.ru}`,
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title[lang],
    description: service.description[lang],
    provider: {
      '@type': 'LocalBusiness',
      name: 'TopSicher Umzüge',
      telephone: '+49 176 6519 7997',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Duisburg',
        addressRegion: 'NRW',
        addressCountry: 'DE',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Nordrhein-Westfalen',
    },
  };

  return (
    <>
      <SEO
        title={service.metaTitle[lang]}
        description={service.metaDescription[lang]}
        keywords={service.metaKeywords[lang]}
        lang={lang}
        canonicalPath={canonicalPath}
        type="service"
        structuredData={structuredData}
        alternates={alternates}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href={getHomePath()} className="text-xl font-bold">
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href={getHomePath()}
                className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.navHome}
              </Link>
              <Link
                href={`${getHomePath()}#services`}
                className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.navServices}
              </Link>
              <Link
                href={`${getHomePath()}#about`}
                className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.navAbout}
              </Link>
              <Link
                href={`${getHomePath()}#contact`}
                className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.navContact}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-3">
                    <Globe className="w-4 h-4" />
                    <span>{currentLang.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((langOption) => (
                    <DropdownMenuItem
                      key={langOption.code}
                      onClick={() => handleLanguageChange(langOption.code)}
                      className="gap-2 cursor-pointer"
                    >
                      <span>{langOption.flag}</span>
                      <span>{langOption.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href="tel:+4917665197997">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.callNow}
                </a>
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-2xl rounded-b-3xl">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                <Link
                  href={getHomePath()}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 transition-colors"
                >
                  {t.navHome}
                </Link>
                <Link
                  href={`${getHomePath()}#services`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 transition-colors"
                >
                  {t.navServices}
                </Link>
                <Link
                  href={`${getHomePath()}#contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 transition-colors"
                >
                  {t.navContact}
                </Link>

                <div className="flex gap-2 py-2">
                  {languages.map((langOption) => (
                    <Button
                      key={langOption.code}
                      variant={langOption.code === lang ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleLanguageChange(langOption.code)}
                      className="flex-1"
                    >
                      <span className="mr-1">{langOption.flag}</span>
                      {langOption.code.toUpperCase()}
                    </Button>
                  ))}
                </div>

                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full mt-2"
                  asChild
                >
                  <a href="tel:+4917665197997">
                    <Phone className="w-4 h-4 mr-2" />
                    {t.callNow}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={getHomePath()}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToHome}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">
                {t.ourServices}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {service.title[lang]}
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">{service.subtitle[lang]}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="tel:+4917665197997">
                  <Phone className="mr-2 w-5 h-5" />
                  {t.callNow}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t.whatsappChat}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-80 rounded-3xl shadow-lg overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                {service.longDescription[lang].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.features}</h2>
              <div className="space-y-4">
                {service.features[lang].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.benefits}</h2>
              <div className="space-y-4">
                {service.benefits[lang].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">
                {t.readyToStart}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
                {t.contactUs}
              </h2>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+4917665197997"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{t.mainContact}</p>
                    <p className="text-white font-medium">+49 176 6519 7997</p>
                  </div>
                </a>

                <a
                  href="mailto:info@tsumzug.de"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{t.email}</p>
                    <p className="text-white font-medium">info@tsumzug.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">{t.location}</p>
                    <p className="text-white font-medium">Duisburg, NRW</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    {t.whatsappChat}
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.getQuote}</h3>
                <p className="text-slate-500 mb-8">{t.formSubtitle}</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">{t.messageSent}</h4>
                    <p className="text-slate-500 text-center mt-2">{t.contactSoon}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.yourName}
                      </label>
                      <Input
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.phone}
                      </label>
                      <Input
                        type="tel"
                        placeholder={t.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.tellUs}
                      </label>
                      <Textarea
                        placeholder={t.detailsPlaceholder}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        required
                        rows={4}
                        className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          {t.sending}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          {t.sendMessage}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">{t.otherServices}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={getServicePath(s)}
                  className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
                    <s.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                      {s.title[lang]}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1 truncate">{s.subtitle[lang]}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href={getHomePath()} className="text-xl font-bold">
              <span className="text-white">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} TopSicher Umzüge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
