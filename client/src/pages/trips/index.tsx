import { useState } from "react";
import TripCard from "@/components/trips/TripCard";
import TripFilters from "@/components/trips/TripFilters";
import { useToast } from "@/hooks/use-toast";
import toursData from "@/data/trips";
import type { Tour } from "@/data/trips";

export default function TripListing() {
  const { toast } = useToast();
  const [sortBy, setSortBy] = useState<"price" | "rating">("rating");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const tours = Object.values(toursData).map(tour => tour.en);

  const filteredTours = tours.filter(tour => 
    tour.basePrice >= priceRange[0] && tour.basePrice <= priceRange[1]
  ).sort((a, b) => 
    sortBy === "price" 
      ? a.basePrice - b.basePrice 
      : b.rating - a.rating
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1200"
            alt="Thailand Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Discover Thailand
              </h1>
              <p className="text-xl text-white">
                Explore our handpicked tours and adventures
              </p>
            </div>
          </div>
        </div>

        <TripFilters 
          sortBy={sortBy}
          onSortChange={setSortBy}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredTours.map((tour) => (
            <TripCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}