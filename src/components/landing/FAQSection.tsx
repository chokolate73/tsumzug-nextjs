'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Was kostet ein Umzug in Duisburg?",
    answer: "Die Kosten für einen Umzug in Duisburg hängen von verschiedenen Faktoren ab: Wohnungsgröße, Entfernung, Etage mit/ohne Aufzug und zusätzliche Dienstleistungen wie Verpackung oder Möbelmontage. Ein Umzug einer 2-Zimmer-Wohnung in Duisburg beginnt ab ca. 300-500€. Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot – wir bieten Festpreisgarantie ohne versteckte Kosten!"
  },
  {
    question: "Gibt es versteckte Kosten bei Ihnen?",
    answer: "Nein! Wir arbeiten mit transparenter Festpreisgarantie. Der Preis, den wir Ihnen nennen, ist der Endpreis – keine Überraschungen, keine Zusatzkosten. Wir besichtigen auf Wunsch vorab Ihre Wohnung, um einen genauen Preis zu kalkulieren."
  },
  {
    question: "Wie schnell können Sie meinen Umzug durchführen?",
    answer: "Wir bieten flexible Terminplanung an und können oft kurzfristige Umzüge innerhalb von 24-48 Stunden durchführen. Für eine optimale Planung empfehlen wir jedoch eine Buchung mindestens eine Woche im Voraus."
  },
  {
    question: "Können Sie auch am Wochenende umziehen?",
    answer: "Ja! Wir sind auch samstags von 09:00 bis 18:00 Uhr im Einsatz. Wochenendumzüge sind besonders praktisch, wenn Sie unter der Woche arbeiten. Buchen Sie frühzeitig, da Wochenendtermine sehr gefragt sind."
  },
  {
    question: "Was ist, wenn meine Wohnung im 5. Stock ohne Aufzug liegt?",
    answer: "Kein Problem! Unser erfahrenes Team ist auf solche Situationen vorbereitet. Wir haben die Ausrüstung und Erfahrung für Umzüge in hohen Etagen ohne Aufzug. Die Kosten werden transparent im Angebot berücksichtigt – keine bösen Überraschungen."
  },
  {
    question: "Was ist mit Parkplätzen vor dem Haus?",
    answer: "Wir kümmern uns um alles! Auf Wunsch beantragen wir für Sie eine Halteverbotszone bei der Stadt Duisburg. So ist garantiert ein Parkplatz für unseren Umzugswagen direkt vor Ihrer Tür frei. Die Kosten und Bearbeitung übernehmen wir gerne für Sie."
  },
  {
    question: "Welche Gebiete in NRW decken Sie ab?",
    answer: "Wir bedienen ganz Nordrhein-Westfalen! Unser Hauptsitz ist in Duisburg, aber wir führen Umzüge in Oberhausen, Mülheim an der Ruhr, Essen, Düsseldorf, Krefeld, Moers, Dinslaken, Bottrop, Ratingen und allen anderen Städten in NRW durch."
  },
  {
    question: "Bieten Sie auch Küchenmontage und Möbelaufbau an?",
    answer: "Ja, unser Hausmeisterservice umfasst professionelle Küchenmontage, IKEA-Möbelaufbau, Aufbau von PAX-Schränken und Einbauschränken. Wir hängen auch Lampen, Regale und Gardinenstangen auf. Der Service ist in Duisburg, Oberhausen, Essen und ganz NRW verfügbar."
  },
  {
    question: "Führen Sie Haushaltsauflösungen in Oberhausen durch?",
    answer: "Ja, wir bieten professionelle Haushaltsauflösungen und Entrümpelungen in Oberhausen, Duisburg, Mülheim an der Ruhr und Umgebung an. Wir räumen Wohnungen, Keller, Dachböden und entsorgen alles fachgerecht. Auch kurzfristige Termine sind möglich!"
  },
  {
    question: "Sind meine Sachen während des Umzugs versichert?",
    answer: "Ja, alle unsere Transporte sind vollständig versichert. Ihre Möbel und persönlichen Gegenstände sind während des gesamten Umzugsprozesses geschützt."
  },
  {
    question: "Bieten Sie auch Verpackungsmaterial an?",
    answer: "Ja, wir bieten einen kompletten Verpackungsservice an, einschließlich Kartons, Luftpolsterfolie und Verpackungsmaterial. Sie können auch nur das Material kaufen, wenn Sie selbst verpacken möchten."
  },
  {
    question: "Können Sie Möbel von IKEA abholen und aufbauen?",
    answer: "Ja! Wir holen Ihre IKEA-Möbel in Duisburg, Essen, Düsseldorf oder anderen Städten ab und liefern sie direkt zu Ihnen nach Hause. Auf Wunsch übernehmen wir auch den kompletten Aufbau – vom IKEA PAX-Schrank bis zur kompletten Küche."
  },
  {
    question: "Entsorgen Sie auch alte Möbel?",
    answer: "Ja, wir bieten umweltfreundliche Entsorgung von Altmöbeln, Sperrmüll und anderen unerwünschten Gegenständen. Alles wird fachgerecht recycelt oder entsorgt."
  },
  {
    question: "Können Sie schwere oder sperrige Gegenstände transportieren?",
    answer: "Absolut! Wir haben die Ausrüstung und Erfahrung, um Klaviere, Tresore, große Schränke und andere schwere oder sperrige Gegenstände sicher zu transportieren."
  },
  {
    question: "Bieten Sie Renovierungsarbeiten nach dem Auszug an?",
    answer: "Ja, unser Renovierungsservice umfasst Malerarbeiten, Tapezieren, Laminat verlegen und Endreinigung. Wir bereiten Ihre alte Wohnung für die Übergabe vor oder renovieren Ihre neue Wohnung vor dem Einzug – in Duisburg, Mülheim, Krefeld und ganz NRW."
  },
  {
    question: "Muss ich am Umzugstag anwesend sein?",
    answer: "Es ist empfehlenswert, dass Sie oder eine von Ihnen beauftragte Person während des Umzugs anwesend ist, um Fragen zu beantworten und die Platzierung der Möbel zu koordinieren."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Häufig gestellte
            <span className="text-slate-400"> Fragen</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Umzugs- und Transportdienstleistungen.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-500 py-6 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600">
            Haben Sie weitere Fragen?{' '}
            <a
              href="#contact"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Kontaktieren Sie uns →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
