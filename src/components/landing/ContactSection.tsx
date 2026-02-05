'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Loader2, LucideIcon, Shield, Euro, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { trackFormSubmit, getFormUTMData } from '@/utils/tracking';
import { COMPANY } from '@/config/company';

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Oleg (Hauptkontakt)",
    value: "+49 176 6519 7997",
    href: "tel:+4917665197997"
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@tsumzug.de",
    href: "mailto:info@tsumzug.de"
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Duisburg, NRW, Deutschland",
    href: null
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/4917665197997?text=Hallo%2C%20ich%20brauche%20Hilfe%20beim%20Umzug";

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
        // Track form submission
        trackFormSubmit('contact_form', 'contact_section');
        toast.success('Vielen Dank! Wir werden Sie in Kürze kontaktieren.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      toast.error('Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.');
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
            <span className="text-orange-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">Kontakt</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
              Bereit für den Umzug?
              <span className="block text-slate-400">Sprechen Sie mit uns.</span>
            </h2>

            <p className="text-slate-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
              Kontaktieren Sie uns für ein kostenloses Angebot oder bei Fragen zu unseren Dienstleistungen. 
              Wir sind hier, um Ihren Umzug so reibungslos wie möglich zu gestalten.
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
                  WhatsApp Chat
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Kostenloses Angebot anfordern</h3>
              <p className="text-slate-500 text-sm sm:text-base mb-4">Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full">
                  <Euro className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-800">Festpreis</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-800">Versichert</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-800">Schnelle Antwort</span>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Nachricht gesendet!</h4>
                  <p className="text-slate-500 text-center mt-2">Wir werden Sie in Kürze kontaktieren.</p>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ihr Name</label>
                    <Input
                      placeholder="Max Müller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Erzählen Sie uns von Ihrem Umzug</label>
                    <Textarea
                      placeholder="Umzug von... nach..., ungefähres Datum, besondere Gegenstände..."
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
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  {/* Callback promise */}
                  <p className="text-center text-sm text-slate-500 mt-4">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Rückruf innerhalb von 5 Minuten während der Geschäftszeiten
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
