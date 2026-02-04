'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                {/* Icon & Text */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>
                      Diese Website verwendet nur essenzielle Cookies, um ihr ordnungsgemäßes Funktionieren 
                      sicherzustellen. Weitere Informationen finden Sie in unserer{' '}
                      <Link 
                        href="/datenschutz" 
                        className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
                      >
                        Datenschutzerklärung
                      </Link>{' '}
                      und unserem{' '}
                      <Link 
                        href="/impressum" 
                        className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
                      >
                        Impressum
                      </Link>.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
                  <Button
                    variant="outline"
                    onClick={handleDecline}
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                  >
                    Nur Essenzielle
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all"
                  >
                    Einverstanden
                  </Button>
                </div>

                {/* Close button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-3 right-3 lg:static text-slate-500 hover:text-slate-300 transition-colors p-1"
                  aria-label="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
