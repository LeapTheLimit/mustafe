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
      basePrice: 1750,
      currency: "THB",
      duration: "9hr 30min",
      departureFrom: "Phuket Province",
      packages: [
        {
          name: "Lazy Bird Speedboat",
          price: 1750,
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
      basePrice: 760,
      currency: "THB",
      packages: [
        {
          name: "Feed Me Program",
          price: 760,
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
        "https://images.unsplash.com/photo-1559963110-71b394e7494d",
        "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5"
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
      basePrice: 2000,
      currency: "THB",
      duration: "12hr - 20hr",
      location: "YONA Beach",
      packages: [
        {
          name: "Regular Pass",
          price: 2000,
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
        "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16",
        "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16"
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
      basePrice: 2647,
      currency: "THB",
      duration: "8hr - 10hr 55min",
      departureFrom: "Phuket Province, Phang Nga",
      packages: [
        {
          name: "Speed Boat Day Tour + Transfer",
          price: 2647,
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
        "https://images.unsplash.com/photo-1589179447852-a134b5b0c0d2",
        "https://images.unsplash.com/photo-1589179447852-a134b5b0c0d2"
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
        "https://images.unsplash.com/photo-1623857584158-23c769acb3c5",
        "https://images.unsplash.com/photo-1623857584158-23c769acb3c5"
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
        "https://images.unsplash.com/photo-1581147036324-c1c7d7cab066",
        "https://images.unsplash.com/photo-1581147036324-c1c7d7cab066"
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
      basePrice: 1600,
      currency: "THB",
      packages: [
        {
          name: "Day Pass",
          price: 1600,
          originalPrice: 1800,
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
          price: 2000,
          includes: [
            "Full day access",
            "Private round-trip transfer",
            "Free cancellation"
          ]
        }
      ],
      operatingHours: "10:00 AM - 6:00 PM",
      images: [
        "https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
        "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg"
      ],
      thumbnail: "https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&w=600"
    }
  }
};

export default toursData;