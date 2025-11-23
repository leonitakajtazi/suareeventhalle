import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Suare Eventhalle Interior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-gold-500/50 rounded-full text-gold-400 text-xs md:text-sm tracking-[0.2em] mb-6 uppercase bg-black/30 backdrop-blur-sm">
            Willkommen bei Suare
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Die Exklusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Location</span><br />
            für Veranstaltungen
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Erleben Sie unvergessliche Momente in einem Ambiente aus purem Luxus. 
            Ob Hochzeit, Gala oder Tagung – wir bieten den perfekten Rahmen für Ihre Vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-gold-500 text-black font-bold tracking-widest uppercase overflow-hidden transition-all hover:bg-white hover:scale-105"
          >
            <span className="relative z-10">Jetzt Buchen</span>
          </a>
          <a
            href="#about"
            className="group flex items-center gap-2 text-white uppercase tracking-widest text-sm font-medium hover:text-gold-500 transition-colors"
          >
            <span>Mehr Erfahren</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scrollen</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};