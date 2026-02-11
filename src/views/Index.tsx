'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

const ServiceAreasSection = dynamic(() => import('@/components/landing/ServiceAreasSection'));
const GallerySection = dynamic(() => import('@/components/landing/GallerySection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/landing/FAQSection'));
const ContactSection = dynamic(() => import('@/components/landing/ContactSection'));
const Footer = dynamic(() => import('@/components/landing/Footer'));

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Professionelle Umzüge in Duisburg & NRW"
        description="TopSicher Umzüge - Ihr zuverlässiger Partner für Umzüge in Duisburg und NRW. Privatumzüge, Firmenumzüge, Entrümpelung, Möbeltransport und mehr. Festpreisgarantie ✓ Versichert ✓"
        keywords="Umzugsfirma Duisburg, Umzug NRW, Privatumzug, Firmenumzug, Möbeltransport, Entrümpelung, Hausmeisterservice"
        lang="de"
        canonicalPath="/"
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
