'use client'

import {
  Car,
  Sparkles,
  ShieldCheck,
  MapPin,
  Calendar,
} from 'lucide-react'

export default function Home() {

  const data = [
    {
      title: 'Intérieur Detail',
      price: '120$',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1400',
      desc: 'Nettoyage intérieur complet avec aspiration, sièges, plastiques et vitres.'
    },
    {
      title: 'Extérieur Detail',
      price: '100$',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400',
      desc: 'Lavage extérieur complet avec finition brillante et jantes.'
    },
    {
      title: 'Premium Pack',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400',
      desc: 'Service complet intérieur + extérieur pour un résultat showroom.'
    },
    {
      title: 'Polissage',
      price: '180$',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400',
      desc: 'Correction de peinture et élimination des défauts.'
    },
    {
      title: 'Céramique',
      price: '250$+',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400',
      desc: 'Protection longue durée avec effet hydrophobe.'
    }
  ]

  return (
    <main className="bg-black text-white">

      {/* HERO FULL SCREEN SIMPLE */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative max-w-3xl">

          <h1 className="text-6xl font-black uppercase mb-6">
            AL AUTO
            <span className="text-red-600"> DETAILING</span>
          </h1>

          <p className="text-gray-300 mb-10 text-lg">
            Service mobile de detailing automobile professionnel dans les Laurentides.
          </p>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-10 py-5 rounded-xl font-bold"
          >
            Réserver maintenant
          </a>

        </div>
      </section>

      {/* INFO BAR */}
      <section className="py-12 border-y border-white/10 text-center text-gray-400">
        📍 Blainville • 🚗 Service mobile • 📞 450-803-4784
      </section>

      {/* ABOUT BLOCK */}
      <section className="py-24 max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-black mb-6">
          Service professionnel
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Nous offrons un service de detailing haut de gamme à domicile.
          Chaque véhicule est traité avec soin, précision et produits professionnels.
        </p>

      </section>

      {/* SERVICES NEW STYLE CARDS */}
      <section className="py-24 max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl font-black mb-16">
          Services & Prix
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {data.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden"
            >

              <img
                src={item.image}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-red-500 font-black">{item.price}</span>
                </div>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>

                <a
                  href="https://calendly.com/alautodetail88"
                  className="inline-block mt-6 bg-white text-black px-5 py-2 rounded-lg font-bold"
                >
                  Réserver
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHY US MINIMAL */}
      <section className="py-24 bg-zinc-950 text-center px-6">

        <h2 className="text-4xl font-black mb-12">
          Pourquoi nous choisir
        </h2>

        <div className="grid md:grid-cols-3 max-w-4xl mx-auto text-gray-400 gap-10">

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
          Prêt à réserver ?
        </h2>

        <p className="text-gray-400 mb-10">
          Service rapide à domicile dans les Laurentides
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
        © 2026 AL Auto Detailing
      </footer>

    </main>
  )
}