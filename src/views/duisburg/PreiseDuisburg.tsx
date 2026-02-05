'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Calculator,
  Home,
  Building2,
  Trash2,
  Truck,
  Wrench,
  PaintBucket,
  ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { SEOHead } from '@/components/seo/SEOHead';
import { COMPANY } from '@/config/company';
import {
  buildMovingCompanySchema,
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from '@/utils/jsonLd';
import { trackCallClick, trackWhatsAppClick, trackFormSubmit, trackAngebotClick, ANGEBOT_UTM } from '@/utils/tracking';
import StickyMobileCTA from '@/components/StickyMobileCTA';

interface PriceCard {
  label: string;
  price: string;
  note: string;
}

interface PriceSection {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  cards: PriceCard[];
  link: string;
}

const priceSections: PriceSection[] = [
  {
    icon: Home,
    title: 'Privatumzug Preise',
    subtitle: 'Komplettservice für Ihren Wohnungsumzug',
    cards: [
      { label: '1-Zimmer-Wohnung', price: 'ab 299€', note: 'bis 35m², 2 Umzugshelfer' },
      { label: '2-Zimmer-Wohnung', price: 'ab 449€', note: 'bis 65m², 2-3 Umzugshelfer' },
      { label: '3-Zimmer-Wohnung', price: 'ab 649€', note: 'bis 90m², 3 Umzugshelfer' },
    ],
    link: '/privatumzug-duisburg',
  },
  {
    icon: Truck,
    title: 'Möbeltransport Preise',
    subtitle: 'Einzelstücke, IKEA-Abholung oder Teilumzug',
    cards: [
      { label: 'Einzelstück lokal', price: 'ab 119€', note: 'z.B. Sofa, Schrank innerhalb Duisburg. Inkl. 2 Personen, Transport und Be-/Entladung' },
      { label: 'IKEA Abholung', price: 'ab 139€', note: 'Abholung und Lieferung. Montage optional +50€' },
      { label: 'Mehrere Stücke', price: 'ab 249€', note: 'Teilumzug oder mehrere Möbelstücke. Pauschalpreis je nach Menge' },
    ],
    link: '/moebeltransport-duisburg',
  },
  {
    icon: Trash2,
    title: 'Entrümpelung Preise',
    subtitle: 'Keller, Dachboden, Wohnung - besenrein',
    cards: [
      { label: 'Keller/Dachboden', price: 'ab 199€', note: 'Bis ca. 15m². Inklusive Entsorgung' },
      { label: 'Garage/Schuppen', price: 'ab 399€', note: 'Komplettentsorgung inklusive. Mit Wertanrechnung möglich' },
      { label: 'Wohnung komplett', price: 'ab 699€', note: '2-Zimmer-Wohnung, besenrein. Inklusive Entsorgung und Endreinigung' },
    ],
    link: '/entruempelung-duisburg',
  },
  {
    icon: Building2,
    title: 'Firmenumzug Preise',
    subtitle: 'Büroumzug mit minimaler Ausfallzeit',
    cards: [
      { label: 'Kleines Büro', price: 'ab 499€', note: 'bis 5 Arbeitsplätze' },
      { label: 'Mittleres Büro', price: 'ab 1.200€', note: '5-15 Arbeitsplätze' },
      { label: 'Großes Büro', price: 'ab 2.500€', note: 'ab 15 Arbeitsplätze' },
    ],
    link: '/firmenumzug-duisburg',
  },
  {
    icon: Wrench,
    title: 'Hausmeisterservice Preise',
    subtitle: 'Regelmäßige Betreuung oder nach Bedarf. Flexibel buchbar.',
    cards: [
      { label: 'Stundensatz', price: 'ab 35€/Stunde', note: 'Kleinreparaturen, Wartung, Objektpflege' },
      { label: 'Monatspauschale', price: 'ab 250€/Monat', note: 'Regelmäßige Betreuung eines Objekts mit festem Leistungsumfang' },
      { label: 'Notdienst', price: 'ab 89€', note: 'Schnelle Hilfe bei Notfällen. Einsatzpauschale + Arbeitszeit' },
    ],
    link: '/hausmeisterservice-duisburg',
  },
  {
    icon: PaintBucket,
    title: 'Renovierung Preise in Duisburg',
    subtitle: 'Perfekt für Wohnungsübergaben. Faire Preise nach Aufwand.',
    cards: [
      { label: 'Basis-Paket', price: 'ab 12€/m² Wohnfläche', note: 'Wände/Decken weiß streichen, kleine Löcher spachteln, Endreinigung' },
      { label: 'Komplett-Paket', price: 'ab 18€/m² Wohnfläche', note: 'Basis-Paket + Türen/Zargen streichen, Tapeten entfernen, gründliche Reinigung' },
      { label: 'Bodenverlegung', price: 'ab 25€/m² Bodenfläche', note: 'Laminat oder Vinyl verlegen. Inkl. Material und Trittschalldämmung' },
    ],
    link: '/renovierung-duisburg',
  },
];

const disclaimer = 'Alle Preise sind Startpreise. Der Endpreis hängt vom konkreten Aufwand ab. Kostenlose Besichtigung und Angebot.';

export default function PreiseDuisburg() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = `${COMPANY.whatsapp}?text=${encodeURIComponent('Hallo, ich interessiere mich für Ihre Dienstleistungen in Duisburg. Können Sie mir ein Angebot machen?')}`;
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address.full)}`;

  const canonicalUrl = `${COMPANY.url}/preise-duisburg`;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: COMPANY.url },
    { name: 'Preise', url: canonicalUrl },
  ];

  const schemas = [
    buildMovingCompanySchema({ url: canonicalUrl }),
    buildBreadcrumbSchema(breadcrumbs),
  ];

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
          message: formData.details,
          _gotcha: formData._gotcha,
          page: '/preise-duisburg',
          language: 'de',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackFormSubmit('quick_contact', '/preise-duisburg');
        toast.success('Vielen Dank! Wir werden Sie in Kürze kontaktieren.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch {
      toast.error('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Preise Duisburg | Alle Umzugs- und Servicepreise auf einen Blick | TopSicher Umzüge"
        description="Transparente Preise für Umzüge, Möbeltransport, Entrümpelung, Hausmeisterservice und Renovierung in Duisburg. Festpreise ab 119€. Kostenlose Besichtigung!"
        canonical={canonicalUrl}
        jsonLd={schemas}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-bold">
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <a href="#preise" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Preise
              </a>
              <a href="#kontakt" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Kontakt
              </a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'navbar_cta')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </a>
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
              <Link href="/" className="text-lg font-medium text-slate-700 py-2">Home</Link>
              <a href="#preise" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Preise</a>
              <a href="#kontakt" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'mobile_navbar_cta')}><Phone className="w-4 h-4 mr-2" />Jetzt anrufen</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb UI */}
      <div className="pt-24 bg-slate-100">
        <div className="container mx-auto px-6 md:px-12 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">Preise</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Transparente Preise</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Alle Preise auf einen Blick
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">Umzüge, Transporte, Entrümpelung und mehr - faire Festpreise in Duisburg</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl" asChild>
                <Link href={`/angebot${ANGEBOT_UTM}`} onClick={() => trackAngebotClick('hero_cta')}><Calculator className="mr-2 w-5 h-5" />Kostenloses Angebot</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl" asChild>
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'hero_cta')}><Phone className="mr-2 w-5 h-5" />Jetzt anrufen</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section id="preise" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          {priceSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium mb-1">
                      <Calculator className="w-3 h-3" />
                      Transparente Preise
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                    <p className="text-slate-500">{section.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {section.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.1 }}
                      className="bg-slate-50 rounded-2xl p-6 text-center"
                    >
                      <h3 className="font-semibold text-slate-900 mb-2">{card.label}</h3>
                      <p className="text-3xl font-bold text-orange-500 mb-2">{card.price}</p>
                      <p className="text-slate-500 text-sm">{card.note}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <p className="text-slate-500 text-sm italic">{disclaimer}</p>
                  <Link
                    href={section.link}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Bereit loszulegen?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">Jetzt kostenloses Angebot anfordern</h2>
              <p className="text-slate-400 mt-4">Wir erstellen Ihnen ein unverbindliches Angebot nach einer kostenlosen Besichtigung vor Ort.</p>

              <div className="mt-10 space-y-4">
                <a href={COMPANY.phoneLink} onClick={() => trackCallClick(COMPANY.phone, 'contact_section')} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Telefon</p>
                    <p className="text-white font-medium">{COMPANY.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">E-Mail</p>
                    <p className="text-white font-medium">{COMPANY.email}</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('contact_section')}>
                    <MessageCircle className="mr-2 w-5 h-5" />WhatsApp Chat
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Anfrage senden</h3>
                <p className="text-slate-500 mb-8">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">Nachricht gesendet!</h4>
                    <p className="text-slate-500 text-center mt-2">Wir werden Sie in Kürze kontaktieren.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={formData._gotcha} onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ihr Name</label>
                      <Input placeholder="Max Müller" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer</label>
                      <Input type="tel" placeholder="+49 123 456 7890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ihre Anfrage</label>
                      <Textarea placeholder="Beschreiben Sie Ihr Anliegen..." value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} required rows={4} className="rounded-xl resize-none" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl">
                      {isSubmitting ? (<><Loader2 className="mr-2 w-5 h-5 animate-spin" />Wird gesendet...</>) : (<><Send className="mr-2 w-5 h-5" />Anfrage senden</>)}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-xl font-bold">
                <span className="text-white">TS</span>
                <span className="text-orange-500"> Umzug</span>
              </Link>
              <p className="text-slate-400 mt-4 text-sm">Ihr zuverlässiges Umzugsunternehmen in Duisburg. Faire Preise, professioneller Service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privatumzug-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Privatumzug</Link></li>
                <li><Link href="/firmenumzug-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Firmenumzug</Link></li>
                <li><Link href="/entruempelung-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Entrümpelung</Link></li>
                <li><Link href="/moebeltransport-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Möbeltransport</Link></li>
                <li><Link href="/hausmeisterservice-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Hausmeisterservice</Link></li>
                <li><Link href="/renovierung-duisburg" className="text-slate-400 hover:text-orange-400 transition-colors">Renovierung</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>{COMPANY.address.street}</li>
                <li>{COMPANY.address.postalCode} {COMPANY.address.city}</li>
                <li><a href={COMPANY.phoneLink} className="hover:text-orange-400">{COMPANY.phoneDisplay}</a></li>
                <li><a href={`mailto:${COMPANY.email}`} className="hover:text-orange-400">{COMPANY.email}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-slate-400 hover:text-orange-400 transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-slate-400 hover:text-orange-400 transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TopSicher Umzüge. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Route planen</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </>
  );
}
