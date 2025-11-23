import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold text-white tracking-wider mb-2">
            SUARE<span className="text-gold-500">.</span>
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-widest">Exclusive Eventhalle Wuppertal</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors p-2 border border-transparent hover:border-gold-500/30 rounded-full">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors p-2 border border-transparent hover:border-gold-500/30 rounded-full">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors p-2 border border-transparent hover:border-gold-500/30 rounded-full">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-center md:text-right text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Suare Eventhalle.</p>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <a href="#" className="hover:text-gray-400">Impressum</a>
            <a href="#" className="hover:text-gray-400">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};