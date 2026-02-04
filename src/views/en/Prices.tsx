'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Globe,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';
import SEO from '@/components/SEO';

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
    title: 'Residential Moving Prices',
    subtitle: 'Complete service for your apartment move',
    cards: [
      { label: '1-Room Apartment', price: 'from 299€', note: 'up to 35m², 2 movers' },
      { label: '2-Room Apartment', price: 'from 449€', note: 'up to 65m², 2-3 movers' },
      { label: '3-Room Apartment', price: 'from 649€', note: 'up to 90m², 3 movers' },
    ],
    link: '/en/services/residential-moves',
  },
  {
    icon: Truck,
    title: 'Furniture Transport Prices',
    subtitle: 'Single items, IKEA pickup or partial moves',
    cards: [
      { label: 'Single Item Local', price: 'from 119€', note: 'e.g. sofa, wardrobe within Duisburg. Incl. 2 persons, transport and loading/unloading' },
      { label: 'IKEA Pickup', price: 'from 139€', note: 'Pickup and delivery. Assembly optional +50€' },
      { label: 'Multiple Items', price: 'from 249€', note: 'Partial move or multiple furniture items. Flat rate depending on quantity' },
    ],
    link: '/en/services/furniture-transport',
  },
  {
    icon: Trash2,
    title: 'Clearance & Disposal Prices',
    subtitle: 'Basement, attic, apartment - broom clean',
    cards: [
      { label: 'Basement/Attic', price: 'from 199€', note: 'Up to approx. 15m². Including disposal' },
      { label: 'Garage/Shed', price: 'from 399€', note: 'Complete disposal included. Value offset possible' },
      { label: 'Complete Apartment', price: 'from 699€', note: '2-room apartment, broom clean. Including disposal and final cleaning' },
    ],
    link: '/en/services/clearance-disposal',
  },
  {
    icon: Building2,
    title: 'Office Relocation Prices',
    subtitle: 'Business moving with minimal downtime',
    cards: [
      { label: 'Small Office', price: 'from 499€', note: 'up to 5 workstations' },
      { label: 'Medium Office', price: 'from 1,200€', note: '5-15 workstations' },
      { label: 'Large Office', price: 'from 2,500€', note: '15+ workstations' },
    ],
    link: '/en/services/office-relocations',
  },
  {
    icon: Wrench,
    title: 'Property Maintenance Prices',
    subtitle: 'Regular care or on demand. Flexibly bookable.',
    cards: [
      { label: 'Hourly Rate', price: 'from 35€/hour', note: 'Minor repairs, maintenance, property care' },
      { label: 'Monthly Package', price: 'from 250€/month', note: 'Regular property care with fixed scope of services' },
      { label: 'Emergency Service', price: 'from 89€', note: 'Quick help in emergencies. Callout fee + labor time' },
    ],
    link: '/en/services/handyman-services',
  },
  {
    icon: PaintBucket,
    title: 'Renovation Prices in Duisburg',
    subtitle: 'Perfect for apartment handovers. Fair prices based on effort.',
    cards: [
      { label: 'Basic Package', price: 'from 12€/m² living space', note: 'Paint walls/ceilings white, fill small holes, final cleaning' },
      { label: 'Complete Package', price: 'from 18€/m² living space', note: 'Basic package + paint doors/frames, remove wallpaper, thorough cleaning' },
      { label: 'Flooring Installation', price: 'from 25€/m² floor space', note: 'Laminate or vinyl installation. Incl. material and underlayment' },
    ],
    link: '/en/services/renovation',
  },
];

const disclaimer = 'All prices are starting prices. Final cost depends on specific requirements. Free quote and inspection.';

const languages = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/preise-duisburg' },
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/en/prices' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', path: '/ru/prices' },
];

