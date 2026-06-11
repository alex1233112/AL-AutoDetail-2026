'use client'

import {
  Car,
  Sparkles,
  ShieldCheck,
  MapPin,
  Calendar,
  Phone,
} from 'lucide-react'

export default function Home() {

  const packages = [
    {
      title: 'Intérieur Detail',
      price: '120$',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1400',
      items: [
        'Aspirateur complet',
        'Nettoyage sièges',
        'Plastique & vitres',
        'Désinfection'
      ]
    },
    {
      title: 'Extérieur Detail',
      price: '100$',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400',
      items: [
        'Lavage complet',
        'Jantes nettoyées',
        'Mousse active',
        'Finition brillante'
      ]
    },
    {
      title: 'Premium Full',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400',
      items: [
        'Intérieur complet',
        'Extérieur complet',
        'Finition showroom',
        'Parfum intérieur'
      ]
    },
    {
      title: 'Polissage',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400',
      items: [
        'Correction peinture',
        'Micro-rayures',
        'Brillance profonde',
        'Rendu miroir'
      ]
    },
    {
      title: 'Céramique',
      price: '250$+',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400',
      items: [
        'Protection longue durée',
        'Hydrophobe',
        'Brillance extrême',
        'Anti-salissure'
      ]
    }
  ]

  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Car className="text-red-500" />
            <span className="font-black text-lg">AL AUTO DETAILING</span>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-5 py-2 rounded-lg font-bold"
          >
            Réserver
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="py-28 text-center px-6">

        <h1 className="text-6xl font-black uppercase mb-6">
          Detailing
          <span className="text-red-600"> Mobile Premium</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Service de detailing automobile à domicile dans les Laurentides.
          Résultat propre, rapide et professionnel.
        </p>

        <a
          href="https://calendly.com/alautodetail88"
          className="bg-red-600 px-8 py-4 rounded-xl font-bold"
        >
          Réserver maintenant
        </a>

        <div className="mt-10 text-gray-400 space-y-1">
          <p>📍 Blainville & Laurentides</p>
          <p>📞 450-803-4784</p>
          <p>🚗 Service mobile</p>
        </div>

      </section>

      {/* SECTION SERVICES DETAILLÉS */}
      <section className="max-w-6xl mx-auto px-6 space-y-24">

        <h2 className="text-4xl font-black text-center">
          Nos Services
        </h2>

        {packages.map((p, i) => (
          <div
            key={p.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >

            {/* IMAGE */}
            <img
              src={p.image}
              className="rounded-2xl w-full h-80 object-cover"
            />

            {/* TEXT */}
            <div>

              <h3 className="text-3xl font-black mb-2">
                {p.title}
              </h3>

              <p className="text-red-500 text-2xl font-bold mb-4">
                {p.price}
              </p>

              <ul className="text-gray-400 space-y-2 mb-6">
                {p.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <a
                href="https://calendly.com/alautodetail88"
                className="bg-white text-black px-6 py-3 rounded-lg font-bold inline-block"
              >
                Réserver ce service
              </a>

            </div>

          </div>
        ))}

      </section>

      {/* WHY US */}
      <section className="py-28 text-center px-6">

        <h2 className="text-4xl font-black mb-12">
          Pourquoi nous choisir
        </h2>

        <div className="grid md:grid-cols-3 max-w-4xl mx-auto gap-10 text-gray-400">

          <div>
            <Sparkles className="mx-auto text-red-500 mb-3" />
            Produits premium
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" />
            Satisfaction garantie
          </div>

          <div>
            <Calendar className="mx-auto text-red-500 mb-3" />
            Service rapide
          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="py-28 text-center">

        <h2 className="text-4xl font-black mb-6">
          Prêt à transformer votre véhicule ?
        </h2>

        <a
          href="https://calendly.com/alautodetail88"
          className="bg-red-600 px-10 py-5 rounded-xl font-bold"
        >
          Réserver maintenant
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 AL Auto Detailing — Tous droits réservés
      </footer>

    </main>
  )
}