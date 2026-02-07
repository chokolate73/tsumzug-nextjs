'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function FirmenumzuegePage() {
  const service = getServiceById('firmenumzuege')!;

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
                  alt="Firmenumzug Duisburg – TopSicher Umzüge beim professionellen Büroumzug"
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
                Ihr Büroumzug in Duisburg – Effizient geplant
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Als Geschäftsführer oder Office Manager wissen Sie: Jede Stunde Stillstand kostet Geld. Deshalb planen wir Ihren <strong>Büroumzug in Duisburg</strong> so, dass Ausfallzeiten auf ein absolutes Minimum reduziert werden. Auf Wunsch führen wir den Umzug abends oder am Wochenende durch, damit Ihr Tagesgeschäft ungestört weiterlaufen kann. TopSicher Umzüge ist Ihr erfahrener Partner für Büroumzüge und Gewerbeumzüge in Duisburg – von der ersten Beratung bis zur letzten Kiste am neuen Standort. Profitieren Sie von unserer strukturierten Planung, eingespielten Teams und einem festen Ansprechpartner während des gesamten Umzugsprozesses.
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
              Unsere Leistungen für Firmenumzüge
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Büroumzug mit Möbelmontage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Büroumzug mit Möbelmontage</h3>
              <p className="text-slate-600 leading-relaxed">
                Schreibtische, Aktenschränke, Konferenzraum-Möbel und Empfangstresen – wir demontieren alles fachgerecht am alten Standort und bauen es an Ihrem neuen Büro wieder auf. Dank unseres <strong>Beschriftungssystems</strong> für Umzugskartons und Räume weiß jeder Mitarbeiter sofort, wo seine Sachen stehen. So ist Ihr Team schnell wieder arbeitsfähig. Die Möbelmontage ist bei uns inklusive, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
            </motion.div>

            {/* IT-Umzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">IT-Umzug Duisburg – Technik sicher transportiert</h3>
              <p className="text-slate-600 leading-relaxed">
                Server, PCs, Monitore und Netzwerkinfrastruktur erfordern beim Transport besondere Sorgfalt. Wir verpacken Ihre empfindliche IT-Ausrüstung in <strong>antistatischen Spezialmaterialien</strong> und transportieren sie erschütterungsfrei in gepolsterten Fahrzeugen. So erreicht Ihre gesamte Technik den neuen Standort unbeschadet und betriebsbereit.
              </p>
            </motion.div>

            {/* Praxisumzug & Gewerbeumzug */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Praxisumzug & Gewerbeumzug</h3>
              <p className="text-slate-600 leading-relaxed">
                Ob Arztpraxis, Anwaltskanzlei oder Einzelhandelsgeschäft – wir passen unseren Service individuell an Ihre Branche an. Bei einem Praxisumzug Duisburg sorgen wir für den sicheren Transport sensibler Geräte und vertraulicher Akten. Für einen Gewerbeumzug Duisburg koordinieren wir den reibungslosen Ablauf inklusive Warentransport. Für einzelne Möbelstücke oder Geräte nutzen Sie gerne unseren <Link href="/moebeltransport" className="text-orange-500 hover:text-orange-600 underline">Möbeltransport</Link>.
              </p>
            </motion.div>

            {/* Umzug außerhalb der Arbeitszeit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Umzug außerhalb der Arbeitszeit & am Wochenende</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir verstehen, dass Ihr Geschäft während der Bürozeiten weiterlaufen muss. Deshalb bieten wir Ihren Firmenumzug auch abends nach Feierabend oder als Umzug am Wochenende Duisburg an. Unsere flexiblen Einsatzzeiten garantieren, dass Ihre Kunden und Mitarbeiter keinen einzigen Arbeitstag verlieren. Sprechen Sie uns auf Ihren Wunschtermin an – wir richten uns nach Ihnen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              So läuft Ihr Firmenumzug ab
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Besichtigung & Beratung</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir besichtigen Ihre aktuellen Büroräume kostenlos und erfassen das Umzugsvolumen, die Anzahl der Arbeitsplätze und besondere Anforderungen. Auf Basis dieser Bestandsaufnahme erstellen wir Ihnen ein verbindliches Festpreisangebot.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Detailplanung</h3>
              <p className="text-slate-600 leading-relaxed">
                Gemeinsam erstellen wir einen detaillierten Umzugsplan mit Zeitachse, Raumzuordnung und Beschriftungssystem. Jeder Karton und jedes Möbelstück wird einem Raum im neuen Büro zugewiesen – so vermeiden wir Chaos am Umzugstag.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Umzugsdurchführung</h3>
              <p className="text-slate-600 leading-relaxed">
                Unser eingespieltes Team demontiert, verpackt und transportiert Ihr gesamtes Büro-Inventar zum neuen Standort. Am Zielort werden alle Möbel aufgebaut und Kartons raumgenau platziert – termingerecht und ohne Verzögerungen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-500 font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nachbetreuung</h3>
              <p className="text-slate-600 leading-relaxed">
                Nach dem Umzug stehen wir Ihnen weiterhin zur Verfügung. Ob Nachlieferungen, Entsorgung von Verpackungsmaterial oder kleinere Anpassungen am neuen Standort – wir sind erst zufrieden, wenn Sie es sind.
              </p>
            </motion.div>
          </div>
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
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Kostenloses Angebot für Ihren Firmenumzug
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Planen Sie einen Firmenumzug in Duisburg oder Umgebung? Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir beraten Sie persönlich und erstellen einen maßgeschneiderten Umzugsplan, der zu Ihrem Zeitrahmen und Budget passt – damit Ihr Unternehmen schnell wieder voll einsatzfähig ist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
      customTitle="Firmenumzug Duisburg – Professionell & ohne Ausfallzeiten"
      customSubtitle="Ihr Partner für Büroumzüge und Gewerbeumzüge in Duisburg – effizient, sicher und termingerecht"
      customContent={customContent}
    />
  );
}
