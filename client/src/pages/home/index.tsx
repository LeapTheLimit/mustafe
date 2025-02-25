import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Handle navigation
  const handleNavigation = (section: string) => {
    switch (section) {
      case "book":
        window.location.href = "/booking";
        break;
      case "gallery":
        window.location.href = "/gallery";
        break;
      case "about":
        window.location.href = "/about";
        break;
      default:
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMobileMenu(false);
  };

  // Featured Destinations
  const destinations = [
    {
      img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200",
      title: language === "ar" ? "جزر في في" : "Phi Phi Islands",
      description:
        language === "ar"
          ? "الجنة الاستوائية المثالية"
          : "Paradise perfect tropical getaway",
      link: "/trips",
    },
    {
      img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200",
      title: language === "ar" ? "بوكيت" : "Phuket",
      description:
        language === "ar"
          ? "جزيرة المغامرات والاسترخاء"
          : "Island of adventure and relaxation",
      link: "/trips",
    },
    {
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200",
      title: language === "ar" ? "بانكوك" : "Bangkok",
      description:
        language === "ar"
          ? "نبض تايلاند النابض بالحياة"
          : "Thailand's vibrant heartbeat",
      link: "/trips",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}


      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200"
            className="w-full h-full object-cover"
            alt="Thailand Paradise"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative h-full flex items-center justify-center px-6 lg:px-20 text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              {language === "ar" ? "مصطفى تايلاند" : "MUSTAFA Thailand"}
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-white/90 animate-fadeInUp">
              {language === "ar"
                ? "رحلة استثنائية إلى جنة آسيا"
                : "An Extraordinary Journey to Paradise"}
            </p>
            <Link href="/booking">
              <button
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full 
                               font-semibold hover:bg-white/20 transition duration-300 
                               border border-white/30 animate-fadeInUp shadow-lg"
              >
                {language === "ar" ? "احجز الآن" : "Start Your Journey"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {language === "ar" ? "وجهات مميزة" : "Featured Destinations"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Link
              href={dest.link}
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[400px] transform transition-all duration-500 hover:scale-105"
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-200 mb-4">{dest.description}</p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition duration-300">
                  {language === "ar" ? "استكشف المزيد" : "Explore More"}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
