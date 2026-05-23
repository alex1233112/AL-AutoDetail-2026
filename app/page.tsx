export default function ALAutoDetail() {
  const packages = [
    {
      title: 'SEDAN',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop',
      interior: '220$',
      exterior: '220$',
      combo: '380$',
    },
    {
      title: 'VUS',
      image:
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1600&auto=format&fit=crop',
      interior: '230$',
      exterior: '230$',
      combo: '400$',
    },
    {
      title: 'PICKUP / 7 PASSAGERS',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
      interior: '250$',
      exterior: '250$',
      combo: '440$',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative border-b border-red-700">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="AL AutoDetail"
                className="w-24 h-24 object-contain"
              />

              <div>
                <h1 className="text-3xl font-black tracking-wide text-red-500">
                  AL AutoDetail
                </h1>

                <p className="text-gray-400 text-sm uppercase tracking-[3px]">
                  Detailing Mobile Premium
                </p>
              </div>
            </div>

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              className="hidden md:flex bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-black"
            >
              Réserver
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-red-500 uppercase tracking-[5px] font-bold mb-5">
                Service à domicile
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-none mb-8 uppercase">
                Votre véhicule
                <span className="block text-red-600 mt-2">
                  Comme neuf
                </span>
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
                Service professionnel de detailing automobile à domicile à
                Blainville et partout dans les Laurentides.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="https://calendly.com/alautodetail88"
                  target="_blank"
                  className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-black text-lg"
                >
                  PRENDRE RENDEZ-VOUS
                </a>

                <a
                  href="tel:4508034784"
                  className="border border-red-600 hover:bg-red-600/10 transition px-8 py-4 rounded-2xl font-black text-lg"
                >
                  APPELER
                </a>
              </div>

              <div className="space-y-2 text-gray-300 text-lg">
                <p>📞 450-803-4784</p>
                <p>📞 438-504-0553</p>
                <p>📍 Blainville, Québec</p>
                <p>🚗 Déplacement partout dans les Laurentides</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full" />

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop"
                alt="Detailing"
                className="relative rounded-[40px] border border-red-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[6px] text-sm font-bold mb-4">
            SERVICES PREMIUM
          </p>

          <h3 className="text-5xl md:text-6xl font-black uppercase">
            L’EXCELLENCE À CHAQUE ÉTAPE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              title: 'Intérieur Premium',
              icon: '🧼',
              text: 'Nettoyage complet des sièges, tapis, cuir, plastiques et vitres.',
            },
            {
              title: 'Extérieur Premium',
              icon: '🚘',
              text: 'Lavage extérieur haut de gamme avec finition brillante.',
            },
            {
              title: 'Polissage',
              icon: '✨',
              text: 'Correction des micro-rayures et restauration du lustre.',
            },
            {
              title: 'Protection Céramique',
              icon: '🛡️',
              text: 'Protection durable contre les UV, l’eau et les contaminants.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-red-600 transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h4 className="text-2xl font-black mb-4 text-red-500">
                {service.title}
              </h4>

              <p className="text-gray-300 leading-relaxed text-lg">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 pb-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[6px] text-sm font-bold mb-4">
              FORFAITS PREMIUM
            </p>

            <h3 className="text-5xl md:text-6xl font-black uppercase">
              TARIFS DETAILING
            </h3>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {packages.map((car, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <h4 className="absolute bottom-6 left-6 text-4xl font-black uppercase leading-tight">
                    {car.title}
                  </h4>
                </div>

                <div className="p-6 space-y-5">
                  <div className="bg-black rounded-3xl border border-zinc-800 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl">
                        🧼
                      </div>

                      <div>
                        <p className="font-black uppercase text-xl">
                          Intérieur
                        </p>

                        <p className="text-gray-400 uppercase text-sm">
                          Premium
                        </p>
                      </div>
                    </div>

                    <p className="text-red-500 text-4xl font-black">
                      {car.interior}
                    </p>
                  </div>

                  <div className="bg-black rounded-3xl border border-zinc-800 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl">
                        🚘
                      </div>

                      <div>
                        <p className="font-black uppercase text-xl">
                          Extérieur
                        </p>

                        <p className="text-gray-400 uppercase text-sm">
                          Premium
                        </p>
                      </div>
                    </div>

                    <p className="text-red-500 text-4xl font-black">
                      {car.exterior}
                    </p>
                  </div>

                  <div className="bg-black rounded-3xl border border-zinc-800 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl">
                        🎁
                      </div>

                      <div>
                        <p className="font-black uppercase text-xl">
                          Package
                        </p>

                        <p className="text-gray-400 uppercase text-sm">
                          Int./Ext.
                        </p>
                      </div>
                    </div>

                    <p className="text-red-500 text-4xl font-black">
                      {car.combo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-[6px] text-sm font-bold mb-4">
            À PROPOS
          </p>

          <h3 className="text-5xl font-black mb-8 uppercase">
            AL AUTODETAIL
          </h3>

          <p className="text-xl text-gray-300 leading-relaxed">
            AL AutoDetail offre un service de detailing automobile professionnel
            directement à domicile. Notre mission est de redonner à votre
            véhicule une apparence showroom avec des produits et techniques haut
            de gamme.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h3 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
          Redonnez l’éclat
          <span className="block text-red-600 mt-2">
            à votre véhicule
          </span>
        </h3>

        <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
          Réservez votre rendez-vous dès maintenant et profitez d’un service de
          detailing premium à domicile.
        </p>

        <a
          href="https://calendly.com/alautodetail88"
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 transition px-12 py-5 rounded-2xl text-2xl font-black shadow-2xl"
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
        <p className="mb-6">Service mobile partout dans les Laurentides</p>

        <div className="space-y-2 mb-8 text-lg">
          <p>📞 450-803-4784</p>
          <p>📞 438-504-0553</p>
        </div>

        <p>© 2026 AL AutoDetail. Tous droits réservés.</p>
      </footer>
    </main>
  )
}
