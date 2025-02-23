import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface TripFiltersProps {
  sortBy: "price" | "rating";
  onSortChange: (value: "price" | "rating") => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
}

export default function TripFilters({
  sortBy,
  onSortChange,
  priceRange,
  onPriceRangeChange,
}: TripFiltersProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">
              Sort By
            </label>
            <Select 
              value={sortBy} 
              onValueChange={(value) => onSortChange(value as "price" | "rating")}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="price">Price: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-[2]">
            <label className="text-sm font-medium mb-2 block">
              Price Range: THB {priceRange[0]} - THB {priceRange[1]}
            </label>
            <Slider
              min={0}
              max={5000}
              step={100}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              className="mt-2"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
