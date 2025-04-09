import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const links = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "https://gb-webassist.fr/",
    style:
    "border border-gray-300 bg-white text-textdark font-semibold hover:bg-gray-100 shadow-md",
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://gb-webassist.fr/#contact",
    style:
      "border border-gray-300 bg-white text-textdark font-semibold hover:bg-gray-100 shadow-md",
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr",
    style:
      "border border-gray-300 bg-white text-textdark font-semibold hover:bg-gray-100 shadow-md",
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background-body to-background-dark text-textlight flex flex-col items-center justify-between">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 px-4 w-full">
        <section className="flex flex-col items-center justify-center w-full max-w-md px-4 py-10">
          <img
            src="/src/assets/photo-gaelle.jpg"
            alt="Photo de Gaëlle"
            className="w-28 h-28 rounded-full object-cover shadow-lg mb-4 border-4 border-secondary transition-transform duration-300 hover:scale-105"
          />

          <h1 className="text-3xl font-bold mb-1 text-textlight">Gaëlle</h1>

          <p className="text-gray-300 text-sm mb-6 flex items-center gap-2 text-center tracking-wide">
            Je crée des sites qui racontent votre histoire
            <span>📖</span>
          </p>

          <div className="w-full flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${link.style}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LinksPage;