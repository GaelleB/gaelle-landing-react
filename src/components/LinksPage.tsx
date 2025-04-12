import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const links = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "https://gb-webassist.fr/",
    style: "bg-white border border-[#f1cd52] text-black hover:bg-[#f1cd52] hover:text-white",
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://gb-webassist.fr/#contact",
    style: "bg-white border border-[#f1cd52] text-black hover:bg-[#f1cd52] hover:text-white",
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr",
    style: "bg-white border border-[#f1cd52] text-black hover:bg-[#f1cd52] hover:text-white",
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background-body text-textlight flex flex-col items-center justify-between">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 px-4 w-full">
        <section className="flex flex-col items-center justify-center w-full max-w-md px-4">
          <img
            src="/assets/photo-gaelle.jpg"
            alt="Photo de Gaëlle"
            className="w-28 h-28 rounded-full object-cover shadow-lg mb-4 border-4 border-secondary"
          />

          <h1 className="text-3xl font-bold mb-1">Gaëlle</h1>
          <p className="text-sm mb-6 flex items-center gap-2 text-center">
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