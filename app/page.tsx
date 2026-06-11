"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const onScroll = () => {
      if (!navbar) return;
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      title: "Nettoyage complet",
      desc: "Intérieur + extérieur professionnel",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      price: "À partir de 120$",
    },
    {
      title: "Polissage",
      desc: "Correction peinture + brillance miroir",
      img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6d4",
      price: "À partir de 180$",
    },
    {
      title: "Céramique",
      desc: "Protection longue durée premium",
      img: "https://images.unsplash.com/photo-1613214149922-f1809c99b414",
      price: "À partir de 350$",
    },
    {
      title: "Intérieur luxe",
      desc: "Cuir, tapis, finition détaillée",
      img: "https://images.unsplash.com/photo-1613214150351-0f2c8a5a8d5d",
      price: "À partir de 140$",
    },
  ];

  return (
    <main className="page">

      {/* NAVBAR */}
      <header id="navbar" className="navbar">
        <h1>AL AUTO DETAIL</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#prix">Prix</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content reveal">
          <h1>RED PREMIUM DETAILING</h1>
          <p>Finition luxe pour voitures sport & exotic</p>
          <a href="#contact" className="btn">Réserver</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <h2 className="title reveal">Nos Services</h2>

        <div className="grid">
          {services.map((s, i) => (
            <div className="card reveal" key={i}>
              <img src={s.img} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRIX SERVICES GLOBAL */}
      <section id="prix">
        <h2 className="title reveal">Packages Prix</h2>

        <div className="grid">
          {[
            ["Sedan", "120$ - 180$"],
            ["SUV", "150$ - 220$"],
            ["Sport / Exotic", "200$ - 400$"],
          ].map((p, i) => (
            <div className="card reveal" key={i}>
              <h3>{p[0]}</h3>
              <p className="price">{p[1]}</p>
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
        .page {
          background: #0a0a0a;
          color: white;
        }

        /* NAVBAR */
        .navbar {
          position: fixed;
          width: 100%;
          top: 0;
          display: flex;
          justify-content: space-between;
          padding: 18px 40px;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          transition: 0.3s;
          z-index: 1000;
        }

        .navbar.scrolled {
          background: rgba(0,0,0,0.95);
          border-bottom: 1px solid #330000;
        }

        .navbar h1 {
          color: #ff1e1e;
          letter-spacing: 2px;
        }

        .navbar a {
          color: white;
          margin-left: 20px;
          text-decoration: none;
        }

        .navbar a:hover {
          color: #ff1e1e;
        }

        /* HERO */
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
          background: rgba(0,0,0,0.65);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: 60px;
          color: #ff1e1e;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: #ff1e1e;
          color: white;
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
          color: #ff1e1e;
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .card {
          background: #141414;
          border: 1px solid #222;
          padding: 20px;
          border-radius: 12px;
          transition: 0.3s;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: #ff1e1e;
        }

        .card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .price {
          display: block;
          margin-top: 10px;
          font-weight: bold;
          color: #fff;
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

        .contact {
          text-align: center;
        }
      `}</style>
    </main>
  );
}