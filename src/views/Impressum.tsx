'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Impressum() {
  return (
    <>
      <SEO 
        title="Impressum"
        description="Impressum und rechtliche Informationen von TopSicher Umzüge - Professionelle Umzugs- und Transportdienstleistungen in Duisburg."
        lang="de"
        canonicalPath="/impressum"
      />
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-slate-950 text-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Impressum
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12"
          >
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="text-slate-700 text-lg">
                Oleh Tsapenko
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Adresse
              </h2>
              <address className="text-slate-700 not-italic leading-relaxed">
                Brückelstraße 54<br />
                47137 Duisburg<br />
                Germany
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-slate-700">
                USt-IdNr.: DE452157027
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Kontakt
              </h2>
              <div className="text-slate-700 space-y-2">
                <p>
                  Telefon: <a href="tel:+4917665197997" className="text-orange-500 hover:text-orange-600 transition-colors">+49 176 6519 7997</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:info@tsumzug.de" className="text-orange-500 hover:text-orange-600 transition-colors">info@tsumzug.de</a>
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
