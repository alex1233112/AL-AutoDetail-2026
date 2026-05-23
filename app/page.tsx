export default function ALAutoDetail() {
  const pricingCards = [
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-red-700">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-red-950 opacity-90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="AL AutoDetail"
                className="w-28 h-28 object-contain"
              />

              <div>
                <h1 className="text-3xl font-black tracking-wide text-red-600">
                  AL AutoDetail
                </h1>

                <p className="text-gray-300 text-sm">
                  Detailing à domicile dans les Laurentides
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[4px] mb-3 font-semibold">
                Service Mobile Premium
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                LE DETAILING <span className="text-red-600">À DOMICILE</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Service professionnel de detailing à domicile basé à Blainville
                et disponible partout dans les Laurentides.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://calendly.com/alautodetail88"
                  target="_blank"
                  className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-bold transition"
                >
                  Réserver maintenant
                </a>

                <a
                  href="tel:4508034784"
                  className="border border-red-600 hover:bg-red-600/20 px-6 py-4 rounded-2xl font-bold transition"
                >
                  Nous appeler
                </a>
              </div>

              <div className="space-y-2 text-lg text-gray-300">
                <p>📞 450-803-4784</p>
                <p>📞 438-504-0553</p>
                <p>📍 Blainville, Québec</p>
                <p>🚗 Déplacement partout dans les Laurentides</p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
                alt="Voiture detailing"
                className="rounded-3xl shadow-2xl border border-red-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[4px] mb-3">
            Nos Services
          </p>

          <h3 className="text-5xl font-black">
            L’EXCELLENCE À CHAQUE ÉTAPE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Intérieur Premium',
              text: 'Nettoyage intérieur complet incluant aspiration, shampoing des tapis et sièges, nettoyage du cuir, plastiques et vitres.',
            },
            {
              title: 'Extérieur Premium',
              text: 'Pré-lavage, lavage à la main, nettoyage des jantes et protection extérieure pour une finition impeccable.',
            },
            {
              title: 'Polissage',
              text: 'Correction des micro-rayures et restauration du lustre de la peinture pour un aspect showroom.',
            },
            {
              title: 'Céramique Coating',
              text: 'Protection durable contre les contaminants, l’eau, le sel et les rayons UV.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 hover:border-red-600 transition rounded-3xl p-8 shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-red-600 mb-6 flex items-center justify-center text-2xl font-black">
                {index + 1}
              </div>

              <h4 className="text-2xl font-bold mb-4 text-red-500">
                {service.title}
              </h4>

              <p className="text-gray-300 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM PRICING */}
      <section className="max-w-[1800px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[8px] text-sm font-bold mb-4">
            NOS SERVICES
          </p>

          <h3 className="text-5xl md:text-7xl font-black uppercase">
            L’EXCELLENCE À CHAQUE ÉTAPE
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingCards.map((car, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-[34px] p-5 shadow-2xl"
            >
              <h4 className="text-center text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
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
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
                      🧼
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
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
                      🚘
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
                    <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-3xl">
                      🎁
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

        <div className="text-center mt-16">
          <p className="text-gray-300 text-xl mb-8">
            📍 Service à domicile • Blainville & Laurentides • Réservez en quelques clics
          </p>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-12 py-5 rounded-2xl text-2xl font-black shadow-2xl"
          >
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </section>

      {/* ENTRETIEN */}
      <section className="bg-black py-20 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-black text-red-500 mb-6">
            ENTRETIEN & MAINTENANCE
          </h3>

          <p className="text-xl text-gray-300 leading-relaxed">
            Plans de maintenance disponibles chaque semaine, aux deux semaines,
            au mois, aux 3 mois ou aux 6 mois afin de garder votre véhicule
            impeccable toute l’année.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-black mb-8 text-red-600">
            À PROPOS
          </h3>

          <p className="text-xl text-gray-300 leading-relaxed">
            AL AutoDetail est une équipe passionnée offrant un service de
            detailing automobile à domicile professionnel à Blainville et dans
            toute la région des Laurentides.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h3 className="text-5xl font-black mb-6">
          PRÊT À REDONNER L’ÉCLAT À VOTRE VÉHICULE ?
        </h3>

        <p className="text-gray-300 text-xl mb-10">
          Réservez votre rendez-vous en quelques clics.
        </p>

        <a
          href="https://calendly.com/alautodetail88"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-2xl text-2xl font-black inline-block shadow-2xl"
        >
          PRENDRE RENDEZ-VOUS
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 px-6 text-center text-gray-400">
        <img
          src="/logo.png"
          alt="AL AutoDetail"
          className="w-28 mx-auto mb-6"
        />

        <p className="mb-2">AL AutoDetail — Blainville, Québec</p>
        <p className="mb-2">
          Service mobile partout dans les Laurentides
        </p>

        <div className="space-y-1 mb-6">
          <p>📞 450-803-4784</p>
          <p>📞 438-504-0553</p>
        </div>

        <p>© 2026 AL AutoDetail. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
