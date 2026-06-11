'use client'

import {
  MapPin,
  Phone,
  Sparkles,
  ShieldCheck,
  Calendar,
  Star,
  Car,
} from 'lucide-react'

export default function Home() {

  const services = [
    {
      title: 'Intérieur Premium',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1200',
      desc: 'Nettoyage complet intérieur : sièges, tapis, plastique, cuir et désinfection.'
    },
    {
      title: 'Extérieur Shine',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200',
      desc: 'Lavage complet extérieur, jantes, mousse active et finition brillante.'
    },
    {
      title: 'Polissage',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200',
      desc: 'Correction de peinture et élimination des micro-rayures.'
    },
    {
      title: 'Céramique',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200',
      desc: 'Protection longue durée avec effet miroir et hydrophobe.'
    }
  ]

  const pricing = [
    { title: 'Intérieur Detail', price: '120$', desc: 'Nettoyage complet intérieur' },
    { title: 'Extérieur Detail', price: '100$', desc: 'Lavage extérieur premium' },
    { title: 'Premium (Int + Ext)', price: '180$', desc: 'Forfait complet véhicule' },
    { title: 'Polissage', price: '180$', desc: 'Correction de peinture' },
    { title: 'Céramique', price: '250$+', desc: 'Protection longue durée' },
    { title: 'Maintenance', price: '100$ - 160$', desc: 'Service régulier mobile' },
  ]

  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Car className="text-red-600" />
            <span className="font-black text-xl">AL AUTO DETAILING</span>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-5 py-2 rounded-xl font-bold"
          >
            Réserver
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6 relative">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative max-w-3xl">

          <h1 className="text-6xl md:text-7xl font-black uppercase mb-6">
            DETALING
            <br />
            <span className="text-red-600">MOBILE PREMIUM</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Service de detailing automobile à domicile dans les Laurentides.
            Résultat showroom garanti à chaque service.
          </p>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Réserver maintenant
          </a>

          <div className="mt-8 text-gray-400 space-y-1">
            <p>📍 Blainville & Laurentides</p>
            <p>📞 450-803-4784</p>
            <p>🚗 Service 100% mobile</p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-8">

          <div>
            <Star className="mx-auto text-red-500 mb-2" />
            <p className="font-bold">Service premium</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-2" />
            <p className="font-bold">Travail garanti</p>
          </div>

          <div>
            <MapPin className="mx-auto text-red-500 mb-2" />
            <p className="font-bold">Déplacement inclus</p>
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
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-zinc-950 text-center px-6">

        <h2 className="text-5xl font-black mb-12 uppercase">
          Pourquoi nous choisir
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-300">

          <div>
            <Sparkles className="mx-auto text-red-500 mb-3" />
            Produits haut de gamme
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" />
            Résultats garantis
          </div>

          <div>
            <Calendar className="mx-auto text-red-500 mb-3" />
            Disponibilité rapide
          </div>

        </div>
      </section>

      {/* PRICING (BOTTOM ONLY) */}
      <section className="py-24 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-16 uppercase">
            Prix & Forfaits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((p) => (
              <div key={p.title} className="bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center">

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
        © 2026 AL Auto Detailing — Tous droits réservés
      </footer>

    </main>
  )
}