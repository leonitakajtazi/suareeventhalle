import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gold-500/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
  {/* Logo Image */}
  <img
    src="./images/logo.jpg" // vendos path-in e logos tënde këtu
    alt="Suare Eventhalle Logo"
    className="h-10 w-10 md:h-12 md:w-12 object-contain"
  />
  
  {/* Logo Text */}
  <div className="text-white font-serif font-bold tracking-widest">
    SUARE<span className="text-gold-500">.</span>
    <span className="block text-[10px] font-sans tracking-[0.3em] text-gray-400 md:group-hover:text-gold-500 transition-colors">
      EVENTHALLE
    </span>
  </div>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-gold-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 hover:after:w-full after:transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold"
          >
            Jetzt Buchen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-gold-500/30 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-gold-500 text-black font-bold uppercase tracking-widest mt-4"
          >
            Jetzt Buchen
          </a>
        </div>
      </div>
    </nav>
  );
};