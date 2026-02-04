/**
 * Content generator for dynamic service+city landing pages.
 * Returns unique H1, sections, FAQs, and CTAs for each combination.
 */

import { COMPANY } from '@/config/company';
import type { Location } from './locations';
import type { ServiceDef } from './services';
import type { FAQEntry } from './schema';

export interface LandingPageContent {
  h1: string;
  intro: string;
  benefits: { title: string; text: string }[];
  process: { step: string; text: string }[];
  faqs: FAQEntry[];
  ctaHeading: string;
  ctaText: string;
}

/**
 * Generates unique content for a service+city page.
 * Every combination gets a distinct H1, intro, benefit texts, process steps,
 * and FAQ set to avoid duplicate-content issues.
 */
export function generateLandingContent(
  service: ServiceDef,
  location: Location,
): LandingPageContent {
  const city = location.name;
  const sName = service.name;
  const company = COMPANY.legalName;

  return {
    h1: `${sName} in ${city}`,

    intro: `${company} ist Ihr zuverlässiger Partner für ${sName.toLowerCase()} in ${city} und Umgebung. Als lokales Unternehmen aus Duisburg bieten wir professionelle Dienstleistungen in ganz ${location.state} — pünktlich, versichert und zum Festpreis.`,

    benefits: [
      {
        title: 'Festpreisgarantie',
        text: `Keine versteckten Kosten bei Ihrem ${sName.toLowerCase()} in ${city}. Sie erhalten vorab ein verbindliches Angebot.`,
      },
      {
        title: 'Versicherter Transport',
        text: `Alle Gegenstände sind während des gesamten ${sName.toLowerCase()}s in ${city} vollständig versichert.`,
      },
      {
        title: 'Lokales Team',
        text: `Unser erfahrenes Team kennt ${city} und die Region ${location.state} bestens und plant die optimale Route.`,
      },
      {
        title: 'Flexible Termine',
        text: `Wir bieten ${sName.toLowerCase()} in ${city} auch am Wochenende und an Feiertagen an.`,
      },
    ],

    process: [
      {
        step: '1. Anfrage',
        text: `Kontaktieren Sie uns telefonisch, per WhatsApp oder über unser Formular für Ihren ${sName.toLowerCase()} in ${city}.`,
      },
      {
        step: '2. Besichtigung & Angebot',
        text: `Wir besichtigen die Gegebenheiten vor Ort in ${city} und erstellen ein kostenloses Festpreisangebot.`,
      },
      {
        step: '3. Durchführung',
        text: `Am vereinbarten Termin führen wir den ${sName.toLowerCase()} in ${city} professionell und termingerecht durch.`,
      },
      {
        step: '4. Übergabe',
        text: `Nach Abschluss des ${sName.toLowerCase()}s prüfen wir gemeinsam, ob alles zu Ihrer Zufriedenheit erledigt ist.`,
      },
    ],

    faqs: generateFAQs(service, location),

    ctaHeading: `${sName} in ${city} anfragen`,
    ctaText: `Fordern Sie jetzt Ihr kostenloses Angebot für ${sName.toLowerCase()} in ${city} an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
  };
}

function generateFAQs(service: ServiceDef, location: Location): FAQEntry[] {
  const city = location.name;
  const sName = service.name;
  const sLower = sName.toLowerCase();

  return [
    {
      question: `Was kostet ein ${sLower} in ${city}?`,
      answer: `Die Kosten für ${sLower} in ${city} hängen von Faktoren wie Volumen, Entfernung und zusätzlichen Leistungen ab. Kontaktieren Sie uns für ein kostenloses, unverbindliches Festpreisangebot.`,
    },
    {
      question: `Wie weit im Voraus sollte ich den ${sLower} in ${city} planen?`,
      answer: `Wir empfehlen eine Vorlaufzeit von 2–4 Wochen. Bei kurzfristigen Anfragen finden wir aber oft trotzdem eine Lösung — sprechen Sie uns einfach an.`,
    },
    {
      question: `Bieten Sie ${sLower} auch am Wochenende in ${city} an?`,
      answer: `Ja, wir bieten ${sLower} in ${city} auch samstags an (09:00–18:00). Vereinbaren Sie einfach einen Termin mit uns.`,
    },
    {
      question: `Ist mein Eigentum beim ${sLower} in ${city} versichert?`,
      answer: `Ja, alle Gegenstände sind während des gesamten ${sLower}s durch unsere Transportversicherung abgesichert.`,
    },
    {
      question: `Warum ${COMPANY.legalName} für ${sLower} in ${city} wählen?`,
      answer: `${COMPANY.legalName} bietet Festpreisgarantie, versicherten Transport, ein lokales Team aus Duisburg und flexible Termine — auch am Wochenende.`,
    },
  ];
}
