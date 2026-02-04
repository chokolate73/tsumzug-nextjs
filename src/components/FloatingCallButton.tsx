'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+4917665197997"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 md:right-6 bottom-20 md:bottom-24 z-50 w-14 h-14 md:w-16 md:h-16 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 transition-colors"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
      
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-25" />
    </motion.a>
  );
}
