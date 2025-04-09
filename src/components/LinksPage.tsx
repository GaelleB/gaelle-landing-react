import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Link = {
  label: string
  href: string
  style: string
}

const links: Link[] = [
  {
    label: "Découvrir l'offre Coup de Pouce Web",
    href: "#",
    style: "bg-blue-600 text-white"
  },
  {
    label: "Prendre rendez-vous avec moi",
    href: "https://calendly.com/gaelleboucher-dev/30min",
    style: "border border-blue-600 text-blue-600"
  },
  {
    label: "Mon site GB WebAssist",
    href: "https://gb-webassist.fr/",
    style: "border border-gray-400 text-gray-700"
  }
]

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-between">
      <Header />
  
      <main className="flex flex-col items-center justify-center flex-1 px-4 w-full">
        <section className="flex flex-col items-center justify-center w-full max-w-md px-4">
          <img
            src="/assets/photo-gaelle.jpg"
            alt="Photo de Gaëlle"
            className="w-28 h-28 rounded-full object-cover shadow-lg mb-4"
          />
  
          <h1 className="text-3xl font-bold mb-1">Gaëlle</h1>
          <p className="text-gray-700 text-sm mb-6 flex items-center gap-2">
            Je crée des sites qui racontent votre histoire
            <span>📖</span>
          </p>
  
          <div className="w-full flex flex-col gap-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-center py-3 px-4 rounded-xl font-medium hover:opacity-90 ${link.style}`}
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
  )  
}

export default LinksPage