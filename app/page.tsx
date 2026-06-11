"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animation scroll
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header id="navbar" className="navbar">
        <h1>AL AUTO DETAIL</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#prix">Prix</a>
          <a href="#plan">Plans</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content reveal">
          <h1>PERFECTION DETAILING</h1>
          <p>Service premium pour voitures sport & luxe</p>
          <a href="#contact" className="btn">Réserver</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2 className="title reveal">Nos Services</h2>

        <div className="grid">
          {[
            ["Nettoyage complet", "Intérieur + extérieur professionnel"],
            ["Polissage", "Correction peinture & brillance miroir"],
            ["Céramique", "Protection longue durée premium"],
            ["Intérieur luxe", "Cuir, tapis, plastique détaillé"],
          ].map((item, i) => (
            <div className="card reveal" key={i}>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRIX */}
      <section id="prix">
        <h2 className="title reveal">Prix</h2>

        <div className="grid">
          {[
            ["Sedan", "120$+"],
            ["SUV", "150$+"],
            ["Sport / Luxe", "200$+"],
          ].map((item, i) => (
            <div className="card reveal" key={i}>
              <h3>{item[0]}</h3>
              <p className="price">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLAN */}
      <section id="plan">
        <h2 className="title reveal">Plans Maintenance</h2>

        <div className="grid">
          {[
            ["Hebdomadaire", "100$ / semaine"],
            ["2 semaines", "130$"],
            ["Mensuel", "160$"],
          ].map((item, i) => (
            <div className="card reveal" key={i}>
              <h3>{item[0]}</h3>
              <p className="price">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2 className="title reveal">Contact</h2>
        <p>📍 Saint-Jérôme, QC</p>
        <p>📞 000-000-0000</p>

        <a className="btn" href="mailto:contact@alautodetail.com">
          Envoyer un email
        </a>
      </section>

      {/* STYLE */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 18px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          transition: 0.3s;
          z-index: 1000;
        }

        .navbar.scrolled {
          background: rgba(0,0,0,0.95);
          border-bottom: 1px solid #222;
        }

        .navbar h1 {
          color: #d4af37;
          font-size: 20px;
          letter-spacing: 2px;
        }

        .navbar a {
          color: white;
          margin-left: 20px;
          text-decoration: none;
          font-weight: bold;
        }

        .navbar a:hover {
          color: #d4af37;
        }

        .hero {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70") center/cover;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: 60px;
          color: #d4af37;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: #d4af37;
          color: black;
          font-weight: bold;
          border-radius: 8px;
        }

        section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .title {
          text-align: center;
          font-size: 34px;
          color: #d4af37;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .card {
          background: #141414;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #222;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: #d4af37;
        }

        .price {
          margin-top: 10px;
          font-weight: bold;
        }

        .contact {
          text-align: center;
        }

        /* ANIMATION */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}