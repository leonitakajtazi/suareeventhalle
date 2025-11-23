import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.");
    setFormState({ name: '', email: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">Kontaktieren Sie uns</h2>
            <h3 className="text-4xl font-serif text-white mb-8">Planen Sie Ihr Event</h3>
            <p className="text-gray-400 mb-10">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
              Füllen Sie das Formular aus, und unser Team wird sich umgehend bei Ihnen melden.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-800 focus:border-gold-500 text-white px-4 py-3 outline-none transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-800 focus:border-gold-500 text-white px-4 py-3 outline-none transition-colors"
                    placeholder="ihre@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500">Wunschtermin (Optional)</label>
                <input
                  type="date"
                  name="date"
                  value={formState.date}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 focus:border-gold-500 text-white px-4 py-3 outline-none transition-colors accent-gold-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500">Nachricht</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 focus:border-gold-500 text-white px-4 py-3 outline-none transition-colors resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Anfrage Senden
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="flex flex-col h-full">
            <div className="bg-dark-800 p-8 border border-white/5 mb-8">
              <h4 className="text-xl font-serif text-white mb-6">Besuchen Sie uns</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-gold-500 mt-1 shrink-0" size={20} />
                  <span className="text-gray-300">{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-gold-500 shrink-0" size={20} />
                  <span className="text-gray-300">{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-gold-500 shrink-0" size={20} />
                  <span className="text-gray-300">{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="text-gold-500 mt-1 shrink-0" size={20} />
                  <div className="text-gray-300">
                    <p>Mo - Fr: 09:00 - 18:00</p>
                    <p>Sa - So: Nach Vereinbarung</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="flex-grow w-full min-h-[300px] relative filter grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.9128607194985!2d7.145999315974052!3d51.25822997959357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d62355555555%3A0xabc123456789!2sHofkamp%2019%2C%2042125%20Wuppertal%2C%20Germany!5e0!3m2!1sen!2sus!4v1625681234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps Standort"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};