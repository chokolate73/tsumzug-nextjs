/**
 * Centralized Company Configuration
 * Single source of truth for all company data across the site
 */

export const COMPANY = {
  // Core Identity
  name: 'TS Umzug',
  legalName: 'TopSicher Umzüge',
  slogan: 'Ihr Umzugsunternehmen in Duisburg',

  // Contact
  phone: '+49 176 6519 7997',
  phoneDisplay: '+49 176 6519 7997',
  phoneLink: 'tel:+4917665197997',
  email: 'info@tsumzug.de',
  whatsapp: 'https://wa.me/4917665197997',

  // Address
  address: {
    street: 'Brückelstraße 54',
    postalCode: '47137',
    city: 'Duisburg',
    region: 'NRW',
    country: 'DE',
    countryName: 'Deutschland',
    full: 'Brückelstraße 54, 47137 Duisburg',
  },

  // Geo (Brückelstraße 54, 47137 Duisburg)
  geo: {
    latitude: 51.47270749488183,
    longitude: 6.782824339817898,
  },

  // Web
  domain: 'tsumzug.de',
  url: 'https://tsumzug.de',
  logo: 'https://tsumzug.de/logo.png',
  ogImage: 'https://tsumzug.de/og-image.png',

  // Business Details
  priceRange: '€€',
  // foundingYear: undefined, // Add when confirmed

  // Service Area (verified cities only)
  primaryCity: 'Duisburg',
  serviceAreas: [
    'Duisburg',
    'Oberhausen',
    'Mülheim an der Ruhr',
    'Essen',
    'Düsseldorf',
  ],

  // Opening Hours (from original site display)
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-18:00',
  ],
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],

  // Social
  social: {
    facebook: '',
    instagram: '',
    google: 'https://share.google/8XTr3rRfXkoG5OkKK', // Google Business Profile
  },

  // Services offered (verified from user context)
  services: {
    offered: [
      'Privatumzug',
      'Firmenumzug',
      'Büroumzug',
      'Entrümpelung',
      'Haushaltsauflösung',
      'Möbeltransport',
      'Möbelmontage',
      'Verpackungsservice',
    ],
    notOffered: [
      'Auslandsumzug',
      'Möbellift',
    ],
  },

  // USPs (Unique Selling Points)
  usps: {
    de: [
      'Festpreisgarantie ohne versteckte Kosten',
      'Versicherter Transport aller Gegenstände',
      'Lokales Team aus Duisburg',
      'Flexible Termine - auch am Wochenende',
      'Kostenlose Beratung und Angebot',
    ],
    en: [
      'Fixed price guarantee with no hidden costs',
      'Insured transport for all items',
      'Local team from Duisburg',
      'Flexible scheduling - weekends available',
      'Free consultation and quote',
    ],
    ru: [
      'Гарантия фиксированной цены без скрытых расходов',
      'Застрахованная транспортировка всех вещей',
      'Местная команда из Дуйсбурга',
      'Гибкий график - включая выходные',
      'Бесплатная консультация и расчёт',
    ],
  },
} as const;

// Type exports
export type Company = typeof COMPANY;
export type ServiceArea = typeof COMPANY.serviceAreas[number];
export type Language = 'de' | 'en' | 'ru';
