import { useState } from "react";
import { useParams } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";
import ImageGallery from "@/components/trips/ImageGallery";
import BookingForm from "@/components/trips/BookingForm";
import toursData from "@/data/trips";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TripDetails() {
  const { id } = useParams();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // We'll need to handle both English and Arabic data
  const tour = id && toursData[id]?.[language];

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <h1 className="text-2xl text-white">
          {language === "en" ? "Tour not found" : "الرحلة غير موجودة"}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4 text-black">{tour.title}</h1>

            <div className="flex items-center gap-4 mb-6 text-black">
              <div className="flex items-center">
                <Star className="text-yellow-400 w-5 h-5" />
                <span className="ml-1">{tour.rating}</span>
              </div>
              <div>{tour.reviews} reviews</div>
              <div>{tour.bookings} bookings</div>
            </div>

            <ImageGallery images={tour.images} />

            {tour.schedule && (
              <Card className="mt-8 bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {language === "en" ? "Schedule" : "الجدول الزمني"}
                  </h2>
                  <div className="space-y-4">
                    {tour.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-white"
                      >
                        <Clock className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8 bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                {tour.departureFrom && (
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>
                      {language === "en" ? "Departure from " : "المغادرة من "}
                      {tour.departureFrom}
                    </span>
                  </div>
                )}
                {tour.duration && (
                  <div className="flex items-center gap-2 mb-6 text-white">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                )}

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => setIsBookingOpen(true)}
                >
                  {language === "en" ? "Book Now" : "احجز الآن"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <BookingForm
        tripName={tour.title}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
