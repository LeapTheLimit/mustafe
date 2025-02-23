import { useState } from 'react';
import { Link } from "wouter";

interface HotelFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: string;
  preferences: string;
}

export default function HotelBooking() {
  const [language, setLanguage] = useState('en');
  const [formData, setFormData] = useState<HotelFormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    budget: '',
    preferences: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const popularHotels = [
    {
      name: "Luxury Beach Resort Phuket",
      location: "Phuket",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1",
      description: "5-star beachfront resort with pool villas",
      priceRange: "$200-500/night"
    },
    {
      name: "Bangkok City Hotel",
      location: "Bangkok",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e",
      description: "Central location with city views",
      priceRange: "$100-300/night"
    },
    {
      name: "Chiang Mai Boutique Resort",
      location: "Chiang Mai",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1",
      description: "Traditional Thai style with modern comfort",
      priceRange: "$80-200/night"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
        budget: '',
        preferences: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          {language === 'ar' ? 'احجز فندقك في تايلاند' : 'Book Your Hotel in Thailand'}
        </h1>

        {/* Popular Hotels Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {popularHotels.map((hotel, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                <p className="text-gray-400 mb-2">{hotel.location}</p>
                <p className="text-sm mb-2">{hotel.description}</p>
                <p className="text-blue-400">{hotel.priceRange}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
            {submitStatus && (
              <div className={`mb-4 p-3 rounded ${
                submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {submitStatus === 'success' 
                  ? 'Your booking request has been sent! We will contact you soon.'
                  : 'Something went wrong. Please try again.'}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2">Check-in Date</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2">Check-out Date</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2">Number of Guests</label>
                <input
                  type="number"
                  min="1"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                />
              </div>

              <div>
                <label className="block mb-2">Budget per Night</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2">Special Preferences</label>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-white h-24"
                  value={formData.preferences}
                  onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/972524858681"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 bg-green-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300 shadow-lg"
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      >
        <i className="fab fa-whatsapp text-xl"></i>
        <span>{language === 'ar' ? 'تواصل معنا على واتساب' : 'Contact us on WhatsApp'}</span>
      </a>
    </div>
  );
}
