'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function RenovierungPage() {
  const service = getServiceById('renovierung')!;

  const customContent = (
    <>
      {/* Intro Section */}
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
                  alt="Renovierung Duisburg – TopSicher Team bei Malerarbeiten"
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Renovierungsarbeiten in Duisburg – für Auszug & Einzug
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ob Sie Ihre alte Wohnung für die Übergabe an den Vermieter herrichten oder Ihr neues Zuhause vor dem Einzug auffrischen möchten – mit einer professionellen <strong>Renovierung in Duisburg</strong> von TopSicher Umzüge sind Sie bestens beraten. Wir übernehmen sämtliche Renovierungsarbeiten zuverlässig, termingerecht und zu fairen Festpreisen. Von Malerarbeiten über Tapezierarbeiten bis hin zur Bodenverlegung erhalten Sie alles aus einer Hand.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Besonders praktisch: Kombinieren Sie Ihre Renovierung direkt mit unserem <Link href="/privatumzuege" className="text-orange-500 hover:text-orange-600 underline">Umzugsservice</Link> und sparen Sie Zeit und Aufwand. So wird Ihr Wohnungswechsel in Duisburg zum stressfreien Komplettpaket – vom Streichen bis zum Möbeltransport.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              Unsere Renovierungsleistungen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Malerarbeiten */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Malerarbeiten & Wände streichen</h3>
              <p className="text-slate-600 leading-relaxed">
                Frische Farbe verwandelt jeden Raum. Unsere <strong>Malerarbeiten in Duisburg</strong> umfassen das fachgerechte Streichen von Wänden und Decken in der Farbe Ihrer Wahl. Vor jedem Anstrich bereiten wir die Flächen sorgfältig vor – inklusive professionellem Abkleben von Fenstern, Türrahmen und Steckdosen sowie dem vollständigen Abdecken von Böden und Möbeln. Das Ergebnis: ein gleichmäßiges, sauberes Finish ohne Farbspritzer. Ob neutrales Weiß für die Wohnungsübergabe oder individuelle Wunschfarben für Ihr neues Zuhause – beim Wohnung streichen in Duisburg können Sie sich auf unser erfahrenes Team verlassen.
              </p>
            </motion.div>

            {/* Tapezieren */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tapezieren Duisburg</h3>
              <p className="text-slate-600 leading-relaxed">
                Neue Tapeten geben Ihren Räumen einen frischen Charakter. Wir entfernen alte Tapeten rückstandsfrei, bereiten den Untergrund fachgerecht vor und bringen neue Tapeten präzise und blasenfrei an. Unser Team arbeitet mit verschiedensten <strong>Tapetenarten</strong> – von Raufaser über Vliestapete bis hin zu modernen Mustertapeten. So erhalten Sie ein makelloses Ergebnis, das Ihren Räumen in Duisburg einen individuellen Look verleiht.
              </p>
            </motion.div>

            {/* Bodenverlegung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bodenverlegung – Laminat, Vinyl & Parkett</h3>
              <p className="text-slate-600 leading-relaxed">
                Ein neuer Bodenbelag wertet jede Wohnung sofort auf. Wir übernehmen das professionelle <strong>Laminat verlegen in Duisburg</strong> ebenso wie die fachgerechte Verlegung von Vinyl, Parkett und anderen Bodenbelägen. Von der Untergrundprüfung über das Verlegen der Trittschalldämmung bis zum sauberen Abschluss mit Sockelleisten erhalten Sie eine hochwertige Bodenverlegung, die langlebig und optisch ansprechend ist.
              </p>
            </motion.div>

            {/* Endreinigung & Schönheitsreparaturen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Endreinigung & Schönheitsreparaturen</h3>
              <p className="text-slate-600 leading-relaxed">
                Für eine reibungslose Wohnungsübergabe kombinieren wir <strong>Schönheitsreparaturen in Duisburg</strong> mit einer gründlichen Endreinigung. Wir bessern Bohrlöcher aus, erneuern Silikonfugen, streichen Türrahmen und Heizkörper und sorgen für eine besenreine Endreinigung Wohnung in Duisburg. So ist Ihre Renovierung bei Auszug in Duisburg komplett abgedeckt. Benötigen Sie zusätzlich eine Räumung? Dann schauen Sie sich unsere <Link href="/entruempelung" className="text-orange-500 hover:text-orange-600 underline">Entrümpelung</Link> an.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Jetzt Renovierung anfragen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Sie planen eine Renovierung in Duisburg? Ob Malerarbeiten, Tapezieren, Bodenverlegung oder Schönheitsreparaturen – kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir beraten Sie persönlich und finden die passende Lösung für Ihr Vorhaben.
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Jetzt Angebot anfordern
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );

  return (
    <ServicePage
      service={service}
      lang="de"
      customTitle="Renovierung Duisburg – Streichen, Tapezieren & Bodenverlegung"
      customSubtitle="Professionelle Renovierungsarbeiten in Duisburg – für Auszug, Einzug oder Zwischendurch"
      customContent={customContent}
    />
  );
}
