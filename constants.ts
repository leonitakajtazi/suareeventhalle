import { Heart, Stars, PartyPopper, GraduationCap, Briefcase, Users } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Startseite', href: '#home' },
  { name: 'Über uns', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Kontakt', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Traumhochzeiten',
    id: 'wedding',
    icon: Heart,
    description: 'Der perfekte Ort für den schönsten Tag Ihres Lebens. Wir schaffen unvergessliche Momente.',
  },
  {
    title: 'Henna Abende',
    id: 'henna',
    icon: Stars,
    description: 'Tradition trifft auf modernen Luxus. Feiern Sie Ihren Henna-Abend in exklusivem Ambiente.',
  },
  {
    title: 'Verlobungen',
    id: 'engagement',
    icon: PartyPopper, // Replaced Ring with PartyPopper as Ring isn't always default exported in all lucide versions, checking safe icons.
    description: 'Der erste Schritt ins gemeinsame Glück verdient eine besondere Kulisse.',
  },
  {
    title: 'Abibälle',
    id: 'prom',
    icon: GraduationCap,
    description: 'Ein krönender Abschluss für die Schulzeit. Stilvoll, großzügig und unvergesslich.',
  },
  {
    title: 'Firmenfeiern',
    id: 'corporate',
    icon: Briefcase,
    description: 'Professionelle Events, Weihnachtsfeiern oder Jubiläen, die Ihre Mitarbeiter begeistern.',
  },
  {
    title: 'Tagungen',
    id: 'conference',
    icon: Users,
    description: 'Modernste Technik und Catering für produktive Meetings und Konferenzen.',
  },
];

export const GALLERY_IMAGES = [
  { src: 'https://picsum.photos/800/600?random=1', alt: 'Elegantes Tischgedeck' },
  { src: 'https://picsum.photos/600/800?random=2', alt: 'Beleuchtete Tanzfläche' },
  { src: 'https://picsum.photos/800/600?random=3', alt: 'Hochzeitsdekoration Gold' },
  { src: 'https://picsum.photos/800/600?random=4', alt: 'Außenansicht bei Nacht' },
  { src: 'https://picsum.photos/600/800?random=5', alt: 'Buffet Arrangement' },
  { src: 'https://picsum.photos/800/600?random=6', alt: 'Brauttisch' },
];

export const CONTACT_INFO = {
  address: "Hofkamp 19, 42125 Wuppertal, Deutschland",
  phone: "+49 123 456 7890",
  email: "info@suare-eventhalle.de",
};