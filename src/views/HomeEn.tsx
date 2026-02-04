'use client';
import React from 'react';
import Navbar from '@/components/landing/en/Navbar';
import HeroSection from '@/components/landing/en/HeroSection';
import ServicesSection from '@/components/landing/en/ServicesSection';
import WhyUsSection from '@/components/landing/en/WhyUsSection';
import ServiceAreasSection from '@/components/landing/en/ServiceAreasSection';
import GallerySection from '@/components/landing/en/GallerySection';
import TestimonialsSection from '@/components/landing/en/TestimonialsSection';
import FAQSection from '@/components/landing/en/FAQSection';
import ContactSection from '@/components/landing/en/ContactSection';
import Footer from '@/components/landing/en/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Professional Moving Services in Duisburg & NRW"
        description="TopSicher Umzüge - Your reliable partner for moving in Duisburg and NRW. Residential moves, office relocations, clearance, furniture transport and more. Fixed price guarantee ✓ Insured ✓"
        keywords="moving company Duisburg, moving NRW, residential moving, office relocation, furniture transport, clearance, handyman services"
        lang="en"
        canonicalPath="/en"
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
