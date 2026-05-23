import {
  ShieldCheck,
  Sparkles,
  Car,
  Phone,
  MapPin,
  Clock3,
  House,
  Flame,
} from 'lucide-react'

export default function ALAutoDetail() {
  const services = [
    {
      title: 'INTÉRIEUR DETAIL',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
      text: 'Nettoyage en profondeur de l’habitacle, sièges, tapis, cuir et plastiques.',
      icon: <Sparkles className="w-10 h-10 text-white" />,
    },
    {
      title: 'EXTÉRIEUR DETAIL',
      image:
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop',
      text: 'Lavage minutieux, décontamination complète et finition impeccable.',
      icon: <Car className="w-10 h-10 text-white" />,
    },
    {
      title: 'POLISSAGE',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
      text: 'Correction des micro-rayures et restauration du lustre.',
      icon: <Flame className="w-10 h-10 text-white" />,
    },
    {
      title: 'CÉRAMIQUE COATING',
      image:
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop',
      text: 'Protection durable contre les UV, l’eau et les contaminants.',
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800&auto=format&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">

          {/* NAVBAR */}
          <div className="flex items-center justify-between mb-24">

            <img
              src="/logo.png"
              alt="logo"
              className="w-32 md:w-44 object-contain"
            />

            <div className="hidden lg:flex items-center gap-10 uppercase text-sm font-bold">
              <a href="#" className="text-red-500">
                Accueil
              </a>

              <a href="#services" className="hover:text-red-500 transition">
                Services
              </a>

              <a href="#about" className="hover:text-red-500 transition">
                À propos
              </a>

              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </div>

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-xl font-black uppercase text-sm"
            >
              PRENDRE RENDEZ-VOUS
            </a>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl pt-10">

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
              LE DETAILING
              <br />
              <span className="text-red-600">
                À DOMICILE
              </span>
            </h1>

            <div className="w-24 h-1 bg-red-600 mb-8" />

            <p className="text-2xl text-gray-300 leading-relaxed mb-3">
              Service professionnel de detailing à domicile à Blainville et partout dans les Laurentides.
            </p>

            <p className="text-red-500 text-2xl font-bold mb-10">
              Nous nous déplaçons, vous relaxez.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">

              <a
                href="https://calendly.com/alautodetail88"
                target="_blank"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-5 rounded-xl font-black uppercase"
              >
                PRENDRE RENDEZ-VOUS
              </a>

              <a
                href="tel:4508034784"
                className="border border-zinc-700 hover:border-red-600 transition px-8 py-5 rounded-xl font-black uppercase"
              >
                NOUS APPELER
              </a>

            </div>

            <div className="space-y-5 text-xl">

              <div className="flex items-center gap-4">
                <Phone className="text-red-600 w-6 h-6" />
                <p>450 803-4784</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-red-600 w-6 h-6" />
                <p>438 504-0553</p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-red-600 w-6 h-6" />
                <p>Blainville, Québec</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 border-t border-zinc-900 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-red-500 uppercase tracking-[6px] text-sm font-bold mb-4">
              NOS SERVICES
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase">
              L’EXCELLENCE
              <span className="text-red-600">
                {' '}À CHAQUE ÉTAPE
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#070707] border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-600 transition duration-300"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8 text-center">

                  <div className="w-24 h-24 rounded-full border-2 border-red-600 bg-black flex items-center justify-center mx-auto -mt-20 mb-8">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-black uppercase mb-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {service.text}
                  </p>

                  <div className="w-20 h-1 bg-red-600 mx-auto mt-8" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-zinc-900 py-14 px-6 bg-[#050505]">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              icon: <House className="text-red-600 w-12 h-12" />,
              title: 'SERVICE À DOMICILE',
              text: 'Nous venons chez vous, à l’heure qui vous convient.',
            },

            {
              icon: <ShieldCheck className="text-red-600 w-12 h-12" />,
              title: 'PRODUITS PREMIUM',
              text: 'Produits professionnels de la plus haute qualité.',
            },

            {
              icon: <Clock3 className="text-red-600 w-12 h-12" />,
              title: 'RÉSULTATS GARANTIS',
              text: 'Satisfaction garantie à 100%.',
            },

            {
              icon: <Flame className="text-red-600 w-12 h-12" />,
              title: 'PASSION & DÉTAIL',
              text: 'Chaque véhicule est traité comme le nôtre.',
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-5">

              {item.icon}

              <div>

                <h4 className="font-black uppercase text-xl mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
              PRÊT À REDONNER
              <br />
              <span className="text-red-600">
                L’ÉCLAT À VOTRE VÉHICULE ?
              </span>
            </h2>

            <p className="text-gray-300 text-2xl">
              Réservez votre rendez-vous en ligne en quelques clics.
            </p>

          </div>

          <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-3xl p-14 text-center shadow-2xl">

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              className="inline-block bg-white text-black hover:bg-zinc-200 transition px-10 py-5 rounded-2xl text-2xl font-black uppercase"
            >
              PRENDRE RENDEZ-VOUS
            </a>

            <p className="mt-6 text-white text-xl">
              Réservation rapide et facile avec Calendly
            </p>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-zinc-900 bg-black py-20 px-6"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-14">

          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="w-44"
            />
          </div>

          <div id="about">

            <h4 className="text-red-600 font-black uppercase text-2xl mb-5">
              À PROPOS
            </h4>

            <p className="text-gray-300 leading-relaxed text-lg">
              AL AutoDetail est une équipe passionnée offrant un service de detailing automobile à domicile professionnel à Blainville et dans toute la région des Laurentides.
            </p>

          </div>

          <div>

            <h4 className="text-red-600 font-black uppercase text-2xl mb-5">
              CONTACTEZ-NOUS
            </h4>

            <div className="space-y-5 text-lg">

              <div className="flex items-center gap-4">
                <Phone className="text-red-600 w-5 h-5" />
                <p>450 803-4784</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-red-600 w-5 h-5" />
                <p>438 504-0553</p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-red-600 w-5 h-5" />
                <p>Blainville, Québec</p>
              </div>

            </div>
          </div>

          <div>

            <h4 className="text-red-600 font-black uppercase text-2xl mb-5">
              RÉSERVEZ EN LIGNE
            </h4>

            <p className="text-gray-300 text-lg mb-6">
              Choisissez la date et l’heure qui vous conviennent.
            </p>

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-black uppercase"
            >
              PRENDRE RENDEZ-VOUS
            </a>

          </div>

        </div>

        <div className="text-center text-gray-500 mt-16 text-sm">
          © 2026 AL AutoDetail. Tous droits réservés.
        </div>

      </footer>
    </div>
  )
}