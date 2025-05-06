export type SiteConfig = typeof SiteConfig

export const SiteConfig = {
  name: "High Rise Mechanical",
  description: "High Rise Mechanical: NYC's trusted 24/7 emergency plumbing and heating experts. Serving The Bronx, Manhattan, Brooklyn, Queens, & Staten Island. Get a free estimate for residential & commercial boiler repair, fire sprinklers, drain cleaning, and more.", // Refined description for lead gen and SEO
  author: "High Rise Mechanical",
  url: "https://highrisemechanical.com", // Replace with actual domain
  keywords: [
    // Core Services & General
    "NYC plumber",
    "plumbing services NYC",
    "heating repair NYC",
    "heating contractor NYC",
    "boiler repair NYC",
    "boiler installation NYC",
    "emergency plumber NYC",
    "24/7 plumber NYC",
    "High Rise Mechanical",
    "free plumbing estimate NYC",
    "plumbing quote NYC",
    "heating estimate NYC",

    // Location Specific (Examples)
    "plumber Bronx",
    "heating repair Manhattan",
    "emergency plumber Brooklyn",
    "boiler service Queens",
    "plumbing company Staten Island",
    "Bronx plumber",
    "Manhattan heating repair",
    "Brooklyn 24/7 plumber",
    "Queens boiler installation",
    "Staten Island plumbing services",

    // Specific Services
    "fire sprinkler installation NYC",
    "fire sprinkler repair NYC",
    "drain cleaning NYC",
    "sewer cleaning NYC",
    "leak detection NYC",
    "pipe repair NYC",
    "water heater repair NYC",
    "water heater installation NYC",
    "radiant heating NYC",
    "commercial plumbing NYC",
    "residential plumbing NYC",
    "high rise plumbing NYC",
  ],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Emergency Services",
      href: "/emergency-services",
    },
    {
      title: "Schedule Service",
      href: "/schedule",
    },
    {
      title: "About Us",
      href: "/about",
    },
    // Removed Contact link
  ],
  phoneNumber: "646-530-2685",
  email: "info@highrisemechanical.com",
  address: "2398 Grand Concourse BSMT, Bronx, NY 10458",
  addressParts: {
    streetAddress: "2398 Grand Concourse BSMT",
    addressLocality: "Bronx",
    addressRegion: "NY",
    postalCode: "10458",
    addressCountry: "US"
  },
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=High+Rise+Mechanical+2398+Grand+Concourse+Bronx+NY+10458`,
  // Removed Google Maps Embed URL as contact page is gone
  googleReviewsUrl: `https://search.google.com/local/reviews?placeid=ChIJrXJtO0jzwokRWkYpX9q4XMA`, // Verify Place ID
  boroughs: ["The Bronx", "Manhattan", "Brooklyn", "Queens", "Staten Island"],
  // Define office operating hours (for non-emergency contact) - Example remains, but primary focus is 24/7
  officeHours: "Monday - Friday: 8:00 AM - 5:00 PM (Emergency Service 24/7)",
  openingHoursSpecification: [ // Schema.org format for opening hours
    // Specific office hours (optional if main focus is 24/7)
    // {
    //   "@type": "OpeningHoursSpecification",
    //   "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
    //   "opens": "08:00",
    //   "closes": "17:00"
    // },
    // Specification for 24/7 Service
     {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  instagramUrl: "https://www.instagram.com/hrise777", // Added Instagram URL
};
