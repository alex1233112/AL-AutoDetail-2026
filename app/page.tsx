'use client'

import { motion } from 'framer-motion'
import {
  ChevronRight,
  Phone,
  MapPin,
  ShieldCheck,
  Star,
} from 'lucide-react'

export default function Home() {
  const packages = [
    {
      title: 'INTÉRIEUR PREMIUM',
      price: 'À partir de 220$',
      details: [
        'Aspiration complète',
        'Nettoyage des sièges',
        'Traitement des plastiques',
        'Shampoing tapis',
      ],
    },
    {
      title: 'EXTÉRIEUR PRÉMIUM',
      price: 'À partir de 220$',
      details: [
        'Lavage premium',
        'Décontamination',
        'Protection hydrophobe',
        'Finition brillante',
      ],
    },
    {
      title: 'DETAIL COMPLET',
      price: 'À partir de 380$',
      details: [
        'Intérieur + extérieur',
        'Décontamination',
        'Protection céramique',
        'Les prix peuvent variés selon le vehicule',
      ],
    },
  ]
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_35%)] pointer-events-none z-0" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    <div className="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="AL Auto Detailing"
        className="h-14 w-auto"
      />

      <div>
        <h1 className="text-3xl font-black uppercase">
          AL <span className="text-red-600">AUTO</span>
        </h1>

        <p className="text-xs tracking-[0.4em] uppercase text-gray-400">
          DETAILING
        </p>
      </div>
    </div>
<div className="hidden md:flex items-center gap-10 uppercase text-sm font-bold tracking-wide">
            <a href="#services" className="hover:text-red-500 transition">
              Services
            </a>

            <a href="#about" className="hover:text-red-500 transition">
              À propos
            </a>

            <a href="#reviews" className="hover:text-red-500 transition">
              Avis
            </a>
          </div>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-2xl font-black uppercase shadow-[0_0_40px_rgba(220,38,38,0.45)]"
          >
            Réserver
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2200&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center z-10 pt-32">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 border border-red-500/20 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

              <span className="uppercase text-xs tracking-[0.4em] text-red-400 font-bold">
                Premium Detailing
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.88] tracking-tight mb-8">
              Votre
              <br />
              véhicule
              <br />
              <span className="text-red-600 drop-shadow-[0_0_35px_rgba(220,38,38,0.6)]">
                comme neuf
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Service professionnel de detailing automobile à domicile à Blainville et partout dans les Laurentides.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/alautodetail88"
                target="_blank"
                className="group bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl font-black uppercase flex items-center gap-3 transition shadow-[0_0_50px_rgba(220,38,38,0.45)]"
              >
                Prendre rendez-vous
                <ChevronRight className="group-hover:translate-x-1 transition" />
              </motion.a>

              <a
                href="tel:4508034784"
                className="border border-white/15 bg-white/5 backdrop-blur-xl hover:border-red-600 transition px-10 py-5 rounded-2xl font-black uppercase"
              >
                Appeler
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                <Phone className="text-red-500 mb-4" />

                <p className="uppercase text-sm text-gray-400 mb-2">
                  Téléphone
                </p>

                <h3 className="text-3xl font-black">
                  450 803-4784
                </h3>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                <MapPin className="text-red-500 mb-4" />

                <p className="uppercase text-sm text-gray-400 mb-2">
                  Région
                </p>

                <h3 className="text-3xl font-black">
                  Laurentides
                </h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-red-600/20 blur-[120px] rounded-full" />

            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop"
              alt="car"
              className="relative rounded-[2.5rem] border border-red-600/30 shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 border-t border-white/10 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-red-500 font-bold mb-5">
              Services Premium
            </p>

            <h3 className="text-5xl md:text-7xl font-black uppercase">
              L’excellence à chaque étape
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intérieur Detail',
                image:
                  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Extérieur Detail',
                image:
                  'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Polissage Premium',
                image:
                  'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-14 h-1 bg-red-600 rounded-full mb-6" />

                  <h4 className="text-2xl font-black uppercase mb-4">
                    {service.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    Résultat showroom et finition haut de gamme.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIX */}
      <section className="py-28 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-red-500 font-bold mb-5">
              Nos forfaits
            </p>

            <h3 className="text-5xl md:text-7xl font-black uppercase">
              Choisissez votre detailing
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pack, index) => (
              <motion.div
                key={pack.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-zinc-950 border border-red-600/20 hover:border-red-600/60 rounded-[2rem] p-10 transition-all duration-300"
              >
                <div className="w-16 h-1 bg-red-600 rounded-full mb-8" />

                <h4 className="text-3xl font-black uppercase mb-4">
                  {pack.title}
                </h4>

                <p className="text-5xl font-black text-red-500 mb-8">
                  {pack.price}
                </p>

                <div className="space-y-4 mb-10">
                  {pack.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <ShieldCheck className="text-red-500" size={18} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://calendly.com/alautodetail88"
                  target="_blank"
                  className="inline-flex w-full justify-center bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-black uppercase shadow-[0_0_35px_rgba(220,38,38,0.35)]"
                >
                  Réserver
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-28 border-y border-white/10 bg-zinc-950/60"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-red-500 font-bold mb-5">
              Pourquoi nous choisir
            </p>

            <h3 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-8">
              Une expérience automobile premium
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Chaque véhicule est traité avec précision, passion et attention aux détails.
            </p>

            <div className="space-y-5">
              {[
                'Service mobile à domicile',
                'Produits haut de gamme',
                'Résultats professionnels',
                'Satisfaction garantie',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-black border border-white/10 rounded-2xl px-6 py-5"
                >
                  <ShieldCheck className="text-red-500" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop"
            alt="premium"
            className="rounded-[2.5rem] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.9)]"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-red-500 font-bold mb-5">
              Avis clients
            </p>

            <h3 className="text-5xl md:text-6xl font-black uppercase">
              Ce que disent nos clients
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Service incroyable et finition parfaite.',
              'Mon auto n’a jamais été aussi propre.',
              'Très professionnel et super minutieux.',
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-950 border border-white/10 rounded-[2rem] p-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-red-500 fill-red-500"
                      size={18}
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  “{review}”
                </p>

                <h4 className="font-black uppercase tracking-wide">
                  Client satisfait
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-red-700 to-red-600 rounded-[3rem] p-16 md:p-24 text-center shadow-[0_30px_120px_rgba(220,38,38,0.35)]">
          <h3 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-8">
            Réservez votre detailing premium
          </h3>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            className="inline-flex bg-black hover:bg-zinc-900 transition px-12 py-6 rounded-2xl text-lg font-black uppercase"
          >
            Réserver maintenant
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="logo"
              className="w-24 object-contain"
            />

            <div>
              <h4 className="text-4xl font-black uppercase">
                AL <span className="text-red-600">AUTO</span>
              </h4>

              <p className="text-gray-400">
                Detailing automobile premium.
              </p>
            </div>
          </div>

          <div className="text-gray-500 text-center md:text-right">
            © 2026 AL Auto Detailing — Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}