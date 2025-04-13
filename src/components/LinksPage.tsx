import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const links = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "https://gb-webassist.fr/",
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://gb-webassist.fr/#contact",
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr",
  },
]

const LinksPage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full text-text-light flex flex-col items-center justify-between"
      style={{
        background: "linear-gradient(to bottom right, #2f3239, #383c45)",
      }}
    >
      <Header />

      <main className="flex flex-col items-center justify-center flex-1 px-4 w-full">
        <section className="flex flex-col items-center justify-center w-full max-w-md px-4">
          <img
            src="/assets/photo-gaelle.jpg"
            alt="Photo de Gaëlle"
            className="w-28 h-28 rounded-full object-cover shadow-xl mb-4 border-4 border-secondary"
          />

          <h1 className="text-3xl font-bold mb-1">Gaëlle</h1>
          <p className="text-gray-300 text-sm mb-6 text-center">
            Je crée des sites qui racontent votre histoire 📖
          </p>

          <div className="w-full flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-6 py-3 text-center font-semibold rounded-xl bg-white text-textdark 
                          border border-secondary shadow-md transition-all duration-300 
                            hover:bg-secondary hover:text-textdark hover:shadow-xl hover:scale-105 
                          active:scale-100"
            >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LinksPage