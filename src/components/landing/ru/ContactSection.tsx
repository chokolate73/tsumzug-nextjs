'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Loader2, LucideIcon } from 'lucide-react';
import { toast } from 'sonner';

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Олег (основной)",
    value: "+49 176 6519 7997",
    href: "tel:+4917665197997"
  },
  {
    icon: Mail,
    label: "Напишите нам",
    value: "info@tsumzug.de",
    href: "mailto:info@tsumzug.de"
  },
  {
    icon: MapPin,
    label: "Местоположение",
    value: "Дуйсбург, NRW, Германия",
    href: null
  }
];

export default function ContactSectionRu() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/4917665197997?text=Здравствуйте%2C%20мне%20нужна%20помощь%20с%20переездом";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdznqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.details,
          _gotcha: formData._gotcha,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error('Что-то пошло не так. Попробуйте ещё раз.');
      }
    } catch (error) {
      toast.error('Не удалось отправить сообщение. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">Контакты</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
              Готовы к переезду?
              <span className="block text-slate-400">Свяжитесь с нами.</span>
            </h2>

            <p className="text-slate-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
              Свяжитесь с нами для бесплатного расчёта или по любым вопросам о наших услугах.
              Мы здесь, чтобы сделать ваш переезд максимально комфортным.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-10 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Написать в WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Получить бесплатный расчёт</h3>
              <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">Заполните форму, и мы свяжемся с вами в течение 24 часов.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Сообщение отправлено!</h4>
                  <p className="text-slate-500 text-center mt-2">Мы скоро свяжемся с вами.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from humans, bots fill it */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Номер телефона</label>
                    <Input
                      type="tel"
                      placeholder="+49 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Расскажите о переезде</label>
                    <Textarea
                      placeholder="Откуда... куда..., примерная дата, особые предметы..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      required
                      rows={4}
                      className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
