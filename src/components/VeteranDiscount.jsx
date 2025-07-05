import React from 'react';
import { motion } from 'framer-motion';

export default function VeteranDiscount() {
  return (
    <section className="flex justify-center items-center py-12 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        className="relative bg-white rounded-2xl shadow-2xl px-6 sm:px-12 md:px-16 py-8 max-w-3xl w-full border border-blue-200/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-blue-200/20 rounded-2xl pointer-events-none m-1"></div>
        <p className="text-center text-gray-800 text-lg sm:text-xl md:text-2xl font-sans font-medium tracking-wide leading-relaxed">
          We proudly honor our veterans for their service<br className="hidden md:block" />
          with a <span className="font-bold text-blue-600">10% discount</span> on all dental care.
        </p>
      </motion.div>
    </section>
  );
}