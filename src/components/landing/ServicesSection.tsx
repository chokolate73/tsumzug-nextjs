import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import serviceTransport from '@/assets/service-transport.jpg';
import { Home, Trash2, Truck, Building2, Wrench, PaintBucket, Piano, Package, Warehouse, Sparkles, Plug, Hammer, LucideIcon, ArrowRight } from 'lucide-react';
interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  slug: string;
}
interface AdditionalService {
  icon: LucideIcon;
  title: string;
  description: string;
}
const mainServices: Service[] = [{
  icon: Home,
  title: "Privatumzüge",
  subtitle: "Wohnungsumzüge",
  description: "Kompletter Umzugsservice für Wohnungen und Häuser. Von der Verpackung bis zum Auspacken – wir kümmern uns um jedes Detail Ihres Umzugs.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  features: ["Kompletter Packservice", "Möbel Ab-/Aufbau", "Sicherer Transport", "Auspackservice"],
  slug: "privatumzuege"
}, {
  icon: Building2,
  title: "Firmenumzüge",
  subtitle: "Büroumzüge",
  description: "Professioneller Umzug für Büros und Unternehmen mit minimaler Ausfallzeit. Wir arbeiten auch am Wochenende und abends.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  features: ["Umzug außerhalb der Arbeitszeit", "IT-Equipment Transport", "Büromöbel Montage", "Beschriftung & Inventar"],
  slug: "firmenumzuege"
}, {
  icon: Trash2,
  title: "Entrümpelung",
  subtitle: "Haushaltsauflösung",
  description: "Entsorgung von Altmöbeln, Elektrogeräten und Sperrmüll. Komplette Haushaltsauflösungen, Keller- und Dachbodenräumungen.",
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  features: ["Abholung am selben Tag", "Wohnungsauflösung", "Entsorgung nach Renovierung", "Umweltgerechte Entsorgung"],
  slug: "entruempelung"
}, {
  icon: Truck,
  title: "Möbeltransport",
  subtitle: "Transportservice",
  description: "Möbel-, Geräte- und Gütertransport in NRW und ganz Deutschland. Von Einzelstücken bis zur Komplettladung.",
  image: serviceTransport,
  features: ["Flexible Terminplanung", "Verschiedene Fahrzeuggrößen", "Versicherter Transport"],
  slug: "moebeltransport"
}, {
  icon: Wrench,
  title: "Hausmeisterservice",
  subtitle: "Handwerkerservice",
  description: "IKEA-Möbelmontage, Regale und Lampen aufhängen, Kleinreparaturen, Geräteanschluss – alles was Sie nach dem Umzug brauchen.",
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  features: ["Möbelmontage aller Art", "Küchenmontage", "Gardinenstangen aufhängen", "Geräteanschluss"],
  slug: "hausmeisterservice"
}, {
  icon: PaintBucket,
  title: "Renovierung",
  subtitle: "Malerarbeiten",
  description: "Malerarbeiten, Tapezieren, Laminat verlegen. Wir bereiten Ihre Wohnung für die Übergabe oder den Einzug vor.",
  image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
  features: ["Wände streichen", "Tapezieren", "Bodenverlegung", "Endreinigung"],
  slug: "renovierung"
}];
const additionalServices: AdditionalService[] = [{
  icon: Piano,
  title: "Klaviertransport",
  description: "Spezialausrüstung für schwere Instrumente"
}, {
  icon: Package,
  title: "Verpackungsmaterial",
  description: "Kartons, Folie, Klebeband – Lieferung nach Hause"
}, {
  icon: Warehouse,
  title: "Einlagerung",
  description: "Zwischenlagerung von Möbeln und Hausrat"
}, {
  icon: Sparkles,
  title: "Wohnungsreinigung",
  description: "Grundreinigung vor und nach dem Umzug"
}, {
  icon: Plug,
  title: "Geräteanschluss",
  description: "Installation von Waschmaschine, Spülmaschine, Herd"
}, {
  icon: Hammer,
  title: "Demontagearbeiten",
  description: "Abriss von Trennwänden, Demontage von Einbaumöbeln"
}];
const ServiceCard = ({
  service,
  index
}: {
  service: Service;
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-100px"
  }} transition={{
    duration: 0.4,
    ease: "easeOut"
  }} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <service.icon className="w-6 h-6 text-orange-500" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-orange-300 text-xs font-medium mb-1">{service.subtitle}</p>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {service.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
              {feature}
            </li>)}
        </ul>

        {/* Learn More Link */}
        
      </div>
    </motion.div>;
};
const AdditionalServiceCard = ({
  service,
  index
}: {
  service: AdditionalService;
  index: number;
}) => {
  return <div className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-md transition-shadow duration-200 group">
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
        <service.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 text-sm">{service.title}</h4>
        <p className="text-slate-500 text-xs mt-0.5">{service.description}</p>
      </div>
    </div>;
};
export default function ServicesSection() {
  return <section id="services" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-2xl mb-10 sm:mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">Unsere Leistungen</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Umzug & Renovierung
            <span className="text-slate-400"> aus einer Hand</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Komplettservice von Umzug bis Renovierung und Hausmeisterservice. Alles an einem Ort – sparen Sie Zeit und Geld.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {mainServices.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>

        {/* Additional Services */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mt-10 sm:mt-12 md:mt-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Zusätzliche Leistungen</h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">Alles was Sie vor, während und nach dem Umzug brauchen</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => <AdditionalServiceCard key={service.title} service={service} index={index} />)}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-orange-500 text-white px-6 sm:px-8 py-4 rounded-2xl">
            <span className="text-base sm:text-lg font-semibold">Beratung gewünscht?</span>
            <a href="tel:+4917665197997" className="bg-white text-orange-500 px-4 py-2 rounded-xl font-bold hover:bg-orange-50 transition-colors">
              Anrufen
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
}