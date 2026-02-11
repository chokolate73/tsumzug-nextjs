'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/landing/en/Navbar';
import HeroSection from '@/components/landing/en/HeroSection';
import ServicesSection from '@/components/landing/en/ServicesSection';
import WhyUsSection from '@/components/landing/en/WhyUsSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import CookieConsent from '@/components/CookieConsent';
import SEO from '@/components/SEO';

const ServiceAreasSection = dynamic(() => import('@/components/landing/en/ServiceAreasSection'));
const GallerySection = dynamic(() => import('@/components/landing/en/GallerySection'));
const TestimonialsSection = dynamic(() => import('@/components/landing/en/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/landing/en/FAQSection'));
const ContactSection = dynamic(() => import('@/components/landing/en/ContactSection'));
const Footer = dynamic(() => import('@/components/landing/en/Footer'));

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
