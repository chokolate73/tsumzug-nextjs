'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PrivatumzuegePage() {
  const service = getServiceById('privatumzuege')!;

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
                  alt="Privatumzug Duisburg – TopSicher Umzüge Team beim Verladen von Möbeln"
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
                Ihr Privatumzug in Duisburg – von der Planung bis zum Einzug
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Als erfahrene <strong>Umzugsfirma in Duisburg</strong> begleiten wir Sie bei jedem Schritt Ihres Privatumzugs. Von der ersten Besichtigung über die detaillierte Angebotserstellung bis zum eigentlichen Umzugstag und der Einrichtung an Ihrem neuen Wohnort – bei TopSicher Umzüge ist alles aus einer Hand. Unser <strong>Umzugsservice in Duisburg</strong> umfasst die komplette Planung, professionelle Verpackung, fachgerechten Transport und auf Wunsch auch das Auspacken und Einräumen an Ihrem neuen Zuhause.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Wir wissen, dass ein Umzug stressig sein kann. Deshalb nehmen wir Ihnen so viel Arbeit wie möglich ab. Ob Sie innerhalb Duisburgs umziehen oder in eine andere Stadt in NRW – unser eingespieltes Team sorgt dafür, dass Ihr Hab und Gut sicher, pünktlich und unversehrt am neuen Wohnort ankommt. Jetzt Ihr Umzugsangebot anfordern!
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
              Unsere Leistungen für Ihren Privatumzug
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Full-Service Umzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full-Service Umzug – Rundum sorglos</h3>
              <p className="text-slate-600 leading-relaxed">
                Unser <strong>Full-Service Umzug</strong> ist die bequemste Lösung für Ihren Wohnungswechsel. Wir übernehmen alles: professionelles Verpacken aller Gegenstände mit hochwertigen Umzugskartons, die fachgerechte Demontage und Montage Ihrer Möbel sowie den sicheren Transport in unseren modernen Umzugsfahrzeugen. Am Zielort packen wir auf Wunsch alles wieder aus und entsorgen das Verpackungsmaterial. So können Sie sich voll und ganz auf Ihr neues Zuhause freuen – ohne einen Finger zu rühren. Auch die <Link href="/hausmeisterservice" className="text-orange-500 hover:text-orange-600 underline">Möbelmontage</Link> komplexerer Stücke gehört zu unserem Service.
              </p>
            </motion.div>

            {/* Expressumzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expressumzug Duisburg – Kurzfristig umziehen</h3>
              <p className="text-slate-600 leading-relaxed">
                Manchmal muss es schnell gehen. Unser Expressumzug in Duisburg ist innerhalb von 24 bis 48 Stunden verfügbar – ideal, wenn Sie kurzfristig Ihre Wohnung räumen müssen oder einen spontanen Umzug planen. Auch ein Wochenendumzug ist bei uns kurzfristig möglich. Rufen Sie uns einfach an, und wir finden gemeinsam den schnellstmöglichen Termin für Ihren Umzug.
              </p>
            </motion.div>

            {/* Seniorenumzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seniorenumzug Duisburg – Einfühlsam & geduldig</h3>
              <p className="text-slate-600 leading-relaxed">
                Ein Umzug im Alter erfordert besondere Rücksichtnahme. Beim Seniorenumzug in Duisburg nehmen wir uns die Zeit, die Sie brauchen. Wir helfen beim Sortieren und Auflösen des bisherigen Haushalts, kümmern uns um den sicheren Transport Ihrer Erinnerungsstücke und richten Ihre neue Wohnung nach Ihren Wünschen ein. Auf Wunsch unterstützen wir auch bei organisatorischen Aufgaben wie Adressänderungen.
              </p>
            </motion.div>

            {/* Studentenumzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Studentenumzug Duisburg – Günstig & unkompliziert</h3>
              <p className="text-slate-600 leading-relaxed">
                Als Student hat man oft ein kleines Budget, aber trotzdem viel zu transportieren. Unser Studentenumzug in Duisburg ist die bezahlbare Lösung für den WG-Umzug oder den Wechsel in eine kleine Wohnung. Wir bieten spezielle Studententarife und flexible Termine, die sich nach Ihrem Semesterplan richten. Weniger Stress, mehr Zeit fürs Studium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Umzugskosten Duisburg – Transparent & zum Festpreis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wir glauben an faire und transparente Preise. Deshalb erhalten Sie von uns immer ein verbindliches Festpreisangebot – ohne versteckte Kosten oder böse Überraschungen am Umzugstag. Ihren <strong>Umzug zum Festpreis in Duisburg</strong> kalkulieren wir auf Basis einer kostenlosen Besichtigung, bei der wir das Umzugsvolumen, die Entfernung und den Aufwand genau einschätzen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Die Umzugskosten in Duisburg richten sich nach der Wohnungsgröße, der Etage, dem Zugang und den gewünschten Zusatzleistungen. Ein Privatumzug für eine 2-Zimmer-Wohnung beginnt ab 300 Euro. Fordern Sie jetzt Ihr individuelles Umzugsangebot an – kostenlos und unverbindlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inklusive Leistungen Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Inklusive Leistungen bei jedem Privatumzug
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <span className="text-slate-900 font-semibold block mb-1">Möbelmontage (Ab- und Aufbau)</span>
                <span className="text-slate-600 text-sm">Wir demontieren Ihre Möbel am Auszugsort und bauen sie am neuen Wohnort fachgerecht wieder auf – inklusive Betten, Schränke und Regale.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <span className="text-slate-900 font-semibold block mb-1">Packservice & Umzugskartons</span>
                <span className="text-slate-600 text-sm">Wir stellen hochwertige Umzugskartons bereit und übernehmen auf Wunsch das komplette Verpacken und Auspacken Ihrer Gegenstände.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <span className="text-slate-900 font-semibold block mb-1">Halteverbotszone in Duisburg</span>
                <span className="text-slate-600 text-sm">Wir übernehmen die Beantragung und Einrichtung der Halteverbotszone bei der Stadt Duisburg, damit am Umzugstag genügend Platz für den Umzugswagen direkt vor Ihrer Tür ist.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <span className="text-slate-900 font-semibold block mb-1">Versicherter Umzug</span>
                <span className="text-slate-600 text-sm">Alle Gegenstände sind während des gesamten Transports versichert. Unsere Transportversicherung schützt Sie vor unvorhergesehenen Schäden – für maximale Sicherheit bei Ihrem Privatumzug.</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
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
      customTitle="Privatumzug Duisburg – Sicher & zum Festpreis"
      customSubtitle="Ihr Umzugsservice in Duisburg – Komplett, versichert und zum garantierten Festpreis"
      customContent={customContent}
    />
  );
}
