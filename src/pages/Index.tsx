import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import ServiceAreasSection from '@/components/landing/ServiceAreasSection';
import GallerySection from '@/components/landing/GallerySection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

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
