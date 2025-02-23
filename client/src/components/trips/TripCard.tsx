import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import type { Tour } from "@/data/trips";

interface TripCardProps {
  tour: Tour;
}

export default function TripCard({ tour }: TripCardProps) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02] bg-white/5 backdrop-blur-sm border-gray-800">
      <div className="relative h-48">
        <img 
          src={tour.thumbnail || tour.images[0]} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
          {tour.currency} {tour.basePrice}
        </div>
      </div>

      <CardContent className="pt-4 text-white">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{tour.title}</h3>

        {tour.departureFrom && (
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{tour.departureFrom}</span>
          </div>
        )}

        {tour.duration && (
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
        )}

        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="ml-1 text-white">{tour.rating}</span>
          </div>
          <span className="text-sm text-gray-300">
            {tour.reviews} reviews
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={`/trips/${tour.id}`}>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}