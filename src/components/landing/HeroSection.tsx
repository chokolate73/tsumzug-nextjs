'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, CheckCircle, MessageCircle, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import heroBackgroundMobile from '@/assets/hero-background-mobile.png';

export default function HeroSection() {
  const whatsappLink = "https://wa.me/4917665197997?text=Hallo%2C%20ich%20brauche%20Hilfe%20beim%20Umzug";
  const emailLink = "mailto:info@tsumzug.de";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - single <picture> so browser only downloads the needed variant */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet={heroBackground} />
        <img
          src={heroBackgroundMobile}
          alt="Umzugsfirma Duisburg – TopSicher Umzüge Team beim professionellen Umzugsservice"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-white/75" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-2xl py-12 sm:py-16 md:py-20">
          {/* Phone Number Box */}
          <motion.a
            href="tel:+4917665197997"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-orange-500 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 hover:bg-orange-600 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
            <span className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">+49 176 6519 7997</span>
          </motion.a>

          {/* 24/7 Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-blue-50 rounded-full mb-6 sm:mb-8 md:mb-10"
          >
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            <span className="text-blue-700 font-medium text-sm sm:text-base md:text-lg">Schnelle Rückmeldung – auch kurzfristig</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6 md:mb-8"
          >
            Umzugsunternehmen Duisburg – <span className="text-orange-500">TopSicher Umzüge</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-700 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-medium"
          >
            Ihre <strong>Umzugsfirma in Duisburg</strong> – zuverlässig, versichert und zum Festpreis. Privatumzug, Firmenumzug und Full-Service in ganz NRW.
          </motion.p>

          {/* Contact Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href={emailLink}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="tel:+4917665197997"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-900 hover:bg-slate-800 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </motion.div>

          {/* Features with Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 md:gap-8"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium text-sm sm:text-base md:text-lg">Keine versteckten Kosten</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium text-sm sm:text-base md:text-lg">1500+ Umzüge</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium text-sm sm:text-base md:text-lg">7+ Städte</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
