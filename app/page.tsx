'use client'

import {
  MapPin,
  Sparkles,
  ShieldCheck,
  Calendar,
} from 'lucide-react'

export default function Home() {

  const services = [
    {
      title: 'Intérieur Premium',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1200',
      description: 'Nettoyage complet intérieur : sièges, tapis, plastique, désinfection.'
    },
    {
      title: 'Extérieur Shine',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200',
      description: 'Lavage complet extérieur, jantes, mousse active et finition brillante.'
    },
    {
      title: 'Polissage',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200',
      description: 'Correction de peinture et élimination des micro-rayures.'
    },
    {
      title: 'Céramique',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200',
      description: 'Protection longue durée et effet miroir showroom.'
    }
  ]

  const pricing = [
    {
      title: 'Intérieur Detail',
      price: '120$',
      desc: 'Nettoyage complet intérieur'
    },
    {
      title: 'Extérieur Detail',
      price: '100$',
      desc: 'Lavage + finition premium'
    },
    {
      title: 'Polissage',
      price: '180$',
      desc: 'Correction de peinture'
    },
    {
      title: 'Céramique',
      price: '250$+',
      desc: 'Protection longue durée'
    },
    {
      title: 'Premium (Int + Ext)',
      price: '180$',
      desc: 'Forfait complet véhicule'
    },
    {
      title: 'Maintenance (Hebdo)',
      price: '100$ / semaine',
      desc: 'Entretien régulier mobile'
    },
  ]

  return (
    <main className="bg-gradient-to-b from-black to-zinc-950 text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 relative">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-3xl">

          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            AL AUTO
            <br />
            <span className="text-red-600">DETAILING</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Service de detailing mobile premium à domicile dans les Laurentides.
            Résultat showroom garanti.
          </p>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            className="bg-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Réserver maintenant
          </a>

          <div className="mt-10 flex flex-col gap-2 text-gray-300">
            <p>📍 Blainville & Laurentides</p>
            <p>📞 450-803-4784</p>
            <p>🚗 Service mobile à domicile</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black mb-16 uppercase">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((s) => (
            <div key={s.title} className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">

              <img src={s.image} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.description}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-black mb-16 uppercase">
          Pourquoi nous choisir
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-300">

          <div>
            <Sparkles className="mx-auto text-red-500 mb-3" size={40} />
            Produits premium
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" size={40} />
            Travail garanti
          </div>

          <div>
            <Calendar className="mx-auto text-red-500 mb-3" size={40} />
            Service rapide
          </div>

        </div>

      </section>

      {/* PRICING (BOTTOM ONLY) */}
      <section className="py-24 bg-black border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-16 uppercase">
            Prix & Forfaits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((p) => (
              <div key={p.title} className="bg-zinc-900 border border-white/10 rounded-2xl p-8">

                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

                <p className="text-3xl font-black text-red-500">{p.price}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">

        <h2 className="text-5xl font-black mb-6 uppercase">
          Réserve ton service maintenant
        </h2>

        <a
          href="https://calendly.com/alautodetail88"
          className="bg-red-600 px-10 py-5 rounded-xl font-black"
        >
          Ouvrir Calendly
        </a>

      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500">
        © 2026 AL Auto Detailing
      </footer>

    </main>
  )
}