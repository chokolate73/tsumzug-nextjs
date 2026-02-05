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
    label: "Oleg (Primary)",
    value: "+49 176 6519 7997",
    href: "tel:+4917665197997"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@tsumzug.de",
    href: "mailto:info@tsumzug.de"
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Duisburg, NRW, Germany",
    href: null
  }
];

export default function ContactSectionEn() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
    _gotcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = "https://wa.me/4917665197997?text=Hello%2C%20I%20need%20help%20with%20moving%20services";

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
        toast.success('Thank you! We will contact you shortly.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '', _gotcha: '' });
        }, 3000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
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
            <span className="text-orange-400 font-semibold tracking-wide uppercase text-xs sm:text-sm">Contact Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4 leading-tight">
              Ready to Move?
              <span className="block text-slate-400">Let's Talk.</span>
            </h2>

            <p className="text-slate-400 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed">
              Get in touch with us for a free quote or any questions about our services. 
              We're here to make your move as smooth as possible.
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
                  Chat on WhatsApp
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Get a Free Quote</h3>
              <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">Message Sent!</h4>
                  <p className="text-slate-500 text-center mt-2">We'll contact you shortly.</p>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <Input
                      placeholder="Max Müller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tell Us About Your Move</label>
                    <Textarea
                      placeholder="Moving from... to..., approximate date, any special items..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
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
