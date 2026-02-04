import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Маркус В.",
    location: "Дюссельдорф",
    rating: 5,
    text: "Отличный сервис! Команда приехала вовремя, работали профессионально и обращались со всем очень аккуратно. Мой переезд из Дюссельдорфа в Дуйсбург прошёл без стресса. Рекомендую!",
    service: "Квартирный переезд",
    date: "Ноябрь 2024"
  },
  {
    name: "Анна К.",
    location: "Эссен",
    rating: 5,
    text: "Очень довольна вывозом мебели из квартиры. Ребята работали быстро, вежливо и всё оставили чисто. Цена соответствует качеству!",
    service: "Вывоз мебели",
    date: "Октябрь 2024"
  },
  {
    name: "Томас Х.",
    location: "Кёльн",
    rating: 5,
    text: "Пользовался разными компаниями по переезду, но Tsapenko Transporte — лучшие. Профессиональная упаковка, без повреждений, честные цены. При следующем переезде обращусь снова!",
    service: "Квартирный переезд",
    date: "Сентябрь 2024"
  },
  {
    name: "Елена С.",
    location: "Дуйсбург",
    rating: 5,
    text: "Супер команда! Переехали быстро и аккуратно. Все вещи в целости. Говорят по-русски, что было очень удобно. Рекомендую всем!",
    service: "Квартирный переезд",
    date: "Декабрь 2024"
  },
  {
    name: "Михаэль Б.",
    location: "Дортмунд",
    rating: 5,
    text: "Заказал срочно перевозку мебели. Несмотря на быстрый запрос, всё было идеально организовано. Пианино доставили безопасно, без единой царапины!",
    service: "Перевозка мебели",
    date: "Ноябрь 2024"
  },
  {
    name: "Сандра П.",
    location: "Бохум",
    rating: 5,
    text: "Наконец-то компания по переездам, на которую можно положиться! Всё прошло по плану, команда была дружелюбной и даже помогла собрать мебель.",
    service: "Квартирный переезд",
    date: "Октябрь 2024"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
      />
    ))}
  </div>
);

export default function TestimonialsSectionRu() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Отзывы</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
            Что говорят
            <span className="text-slate-400"> наши клиенты</span>
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Более 500 довольных клиентов по всей NRW доверяют нашему сервису.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-100 group-hover:text-orange-200 transition-colors" />

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
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
      </div>
    </section>
  );
}
