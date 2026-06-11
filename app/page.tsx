'use client'

import {
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Calendar,
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Intérieur Detail',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
      description:
        'Nettoyage complet de l’habitacle, sièges, tapis, cuir et plastiques.',
    },
    {
      title: 'Extérieur Detail',
      image:
        'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200',
      description:
        'Lavage premium, décontamination et finition showroom.',
    },
    {
      title: 'Polissage',
      image:
        'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200',
      description:
        'Correction de peinture et retrait des micro-rayures.',
    },
    {
      title: 'Traitement Céramique',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200',
      description:
        'Protection durable contre les UV, l’eau et les contaminants.',
    },
  ]

  const maintenance = [
    {
      title: 'Hebdomadaire',
      price: '$100',
    },
    {
      title: 'Aux 2 semaines',
      price: '$130',
    },
    {
      title: 'Mensuel',
      price: '$160',
    },
  ]

  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/Logo.png"
              alt="AL Auto Detailing"
              className="h-16 w-auto"
            />

            <div>
              <h1 className="font-black text-3xl">
                AL <span className="text-red-600">AUTO</span>
              </h1>

              <p className="tracking-[0.3em] text-gray-400 text-xs">
                DETAILING
              </p>
            </div>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            className="bg-red-600 px-6 py-3 rounded-xl font-bold"
          >
            RÉSERVER
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center pt-32">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-7xl mx-auto px-6">

          <p className="text-red-500 font-bold tracking-[0.3em] uppercase mb-4">
            Service à domicile
          </p>

          <h2 className="text-7xl font-black uppercase leading-none mb-6">
            Votre véhicule
            <br />
            <span className="text-red-600">
              comme neuf
            </span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-2xl mb-10">
            Service professionnel de detailing automobile à domicile
            à Blainville et partout dans les Laurentides.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              className="bg-red-600 px-8 py-4 rounded-xl font-bold"
            >
              PRENDRE RENDEZ-VOUS
            </a>

            <a
              href="tel:4508034784"
              className="border border-white/20 px-8 py-4 rounded-xl font-bold"
            >
              APPELER
            </a>

          </div>

          <div className="space-y-3 text-xl">
            <p>📞 450-803-4784</p>
            <p>📞 438-504-0553</p>
            <p>📍 Blainville, Québec</p>
            <p>🚗 Déplacement partout dans les Laurentides</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-6xl font-black uppercase mb-16">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10"
            >
              <img
                src={service.image}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* MAINTENANCE */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-black uppercase mb-6">
            Maintenance Basic
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Gardez votre véhicule propre toute l’année.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {maintenance.map((plan) => (
              <div
                key={plan.title}
                className="bg-black border border-red-600 rounded-3xl p-10 text-center"
              >
                <h3 className="text-3xl font-black mb-6">
                  {plan.title}
                </h3>

                <div className="text-6xl font-black text-red-500 mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-gray-300 mb-10">
                  <li>✓ Lavage extérieur</li>
                  <li>✓ Aspirateur intérieur</li>
                  <li>✓ Nettoyage rapide</li>
                  <li>✓ Service mobile</li>
                </ul>

                <a
                  href="https://calendly.com/alautodetail88"
                  target="_blank"
                  className="bg-red-600 px-6 py-3 rounded-xl font-bold inline-block"
                >
                  Réserver
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <h2 className="text-center text-6xl font-black mb-16 uppercase">
          Pourquoi Nous Choisir
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="text-center">
            <MapPin className="mx-auto text-red-500 mb-4" size={50} />
            <p>Service Mobile</p>
          </div>

          <div className="text-center">
            <Sparkles className="mx-auto text-red-500 mb-4" size={50} />
            <p>Produits Premium</p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto text-red-500 mb-4" size={50} />
            <p>Satisfaction Garantie</p>
          </div>

          <div className="text-center">
            <Calendar className="mx-auto text-red-500 mb-4" size={50} />
            <p>Disponibilité Rapide</p>
          </div>

        </div>
      </section>

      {/* AVIS */}

      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-black uppercase mb-16">
            Avis Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {['Incroyable', 'Professionnel', 'Résultat parfait'].map(
              (review) => (
                <div
                  key={review}
                  className="bg-black p-8 rounded-3xl border border-white/10"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-red-500 fill-red-500"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300">
                    {review}
                  </p>
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 text-center">

        <h2 className="text-6xl font-black uppercase mb-6">
          Réservez maintenant
        </h2>

        <a
          href="https://calendly.com/alautodetail88"
          target="_blank"
          className="bg-red-600 px-10 py-5 rounded-xl font-black inline-block"
        >
          Ouvrir Calendly
        </a>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <img
            src="/Logo.png"
            alt="AL Auto Detailing"
            className="h-24 mx-auto mb-8"
          />

          <p className="text-center text-gray-500">
            © 2026 AL Auto Detailing - Tous droits réservés.
          </p>

        </div>

      </footer>

    </main>
  )
}