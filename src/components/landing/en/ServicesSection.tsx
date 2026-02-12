'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import serviceTransport from '@/assets/service-transport.webp';
import {
  Home,
  Trash2,
  Truck,
  Building2,
  Wrench,
  PaintBucket,
  Piano,
  Package,
  Warehouse,
  Sparkles,
  Plug,
  Hammer,
  LucideIcon,
  ArrowRight
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
  features: string[];
  slug: string;
}

interface AdditionalService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const mainServices: Service[] = [
  {
    icon: Home,
    title: "Residential Moves",
    subtitle: "Apartment & House",
    description: "Complete moving service for apartments and houses. From packing to unpacking – we take care of every detail of your move.",
    image: "/service-privatumzuege.webp",
    features: ["Full packing service", "Furniture assembly/disassembly", "Secure transport", "Unpacking assistance"],
    slug: "residential-moves"
  },
  {
    icon: Building2,
    title: "Office Relocations",
    subtitle: "Business Moves",
    description: "Professional office and company relocations with minimal downtime. We also work on weekends and evenings.",
    image: "/service-firmenumzuege.webp",
    features: ["After-hours moving", "IT equipment transport", "Office furniture assembly", "Labeling & inventory"],
    slug: "office-relocations"
  },
  {
    icon: Trash2,
    title: "Clearance & Disposal",
    subtitle: "Junk Removal",
    description: "Disposal of old furniture, appliances, and bulky waste. Complete household clearances, basement and attic cleanouts.",
    image: "/service-entruempelung.webp",
    features: ["Same-day pickup", "Apartment clearance", "Post-renovation disposal", "Eco-friendly recycling"],
    slug: "clearance-disposal"
  },
  {
    icon: Truck,
    title: "Transport Services",
    subtitle: "Freight & Delivery",
    description: "Furniture, appliance, and cargo transport across NRW. From single items to full loads.",
    image: serviceTransport,
    features: ["Flexible scheduling", "Various vehicle sizes", "Insured transport"],
    slug: "furniture-transport"
  },
  {
    icon: Wrench,
    title: "Handyman Services",
    subtitle: "Home Maintenance",
    description: "IKEA furniture assembly, hanging shelves and lights, minor repairs, appliance installation – everything you need after moving.",
    image: "/service-hausmeisterservice.webp",
    features: ["All furniture assembly", "Kitchen installation", "Curtain rod mounting", "Appliance hookup"],
    slug: "handyman-services"
  },
  {
    icon: PaintBucket,
    title: "Renovation",
    subtitle: "Painting & Repairs",
    description: "Painting, wallpapering, laminate flooring. We prepare your apartment for handover or move-in.",
    image: "/service-renovierung.webp",
    features: ["Wall painting", "Wallpapering", "Floor installation", "Final cleaning"],
    slug: "renovation"
  }
];

const additionalServices: AdditionalService[] = [
  {
    icon: Piano,
    title: "Piano Transport",
    description: "Special equipment for heavy instruments"
  },
  {
    icon: Package,
    title: "Packing Materials",
    description: "Boxes, wrap, tape – delivered to your door"
  },
  {
    icon: Warehouse,
    title: "Storage",
    description: "Temporary storage for furniture and belongings"
  },
  {
    icon: Sparkles,
    title: "Apartment Cleaning",
    description: "Deep cleaning before and after moving"
  },
  {
    icon: Plug,
    title: "Appliance Installation",
    description: "Washer, dishwasher, stove hookup"
  },
  {
    icon: Hammer,
    title: "Demolition Work",
    description: "Partition removal, built-in furniture dismantling"
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

        {/* Icon Badge */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
        >
          <service.icon className="w-6 h-6 text-orange-500" />
        </motion.div>

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
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Link
          href={`/en/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors group/link"
        >
          Learn more
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const AdditionalServiceCard = ({ service, index }: { service: AdditionalService; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-md transition-shadow group"
    >
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors flex-shrink-0">
        <service.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 text-sm">{service.title}</h4>
        <p className="text-slate-500 text-xs mt-0.5">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesSectionEn() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Moving & Renovation
            <span className="text-slate-400"> All-in-One</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Complete service from moving to renovation and handyman work. Everything in one place – save time and money.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Additional Services</h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">Everything you need before, during, and after your move</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-orange-500 text-white px-6 sm:px-8 py-4 rounded-2xl">
            <span className="text-base sm:text-lg font-semibold">Need a consultation?</span>
            <a
              href="tel:+4917665197997"
              className="bg-white text-orange-500 px-4 py-2 rounded-xl font-bold hover:bg-orange-50 transition-colors"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
