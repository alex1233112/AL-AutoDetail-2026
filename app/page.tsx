import {
  Car,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Phone,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Home() {
  const phone = "450-803-4784";
  
  const booking =
  "https://calendly.com/alautodetail88";
  
  const services = [
    {
      title: "Intérieur Premium",
      price: "220$",
      image:
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1600&auto=format&fit=crop",
      description:
        "Nettoyage complet de l'intérieur : tapis, sièges, plastiques, console, portes, coffre et finition détaillée.",
      points: [
        "Aspirateur complet",
        "Nettoyage des surfaces",
        "Finition propre et premium",
      ],
    },
    {
      title: "Extérieur Premium",
      price: "220$",
      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop",
      description:
        "Lavage extérieur professionnel avec décontamination légère, nettoyage des roues et finition brillante.",
      points: ["Lavage minutieux", "Roues et pneus", "Brillance extérieure"],
    },
    {
      title: "Package Complet",
      price: "380$",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
      description:
        "Le meilleur choix : intérieur premium + extérieur premium pour une transformation complète du véhicule.",
      points: [
        "Intérieur + extérieur",
        "Meilleur rapport qualité/prix",
        "Résultat complet",
      ],
    },
  ];

  const coatings = [
    {
      title: "Céramique 3 mois",
      image:
        "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=1600&auto=format&fit=crop",
      text: "Protection hydrophobe idéale pour garder une belle brillance et faciliter les lavages.",
    },
      
    {
      title: "Céramique 9 mois",
      image:
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1600&auto=format&fit=crop",
      text: "Protection premium longue durée avec un effet brillant, lisse et hydrophobe.",
    },
  ];

  const maintenance = [
    {
      title: "Chaque semaine",
      price: "100$",
      text: "Parfait pour garder un véhicule toujours propre.",
    },
    {
      title: "Aux deux semaines",
      price: "130$",
      text: "Idéal pour un entretien régulier sans laisser la saleté s'accumuler.",
    },
    {
      title: "Chaque mois",
      price: "160$",
      text: "Un service basic pour maintenir un bon niveau de propreté.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="flex items-center gap-3">
            <img src="/logo.png" alt="A.L Auto Detailing" className="h-14 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest text-gray-300 md:flex">
            <a href="#services" className="transition hover:text-red-500">Services</a>
            <a href="#polissage" className="transition hover:text-red-500">Polissage</a>
            <a href="#ceramique" className="transition hover:text-red-500">Céramique</a>
            <a href="#maintenance" className="transition hover:text-red-500">Maintenance</a>
            <a href="#contact" className="transition hover:text-red-500">Contact</a>
          </nav>

          <a
            href={booking}
            target="_blank"
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold transition hover:bg-red-700"
          >
            Réserver
          </a>
        </div>
      </header>

      <section
        id="accueil"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 pt-28 text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.95)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="relative z-10 max-w-5xl">
          <img src="/logo.png" alt="A.L Auto Detailing" className="mx-auto mb-8 w-72 md:w-96" />

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Blainville / Laurentides
          </p>

          <h1 className="text-5xl font-black uppercase leading-tight md:text-7xl">
            Detailing automobile
            <span className="block text-red-600">premium</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Nous redonnons vie à votre véhicule avec un service minutieux,
            propre et professionnel. Chaque détail compte.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={booking}
              target="_blank"
              className="rounded-full bg-red-600 px-10 py-4 font-bold uppercase tracking-wider transition hover:scale-105 hover:bg-red-700"
            >
              Réserver sur WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="rounded-full border border-white/30 px-10 py-4 font-bold uppercase tracking-wider transition hover:border-red-600 hover:text-red-500"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Nos services
            </p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Services Premium
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl transition duration-300 hover:-translate-y-3 hover:border-red-600/60"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <p className="absolute bottom-5 left-5 rounded-full bg-red-600 px-5 py-2 text-2xl font-black">
                    {service.price}
                  </p>
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-3xl font-black">{service.title}</h3>
                  <p className="mb-6 leading-7 text-gray-300">{service.description}</p>

                  <div className="space-y-3">
                    {service.points.map((point, i) => (
                      <p key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="h-5 w-5 text-red-500" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="polissage" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Correction peinture
            </p>

            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Polissage 1-2 étapes
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Le polissage permet de corriger les micro-rayures, les marques de
              lavage, l'oxydation légère et de redonner une profondeur à la peinture.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="rounded-3xl border border-white/10 bg-black p-6">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold">
                  <Sparkles className="text-red-500" />
                  Polissage 1 étape
                </h3>
                <p className="text-gray-300">
                  Idéal pour améliorer la brillance et retirer les petites imperfections légères.
                </p>
              </div>

              <div className="rounded-3xl border border-red-600/40 bg-black p-6">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold">
                  <Star className="text-red-500" />
                  Polissage 2 étapes
                </h3>
                <p className="text-gray-300">
                  Correction plus avancée pour un résultat plus profond, plus brillant et plus professionnel.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop"
              alt="Polissage automobile"
              className="h-[550px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="ceramique" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Protection peinture
            </p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Céramique Coating
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {coatings.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 transition hover:border-red-600/60"
              >
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />

                <div className="p-8">
                  <ShieldCheck className="mb-5 h-12 w-12 text-red-500" />
                  <h3 className="mb-4 text-3xl font-black">{item.title}</h3>
                  <p className="leading-7 text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="maintenance" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Entretien régulier
            </p>
            <h2 className="text-4xl font-black uppercase md:text-6xl">
              Maintenance
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-gray-300">
              Un service basic parfait pour garder votre véhicule propre toute l'année.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {maintenance.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-red-600/40 bg-black p-8 text-center transition hover:-translate-y-2 hover:bg-red-600"
              >
                <CalendarCheck className="mx-auto mb-5 h-14 w-14" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="my-6 text-5xl font-black">{item.price}</p>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Car className="mx-auto mb-6 h-16 w-16 text-red-500" />

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Deux jeunes passionnés
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Nous sommes deux jeunes passionnés de véhicules qui aiment prendre
            soin de leur travail. Chez A.L Auto Detailing, chaque voiture est
            traitée avec minutie, respect et attention. Notre but est simple :
            offrir un résultat propre, professionnel et à la hauteur de vos attentes.
          </p>

          <p className="mt-5 text-lg leading-9 text-gray-300">
            Que ce soit pour un nettoyage intérieur, extérieur, un package
            complet, un polissage ou une protection céramique, nous prenons le
            temps de bien faire les choses.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-red-700 via-red-600 to-black px-6 py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          <img src="/logo.png" alt="A.L Auto Detailing" className="mx-auto mb-8 w-64" />

          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Prêt à réserver ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Contacte-nous dès aujourd'hui pour redonner une nouvelle vie à ton véhicule.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href={booking}
              target="_blank"
              className="flex items-center gap-3 rounded-full bg-black px-10 py-4 font-bold uppercase transition hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 rounded-full border border-white px-10 py-4 font-bold uppercase transition hover:bg-white hover:text-black"
            >
              <Phone className="h-5 w-5" />
              {phone}
            </a>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-white/90">
            <MapPin className="h-5 w-5" />
            Blainville / Laurentides
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © 2026 A.L Auto Detailing — Tous droits réservés.
      </footer>
    </main>
  );
}