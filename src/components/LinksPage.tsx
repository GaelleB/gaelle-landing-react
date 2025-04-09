import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Link = {
  label: string;
  href: string;
  style: string;
};

const links: Link[] = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "#",
    style: "bg-primary text-white shadow-lg hover:bg-accent1",
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://calendly.com/gaelleboucher-dev/30min",
    style: "border border-primary text-primary hover:bg-primary hover:text-white",
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr/",
    style: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-br from-background-body to-background-dark text-white">
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 py-8">
        <section className="bg-white text-black rounded-xl shadow-xl w-full max-w-md p-6 flex flex-col items-center">
          <img
            src="/assets/photo-gaelle.jpg"
            alt="Photo de Gaëlle"
            className="w-28 h-28 rounded-full object-cover shadow-lg mb-4"
          />

          <h1 className="text-3xl font-bold mb-1">Gaëlle</h1>
          <p className="text-gray-700 text-sm mb-6 flex items-center gap-1">
            Je crée des sites qui racontent votre histoire 📖
          </p>

          <div className="w-full flex flex-col gap-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-center py-3 px-4 rounded-xl font-medium transition-all duration-200 ease-in-out ${link.style}`}
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