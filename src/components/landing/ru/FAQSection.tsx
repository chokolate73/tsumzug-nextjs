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
    question: "Сколько стоит переезд в Дуйсбурге?",
    answer: "Стоимость переезда в Дуйсбурге зависит от различных факторов: размер квартиры, расстояние, этаж с лифтом или без, дополнительные услуги как упаковка или сборка мебели. Переезд 2-комнатной квартиры в Дуйсбурге начинается примерно от 300-500€. Свяжитесь с нами для бесплатного расчёта – мы гарантируем фиксированные цены без скрытых платежей!"
  },
  {
    question: "Как быстро вы можете выполнить переезд?",
    answer: "Мы предлагаем гибкое планирование и часто можем организовать срочный переезд в течение 24-48 часов. Однако для оптимальной организации рекомендуем бронировать минимум за неделю."
  },
  {
    question: "Какие районы NRW вы обслуживаете?",
    answer: "Мы работаем по всей Северной Рейн-Вестфалии! Наш офис находится в Дуйсбурге, но мы выполняем переезды в Оберхаузен, Мюльхайм-ан-дер-Рур, Эссен, Дюссельдорф, Крефельд, Моерс, Динслакен, Ботроп, Ратинген и все другие города NRW."
  },
  {
    question: "Предлагаете ли вы установку кухни и сборку мебели?",
    answer: "Да, наш сервис мастеров включает профессиональную установку кухни, сборку мебели IKEA, сборку шкафов PAX и встроенных шкафов. Мы также вешаем лампы, полки и карнизы. Услуга доступна в Дуйсбурге, Оберхаузене, Эссене и по всему NRW."
  },
  {
    question: "Проводите ли вы расчистку домов в Оберхаузене?",
    answer: "Да, мы предлагаем профессиональную расчистку домов и вывоз мусора в Оберхаузене, Дуйсбурге, Мюльхайм-ан-дер-Рур и окрестностях. Мы очищаем квартиры, подвалы, чердаки и правильно утилизируем всё. Срочные заказы тоже возможны!"
  },
  {
    question: "Застрахованы ли мои вещи во время переезда?",
    answer: "Да, все наши перевозки полностью застрахованы. Ваша мебель и личные вещи защищены на протяжении всего процесса переезда."
  },
  {
    question: "Предоставляете ли вы упаковочные материалы?",
    answer: "Да, мы предлагаем полный сервис упаковки, включая коробки, пузырчатую плёнку и упаковочные материалы. Вы также можете приобрести только материалы, если предпочитаете упаковывать самостоятельно."
  },
  {
    question: "Можете ли вы забрать и собрать мебель из IKEA?",
    answer: "Да! Мы забираем вашу мебель IKEA в Дуйсбурге, Эссене, Дюссельдорфе или других городах и доставляем прямо к вам домой. По желанию мы также выполняем полную сборку – от шкафа IKEA PAX до полной кухни."
  },
  {
    question: "Вывозите ли вы старую мебель?",
    answer: "Да, мы предлагаем экологичную утилизацию старой мебели, крупногабаритного мусора и других ненужных вещей. Всё правильно перерабатывается или утилизируется."
  },
  {
    question: "Можете ли вы перевозить тяжёлые или габаритные предметы?",
    answer: "Конечно! У нас есть оборудование и опыт для безопасной транспортировки пианино, сейфов, больших шкафов и других тяжёлых или габаритных предметов."
  },
  {
    question: "Предлагаете ли вы ремонтные работы после выезда?",
    answer: "Да, наш ремонтный сервис включает покраску, поклейку обоев, укладку ламината и финальную уборку. Мы подготовим вашу старую квартиру к сдаче или отремонтируем новую квартиру перед заселением – в Дуйсбурге, Мюльхайме, Крефельде и по всему NRW."
  },
  {
    question: "Нужно ли мне присутствовать в день переезда?",
    answer: "Рекомендуется, чтобы вы или уполномоченное вами лицо присутствовали во время переезда для ответов на вопросы и координации расстановки мебели."
  }
];

export default function FAQSectionRu() {
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
            Часто задаваемые
            <span className="text-slate-400"> вопросы</span>
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Здесь вы найдёте ответы на самые частые вопросы о наших услугах по переезду и транспортировке.
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
            Остались вопросы?{' '}
            <a
              href="#contact"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Свяжитесь с нами →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
