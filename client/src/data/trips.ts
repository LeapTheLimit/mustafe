import { z } from "zod";

// Define the schema for tour packages
export const TourPackageSchema = z.object({
  name: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  includes: z.array(z.string())
});

// Define the schema for tours
export const TourSchema = z.object({
  id: z.string(),
  title: z.string(),
  rating: z.number(),
  reviews: z.string(),
  bookings: z.string(),
  basePrice: z.number(),
  currency: z.string(),
  duration: z.string().optional(),
  departureFrom: z.string().optional(),
  packages: z.array(TourPackageSchema),
  schedule: z.array(z.string()).optional(),
  images: z.array(z.string()),
  thumbnail: z.string().optional(),
  description: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  operatingHours: z.string().optional(),
  location: z.string().optional()
});

export type Tour = z.infer<typeof TourSchema>;
export type TourPackage = z.infer<typeof TourPackageSchema>;

const toursData: Record<string, { en: Tour }> = {
  'phi-phi-tour': {
    en: {
      id: "phi-phi-tour",
      title: "Phi Phi Islands Full Day Tour From Phuket",
      rating: 4.5,
      reviews: "356",
      bookings: "10K+",
      basePrice: 1600,
      currency: "THB",
      duration: "9hr 30min",
      departureFrom: "Phuket Province",
      packages: [
        {
          name: "Lazy Bird Speedboat",
          price: 1600,
          includes: [
            "Hotel Pick Up",
            "English/Chinese/Thai Guide",
            "Lunch",
            "Snorkeling Equipment",
            "Insurance"
          ]
        }
      ],
      schedule: [
        "09:00 - Departure",
        "10:00 - AA Marina",
        "11:30 - Monkey Bay",
        "13:00 - Koh Phi Phi",
        "14:00 - Maya Bay",
        "17:30 - Return"
      ],
      images: [
        "https://images.unsplash.com/photo-1537956965359-7573183d1f57",
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a"
      ],
      highlights: [
        "Visit Maya Bay where 'The Beach' was filmed",
        "Snorkel at Pileh Lagoon",
        "See quirky macaques at Monkey Beach",
        "Visit the historic Viking Cave"
      ]
    }
  },
  'elephant-sanctuary': {
    en: {
      id: "elephant-sanctuary",
      title: "Elephant Jungle Sanctuary Phuket Experience",
      rating: 4.8,
      reviews: "1K+",
      bookings: "40K+",
      basePrice: 1200,
      currency: "THB",
      packages: [
        {
          name: "Feed Me Program",
          price: 1200,
          includes: [
            "Food for elephant feeding",
            "Free drink",
            "Hotel pick up and drop off",
            "English-speaking guide"
          ]
        }
      ],
      location: "Elephant Jungle Cafe",
      images: [
        "/images/elephant-sanctuary/1.jpeg",
        "/images/elephant-sanctuary/2.jpeg",
        "/images/elephant-sanctuary/3.jpg"
      ],
      highlights: [
        "Interact with gentle giants",
        "Learn about their behavioral patterns",
        "Play, touch, and feed the elephants",
        "Enjoy a mud spa with the elephants"
      ]
    }
  },
  'yona-beach-club': {
    en: {
      id: "yona-beach-club",
      title: "Yona Beach Club Experience Phuket",
      rating: 4.4,
      reviews: "154",
      bookings: "8K+",
      basePrice: 2900,
      currency: "THB",
      duration: "12hr - 20hr",
      location: "YONA Beach",
      packages: [
        {
          name: "Regular Pass",
          price: 2900,
          includes: [
            "All day access",
            "1,000 THB F&B credits",
            "Pool access",
            "Towel service",
            "Transfer by Shuttle boat"
          ]
        }
      ],
      operatingHours: "Monday-Sunday: 14:30-21:30",
      images: [
        "/images/yona-beach-club/1.jpg",
        "/images/yona-beach-club/2.jpg",
        "/images/yona-beach-club/3.jpg"
      ],
      highlights: [
        "Morning Chill or Afternoon Party Atmosphere",
        "Resident DJ sets",
        "Infinity pool with sea view",
        "Panoramic restaurant views",
        "Magical sunset experience"
      ]
    }
  },
  'similan-islands': {
    en: {
      id: "similan-islands",
      title: "Similan Islands Full Day Tour by Speed Boat",
      rating: 4.7,
      reviews: "676",
      bookings: "10K+",
      basePrice: 2400,
      currency: "THB",
      duration: "8hr - 10hr 55min",
      departureFrom: "Phuket Province, Phang Nga",
      packages: [
        {
          name: "Speed Boat Day Tour + Transfer",
          price: 2400,
          includes: [
            "National Park Admission",
            "English/Thai Guide",
            "Breakfast & Lunch",
            "Snorkeling Equipment",
            "Insurance"
          ]
        }
      ],
      schedule: [
        "08:00 - Departure",
        "10:20 - Similan Islands",
        "11:20 - Ko Bangu",
        "12:30 - Ko Payu",
        "15:00 - Return Journey"
      ],
      images: [
        "/images/similan-islands/1.jpg",
        "/images/similan-islands/2.avif",
        "/images/similan-islands/3.jpeg"
      ],
      highlights: [
        "Crystal-clear waters",
        "Vibrant coral reefs",
        "White sandy beaches",
        "Snorkel among exotic marine life",
        "See sea turtles"
      ]
    }
  },
  'zipline-adventure': {
    en: {
      id: "zipline-adventure",
      title: "Zipline Adventure at Hanuman World",
      rating: 4.7,
      reviews: "1K+",
      bookings: "20K+",
      basePrice: 790,
      currency: "THB",
      location: "Hanuman World Phuket",
      packages: [
        {
          name: "World A+",
          price: 790,
          includes: [
            "32 zipline platforms",
            "Roller zipline",
            "Skywalk access",
            "Meal included",
            "All necessary equipment"
          ]
        }
      ],
      images: [
        "/images/zipline-adventure/1.jpeg",
        "/images/zipline-adventure/2.jpeg",
        "/images/zipline-adventure/3.jpeg"
      ],
      highlights: [
        "Biggest Zipline park in Thailand",
        "30 activity platforms",
        "Longest and fastest ziplines",
        "40m high Skywalk",
        "Professional guides"
      ]
    }
  },
  'atv-adventure': {
    en: {
      id: "atv-adventure",
      title: "Phuket ATV & Zipline Experience",
      rating: 4.8,
      reviews: "92",
      bookings: "2K+",
      basePrice: 800,
      currency: "THB",
      duration: "30min - 2hr",
      departureFrom: "Chaithararam Temple",
      packages: [
        {
          name: "ATV Short Course",
          price: 800,
          includes: [
            "30 minutes ATV 200cc experience",
            "Professional instructor",
            "Safety equipment",
            "Hotel transfers",
            "Insurance"
          ]
        }
      ],
      images: [
        "/images/atv-adventure/1.jpg",
        "/images/atv-adventure/2.jpeg",
        "/images/atv-adventure/3.jpeg"
      ],
      highlights: [
        "Polaris Phoenix 200cc quad bike ride",
        "Challenging off-road trails",
        "Dense jungle exploration",
        "Big Buddha visit",
        "Expert guide support"
      ]
    }
  },
  'andamanda-waterpark': {
    en: {
      id: "andamanda-waterpark",
      title: "Andamanda Phuket Waterpark Ticket",
      rating: 4.6,
      reviews: "1K+",
      bookings: "80K+",
      basePrice: 1800,
      currency: "THB",
      packages: [
        {
          name: "Day Pass",
          price: 1800,
          originalPrice: 1900,
          includes: [
            "Full day access",
            "Cold cup with unlimited water refill",
            "Free cancellation"
          ]
        },
        {
          name: "Day Pass + Transfer",
          price: 1950,
          includes: [
            "Full day access",
            "Round-trip transfer (In Zone)",
            "Free cancellation"
          ]
        },
        {
          name: "Private Transfer Package",
          price: 2100,
          includes: [
            "Full day access",
            "Private round-trip transfer",
            "Free cancellation"
          ]
        }
      ],
      operatingHours: "10:00 AM - 6:00 PM",
      images: [
        "/images/andamanda-waterpark/1.jpg",
        "/images/andamanda-waterpark/2.jpeg",
      ],
      thumbnail: "images/andamanda-waterpark/2.jpeg"
    }
  },
  'jetski-adventure': {
    en: {
      id: "jetski-adventure",
      title: "Phuket Jet Ski Island Hopping Adventure",
      rating: 4.7,
      reviews: "234",
      bookings: "5K+",
      basePrice: 6200,
      currency: "THB",
      duration: "4hr",
      departureFrom: "Chalong Pier",
      packages: [
        {
          name: "Premium Island Tour",
          price: 6200,
          includes: [
            "Professional guide",
            "Latest model Jet Ski",
            "Safety equipment",
            "Insurance",
            "Refreshments",
            "Hotel transfer",
            "Waterproof camera rental"
          ]
        }
      ],
      schedule: [
        "09:00 - Safety briefing",
        "09:30 - Start jet ski tour",
        "11:00 - Island exploration",
        "12:30 - Snorkeling break",
        "13:00 - Return journey"
      ],
      images: [
        "/workspaces/mustafe/photos/jetski-adventure/1.jpg",
        "/workspaces/mustafe/photos/jetski-adventure/2.jpg"
      ],
      highlights: [
        "Visit 4-5 tropical islands",
        "High-performance jet skis",
        "Professional guides",
        "Snorkeling opportunity",
        "Amazing photo opportunities"
      ]
    }
  },
  'phuket-city-tour': {
    en: {
      id: "phuket-city-tour",
      title: "Phuket Cultural Heritage City Tour",
      rating: 4.6,
      reviews: "428",
      bookings: "15K+",
      basePrice: 1600,
      currency: "THB",
      duration: "8hr",
      departureFrom: "Phuket Old Town",
      packages: [
        {
          name: "Cultural Day Tour",
          price: 1600,
          includes: [
            "English speaking guide",
            "Air-conditioned vehicle",
            "Lunch at local restaurant",
            "Temple entrance fees",
            "Hotel pickup and drop-off",
            "Bottled water"
          ]
        }
      ],
      images: [
        "/images/phuket-city-tour/1.jpg",
        "/images/phuket-city-tour/2.jpg",
        "/images/phuket-city-tour/3.jpg"
      ],
      highlights: [
        "Visit Big Buddha statue",
        "Explore Sino-Portuguese architecture",
        "Traditional local market visit",
        "Famous viewpoint stops",
        "Local food tasting"
      ]},
  },
  'white-water-rafting': {
    en: {
      id: "white-water-rafting",
      title: "Phuket White Water Rafting Adventure",
      rating: 4.8,
      reviews: "312",
      bookings: "7K+",
      basePrice: 1300,
      currency: "THB",
      duration: "6hr",
      departureFrom: "Phang Nga Province",
      packages: [
        {
          name: "Rafting Adventure",
          price: 1300,
          includes: [
            "Professional river guide",
            "Safety equipment",
            "Lunch buffet",
            "Insurance",
            "Hotel transfer",
            "Dry bag for belongings"
          ]
        }
      ],
      images: [
        "/images/white-water-rafting'/1.jpeg",
        "/images/white-water-rafting'/2.jpeg"
      ],
      highlights: [
        "5km river adventure",
        "Class 2-4 rapids",
        "Stunning jungle scenery",
        "Professional safety crew",
        "Photo service available"
      ]
    }
  },
  'coral-island-sunset': {
    en: {
      id: "coral-island-sunset",
      title: "Coral Island Sunset Tour",
      rating: 4.7,
      reviews: "286",
      bookings: "12K+",
      basePrice: 1600,
      currency: "THB",
      duration: "6hr",
      departureFrom: "Chalong Pier",
      packages: [
        {
          name: "Sunset Special",
          price: 1600,
          includes: [
            "Speedboat transfer",
            "Snorkeling equipment",
            "BBQ dinner",
            "Professional guide",
            "Insurance",
            "Hotel transfer",
            "Sunset viewing"
          ]
        }
      ],
      schedule: [
        "14:00 - Departure",
        "14:45 - Snorkeling session",
        "16:30 - Beach time",
        "17:30 - Sunset viewing",
        "18:30 - BBQ dinner",
        "19:30 - Return"
      ],
      images: [
        "/images/coral-island-sunset/1.jpg",
        "/images/coral-island-sunset/4.jpg",
        "/images/coral-island-sunset/3.jpg"
      ],
      highlights: [
        "Spectacular sunset views",
        "Coral reef snorkeling",
        "Beach activities",
        "BBQ dinner on beach",
        "Night sea experience"
      ]
    }
  }
};

export default toursData;