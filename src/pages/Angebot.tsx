import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  ArrowLeft,
  Menu,
  X,
  Clock,
  Shield,
  Euro,
  FileText,
} from 'lucide-react';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';
import { trackCallClick, trackWhatsAppClick, trackFormSubmit } from '@/utils/tracking';

const BASE_URL = 'https://tsumzug.de';

export default function Angebot() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vonAdresse: '',
    nachAdresse: '',
    wohnungsgroesse: '',
    umzugstermin: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/4917665197997?text=${encodeURIComponent('Hallo, ich möchte ein kostenloses Angebot für meinen Umzug in Duisburg anfordern.')}`;
  const mapsLink = 'https://www.google.com/maps/dir/?api=1&destination=Brückelstraße+54,+47137+Duisburg,+Germany';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdznqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          vonAdresse: formData.vonAdresse,
          nachAdresse: formData.nachAdresse,
          wohnungsgroesse: formData.wohnungsgroesse,
          umzugstermin: formData.umzugstermin,
          message: formData.details,
          page: '/angebot',
          type: 'Angebotsanfrage',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackFormSubmit('angebot_form', '/angebot');
        toast.success('Vielen Dank! Wir erstellen Ihr Angebot und melden uns in Kürze.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            vonAdresse: '',
            nachAdresse: '',
            wohnungsgroesse: '',
            umzugstermin: '',
            details: '',
          });
        }, 5000);
      } else {
        toast.error('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch {
      toast.error('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'TS Umzug',
    alternateName: 'TopSicher Umzüge',
    url: BASE_URL,
    telephone: '+49 176 6519 7997',
    email: 'info@tsumzug.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brückelstraße 54',
      addressLocality: 'Duisburg',
      addressRegion: 'NRW',
      postalCode: '47137',
      addressCountry: 'DE',
    },
  };

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Kostenloses Angebot anfordern | TS Umzug Duisburg</title>
        <meta name="description" content="Fordern Sie jetzt Ihr kostenloses Umzugsangebot an. Festpreisgarantie, versicherter Transport. TS Umzug - Ihr Umzugsunternehmen in Duisburg." />
        <link rel="canonical" href={`${BASE_URL}/angebot`} />
        <meta property="og:title" content="Kostenloses Angebot anfordern | TS Umzug Duisburg" />
        <meta property="og:description" content="Fordern Sie jetzt Ihr kostenloses Umzugsangebot an. Festpreisgarantie, versicherter Transport." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/angebot`} />
        <meta property="og:locale" content="de_DE" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-xl font-bold">
              <span className="text-slate-900">TS</span>
              <span className="text-orange-500"> Umzug</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/umzugsunternehmen-duisburg" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Leistungen</Link>
              <Link to="/umzug-kosten-duisburg" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Preise</Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href="tel:+4917665197997"><Phone className="w-4 h-4 mr-2" />Jetzt anrufen</a>
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-2xl rounded-b-3xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium text-slate-700 py-2">Home</Link>
              <Link to="/umzugsunternehmen-duisburg" className="text-lg font-medium text-slate-700 py-2">Leistungen</Link>
              <Link to="/umzug-kosten-duisburg" className="text-lg font-medium text-slate-700 py-2">Preise</Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full" asChild>
                <a href="tel:+4917665197997"><Phone className="w-4 h-4 mr-2" />Jetzt anrufen</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Kostenlos & unverbindlich</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Kostenloses Angebot anfordern
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Festpreisangebot.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Festpreisgarantie</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Euro className="w-5 h-5 text-green-400" />
                <span>Keine versteckten Kosten</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Antwort in 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Ihre Umzugsdaten</h2>
                <p className="text-slate-500 mb-8">Je mehr Details Sie angeben, desto genauer wird unser Angebot.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">Anfrage erhalten!</h3>
                    <p className="text-slate-500 text-center mt-4 max-w-md">
                      Vielen Dank für Ihre Anfrage. Wir werden Ihre Daten prüfen und uns innerhalb von 24 Stunden mit einem Angebot bei Ihnen melden.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Ihr Name *</label>
                        <Input placeholder="Max Müller" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer *</label>
                        <Input type="tel" placeholder="+49 123 456 7890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
                      <Input type="email" placeholder="ihre@email.de" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-12 rounded-xl" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Von (Adresse)</label>
                        <Input placeholder="Alte Straße 1, 47137 Duisburg" value={formData.vonAdresse} onChange={(e) => setFormData({ ...formData, vonAdresse: e.target.value })} className="h-12 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Nach (Adresse)</label>
                        <Input placeholder="Neue Straße 2, 47057 Duisburg" value={formData.nachAdresse} onChange={(e) => setFormData({ ...formData, nachAdresse: e.target.value })} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Wohnungsgröße</label>
                        <select
                          value={formData.wohnungsgroesse}
                          onChange={(e) => setFormData({ ...formData, wohnungsgroesse: e.target.value })}
                          className="w-full h-12 rounded-xl border border-slate-200 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Bitte wählen</option>
                          <option value="1-zimmer">1-Zimmer-Wohnung</option>
                          <option value="2-zimmer">2-Zimmer-Wohnung</option>
                          <option value="3-zimmer">3-Zimmer-Wohnung</option>
                          <option value="4-zimmer">4-Zimmer-Wohnung</option>
                          <option value="haus">Haus</option>
                          <option value="buero">Büro</option>
                          <option value="sonstige">Sonstige</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Gewünschter Termin</label>
                        <Input type="date" value={formData.umzugstermin} onChange={(e) => setFormData({ ...formData, umzugstermin: e.target.value })} className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Weitere Details</label>
                      <Textarea
                        placeholder="Etage, Aufzug vorhanden, besondere Möbel, gewünschte Zusatzleistungen..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={4}
                        className="rounded-xl resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg rounded-xl">
                      {isSubmitting ? (<><Loader2 className="mr-2 w-5 h-5 animate-spin" />Wird gesendet...</>) : (<><Send className="mr-2 w-5 h-5" />Kostenloses Angebot anfordern</>)}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Lieber telefonisch?</h3>
                <p className="text-slate-400 mb-6">Rufen Sie uns direkt an für eine schnelle Beratung.</p>

                <div className="space-y-4 mb-8">
                  <a href="tel:+4917665197997" className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span>+49 176 6519 7997</span>
                  </a>
                  <a href="mailto:info@tsumzug.de" className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <span>info@tsumzug.de</span>
                  </a>
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                    <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                    <span>Brückelstraße 54<br />47137 Duisburg</span>
                  </a>
                </div>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />WhatsApp
                  </a>
                </Button>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="font-semibold mb-4">Unsere Leistungen</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link to="/privatumzug-duisburg" className="hover:text-orange-400">Privatumzüge</Link></li>
                    <li><Link to="/firmenumzug-duisburg" className="hover:text-orange-400">Firmenumzüge</Link></li>
                    <li><Link to="/entruempelung-duisburg" className="hover:text-orange-400">Entrümpelung</Link></li>
                    <li><Link to="/haushaltsaufloesung-duisburg" className="hover:text-orange-400">Haushaltsauflösung</Link></li>
                    <li><Link to="/moebeltransport-duisburg" className="hover:text-orange-400">Möbeltransport</Link></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="text-xl font-bold">
              <span className="text-white">TS</span>
              <span className="text-orange-500"> Umzug</span>
            </Link>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TS Umzug. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="text-slate-400 hover:text-orange-400 text-sm">Impressum</Link>
              <Link to="/datenschutz" className="text-slate-400 hover:text-orange-400 text-sm">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
