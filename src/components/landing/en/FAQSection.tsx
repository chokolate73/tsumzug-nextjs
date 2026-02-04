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
    question: "How much does a move cost in Duisburg?",
    answer: "The cost for a move in Duisburg depends on various factors: apartment size, distance, floor level with/without elevator, and additional services like packing or furniture assembly. A move for a 2-room apartment in Duisburg starts from approximately 300-500 EUR. Contact us for a free, no-obligation quote – we offer a fixed price guarantee with no hidden costs!"
  },
  {
    question: "How quickly can you perform my move?",
    answer: "We offer flexible scheduling and can often accommodate short-notice moves within 24-48 hours. However, for optimal planning, we recommend booking at least one week in advance."
  },
  {
    question: "Which areas in NRW do you cover?",
    answer: "We serve all of North Rhine-Westphalia! Our headquarters is in Duisburg, but we perform moves in Oberhausen, Mülheim an der Ruhr, Essen, Düsseldorf, Krefeld, Moers, Dinslaken, Bottrop, Ratingen, and all other cities in NRW."
  },
  {
    question: "Do you offer kitchen installation and furniture assembly?",
    answer: "Yes, our handyman service includes professional kitchen installation, IKEA furniture assembly, PAX wardrobe assembly, and built-in closets. We also hang lamps, shelves, and curtain rods. The service is available in Duisburg, Oberhausen, Essen, and throughout NRW."
  },
  {
    question: "Do you perform household clearances in Oberhausen?",
    answer: "Yes, we offer professional household clearances and junk removal in Oberhausen, Duisburg, Mülheim an der Ruhr, and surrounding areas. We clear apartments, basements, attics, and dispose of everything properly. Short-notice appointments are also available!"
  },
  {
    question: "Are my belongings insured during the move?",
    answer: "Yes, all our transports are fully insured. Your furniture and personal items are protected throughout the entire moving process."
  },
  {
    question: "Do you also provide packing materials?",
    answer: "Yes, we offer a complete packing service, including boxes, bubble wrap, and packing materials. You can also purchase just the materials if you prefer to pack yourself."
  },
  {
    question: "Can you pick up and assemble IKEA furniture?",
    answer: "Yes! We pick up your IKEA furniture in Duisburg, Essen, Düsseldorf, or other cities and deliver it directly to your home. Upon request, we also handle complete assembly – from IKEA PAX wardrobes to complete kitchens."
  },
  {
    question: "Do you also dispose of old furniture?",
    answer: "Yes, we offer environmentally friendly disposal of old furniture, bulky waste, and other unwanted items. Everything is properly recycled or disposed of."
  },
  {
    question: "Can you transport heavy or bulky items?",
    answer: "Absolutely! We have the equipment and experience to safely transport pianos, safes, large wardrobes, and other heavy or bulky items."
  },
  {
    question: "Do you offer renovation services after moving out?",
    answer: "Yes, our renovation service includes painting, wallpapering, laminate flooring installation, and final cleaning. We prepare your old apartment for handover or renovate your new apartment before moving in – in Duisburg, Mülheim, Krefeld, and throughout NRW."
  },
  {
    question: "Do I need to be present on moving day?",
    answer: "It's recommended that you or someone you authorize is present during the move to answer questions and coordinate furniture placement."
  }
];

export default function FAQSectionEn() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Frequently Asked
            <span className="text-slate-400"> Questions</span>
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Find answers to the most common questions about our moving and transport services.
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
            Have more questions?{' '}
            <a
              href="#contact"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Contact us →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
