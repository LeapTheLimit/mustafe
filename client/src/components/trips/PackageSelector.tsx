import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageSelectorProps {
  packages: any[];
  tourId: string;
}

export default function PackageSelector({ packages, tourId }: PackageSelectorProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const { toast } = useToast();

  const handleBooking = () => {
    if (selectedPackage === null) {
      toast({
        title: "Please select a package",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking initiated",
      description: "Your booking request has been sent!"
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Select Your Package</h3>

      {packages.map((pkg, index) => (
        <Card
          key={index}
          className={cn(
            "cursor-pointer transition-all hover:border-primary",
            selectedPackage === index && "border-primary bg-primary/5"
          )}
          onClick={() => setSelectedPackage(index)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{pkg.name}</h4>
                <ul className="mt-2 space-y-1">
                  {pkg.includes.map((item: string, i: number) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                {pkg.originalPrice && (
                  <span className="text-sm line-through text-muted-foreground">
                    THB {pkg.originalPrice}
                  </span>
                )}
                <div className="text-xl font-bold">THB {pkg.price}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button 
        className="w-full mt-6" 
        size="lg"
        onClick={handleBooking}
        disabled={selectedPackage === null}
      >
        Book Now
      </Button>
    </div>
  );
}
