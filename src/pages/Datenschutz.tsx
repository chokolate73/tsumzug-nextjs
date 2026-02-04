import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Shield } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Datenschutz() {
  return (
    <>
      <SEO 
        title="Datenschutzerklärung"
        description="Datenschutzerklärung von TopSicher Umzüge - Informationen zum Schutz Ihrer personenbezogenen Daten."
        lang="de"
        canonicalPath="/datenschutz"
      />
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-slate-950 text-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Datenschutzerklärung
                </h1>
                <p className="text-slate-400 mt-2">Stand: 09.01.2026</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12"
          >
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Verantwortlicher
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-3">
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                  <p className="font-semibold text-slate-900">Oleh Tsapenko</p>
                  <address className="not-italic mt-2 text-slate-600">
                    Brückelstraße 54<br />
                    47137 Duisburg, Germany
                  </address>
                  <p className="mt-2 text-slate-600">USt-IdNr.: DE452157027</p>
                  <div className="mt-4 space-y-2">
                    <a href="tel:+4917665197997" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
                      <Phone className="w-4 h-4" />
                      +49 176 6519 7997
                    </a>
                    <a href="mailto:info@tsumzug.de" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      info@tsumzug.de
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Allgemeine Hinweise
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Die Verarbeitung Ihrer Daten erfolgt nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) sowie den jeweils anwendbaren nationalen Datenschutzgesetzen.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Datenverarbeitung beim Besuch der Website (Server-Logfiles)
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Beim Aufrufen dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles erhoben und gespeichert. Dies können insbesondere sein:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-600">
                  <li>IP-Adresse (ggf. in gekürzter Form)</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>aufgerufene Seite/Datei</li>
                  <li>Referrer-URL</li>
                  <li>Browsertyp/-version, Betriebssystem</li>
                  <li>übertragene Datenmenge/Statuscodes</li>
                </ul>
                <p>
                  <strong>Zweck der Verarbeitung</strong> ist die technische Bereitstellung der Website, Stabilität und Sicherheit (z. B. Abwehr von Angriffen) sowie die Fehleranalyse.
                </p>
                <p>
                  <strong>Rechtsgrundlage</strong> ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und funktionsfähigem Betrieb).
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Logfiles werden regelmäßig gelöscht; die konkrete Speicherdauer richtet sich nach den Vorgaben des Hosting-Anbieters.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Kontaktaufnahme (Telefon/E-Mail)
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt der Anfrage), um Ihre Anfrage zu bearbeiten.
                </p>
                <p><strong>Rechtsgrundlage:</strong></p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-600">
                  <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation), oder</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation)</li>
                </ul>
                <p>
                  <strong>Speicherdauer:</strong> Wir löschen Anfragen, sobald sie abgeschlossen sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Online-Terminbuchung über Shore
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Für die Online-Terminbuchung nutzen wir ein externes Buchungssystem von Shore. Wenn Sie einen Termin online buchen, werden die von Ihnen eingegebenen Daten (z. B. Name, Kontaktdaten, gebuchte Leistung, Terminzeit, ggf. Notizen) zur Abwicklung der Buchung verarbeitet.
                </p>
                <p>
                  <strong>Rechtsgrundlage</strong> ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen/Vertrag).
                </p>
                <p>
                  <strong>Empfänger/Anbieter:</strong> Shore GmbH, Lothstr. 19, 80797 München, Deutschland.
                </p>
                <p>
                  Weitere Informationen zur Datenverarbeitung durch Shore finden Sie in den Datenschutzhinweisen von Shore.
                </p>
                <p className="text-slate-500 italic">
                  Hinweis: Je nach Konfiguration kann das Buchungssystem Cookies/ähnliche Technologien einsetzen. Details hierzu entnehmen Sie bitte ebenfalls den Shore-Hinweisen.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                Cookies und ähnliche Technologien
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Unsere Website kann Cookies bzw. ähnliche Technologien einsetzen. Technisch erforderliche Cookies/Technologien werden eingesetzt, um die Website bereitzustellen.
                </p>
                <p><strong>Rechtsgrundlagen:</strong></p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-600">
                  <li>DSGVO: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, funktionsfähigen Angebot)</li>
                  <li>Endgerätezugriff (Deutschland): § 25 Abs. 2 TTDSG / TDDDG (nur soweit „unbedingt erforderlich")</li>
                </ul>
                <p>
                  Sofern wir darüber hinaus nicht notwendige Cookies (z. B. Statistik/Marketing) einsetzen, erfolgt dies nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TTDSG/TDDDG). In diesem Fall können Sie Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                Externe Links (z. B. Instagram)
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Unsere Website kann Links zu externen Diensten (z. B. Instagram) enthalten. Beim bloßen Aufruf unserer Website werden dadurch noch keine Daten an diese Anbieter übertragen. Erst wenn Sie den Link anklicken, verlassen Sie unsere Website und es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                Ihre Rechte
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-slate-600">
                  <li>Auskunft (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO)</li>
                  <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für Unternehmen in Bayern ist regelmäßig zuständig:
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold text-slate-900">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
                  <p className="text-slate-600">Promenade 18, 91522 Ansbach, Deutschland</p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">10</span>
                SSL-/TLS-Verschlüsselung
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Dadurch können Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold">11</span>
                Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Wir passen diese Datenschutzerklärung an, sobald Änderungen der Datenverarbeitung oder rechtliche Anforderungen dies erforderlich machen.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
}
