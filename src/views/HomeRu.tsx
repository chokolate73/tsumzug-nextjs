'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/landing/ru/Navbar';
import HeroSection from '@/components/landing/ru/HeroSection';
import ServicesSection from '@/components/landing/ru/ServicesSection';
import WhyUsSection from '@/components/landing/ru/WhyUsSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

const ServiceAreasSection = dynamic(() => import('@/components/landing/ru/ServiceAreasSection'));
const GallerySection = dynamic(() => import('@/components/landing/ru/GallerySection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/ru/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/landing/ru/FAQSection'));
const ContactSection = dynamic(() => import('@/components/landing/ru/ContactSection'));
const Footer = dynamic(() => import('@/components/landing/ru/Footer'));

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
