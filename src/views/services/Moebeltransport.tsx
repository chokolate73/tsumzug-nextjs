'use client';
import ServicePage from '@/components/ServicePage';
import { getServiceById } from '@/data/services';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function MoebeltransportPage() {
  const service = getServiceById('moebeltransport')!;

  const customContent = (
    <>
      {/* Section 1: Intro */}
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
                  alt="Möbeltransport Duisburg – TopSicher Umzüge beim sicheren Möbeltransport"
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
                Ihr Möbeltransport in Duisburg – von Einzelstück bis Komplettladung
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nicht immer ist ein kompletter Umzug nötig – manchmal muss nur ein einzelnes Möbelstück von A nach B. Genau dafür bieten wir unseren Einzelstück Transport in Duisburg an. Ob Sie ein neues Sofa vom Händler abholen lassen, einen schweren Schrank in eine andere Etage bringen oder eine Waschmaschine anschließen lassen möchten – unser Kleintransport Duisburg macht es möglich. Sie möchten Möbel liefern lassen in Duisburg? Wir transportieren alles sicher und zuverlässig, vom Einzelstück bis zur Komplettladung. Als Ihr erfahrener Partner für <strong>Möbeltransport in Duisburg</strong> sorgen wir dafür, dass Ihre Gegenstände geschützt und pünktlich ankommen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Was wir transportieren */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              Was wir transportieren
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Möbel & Großgeräte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Möbel & Großgeräte (Sofa, Schrank, Waschmaschine)
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ob Sofa, Kleiderschrank, Waschmaschine oder Kühlschrank – wir transportieren Ihre Möbel und Großgeräte sicher durch Duisburg und Umgebung. Unser Team verfügt über die passende Ausrüstung, um auch sperrige und schwere Gegenstände fachgerecht zu bewegen. Jedes Stück wird sorgfältig mit Decken und Gurten gesichert, damit es unbeschädigt am Zielort ankommt. Vom <strong>Sofa Transport in Duisburg</strong> bis zum Schrank Transport – wir übernehmen den sicheren Weg für Ihre Einrichtung, egal ob innerhalb der Stadt oder in die Nachbarstädte.
              </p>
            </motion.div>

            {/* Klaviertransport */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Klaviertransport Duisburg
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Klaviertransport erfordert besondere Sorgfalt und Erfahrung. Unsere geschulten Träger nutzen spezielle Transportmittel, professionelle Polsterung und sichere Gurtsysteme, um Ihr Klavier oder Ihren Flügel unbeschadet zu bewegen. Jeder <strong>Klaviertransport in Duisburg</strong> ist bei uns vollständig versichert, sodass Sie sich keine Sorgen um Ihr wertvolles Instrument machen müssen – ob innerhalb des Hauses oder quer durch die Stadt.
              </p>
            </motion.div>

            {/* IKEA Abholung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                IKEA Abholung & Lieferung Duisburg
              </h3>
              <p className="text-slate-600 leading-relaxed">
                IKEA Abholung in Duisburg – wir holen Ihre Bestellung ab und liefern bis in die Wohnung. Kein eigenes Fahrzeug oder keine Lust auf lange Warteschlangen? Unser Team übernimmt die Abholung Ihrer IKEA-Möbel und bringt sie direkt zu Ihnen nach Hause. Auf Wunsch bieten wir auch den kompletten Aufbauservice an. Für die professionelle <Link href="/hausmeisterservice" className="text-orange-500 hover:text-orange-600 underline">Möbelmontage</Link> stehen Ihnen unsere erfahrenen Handwerker gerne zur Verfügung.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: So funktioniert unser Möbeltransport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              So funktioniert unser Möbeltransport
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Anfrage & Beratung</h3>
              <p className="text-slate-600 leading-relaxed">
                Kontaktieren Sie uns telefonisch oder über unser Kontaktformular. Beschreiben Sie uns, was transportiert werden soll, und wir beraten Sie zur besten Lösung für Ihren Möbeltransport.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Terminvereinbarung</h3>
              <p className="text-slate-600 leading-relaxed">
                Gemeinsam finden wir einen passenden Termin, der in Ihren Zeitplan passt. Sie erhalten ein transparentes Festpreisangebot – ohne versteckte Kosten oder Überraschungen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Abholung & Transport</h3>
              <p className="text-slate-600 leading-relaxed">
                Unser Team kommt zum vereinbarten Zeitpunkt, verpackt Ihre Möbel sicher mit Schutzdecken und Gurten und transportiert alles fachgerecht in unseren modernen Fahrzeugen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lieferung & Aufbau</h3>
              <p className="text-slate-600 leading-relaxed">
                Wir liefern Ihre Möbel an den gewünschten Ort und stellen alles auf. Auf Wunsch übernehmen wir auch den Aufbau und die Montage – damit Sie sich um nichts kümmern müssen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Unsere Preise für Möbeltransport
            </h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Transparente Festpreise für jeden Transportauftrag – ohne versteckte Kosten.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Einzelmöbel</h3>
              <div className="text-3xl font-bold text-orange-500 mb-1">ab 119 &euro;</div>
              <p className="text-sm text-slate-500">Sofa, Schrank, Waschmaschine</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">IKEA Abholung</h3>
              <div className="text-3xl font-bold text-orange-500 mb-1">ab 139 &euro;</div>
              <p className="text-sm text-slate-500">Abholung & Lieferung</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Teilumzug</h3>
              <div className="text-3xl font-bold text-orange-500 mb-1">ab 249 &euro;</div>
              <p className="text-sm text-slate-500">Mehrere Möbelstücke</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">Klaviertransport</h3>
              <div className="text-3xl font-bold text-orange-500 mb-1">auf Anfrage</div>
              <p className="text-sm text-slate-500">Individuelle Kalkulation</p>
            </motion.div>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            * Alle Preise sind Richtwerte. Der endgültige Preis wird nach Absprache individuell kalkuliert.
          </p>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Jetzt Möbeltransport anfragen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Sie benötigen einen zuverlässigen Möbeltransport in Duisburg? Ob Einzelstück, Klaviertransport oder IKEA Abholung – kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!
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
      customTitle="Möbeltransport Duisburg – Einzelstücke & Großgeräte sicher transportiert"
      customSubtitle="Ihr zuverlässiger Transportservice in Duisburg – vom Einzelstück bis zur Komplettladung"
      customContent={customContent}
    />
  );
}
