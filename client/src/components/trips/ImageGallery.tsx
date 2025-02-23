import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={images[selectedImage]}
          alt="Tour"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className={cn(
              "cursor-pointer overflow-hidden transition-all",
              selectedImage === index && "ring-2 ring-primary"
            )}
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-[4/3]">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
