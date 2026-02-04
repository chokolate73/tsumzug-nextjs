import React from 'react';
import Navbar from '@/components/landing/ru/Navbar';
import HeroSection from '@/components/landing/ru/HeroSection';
import ServicesSection from '@/components/landing/ru/ServicesSection';
import WhyUsSection from '@/components/landing/ru/WhyUsSection';
import ServiceAreasSection from '@/components/landing/ru/ServiceAreasSection';
import GallerySection from '@/components/landing/ru/GallerySection';
import TestimonialsSection from '@/components/landing/ru/TestimonialsSection';
import FAQSection from '@/components/landing/ru/FAQSection';
import ContactSection from '@/components/landing/ru/ContactSection';
import Footer from '@/components/landing/ru/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

export default function HomeRu() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Профессиональные переезды в Дуйсбурге и NRW"
        description="TopSicher Umzüge - Ваш надёжный партнёр по переездам в Дуйсбурге и NRW. Частные переезды, офисные переезды, уборка, перевозка мебели и многое другое. Фиксированная цена ✓ Страховка ✓"
        keywords="транспортная компания Дуйсбург, переезд NRW, частный переезд, офисный переезд, перевозка мебели, уборка, услуги мастеров"
        lang="ru"
        canonicalPath="/ru"
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ServiceAreasSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
      <CookieConsent />
    </div>
  );
}
