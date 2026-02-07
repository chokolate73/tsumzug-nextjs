'use client';

import React from 'react';
import { motion } from 'framer-motion';
import moversTeam from '@/assets/movers-team.jpeg';
import { Shield, Clock, MapPin, Heart, LucideIcon } from 'lucide-react';
const stats = [{
  value: "1500+",
  label: "Переездов выполнено"
}, {
  value: "98%",
  label: "Довольных клиентов"
}, {
  value: "24ч",
  label: "Время ответа"
}, {
  value: "NRW",
  label: "Полное покрытие"
}];
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}
const benefits: Benefit[] = [{
  icon: Shield,
  title: "Полная страховка",
  description: "Ваши вещи защищены на протяжении всего процесса переезда."
}, {
  icon: Clock,
  title: "Пунктуальность",
  description: "Мы ценим ваше время и всегда приезжаем вовремя."
}, {
  icon: MapPin,
  title: "Местная экспертиза",
  description: "Базируемся в Дуйсбурге с глубоким знанием всего региона NRW."
}, {
  icon: Heart,
  title: "Бережное отношение",
  description: "Относимся к каждой вещи как к своей собственной."
}];
export default function WhyUsSectionRu() {
  return <section id="about" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            {/* Main Image */}
            <div className="relative">
              <img src={moversTeam} alt="Профессиональная команда грузчиков" className="rounded-3xl w-full object-cover shadow-lg" />

              {/* Overlay Card */}
              

              {/* Background Decoration - hidden on small screens to prevent overflow */}
              <div className="hidden sm:block absolute -top-6 -left-6 w-full h-full border-2 border-orange-200 rounded-3xl -z-10" />
            </div>

            {/* Stats Grid */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4 + index * 0.1
            }} className="text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>)}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">Почему мы</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
              Ваш надёжный
              <span className="block text-orange-500">партнёр по переезду</span>
            </h2>

            <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
              В TopSicher Umzüge мы понимаем, что переезд — это не просто перевозка коробок,
              это начало новой главы. Базируясь в Дуйсбурге, мы помогаем семьям и бизнесу по всей
              Северной Рейн-Вестфалии переезжать легко и уверенно.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2 + index * 0.1
            }} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{benefit.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}