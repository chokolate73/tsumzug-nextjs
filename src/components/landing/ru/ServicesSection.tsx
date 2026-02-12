'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
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
    title: "Квартирные переезды",
    subtitle: "Privatumzüge",
    description: "Полный комплекс услуг по переезду квартир и домов. От упаковки до распаковки — мы позаботимся о каждой детали вашего переезда.",
    image: "/service-privatumzuege.webp",
    features: ["Полная упаковка", "Разборка/сборка мебели", "Безопасная перевозка", "Помощь с распаковкой"],
    slug: "chastnye-pereezdy"
  },
  {
    icon: Building2,
    title: "Офисные переезды",
    subtitle: "Firmenumzüge",
    description: "Профессиональный переезд офисов и компаний с минимальным простоем. Работаем в выходные и вечернее время.",
    image: "/service-firmenumzuege.webp",
    features: ["Переезд в нерабочее время", "Перевозка оргтехники", "Сборка офисной мебели", "Маркировка и учёт"],
    slug: "ofisnye-pereezdy"
  },
  {
    icon: Trash2,
    title: "Вывоз и утилизация",
    subtitle: "Entrümpelung",
    description: "Вывоз старой мебели, техники и хлама. Полная ликвидация домохозяйств, освобождение подвалов и чердаков.",
    image: "/service-entruempelung.webp",
    features: ["Вывоз в тот же день", "Ликвидация квартир", "Вывоз после ремонта", "Экологичная утилизация"],
    slug: "uborka-vyvoz"
  },
  {
    icon: Truck,
    title: "Грузоперевозки",
    subtitle: "Möbeltransport",
    description: "Перевозка мебели, техники и любых грузов по NRW. От одного предмета до полной загрузки.",
    image: "/service-moebeltransport.webp",
    features: ["Гибкий график", "Разные размеры авто", "Застрахованный груз"],
    slug: "perevozka-mebeli"
  },
  {
    icon: Wrench,
    title: "Мастер на час",
    subtitle: "Hausmeisterservice",
    description: "Сборка мебели IKEA, навеска полок и светильников, мелкий ремонт, подключение техники — всё что нужно после переезда.",
    image: "/service-hausmeisterservice.webp",
    features: ["Сборка любой мебели", "Монтаж кухонь", "Навеска карнизов", "Подключение техники"],
    slug: "uslugi-masterov"
  },
  {
    icon: PaintBucket,
    title: "Ремонт и отделка",
    subtitle: "Renovierung",
    description: "Малярные работы, поклейка обоев, укладка ламината. Подготовим квартиру к сдаче или к заезду.",
    image: "/service-renovierung.webp",
    features: ["Покраска стен", "Поклейка обоев", "Укладка полов", "Уборка после ремонта"],
    slug: "remont"
  }
];

const additionalServices: AdditionalService[] = [
  {
    icon: Piano,
    title: "Перевозка пианино",
    description: "Специальное оборудование для тяжёлых инструментов"
  },
  {
    icon: Package,
    title: "Упаковочные материалы",
    description: "Коробки, плёнка, скотч — доставим на дом"
  },
  {
    icon: Warehouse,
    title: "Хранение вещей",
    description: "Временное хранение мебели и вещей"
  },
  {
    icon: Sparkles,
    title: "Уборка квартиры",
    description: "Генеральная уборка до и после переезда"
  },
  {
    icon: Plug,
    title: "Подключение техники",
    description: "Установка стиралки, посудомойки, плиты"
  },
  {
    icon: Hammer,
    title: "Демонтажные работы",
    description: "Снос перегородок, демонтаж встроенной мебели"
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
          href={`/ru/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors group/link"
        >
          Подробнее
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

export default function ServicesSectionRu() {
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
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-xs sm:text-sm">Наши услуги</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 leading-tight">
            Переезд и ремонт
            <span className="text-slate-400"> под ключ</span>
          </h2>
          <p className="text-slate-600 mt-4 sm:mt-6 text-base sm:text-lg">
            Полный спектр услуг: от переезда до ремонта и мастера на час. Всё в одном месте — экономьте время и деньги.
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
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Дополнительные услуги</h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">Всё что может понадобиться до, во время и после переезда</p>
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
            <span className="text-base sm:text-lg font-semibold">Нужна консультация?</span>
            <a
              href="tel:+4917665197997"
              className="bg-white text-orange-500 px-4 py-2 rounded-xl font-bold hover:bg-orange-50 transition-colors"
            >
              Позвонить
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
