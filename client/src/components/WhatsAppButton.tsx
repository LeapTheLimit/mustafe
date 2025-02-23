import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const whatsappNumber = "+972524858681"; // Replace with your actual WhatsApp number
  const message =
    language === "en"
      ? "Hi! I'm interested in booking a tour."
      : "مرحباً! أنا مهتم بحجز رحلة.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label={
        language === "en" ? "Contact on WhatsApp" : "تواصل عبر واتساب"
      }
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
}
