'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function FooterRu() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              TopSicher
              <span className="text-orange-400"> Umzüge</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Профессиональные услуги по переезду и транспортировке в Дуйсбурге и по всей Северной Рейн-Вестфалии.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/groups/781361873270111/user/100025043793083/' },
                { Icon: Mail, href: 'mailto:info@tsumzug.de' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Навигация</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'Главная', href: '#' },
                { label: 'Услуги', href: '#services' },
                { label: 'О нас', href: '#about' },
                { label: 'Отзывы', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Контакты', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Наши услуги</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Квартирные переезды',
                'Офисные переезды',
                'Вывоз и утилизация',
                'Грузоперевозки',
                'Мастер на час',
                'Ремонт и отделка'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-400 inline-flex items-center gap-2 text-sm sm:text-base">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Контакты</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+4917665197997"
                  className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+49 176 6519 7997</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tsumzug.de"
                  className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">info@tsumzug.de</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Brückelstraße+54,+47137+Duisburg,+Germany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-slate-400 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    TopSicher Umzüge<br />
                    Brückelstraße 54<br />
                    47137 Duisburg, Германия
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} TopSicher Umzüge. Все права защищены.
              </p>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <Link 
                href="/impressum" 
                className="text-slate-500 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-slate-500 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Конфиденциальность
              </Link>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <a
                href="https://www.vlad-weby.sk/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                Made by Vlad-weby.sk
              </a>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-xs sm:text-sm"
            >
              Наверх
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
