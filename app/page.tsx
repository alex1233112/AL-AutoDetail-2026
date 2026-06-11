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

  const services = [
    {
      title: 'Intérieur Detail Complet',
      price: '120$',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1400',
      desc: 'Nettoyage complet intérieur incluant sièges, tapis, plastiques, vitres et désinfection profonde.'
    },
    {
      title: 'Lavage Extérieur Premium',
      price: '100$',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400',
      desc: 'Lavage extérieur complet avec mousse active, jantes, séchage et finition brillante.'
    },
    {
      title: 'Forfait Premium (Int + Ext)',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400',
      desc: 'Service complet intérieur et extérieur pour un résultat showroom parfait.'
    },
    {
      title: 'Polissage Professionnel',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400',
      desc: 'Correction de peinture, élimination des micro-rayures et finition miroir.'
    },
    {
      title: 'Céramique Protection',
      price: '250$+',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400',
      desc: 'Protection longue durée contre saleté, eau et UV avec effet hydrophobe.'
    }
  ]

  return (
    <main className="bg-black text-white">

      {/* NAVBAR CENTRÉE */}
      <header className="border-b border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-center">

          <div className="flex items-center gap-3">
            <Car className="text-red-500" />
            <span className="font-black">AL AUTO DETAILING</span>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-5 py-2 rounded-lg font-bold"
          >
            Réserver
          </a>

        </div>
      </header>

      {/* HERO CLEAN & CENTRÉ */}
      <section className="py-32 text-center px-6">

        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">
          Detailing Automobile
          <br />
          <span className="text-red-600">Mobile Premium</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          Service professionnel de detailing à domicile dans les Laurentides.
          Nous redonnons un aspect neuf et showroom à votre véhicule.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Réserver maintenant
          </a>

          <a
            href="tel:4508034784"
            className="border border-white/20 px-8 py-4 rounded-xl font-bold"
          >
            Nous appeler
          </a>

        </div>

        <div className="mt-10 text-gray-400 space-y-1">
          <p>📍 Blainville & Laurentides</p>
          <p>🚗 Service mobile à domicile</p>
          <p>📞 450-803-4784</p>
        </div>

      </section>

      {/* SECTION INFO SIMPLE */}
      <section className="py-20 bg-zinc-950 text-center">

        <h2 className="text-4xl font-black mb-6">
          Un service professionnel et fiable
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Nous utilisons des produits haut de gamme et des techniques professionnelles
          pour garantir un résultat propre, durable et esthétique.
        </p>

      </section>

      {/* SERVICES CLAIRS + CENTRÉS */}
      <section className="py-28 max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl font-black mb-16">
          Nos Services
        </h2>

        <div className="space-y-24">

          {services.map((s) => (
            <div key={s.title} className="grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

              <img
                src={s.image}
                className="rounded-2xl w-full h-80 object-cover mx-auto"
              />

              <div>

                <h3 className="text-3xl font-black mb-2">
                  {s.title}
                </h3>

                <p className="text-red-500 text-2xl font-bold mb-4">
                  {s.price}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {s.desc}
                </p>

                <a
                  href="https://calendly.com/alautodetail88"
                  className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-bold"
                >
                  Réserver ce service
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* POURQUOI NOUS */}
      <section className="py-28 bg-zinc-950 text-center px-6">

        <h2 className="text-4xl font-black mb-12">
          Pourquoi nous choisir
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-gray-400">

          <div>
            <Sparkles className="mx-auto text-red-500 mb-3" />
            Produits premium
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" />
            Résultat garanti
          </div>

          <div>
            <Calendar className="mx-auto text-red-500 mb-3" />
            Service rapide
          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="py-28 text-center px-6">

        <h2 className="text-4xl font-black mb-6">
          Réservez votre service aujourd’hui
        </h2>

        <p className="text-gray-400 mb-10">
          Disponible rapidement dans votre secteur.
        </p>

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