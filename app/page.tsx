'use client'

import { motion } from 'framer-motion'
import {
  ChevronRight,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Clock3,
} from 'lucide-react'

export default function ALAutoDetailing() {
  const services = [
    {
      title: 'INTÉRIEUR DETAIL',
      description:
        'Nettoyage intérieur haut de gamme avec traitement des tissus, cuir et plastiques.',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'EXTÉRIEUR DETAIL',
      description:
        'Décontamination complète, lavage premium et finition showroom.',
      image:
        'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'POLISSAGE',
      description:
        'Correction des micro-rayures et restauration de la brillance.',
      image:
        'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'TRAITEMENT CÉRAMIQUE',
      description:
        'Protection hydrophobe durable et finition miroir premium.',
      image:
        'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const features = [
    {
      title: 'Service Mobile',
      icon: <MapPin className="text-red-500" size={34} />,
    },
    {
      title: 'Résultat Premium',
      icon: <Sparkles className="text-red-500" size={34} />,
    },
    {
      title: 'Protection Garantie',
      icon: <ShieldCheck className="text-red-500" size={34} />,
    },
    {
      title: 'Disponibilité Rapide',
      icon: <Clock3 className="text-red-500" size={34} />,
    },
  ]

  const testimonials = [
    {
      name: 'Michael T.',
      text: 'Le meilleur detailing que j’ai eu. Mon véhicule avait l’air neuf.',
    },
    {
      name: 'Alexandre P.',
      text: 'Service professionnel et finition incroyable. Je recommande à 100%.',
    },
    {
      name: 'Sabrina L.',
      text: 'Très ponctuel, très minutieux et résultat impeccable.',
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-600/40">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">
              AL <span className="text-red-600">AUTO</span>
            </h1>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400">
              DETAILING
            </p>
          </div>

          <nav className="hidden lg:flex gap-10 uppercase text-sm font-bold tracking-wide">
            <a href="#services" className="hover:text-red-500 transition">
              Services
            </a>
            <a href="#about" className="hover:text-red-500 transition">
              À propos
            </a>
            <a href="#avis" className="hover:text-red-500 transition">
              Avis
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </nav>

          <a
            href="https://calendly.com/alautodetail88"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-black uppercase transition shadow-[0_0_30px_rgba(220,38,38,0.4)]"
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
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2200&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-red-500/20 bg-white/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="uppercase tracking-[0.3em] text-xs text-red-400 font-bold">
                Mercedes AMG Inspired
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-8">
              L’art du
              <br />
              <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.45)]">
                detailing
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
              Service premium de detailing automobile à domicile à Blainville et partout dans les Laurentides.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/alautodetail88"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl font-black uppercase flex items-center gap-3 transition shadow-[0_0_40px_rgba(220,38,38,0.5)]"
              >
                Réserver maintenant
                <ChevronRight className="group-hover:translate-x-1 transition" />
              </motion.a>

              <a
                href="tel:4508034784"
                className="border border-white/15 bg-white/5 backdrop-blur-xl hover:border-red-600 px-10 py-5 rounded-2xl font-black uppercase transition"
              >
                Appeler
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                <Phone className="text-red-500 mb-4" />
                <p className="text-gray-400 uppercase text-sm mb-2">
                  Téléphone
                </p>
                <h3 className="text-3xl font-black">450 803-4784</h3>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
                <MapPin className="text-red-500 mb-4" />
                <p className="text-gray-400 uppercase text-sm mb-2">
                  Région desservie
                </p>
                <h3 className="text-3xl font-black">Laurentides</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-red-600/20 blur-[120px] rounded-full" />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2000&auto=format&fit=crop"
              alt="Detailing premium"
              className="relative rounded-[2.5rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-red-500 font-bold mb-4">
              Services Premium
            </p>

            <h3 className="text-5xl md:text-7xl font-black uppercase">
              Une finition
              <span className="text-red-600"> showroom</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-950/80 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-14 h-1 rounded-full bg-red-600 mb-6" />

                  <h4 className="text-2xl font-black uppercase mb-4">
                    {service.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="py-24 bg-zinc-950/60 border-y border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-red-500 font-bold mb-5">
                Pourquoi nous choisir
              </p>

              <h3 className="text-5xl font-black uppercase mb-8 leading-tight">
                L’expérience detailing nouvelle génération
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Nous apportons une expérience automobile haut de gamme directement chez vous avec des produits premium et une attention extrême aux détails.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-black border border-white/10 rounded-3xl p-8"
                  >
                    <div className="mb-5">{feature.icon}</div>
                    <h4 className="text-xl font-black uppercase">
                      {feature.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop"
                alt="Premium car"
                className="rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="avis" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-red-500 font-bold mb-4">
              Avis clients
            </p>

            <h3 className="text-5xl md:text-6xl font-black uppercase">
              Ce que disent nos clients
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-950/80 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-red-500 fill-red-500" size={18} />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  “{testimonial.text}”
                </p>

                <h4 className="font-black uppercase tracking-wide">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-red-700 to-red-600 rounded-[3rem] p-16 md:p-24 text-center shadow-[0_30px_120px_rgba(220,38,38,0.35)]"
        >
          <h3 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-8">
            Réservez votre detailing premium
          </h3>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Donnez à votre véhicule une finition digne d’un showroom Mercedes AMG.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://calendly.com/alautodetail88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-black hover:bg-zinc-900 transition px-12 py-6 rounded-2xl text-lg font-black uppercase border border-white/10"
          >
            Réserver maintenant
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-4xl font-black uppercase mb-5">
              AL <span className="text-red-600">AUTO</span>
            </h4>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Service professionnel de detailing automobile premium à domicile.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-black uppercase mb-5">
              Contact
            </h5>

            <div className="space-y-4 text-gray-300">
              <p>📞 450 803-4784</p>
              <p>📍 Blainville, Québec</p>
              <p>✉️ alautodetail88@gmail.com</p>
            </div>
          </div>

          <div>
            <h5 className="text-xl font-black uppercase mb-5">
              Réservation
            </h5>

            <a
              href="https://calendly.com/alautodetail88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-black uppercase shadow-[0_0_30px_rgba(220,38,38,0.45)]"
            >
              Ouvrir Calendly
            </a>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-16 border-t border-white/10 pt-8">
          © 2026 AL Auto Detailing — Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}

