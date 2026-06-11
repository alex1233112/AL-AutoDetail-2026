'use client'

import {
  Car,
  Sparkles,
  ShieldCheck,
  MapPin,
  Calendar,
  Star,
  Phone,
} from 'lucide-react'

export default function Home() {

  const services = [
    {
      title: 'Intérieur Signature',
      price: '120$',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1400',
      desc: 'Nettoyage complet intérieur niveau showroom.'
    },
    {
      title: 'Extérieur Premium',
      price: '100$',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400',
      desc: 'Lavage extérieur + finition brillante.'
    },
    {
      title: 'Full Package',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400',
      desc: 'Intérieur + extérieur complet premium.'
    },
    {
      title: 'Polissage Expert',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400',
      desc: 'Correction peinture et finition miroir.'
    },
    {
      title: 'Céramique Protection',
      price: '250$+',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400',
      desc: 'Protection longue durée hydrophobe.'
    }
  ]

  return (
    <main className="bg-black text-white">

      {/* NAVBAR PREMIUM */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Car className="text-red-500" />
            <span className="font-black tracking-wide">AL AUTO DETAILING</span>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-5 py-2 rounded-lg font-bold"
          >
            Réserver
          </a>

        </div>
      </header>

      {/* HERO AGENCE */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative max-w-4xl">

          <p className="text-gray-400 tracking-[0.3em] uppercase mb-6">
            Mobile Detailing Agency
          </p>

          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6 leading-tight">
            AL AUTO
            <br />
            <span className="text-red-600">PREMIUM DETAILING</span>
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Service de detailing mobile haut de gamme.
            Nous transformons votre véhicule en état showroom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

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
              Appeler
            </a>

          </div>

          <div className="mt-10 text-gray-400 text-sm space-y-1">
            <p>📍 Blainville & Laurentides</p>
            <p>🚗 Service mobile à domicile</p>
          </div>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8">

          <div>
            <Star className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Résultats premium garantis</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Service professionnel</p>
          </div>

          <div>
            <MapPin className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Déplacement inclus</p>
          </div>

        </div>
      </section>

      {/* SERVICES AGENCE */}
      <section className="py-28 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black mb-20 uppercase">
          Services Premium
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {services.map((s) => (
            <div
              key={s.title}
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600 transition"
            >

              <img src={s.image} className="h-64 w-full object-cover" />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>

                <p className="text-red-500 font-black text-xl mb-3">
                  {s.price}
                </p>

                <p className="text-gray-400 text-sm">
                  {s.desc}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE BLOCK */}
      <section className="py-24 bg-zinc-950 text-center px-6">

        <h2 className="text-4xl font-black mb-6">
          Automotive Excellence
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Chaque véhicule est traité avec précision, passion et produits haut de gamme pour un résultat showroom.
        </p>

      </section>

      {/* CTA MID */}
      <section className="py-24 text-center">

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
      <footer className="py-10 border-t border-white/10 text-center text-gray-500">
        © 2026 AL Auto Premium Detailing
      </footer>

    </main>
  )
}