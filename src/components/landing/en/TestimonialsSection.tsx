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
  text: "Fantastic service! The team was punctual, professional, and handled everything with great care. My move from Düsseldorf to Duisburg was completely stress-free. Highly recommended!",
  service: "Apartment Move",
  date: "November 2024"
}, {
  name: "Anna K.",
  location: "Essen",
  rating: 5,
  text: "Very satisfied with the apartment clearance. The guys were quick, friendly, and left everything clean. Great value for money!",
  service: "Clearance",
  date: "October 2024"
}, {
  name: "Thomas H.",
  location: "Cologne",
  rating: 5,
  text: "I've used several moving companies, but TopSicher Umzüge was by far the best. Professional packing, no damages, fair prices. Will definitely use again!",
  service: "Apartment Move",
  date: "September 2024"
}, {
  name: "Elena S.",
  location: "Duisburg",
  rating: 5,
  text: "Super team! Moved quickly and carefully. All items arrived in perfect condition. They speak Russian too, which was very convenient. Recommend to everyone!",
  service: "Apartment Move",
  date: "December 2024"
}, {
  name: "Michael B.",
  location: "Dortmund",
  rating: 5,
  text: "Booked on short notice for furniture transport. Despite the quick request, everything was perfectly organized. The piano was delivered safely without a scratch!",
  service: "Furniture Transport",
  date: "November 2024"
}, {
  name: "Sandra P.",
  location: "Bochum",
  rating: 5,
  text: "Finally a moving company you can rely on! Everything went as planned, the team was friendly and even helped with furniture assembly.",
  service: "Apartment Move",
  date: "October 2024"
}];
const StarRating = ({
  rating
}: {
  rating: number;
}) => <div className="flex gap-1">
    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />)}
  </div>;
export default function TestimonialsSectionEn() {
  return <section id="testimonials" className="py-24 bg-white overflow-hidden">
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
      }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            What Our Customers
            <span className="text-slate-400"> Say</span>
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Over 500 satisfied customers across NRW trust our service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                "{testimonial.text}"
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