'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqItemsDe } from '@/data/faq';

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Häufige Fragen zum
            <span className="text-slate-400"> Umzug in Duisburg</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Umzugs- und Transportdienstleistungen.
          </p>
        </motion.div>

        {/* FAQ – native <details> so answers are always in the DOM for crawlers */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItemsDe.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              name="faq"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-6 font-semibold text-slate-900 hover:text-orange-500 list-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  {item.question}
                </span>
                <ChevronDown className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="text-slate-600 pb-6 px-6 pl-14">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            Haben Sie weitere Fragen?{' '}
            <a
              href="#contact"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Kontaktieren Sie uns →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
