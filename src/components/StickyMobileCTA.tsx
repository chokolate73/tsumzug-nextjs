'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY } from '@/config/company';
import { trackCallClick, trackWhatsAppClick } from '@/utils/tracking';

interface CTAButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'accent';
}

function CTAButton({ href, icon, label, onClick, variant }: CTAButtonProps) {
  const baseClasses = "flex-1 flex flex-col items-center justify-center py-2 px-1 text-xs font-medium transition-colors cursor-pointer";

  const variantClasses = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-green-500 text-white hover:bg-green-600",
    accent: "bg-blue-600 text-white hover:bg-blue-700",
  };

  // For anchor links, use button with scroll behavior
  if (href.startsWith('#')) {
    return (
      <button
        onClick={(e) => {
          onClick?.();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {icon}
        <span className="mt-0.5">{label}</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon}
      <span className="mt-0.5">{label}</span>
    </a>
  );
}

export default function StickyMobileCTA() {
  const handleCallClick = () => {
    trackCallClick(COMPANY.phone, 'sticky_mobile_cta');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('sticky_mobile_cta');
  };

  return (
    <>
      {/* Sticky bottom bar - mobile only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        {/* Shadow overlay for depth */}
        <div className="absolute inset-0 -top-4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* CTA Bar */}
        <div className="relative flex bg-white border-t border-gray-200 shadow-lg">
          <CTAButton
            href={COMPANY.phoneLink}
            icon={<Phone className="w-5 h-5" />}
            label="Anrufen"
            onClick={handleCallClick}
            variant="primary"
          />
          <CTAButton
            href={COMPANY.whatsapp}
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
            onClick={handleWhatsAppClick}
            variant="secondary"
          />
        </div>
      </motion.div>

      {/* Desktop: Keep floating call button */}
      <motion.a
        href={COMPANY.phoneLink}
        onClick={handleCallClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed right-6 bottom-24 z-50 w-16 h-16 bg-orange-500 hover:bg-orange-600 rounded-full items-center justify-center shadow-lg shadow-orange-500/30 transition-colors"
        aria-label="Jetzt anrufen"
      >
        <Phone className="w-7 h-7 text-white" />

        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-25" />
      </motion.a>
    </>
  );
}
