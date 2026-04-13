/** Shopping, schools, parks, services near Pewter Valley / Silverado Ranch — used by neighborhood hub & amenities guide */

export const neighborhoodFeatures = [
  {
    category: "Shopping & Dining",
    features: [
      {
        name: "Silverado Ranch Shopping Center",
        distance: "2 minutes",
        description: "Convenient local shopping with grocery stores, restaurants, and services",
        type: "shopping",
      },
      {
        name: "M Resort Spa Casino",
        distance: "5 minutes",
        description: "Luxury resort with fine dining, entertainment, and gaming",
        type: "entertainment",
      },
      {
        name: "Green Valley Ranch Resort & Casino",
        distance: "8 minutes",
        description: "Upscale resort with premium dining and entertainment",
        type: "entertainment",
      },
      {
        name: "The District at Green Valley Ranch",
        distance: "10 minutes",
        description: "Premier shopping center with high-end retailers and restaurants",
        type: "shopping",
      },
    ],
  },
  {
    category: "Education",
    features: [
      {
        name: "Silverado Ranch Elementary School",
        distance: "1 minute",
        description: "Highly rated elementary school serving the Silverado Ranch community",
        type: "school",
      },
      {
        name: "Silverado High School",
        distance: "3 minutes",
        description: "Top-rated public high school with excellent academics and sports programs",
        type: "school",
      },
      {
        name: "University of Nevada, Las Vegas",
        distance: "15 minutes",
        description: "Major university with diverse programs and research facilities",
        type: "university",
      },
      {
        name: "Nevada State College",
        distance: "8 minutes",
        description: "Growing four-year college with modern facilities and programs",
        type: "university",
      },
    ],
  },
  {
    category: "Recreation & Parks",
    features: [
      {
        name: "Silverado Ranch Park",
        distance: "1 minute",
        description: "Beautiful community park with walking trails, playgrounds, and sports facilities",
        type: "park",
      },
      {
        name: "Reflection Bay Golf Club",
        distance: "5 minutes",
        description: "Championship golf course with stunning lake views and excellent facilities",
        type: "golf",
      },
      {
        name: "Lake Las Vegas",
        distance: "8 minutes",
        description: "Resort community with water activities, dining, and entertainment",
        type: "recreation",
      },
      {
        name: "Henderson Bird Viewing Preserve",
        distance: "12 minutes",
        description: "Natural preserve with walking trails and bird watching opportunities",
        type: "nature",
      },
    ],
  },
  {
    category: "Healthcare & Services",
    features: [
      {
        name: "St. Rose Dominican Hospital - Siena Campus",
        distance: "5 minutes",
        description: "Full-service hospital with emergency care and specialized services",
        type: "healthcare",
      },
      {
        name: "Silverado Ranch Library",
        distance: "2 minutes",
        description: "Modern library with extensive resources, programs, and community events",
        type: "library",
      },
      {
        name: "Henderson Police Department",
        distance: "3 minutes",
        description: "Local law enforcement ensuring community safety and security",
        type: "safety",
      },
      {
        name: "Silverado Ranch Fire Station",
        distance: "1 minute",
        description: "Fire and emergency services serving the Silverado Ranch community",
        type: "safety",
      },
    ],
  },
]

export const attractions = [
  {
    name: "The Strip",
    distance: "15 minutes",
    description: "World-famous Las Vegas Strip with casinos, shows, and entertainment",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
    category: "Entertainment",
  },
  {
    name: "Fremont Street Experience",
    distance: "18 minutes",
    description: "Historic downtown Las Vegas with light shows and live music",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Entertainment",
  },
  {
    name: "Hoover Dam",
    distance: "45 minutes",
    description: "Engineering marvel and National Historic Landmark",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    category: "Attractions",
  },
  {
    name: "Valley of Fire State Park",
    distance: "50 minutes",
    description: "Nevada's oldest state park with stunning red rock formations",
    image: "https://images.unsplash.com/photo-1506905925346-14bda5d4c4c0?w=400&h=300&fit=crop",
    category: "Nature",
  },
]

export const transportation = [
  {
    name: "McCarran International Airport",
    distance: "15 minutes",
    description: "Major international airport with direct flights worldwide",
    type: "airport",
  },
  {
    name: "Las Vegas Monorail",
    distance: "18 minutes",
    description: "Convenient transportation along the Strip",
    type: "public",
  },
  {
    name: "RTC Transit",
    distance: "1 minute",
    description: "Local bus service connecting to all major areas",
    type: "public",
  },
  {
    name: "Interstate 215 (Beltway)",
    distance: "2 minutes",
    description: "Beltway providing easy access to all parts of the valley",
    type: "highway",
  },
]

export function getFeatureIcon(type) {
  const icons = {
    shopping: "🛍️",
    entertainment: "🎭",
    school: "🎓",
    university: "🏛️",
    golf: "⛳",
    park: "🌳",
    recreation: "🏊",
    nature: "🏔️",
    healthcare: "🏥",
    library: "📚",
    safety: "🛡️",
    airport: "✈️",
    public: "🚌",
    highway: "🛣️",
  }
  return icons[type] || "📍"
}
