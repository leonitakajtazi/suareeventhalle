import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">Unser Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Events & Spezialisten</h3>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unser erfahrenes Team begleitet Sie von der ersten Idee bis zum letzten Tanz.
            Wir sind spezialisiert auf kulturelle Vielfalt und höchste Ansprüche.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 bg-dark-800 border border-white/5 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-black border border-gold-500/30 text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-500 shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h4 className="text-xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};