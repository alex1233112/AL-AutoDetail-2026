import {
  Sparkles,
  Car,
  Gift,
  Phone,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

export default function ALAutoDetail() {
  const packages = [
    {
      title: 'SEDAN',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop',
      interior: '220$',
      exterior: '220$',
      packagePrice: '380$',
    },
    {
      title: 'VUS',
      image:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1400&auto=format&fit=crop',
      interior: '230$',
      exterior: '230$',
      packagePrice: '400$',
    },
    {
      title: 'PICKUP / 7 PASSAGERS',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1400&auto=format&fit=crop',
      interior: '250$',
      exterior: '250$',
      packagePrice: '440$',
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-red-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-red-950 opacity-90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-14">
            <img
              src="/logo.png"
              alt="AL AutoDetail"
              className="w-24 h-24 object-contain"
            />

            <div>
              <h1 className="text-4xl font-black text-red-600 tracking-wide">
                AL AutoDetail
              </h1>

              <p className="text-gray-300 mt-1">
                Detailing automobile premium à domicile
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[6px] text-red-500 font-bold mb-4 text-sm">
                Service Mobile Premium
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                LE DETAILING
                <br />
                <span className="text-red-600">HAUT DE GAMME</span>
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
                Service professionnel de detailing automobile à domicile à
                Blainville et partout dans les Laurentides.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="https://calendly.com/alautodetail88"
                  target="_blank"
                  className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-lg font-black shadow-2xl"
                >
                  PRENDRE RENDEZ-VOUS
                </a>

                <a
                  href="tel:4508034784"
                  className="border border-red-600 hover:bg-red-600/10 transition px-8 py-4 rounded-2xl text-lg font-black"
                >
                  NOUS APPELER
                </a>
              </div>

              <div className="space-y-4 text-lg text-gray-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <p>450-803-4784 / 438-504-0553</p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <p>Blainville • Laurentides</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
                alt="Detailing"
                className="rounded-[40px] h-[650px] w-full object-cover border border-red-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-red-500 uppercase tracking-[8px] font-bold text-sm mb-4">
            NOS SERVICES
          </p>

          <h3 className="text-5xl md:text-7xl font-black uppercase">
            LUXE & PERFORMANCE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-red-500" />,
              title: 'Intérieur Premium',
              text: 'Nettoyage intérieur complet avec shampoing, cuir, plastiques et finition haut de gamme.',
            },
            {
              icon: <Car className="w-8 h-8 text-red-500" />,
              title: 'Extérieur Premium',
              text: 'Décontamination, lavage à la main, jantes, protection et finition miroir.',
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
              title: 'Céramique',
              text: 'Protection durable contre les contaminants, UV et saleté.',
            },
            {
              icon: <Gift className="w-8 h-8 text-red-500" />,
              title: 'Packages Complets',
              text: 'Forfaits intérieur + extérieur pour une remise à neuf complète.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-red-600 transition shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h4 className="text-2xl font-black mb-4 text-white">
                {service.title}
              </h4>

              <p className="text-gray-400 leading-relaxed text-lg">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-20">
          <p className="text-red-500 uppercase tracking-[8px] font-bold text-sm mb-4">
            TARIFS PREMIUM
          </p>

          <h3 className="text-5xl md:text-7xl font-black uppercase">
            NOS FORFAITS
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((car, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-[34px] p-5 shadow-2xl"
            >
              <h4 className="text-center text-4xl font-black uppercase mb-6">
                {car.title}
              </h4>

              <img
                src={car.image}
                alt={car.title}
                className="w-full h-[320px] object-cover rounded-[30px] mb-6"
              />

              <div className="space-y-5">
                <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-red-500" />
                    </div>

                    <p className="uppercase font-black text-2xl leading-tight">
                      Intérieur
                      <br />
                      Premium
                    </p>
                  </div>

                  <p className="text-red-500 text-5xl font-black">
                    {car.interior}
                  </p>
                </div>

                <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center">
                      <Car className="w-8 h-8 text-red-500" />
                    </div>

                    <p className="uppercase font-black text-2xl leading-tight">
                      Extérieur
                      <br />
                      Premium
                    </p>
                  </div>

                  <p className="text-red-500 text-5xl font-black">
                    {car.exterior}
                  </p>
                </div>

                <div className="bg-[#050505] border border-zinc-800 rounded-[28px] px-5 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center">
                      <Gift className="w-8 h-8 text-red-500" />
                    </div>

                    <p className="uppercase font-black text-2xl leading-tight">
                      Package
                      <br />
                      Int./Ext.
                    </p>
                  </div>

                  <p className="text-red-500 text-5xl font-black">
                    {car.packagePrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center">
        <h3 className="text-5xl md:text-6xl font-black mb-8 uppercase">
          Redonnez l'éclat à votre véhicule
        </h3>

        <p className="text-gray-300 text-2xl mb-10 max-w-3xl mx-auto">
          Réservez votre detailing premium directement à domicile.
        </p>

        <a
          href="https://calendly.com/alautodetail88"
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 transition px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl"
        >
          PRENDRE RENDEZ-VOUS
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6 text-center text-gray-400">
        <img
          src="/logo.png"
          alt="AL AutoDetail"
          className="w-24 mx-auto mb-6"
        />

        <p className="mb-2">AL AutoDetail — Blainville, Québec</p>
        <p className="mb-2">Service mobile partout dans les Laurentides</p>

        <div className="space-y-1 mt-6 mb-6">
          <p>450-803-4784</p>
          <p>438-504-0553</p>
        </div>

        <p>© 2026 AL AutoDetail. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