export default function PricesPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/4917665197997?text=${encodeURIComponent('Hello, I am interested in your services in Duisburg. Can you give me a quote?')}`;

  const handleLanguageChange = (path: string) => {
    router.push(path);
  };

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
          page: '/en/prices',
          language: 'en',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Thank you! We will contact you shortly.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '' });
        }, 3000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TopSicher Umzüge',
    description: 'Professional moving and service company in Duisburg',
    telephone: '+49 176 6519 7997',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Duisburg',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  };

  return (
    <>
      <SEO
        title="Prices Duisburg | All Moving & Service Prices at a Glance"
        description="Transparent prices for moves, furniture transport, clearance, handyman services and renovation in Duisburg. Fixed prices from 119€. Free inspection!"
        keywords="moving prices, furniture transport prices, clearance prices, handyman prices, renovation prices Duisburg"
        lang="en"
        canonicalPath="/en/prices"
        type="website"
        structuredData={structuredData}
        alternates={{
          de: '/preise-duisburg',
          en: '/en/prices',
          ru: '/ru/prices',
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/en" className="text-xl font-bold">
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/en" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <a href="#prices" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Prices
              </a>
              <a href="#contact" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-3">
                    <Globe className="w-4 h-4" />
                    <span>🇬🇧</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.path)}
                      className="gap-2 cursor-pointer"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href="tel:+4917665197997">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
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
              <Link href="/en" className="text-lg font-medium text-slate-700 py-2">Home</Link>
              <a href="#prices" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Prices</a>
              <a href="#contact" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

              <div className="flex gap-2 py-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={lang.code === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleLanguageChange(lang.path)}
                    className="flex-1"
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.code.toUpperCase()}
                  </Button>
                ))}
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full" asChild>
                <a href="tel:+4917665197997"><Phone className="w-4 h-4 mr-2" />Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb UI */}
      <div className="pt-24 bg-slate-100">
        <div className="container mx-auto px-6 md:px-12 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/en" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">Prices</span>
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
            <Link href="/en" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Transparent Prices</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              All Prices at a Glance
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">Moving, transport, clearance and more - fair fixed prices in Duisburg</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl" asChild>
                <a href="tel:+4917665197997"><Phone className="mr-2 w-5 h-5" />Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-5 h-5" />WhatsApp</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section id="prices" className="py-16 bg-slate-50">
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
                      Transparent Prices
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
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Ready to start?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">Get a Free Quote Now</h2>
              <p className="text-slate-400 mt-4">We'll provide you with a non-binding quote after a free on-site inspection.</p>

              <div className="mt-10 space-y-4">
                <a href="tel:+4917665197997" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <p className="text-white font-medium">+49 176 6519 7997</p>
                  </div>
                </a>

                <a href="mailto:info@tsumzug.de" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-white font-medium">info@tsumzug.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <p className="text-white font-medium">Duisburg, NRW</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />WhatsApp Chat
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Request</h3>
                <p className="text-slate-500 mb-8">We will contact you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">Message Sent!</h4>
                    <p className="text-slate-500 text-center mt-2">We will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                      <Input placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+49 123 456 7890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Request</label>
                      <Textarea placeholder="Describe your needs..." value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} required rows={4} className="rounded-xl resize-none" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl">
                      {isSubmitting ? (<><Loader2 className="mr-2 w-5 h-5 animate-spin" />Sending...</>) : (<><Send className="mr-2 w-5 h-5" />Send Request</>)}
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
              <Link href="/en" className="text-xl font-bold">
                <span className="text-white">TS</span>
                <span className="text-orange-500"> Umzug</span>
              </Link>
              <p className="text-slate-400 mt-4 text-sm">Your reliable moving company in Duisburg. Fair prices, professional service.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/en/services/residential-moves" className="text-slate-400 hover:text-orange-400 transition-colors">Residential Moves</Link></li>
                <li><Link href="/en/services/office-relocations" className="text-slate-400 hover:text-orange-400 transition-colors">Office Relocations</Link></li>
                <li><Link href="/en/services/clearance-disposal" className="text-slate-400 hover:text-orange-400 transition-colors">Clearance & Disposal</Link></li>
                <li><Link href="/en/services/furniture-transport" className="text-slate-400 hover:text-orange-400 transition-colors">Furniture Transport</Link></li>
                <li><Link href="/en/services/handyman-services" className="text-slate-400 hover:text-orange-400 transition-colors">Handyman Services</Link></li>
                <li><Link href="/en/services/renovation" className="text-slate-400 hover:text-orange-400 transition-colors">Renovation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Duisburg, NRW</li>
                <li><a href="tel:+4917665197997" className="hover:text-orange-400">+49 176 6519 7997</a></li>
                <li><a href="mailto:info@tsumzug.de" className="hover:text-orange-400">info@tsumzug.de</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-slate-400 hover:text-orange-400 transition-colors">Imprint</Link></li>
                <li><Link href="/datenschutz" className="text-slate-400 hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TopSicher Umzüge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
