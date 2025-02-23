import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: language === 'en' ? "Home" : "الرئيسية" },
    { href: "/booking", label: language === 'en' ? "Booking" : "الحجز" },
    { href: "/hotels", label: language === 'en' ? "Hotels" : "الفنادق" },
    { href: "/trips", label: language === 'en' ? "Trips" : "الرحلات" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white text-xl font-bold">Thailand Travel</a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location === item.href 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}>
                    {item.label}
                  </a>
                </Link>
              ))}

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location === item.href 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'ar' : 'en');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}