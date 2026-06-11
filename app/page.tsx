'use client'

import {
  Sparkles,
  ShieldCheck,
  MapPin,
  Phone,
  Calendar,
  Star,
  Car,
} from 'lucide-react'

export default function Home() {

  const services = [
    {
      title: 'Interior Detail Luxury',
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1400',
      desc: 'Deep cleaning intérieur complet niveau showroom.'
    },
    {
      title: 'Exterior Signature Wash',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1400',
      desc: 'Lavage premium avec finition gloss et protection.'
    },
    {
      title: 'Paint Correction',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400',
      desc: 'Correction de peinture pour finition miroir.'
    },
    {
      title: 'Ceramic Coating',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400',
      desc: 'Protection hydrophobe longue durée premium.'
    }
  ]

  const pricing = [
    { title: 'Interior Detail', price: '120$', desc: 'Deep interior cleaning' },
    { title: 'Exterior Detail', price: '100$', desc: 'Premium exterior wash' },
    { title: 'Full Package', price: '180$', desc: 'Interior + Exterior complete' },
    { title: 'Paint Correction', price: '180$', desc: 'Scratch removal & polish' },
    { title: 'Ceramic Coating', price: '250$+', desc: 'Long-term protection' },
    { title: 'Maintenance Plan', price: '100$ - 160$', desc: 'Regular mobile service' },
  ]

  return (
    <main className="bg-black text-white">

      {/* HERO LUXE */}
      <section className="h-screen relative flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

        <div className="relative max-w-4xl">

          <p className="tracking-[0.4em] text-gray-400 uppercase mb-6">
            Luxury Mobile Detailing
          </p>

          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">
            AL AUTO
            <br />
            <span className="text-red-600">LUXURY DETAIL</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Service de detailing haut de gamme à domicile.
            Chaque véhicule traité comme une pièce d’exception.
          </p>

          <a
            href="https://calendly.com/alautodetail88"
            className="bg-red-600 px-10 py-5 rounded-xl font-black tracking-wide"
          >
            BOOK YOUR APPOINTMENT
          </a>

          <div className="mt-10 flex flex-col gap-2 text-gray-400 text-sm">
            <p>📍 Blainville & Laurentides</p>
            <p>🚗 Mobile Premium Service</p>
            <p>📞 450-803-4784</p>
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10">

          <div>
            <Star className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Premium Quality Finish</p>
          </div>

          <div>
            <ShieldCheck className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Guaranteed Satisfaction</p>
          </div>

          <div>
            <MapPin className="mx-auto text-red-500 mb-3" />
            <p className="text-gray-300">Mobile Service Included</p>
          </div>

        </div>
      </section>

      {/* SERVICES LUXE */}
      <section className="py-28 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black uppercase mb-16">
          Signature Services
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600 transition"
            >

              <img
                src={s.image}
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 bg-zinc-950 text-center px-6">

        <h2 className="text-5xl font-black uppercase mb-6">
          Automotive Excellence
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          We don’t just clean vehicles — we restore, protect and elevate them to showroom condition.
        </p>

      </section>

      {/* PRICING LUXE */}
      <section className="py-28 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black uppercase mb-16">
            Investment
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {pricing.map((p) => (
              <div
                key={p.title}
                className="bg-zinc-950 border border-white/10 rounded-2xl p-10 text-center hover:border-red-600 transition"
              >

                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

                <p className="text-4xl font-black text-red-500">{p.price}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 text-center">

        <h2 className="text-5xl font-black uppercase mb-6">
          Elevate Your Vehicle Today
        </h2>

        <a
          href="https://calendly.com/alautodetail88"
          className="bg-red-600 px-12 py-6 rounded-xl font-black text-lg"
        >
          BOOK NOW
        </a>

      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500">
        © 2026 AL Auto Luxury Detailing
      </footer>

    </main>
  )
}