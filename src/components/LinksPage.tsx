import React from 'react';
import Header from './Header';
import Footer from './Footer';

const links = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "#",
    style: "bg-gradient-to-r from-primary-color to-accent-color-1 text-white shadow-lg"
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://calendly.com/gaelleboucher-dev/30min",
    style: "border border-primary-color text-primary-color bg-white hover:bg-primary-color hover:text-white transition"
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr/",
    style: "border border-secondary-color text-secondary-color bg-white hover:bg-secondary-color hover:text-black transition"
  }
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[--background-body] to-[--background-dark] text-[--text-light] flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <img
          src="/assets/photo-gaelle.jpg"
          alt="Photo de Gaëlle"
          className="w-28 h-28 rounded-full object-cover mb-4 shadow-md border-4 border-[--primary-color]"
        />
        <h1 className="text-3xl font-bold mb-2">Gaëlle</h1>
        <p className="mb-6 text-[--text-light] opacity-80">
          Je crée des sites qui racontent votre histoire 📖
        </p>

        <div className="w-full max-w-xs flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-center py-3 px-4 rounded-xl font-medium hover:scale-[1.02] transition-transform duration-200 ${link.style}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinksPage;