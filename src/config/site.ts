export type SiteConfig = typeof SiteConfig

export const SiteConfig = {
  name: "High Rise Mechanical",
  description: "High Rise Mechanical: NYC's trusted, licensed & insured plumbing and heating experts. Serving The Bronx, Manhattan, Brooklyn, Queens, & Staten Island 24/7. Residential & commercial boiler repair, fire sprinklers, drain cleaning, emergency service, and more.", // Refined description
  author: "High Rise Mechanical",
  url: "https://highrisemechanical.com", // Replace with actual domain
  keywords: [
    "NYC plumber",
    "heating repair NYC",
    "boiler installation Bronx",
    "fire sprinkler Manhattan",
    "emergency plumbing Brooklyn",
    "radiant heat Queens",
    "commercial plumbing Staten Island",
    "24/7 plumber NYC",
    "High Rise Mechanical",
    "plumbing services Bronx",
    "heating services Queens",
    "emergency plumber Brooklyn",
    "NYC heating company", // Added more variations
    "licensed plumber NYC",
    "plumbing quote NYC",
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
      title: "Schedule Service", // Added Schedule link
      href: "/schedule",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  phoneNumber: "646-530-2685",
  email: "info@highrisemechanical.com", // Added email
  address: "2398 Grand Concourse BSMT, Bronx, NY 10458",
  addressParts: {
    streetAddress: "2398 Grand Concourse BSMT",
    addressLocality: "Bronx",
    addressRegion: "NY",
    postalCode: "10458",
    addressCountry: "US"
  },
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=High+Rise+Mechanical+2398+Grand+Concourse+Bronx+NY+10458`, // Check this URL
  googleMapsEmbedUrl: `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=High+Rise+Mechanical,2398+Grand+Concourse,Bronx+NY+10458`, // Requires API key for embed
  googleReviewsUrl: `https://search.google.com/local/reviews?placeid=ChIJrXJtO0jzwokRWkYpX9q4XMA`, // TODO: Replace with actual Place ID if different
  boroughs: ["The Bronx", "Manhattan", "Brooklyn", "Queens", "Staten Island"],
  // Define office operating hours (for non-emergency contact) - Example
  officeHours: "Monday - Friday: 8:00 AM - 5:00 PM",
  openingHoursSpecification: [ // Schema.org format for opening hours
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
     // Add separate spec for 24/7 emergency service if needed for clarity in schema,
     // although the main openingHours covers it
  ],
};
