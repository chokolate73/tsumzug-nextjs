'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function EntruempelungPage() {
  const service = getServiceById('entruempelung')!;

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
                  alt="Entrümpelung Duisburg – TopSicher Team bei der Haushaltsauflösung"
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
                Haushaltsauflösung & Entrümpelung in Duisburg
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Ob nach einem Umzug, einem Todesfall, einer anstehenden Renovierung oder einem Mieterwechsel – es gibt viele Gründe, warum eine professionelle Entrümpelung notwendig wird. Als erfahrene Haushaltsauflösung Duisburg übernehmen wir die komplette Räumung Ihrer Immobilie – schnell, gründlich und zu einem fairen Festpreis. Unser geschultes Team sorgt dafür, dass Verwertbares getrennt, Brauchbares gespendet und Restmüll fachgerecht entsorgt wird.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Mit TopSicher Umzüge erhalten Sie eine <strong>Entrümpelung in Duisburg</strong>, auf die Sie sich verlassen können. Wir arbeiten diskret, termingerecht und hinterlassen die Räume stets sauber. Egal ob Wohnung, Haus oder Gewerbeimmobilie – sprechen Sie uns an und erhalten Sie ein unverbindliches Angebot.
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
              Unsere Entrümpelungs-Leistungen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wohnungsauflösung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wohnungsauflösung Duisburg</h3>
              <p className="text-slate-600 leading-relaxed">
                Sie müssen eine Wohnung komplett auflösen? Unsere <strong>Wohnungsauflösung in Duisburg</strong> umfasst die vollständige Räumung aller Zimmer – vom Mobiliar über Hausrat bis hin zu persönlichen Gegenständen. Dabei sortieren wir sorgfältig: Verwertbares wird getrennt, gut erhaltene Möbel und Kleidung spenden wir an gemeinnützige Organisationen, und der Rest wird umweltgerecht entsorgt. So stellen wir sicher, dass nichts unnötig auf der Deponie landet und Ressourcen geschont werden. Auf Wunsch dokumentieren wir den gesamten Ablauf für Vermieter oder Nachlassverwalter.
              </p>
            </motion.div>

            {/* Keller, Dachboden & Garage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Keller, Dachboden & Garage entrümpeln</h3>
              <p className="text-slate-600 leading-relaxed">
                Ob Keller, Dachboden oder Garage – wir entrümpeln alle Räume in Duisburg schnell und gründlich. Im Laufe der Jahre sammeln sich in diesen Bereichen oft große Mengen an Gegenständen an, die nicht mehr benötigt werden. Unsere <strong>Kellerentrümpelung in Duisburg</strong> schafft wieder Platz und Ordnung. Auch das Dachboden entrümpeln in Duisburg und die Garage entrümpeln in Duisburg gehören zu unseren Kernleistungen – alles zum Festpreis und mit fachgerechter Entsorgung.
              </p>
            </motion.div>

            {/* Sperrmüll Entsorgung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sperrmüll Entsorgung Duisburg</h3>
              <p className="text-slate-600 leading-relaxed">
                Alte Möbel, Elektrogeräte, Matratzen oder sperrige Gegenstände – wir kümmern uns um die fachgerechte <strong>Sperrmüll Entsorgung in Duisburg</strong>. Dabei achten wir konsequent auf Wertstofftrennung und Recycling. Wiederverwertbare Materialien werden getrennt und den entsprechenden Recyclingstellen zugeführt. So leisten wir einen aktiven Beitrag zum Umweltschutz und stellen sicher, dass die Entsorgung allen gesetzlichen Vorgaben entspricht.
              </p>
            </motion.div>

            {/* Nachlassauflösung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nachlassauflösung Duisburg</h3>
              <p className="text-slate-600 leading-relaxed">
                Die Auflösung eines Nachlasses nach einem Todesfall erfordert besondere Einfühlsamkeit und Respekt. Bei unserer Nachlassauflösung in Duisburg gehen wir behutsam und diskret vor. Wir sichern Wertgegenstände, Dokumente und persönliche Erinnerungsstücke sorgfältig, bevor wir mit der eigentlichen Räumung beginnen. Sie entscheiden, was aufbewahrt wird – wir übernehmen alles Weitere mit der nötigen Pietät und Zuverlässigkeit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Besenreine Übergabe Section */}
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
              Besenreine Übergabe – alles aus einer Hand
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Nach der Entrümpelung hinterlassen wir die Räume besenrein – das ist bei uns selbstverständlich. Unser Service umfasst den kompletten Ablauf von der Entrümpelung über die gründliche Reinigung bis hin zur schlüsselfertigen Übergabe an den Vermieter oder Käufer. So erhalten Sie eine <strong>Entrümpelung besenrein in Duisburg</strong> als Komplettpaket ohne zusätzlichen Aufwand. Sollten darüber hinaus Schönheitsreparaturen oder Malerarbeiten erforderlich sein, unterstützen wir Sie gerne auch dabei – erfahren Sie mehr über unseren <Link href="/renovierung" className="text-orange-500 hover:text-orange-600 underline">Renovierungsservice</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Jetzt Entrümpelung anfragen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Sie benötigen eine professionelle Entrümpelung in Duisburg? Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir beraten Sie gerne persönlich und finden die passende Lösung für Ihr Anliegen – schnell, sauber und zu fairen Konditionen.
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
      customTitle="Entrümpelung Duisburg – Schnell, Sauber & Umweltgerecht"
      customSubtitle="Professionelle Haushaltsauflösung und Entrümpelung in Duisburg – zuverlässig und zu fairen Festpreisen"
      customContent={customContent}
    />
  );
}
