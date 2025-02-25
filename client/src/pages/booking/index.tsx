import { useState } from 'react';
import { Link } from "wouter";

export default function Booking() {
  const [language, setLanguage] = useState('en');
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const bookingOptions = [
    {
      img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
      title: language === 'ar' ? "احجز رحلتك" : "Book your trip",
      subtitle: language === 'ar' ? "جماعي، زوجي وعائلي" : "Collective, marital and family",
      icon: "suitcase",
      link: "/trips"
    },
    {
      img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      title: language === 'ar' ? "احجز فندقك" : "Book your Hotel",
      subtitle: language === 'ar' ? "أفضل الفنادق بأفضل الأسعار" : "Best hotels at best prices",
      icon: "hotel",
      link: "/hotels"
    }
  ];

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({...prev, [index]: true}));
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="w-full">
        {bookingOptions.map((option, index) => (
          <div key={index} className="relative w-full h-[400px] md:h-[500px]">
            {!imagesLoaded[index] && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <img 
              src={option.img} 
              alt={option.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(index)}
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{option.title}</h2>
              <p className="text-lg md:text-xl mb-4 text-white max-w-2xl">{option.subtitle}</p>
              <Link 
                href={option.link}
                className="px-8 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full 
                         flex items-center space-x-2 transition-all duration-300 border border-white text-white"
              >
                <i className={`fas fa-${option.icon} mr-2`}></i>
                <span>{language === 'ar' ? 'احجز الآن' : 'Book Now'}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
