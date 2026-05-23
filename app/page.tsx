
export default function ALAutoDetail() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
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

              <div className="space-y-2 text-lg">
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
      </section><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      title: 'Intérieur Premium',
      text: 'Nettoyage intérieur complet incluant aspiration, shampoing des tapis et sièges, nettoyage du cuir, plastiques, vitres et élimination des odeurs pour une finition impeccable. Les prix peuvent varié selon la saleté.',
    },
    {
      title: 'Extérieur Premium',
      text: 'Pré-lavage, lavage à la main, nettoyage des jantes, décontamination complète, tire shine et protection céramique coating 3mois+. Les prix peuvent varié selon la saleté.',
    },
    {
      title: 'Polissage',
      text: 'Correction des micro-rayures, restauration du lustre et amélioration de la peinture afin de redonner un aspect neuf au véhicule.',
    },
    {
      title: 'Céramique Coating',
      text: 'Protection céramique disponible en traitement 3 mois, 6 mois ou 9 mois et plus pour protéger la peinture contre les contaminants, l’eau et les UV.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    ['Intérieur Premium Sedan', '220$'],
    ['Extérieur Premium Sedan', '220$'],
    ['Intérieur Premium VUS', '230$'],
    ['Extérieur Premium VUS', '230$'],
    ['Intérieur Premium Pickup / 7 passagers', '250$'],
    ['Extérieur Premium Pickup / 7 passagers', '250$'],
    ['Int/ext. Premium Sedan', '380$'],
    ['Int/ext. Premium VUS', '400$'],
    ['Int/ext. Premium Pickup / 7 passagers', '440$'],
  ].map((item, index) => (
    <div
      key={index}
      className="bg-zinc-950 border border-zinc-800 hover:border-red-600 transition rounded-2xl p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-base font-bold text-white leading-snug">
          {item[0]}
        </h4>

        <p className="text-2xl font-black text-red-500 whitespace-nowrap">
          {item[1]}
        </p>
      </div>
    </div>
  ))}
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
            toute la région des Laurentides. Nous nous déplaçons directement
            chez vous pour offrir un service haut de gamme, pratique et adapté
            à votre véhicule.
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