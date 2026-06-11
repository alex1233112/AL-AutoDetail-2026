"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

function Car() {
  return (
    <mesh rotation={[0, 1, 0]}>
      <boxGeometry args={[2, 0.5, 4]} />
      <meshStandardMaterial color="red" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const services = [
    { title: "Exterior Wash", price: "40$", img: "/exterieur.jpg" },
    { title: "Interior Detail", price: "60$", img: "/interieur.jpg" },
    { title: "Full Detail", price: "120$", img: "/fulldetail.jpg" },
  ]

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative text-center">

        <div className="absolute inset-0 bg-[url('/car-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold tracking-widest z-10"
        >
          AL AUTO DETAIL
        </motion.h1>

        <p className="text-red-500 mt-3 z-10">
          FERRARI EXPERIENCE DETAILING
        </p>

        <div className="mt-6 z-10">
          <Image src="/logo.png" width={140} height={140} alt="logo" />
        </div>

        <a
          href="#car"
          className="mt-8 bg-red-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition z-10"
        >
          Voir expérience 3D
        </a>
      </section>

      {/* 3D CAR SECTION */}
      <section id="car" className="py-32 bg-black text-center">

        <h2 className="text-4xl font-bold mb-10">
          Showroom 3D
        </h2>

        <div className="h-[500px] w-full">
          <Canvas camera={{ position: [5, 2, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />

            <Car />

            <OrbitControls autoRotate autoRotateSpeed={2} enableZoom />
            <Environment preset="city" />
          </Canvas>
        </div>

        <p className="text-gray-400 mt-4">
          Tourne la voiture avec ta souris
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6">

        <h2 className="text-4xl text-center font-bold mb-16">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {services.map((s, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition border border-red-900"
            >
              <Image src={s.img} width={600} height={400} alt={s.title} />
              <div className="p-5">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-red-500 font-bold">{s.price}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="py-24 bg-zinc-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Maintenance Premium
        </h2>

        <div className="max-w-xl mx-auto border border-red-900 p-6 rounded-xl bg-black">

          <p className="text-gray-300">
            Gardez votre voiture toujours parfaite.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>💎 100$ / semaine</li>
            <li>💎 130$ / 2 semaines</li>
            <li>💎 160$ / mois</li>
          </ul>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 px-6">

        <h2 className="text-4xl text-center font-bold mb-12">
          Résultats
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <Image src="/g1.jpg" width={500} height={400} alt="" />
          <Image src="/g2.jpg" width={500} height={400} alt="" />
          <Image src="/g3.jpg" width={500} height={400} alt="" />
        </div>

      </section>

      {/* BOOKING */}
      <section className="py-32 bg-black px-6">

        <h2 className="text-4xl text-center font-bold mb-10">
          Réservation
        </h2>

        <form className="max-w-xl mx-auto space-y-4">

          <input className="w-full p-4 bg-zinc-900 border border-gray-700 rounded"
            placeholder="Nom complet" />

          <input className="w-full p-4 bg-zinc-900 border border-gray-700 rounded"
            placeholder="Téléphone" />

          <select className="w-full p-4 bg-zinc-900 border border-gray-700 rounded">
            <option>Exterior Wash</option>
            <option>Interior Detail</option>
            <option>Full Detail</option>
          </select>

          <textarea className="w-full p-4 bg-zinc-900 border border-gray-700 rounded"
            placeholder="Notes client" />

          <button className="w-full bg-red-600 py-4 font-bold rounded hover:scale-105 transition">
            Envoyer
          </button>

        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-zinc-800">
        AL Auto Detail © 2026 - Saint-Jérôme
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/14501234567?text=Je veux réserver un detailing"
        className="fixed bottom-6 right-6 bg-red-600 px-6 py-3 rounded-full font-bold hover:scale-110 transition"
      >
        WhatsApp
      </a>

    </main>
  )
}