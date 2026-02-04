'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}
const testimonials: Testimonial[] = [{
  name: "Markus W.",
  location: "Düsseldorf",
  rating: 5,
  text: "Fantastischer Service! Das Team war pünktlich, professionell und hat alles mit größter Sorgfalt behandelt. Mein Umzug von Düsseldorf nach Duisburg war völlig stressfrei. Absolute Empfehlung!",
  service: "Wohnungsumzug",
  date: "November 2024"
}, {
  name: "Anna K.",
  location: "Essen",
  rating: 5,
  text: "Sehr zufrieden mit der Entrümpelung meiner Wohnung. Die Jungs waren schnell, freundlich und haben alles sauber hinterlassen. Preis-Leistung stimmt auch!",
  service: "Entrümpelung",
  date: "Oktober 2024"
}, {
  name: "Thomas H.",
  location: "Köln",
  rating: 5,
  text: "Habe schon mehrere Umzugsfirmen genutzt, aber Tsapenko Transporte war mit Abstand die beste. Professionelle Verpackung, keine Schäden, faire Preise. Beim nächsten Umzug wieder!",
  service: "Wohnungsumzug",
  date: "September 2024"
}, {
  name: "Elena S.",
  location: "Duisburg",
  rating: 5,
  text: "Супер команда! Переехали быстро и аккуратно. Все вещи в целости. Говорят по-русски, что было очень удобно. Рекомендую всем!",
  service: "Wohnungsumzug",
  date: "Dezember 2024"
}, {
  name: "Michael B.",
  location: "Dortmund",
  rating: 5,
  text: "Kurzfristig gebucht für einen Möbeltransport. Trotz der schnellen Anfrage war alles super organisiert. Das Klavier wurde sicher und ohne Kratzer geliefert!",
  service: "Möbeltransport",
  date: "November 2024"
}, {
  name: "Sandra P.",
  location: "Bochum",
  rating: 5,
  text: "Endlich eine Umzugsfirma, auf die man sich verlassen kann! Alles lief wie geplant, das Team war freundlich und hat sogar beim Aufbau der Möbel geholfen.",
  service: "Wohnungsumzug",
  date: "Oktober 2024"
}];
const StarRating = ({
  rating
}: {
  rating: number;
}) => <div className="flex gap-1">
    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />)}
  </div>;
export default function TestimonialsSection() {
  return <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
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
      }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">Bewertungen</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Was unsere Kunden
            <span className="text-slate-400"> sagen</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Über 500 zufriedene Kunden in ganz NRW vertrauen auf unseren Service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-50px"
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-slate-50 rounded-3xl p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-500">
              {/* Quote Icon */}
              

              {/* Rating & Service */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={testimonial.rating} />
                <span className="text-xs font-medium text-orange-500 bg-orange-100 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location} • {testimonial.date}</p>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Trust Indicators */}
      </div>
    </section>;
}