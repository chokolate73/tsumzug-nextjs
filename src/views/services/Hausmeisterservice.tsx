'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function HausmeisterservicePage() {
  const service = getServiceById('hausmeisterservice')!;

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
                  alt="Hausmeisterservice Duisburg – TopSicher Handwerker bei der Möbelmontage"
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
                Ihr Hausmeisterservice in Duisburg – Zuverlässig & flexibel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ob nach dem Umzug oder unabhängig davon – unser <strong>Hausmeisterservice in Duisburg</strong> steht Ihnen zur Verfügung. Von der Möbelmontage über Kleinreparaturen bis hin zum Anschluss von Haushaltsgeräten erledigen wir alles zuverlässig und professionell. Sie müssen sich nicht um mehrere Handwerker kümmern – bei TopSicher Umzüge bekommen Sie alle handwerklichen Leistungen aus einer Hand. Auch für Gewerbekunden bieten wir Gebäudeservice und Objektbetreuung in Duisburg an, damit Ihre Immobilie jederzeit in bestem Zustand bleibt.
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
              Unsere Hausmeister-Leistungen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Möbelmontage & Küchenmontage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Möbelmontage & Küchenmontage</h3>
              <p className="text-slate-600 leading-relaxed">
                Neue Möbel gekauft, aber keine Lust auf stundenlanges Zusammenbauen? Unser Montageteam übernimmt den professionellen Aufbau Ihrer <strong>IKEA-Möbel</strong> – ob PAX-Kleiderschrank, BILLY-Regal oder KALLAX-System. Auch die komplette Küchenmontage inklusive Einbau von Spüle, Arbeitsplatte und Elektrogeräten gehört zu unseren Stärken. Wir montieren Möbel aller gängigen Hersteller wie IKEA, Roller und Poco schnell und fachgerecht. So sparen Sie Zeit und vermeiden Montagefehler, die später teuer werden können.
              </p>
            </motion.div>

            {/* Kleinreparaturen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kleinreparaturen Duisburg</h3>
              <p className="text-slate-600 leading-relaxed">
                Für einen eigenen Handwerker ist der Aufwand zu gering, aber selbst fehlen Werkzeug oder Erfahrung? Unsere <strong>Kleinreparaturen in Duisburg</strong> umfassen typische Arbeiten im Haushalt: Türen einstellen und justieren, Wasserhähne reparieren, Dübel und Halterungen setzen, Silikon in Bad und Küche erneuern oder defekte Türgriffe austauschen. Schnell, sauber und ohne langen Wartezeiten – wir kommen zeitnah zu Ihnen.
              </p>
            </motion.div>

            {/* Lampen, Regale & Gardinenstangen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lampen, Regale & Gardinenstangen</h3>
              <p className="text-slate-600 leading-relaxed">
                Nach dem <Link href="/privatumzuege" className="text-orange-500 hover:text-orange-600 underline">Umzug</Link> gibt es immer viel zu tun: Lampen müssen angeschlossen, Regale aufgehängt und Gardinenstangen montiert werden. Wir übernehmen den fachgerechten Anschluss Ihrer Decken- und Wandleuchten, hängen Spiegel und Bilder sicher auf und befestigen Gardinenstangen, Jalousien und Rollos. So wird Ihre neue Wohnung schnell wohnlich – ohne eigenes Werkzeug und ohne Risiko.
              </p>
            </motion.div>

            {/* Geräteanschluss */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Geräteanschluss (Waschmaschine, Trockner, Spülmaschine)</h3>
              <p className="text-slate-600 leading-relaxed">
                Haushaltsgeräte wie Waschmaschine, Trockner und Spülmaschine müssen korrekt angeschlossen werden, damit sie einwandfrei funktionieren und keine Wasserschäden entstehen. Unser Team schließt Ihre Geräte fachgerecht an – inklusive Prüfung der Wasser- und Abwasseranschlüsse. Auch den <strong>Anschluss von Herd und Backofen</strong> übernehmen wir zuverlässig, damit Sie Ihre Küche sofort nutzen können.
              </p>
            </motion.div>

            {/* Gebäudeservice für Gewerbekunden */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gebäudeservice für Gewerbekunden</h3>
              <p className="text-slate-600 leading-relaxed">
                Für Hausverwaltungen und Gewerbekunden bieten wir professionelle Objektbetreuung Duisburg und Facility Service an. Unser Gebäudeservice umfasst regelmäßige Kontrollgänge, Kleinreparaturen in Mietobjekten, saisonale Wartungsarbeiten und die Koordination externer Dienstleister. Als zuverlässiger Partner für <strong>Facility Service Duisburg</strong> sorgen wir dafür, dass Ihre Immobilie dauerhaft in einwandfreiem Zustand bleibt.
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
              Jetzt Hausmeisterservice anfragen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Sie brauchen Hilfe bei der Möbelmontage, Kleinreparaturen oder dem Anschluss von Geräten? Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Unser Hausmeisterservice in Duisburg ist schnell, zuverlässig und fair kalkuliert – ob für Privathaushalte oder Gewerbekunden.
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
      customTitle="Hausmeisterservice Duisburg – Möbelmontage, Reparaturen & mehr"
      customSubtitle="Ihr zuverlässiger Hausmeisterservice in Duisburg – ob nach dem Umzug oder unabhängig davon"
      customContent={customContent}
    />
  );
}
