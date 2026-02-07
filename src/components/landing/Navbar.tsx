'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services } from '@/data/services';

// Map service IDs to German service page URLs
const serviceUrls: Record<string, string> = {
  'privatumzuege': '/privatumzuege',
  'firmenumzuege': '/firmenumzuege',
  'entruempelung': '/entruempelung',
  'moebeltransport': '/moebeltransport',
  'hausmeisterservice': '/hausmeisterservice',
  'renovierung': '/renovierung',
};

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Über uns', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Bewertungen', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' }
];

const languages = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/' },
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/en' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', path: '/ru' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentLang = languages.find(l => l.path === '/') || languages[0];

  const handleLanguageChange = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick('#'); }}
              className="text-xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <motion.a
                href="/"
                onClick={(e) => { e.preventDefault(); handleNavClick('#'); }}
                whileHover={{ y: -2 }}
                className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </motion.a>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    whileHover={{ y: -2 }}
                    className="font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
                  >
                    Leistungen
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.id} asChild>
                      <Link
                        href={serviceUrls[service.id] || `/services/${service.slug.de}`}
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <service.icon className="w-4 h-4 text-orange-500" />
                        {service.title.de}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(1).map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  whileHover={{ y: -2 }}
                  className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-3">
                    <Globe className="w-4 h-4" />
                    <span>{currentLang.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.path)}
                      className="gap-2 cursor-pointer"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6"
                asChild
              >
                <a href="tel:+4917665197997">
                  <Phone className="w-4 h-4 mr-2" />
                  Anrufen
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-white shadow-2xl rounded-b-3xl md:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#'); }}
                  className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 transition-colors"
                >
                  Home
                </a>
                
                {/* Mobile Services Links */}
                <div className="border-l-2 border-orange-200 pl-4">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Leistungen</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={serviceUrls[service.id] || `/services/${service.slug.de}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base font-medium text-slate-700 hover:text-orange-500 py-1 transition-colors flex items-center gap-2"
                      >
                        <service.icon className="w-4 h-4 text-orange-500" />
                        {service.title.de}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-lg font-medium text-slate-700 hover:text-orange-500 py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Language Switcher */}
                <div className="flex gap-2 py-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={lang.path === '/' ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleLanguageChange(lang.path)}
                      className="flex-1"
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.code.toUpperCase()}
                    </Button>
                  ))}
                </div>

                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full mt-2"
                  asChild
                >
                  <a href="tel:+4917665197997">
                    <Phone className="w-4 h-4 mr-2" />
                    Anrufen
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
