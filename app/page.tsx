'use client'

import {
  MapPin,
  Phone,
  Sparkles,
  ShieldCheck,
  Calendar,
  Car,
} from 'lucide-react'

export default function Home() {

  const services = [
    {
      title: 'Intérieur Detail',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1200',
      desc: 'Nettoyage complet intérieur (sièges, tapis, plastique).'
    },
    {
      title: 'Extérieur Detail',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200',
      desc: 'Lavage extérieur + finition brillante.'
    },
    {
      title: 'Polissage',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200',
      desc: 'Correction de peinture et micro-rayures.'
    },
    {
      title: 'Céramique',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200',
      desc: 'Protection longue durée premium.'
    }
  ]

  const pricing = [
    { name: 'Intérieur Detail', price: '120$' },
    { name: 'Extérieur Detail', price: '100$' },
    { name: 'Premium (Int + Ext)', price: '180$' },
    { name: 'Polissage', price: '180$' },
    { name: 'Céramique', price: '250$+' },
    { name: 'Maintenance', price: '100$ - 160$' },
  ]

  return (
    <main className="bg-black text-white">

      {/* HEADER SIMPLE */}
      <header className="py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Car className="text-red-500" />
            <span className="font-bold text-lg">AL AUTO DETAILING</span>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-5 py-2 rounded-lg font-bold"
          >
            Réserver
          </a>

        </div>
      </header>

      {/* HERO (ESPACE CLAIR) */}
      <section className="py-32 text-center px-6">

        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">
          Detailing
          <span className="text-red-600"> Premium</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Service de detailing mobile à domicile dans les Laurentides.
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

      {/* ESPACE */}
      <div className="h-24" />

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {services.map((s) => (
            <div key={s.title} className="bg-zinc-900 rounded-2xl overflow-hidden">

              <img src={s.image} className="h-64 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ESPACE */}
      <div className="h-32" />

      {/* POURQUOI */}
      <section className="text-center px-6">

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
            Travail garanti
          </div>

          <div>
            <Calendar className="mx-auto text-red-500 mb-3" />
            Service rapide
          </div>

        </div>

      </section>

      {/* ESPACE */}
      <div className="h-32" />

      {/* PRIX (SECTION CLAIRE EN BAS) */}
      <section className="bg-zinc-950 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center mb-16">
            Prix & Forfaits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((p) => (
              <div key={p.name} className="bg-black border border-white/10 rounded-2xl p-8 text-center">

                <h3 className="text-xl font-bold mb-3">{p.name}</h3>

                <p className="text-3xl font-black text-red-500">
                  {p.price}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ESPACE FINAL */}
      <div className="h-24" />

      {/* CTA FINAL */}
      <section className="text-center py-24 px-6">

        <h2 className="text-4xl font-black mb-6">
          Réserve ton service
        </h2>

        <a
          href="https://calendly.com/alautodetail88"
          className="bg-red-600 px-10 py-5 rounded-xl font-bold"
        >
          Ouvrir Calendly
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 AL Auto Detailing
      </footer>

    </main>
  )
}