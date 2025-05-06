export type SiteConfig = typeof SiteConfig

export const SiteConfig = {
  name: "High Rise Mechanical",
  description: "Licensed & Insured NYC Plumbing and Heating Experts serving The Bronx, Manhattan, Brooklyn, Queens, and Staten Island. Offering residential & commercial services including boiler repair, fire sprinklers, drain cleaning, and 24/7 emergency response.",
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
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  phoneNumber: "646-530-2685",
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
  boroughs: ["The Bronx", "Manhattan", "Brooklyn", "Queens", "Staten Island"],
  // email: "info@highrisemechanical.com", // Add if available
  // Add operating hours if defined
  // openingHours: "Mo-Su 00:00-23:59", // Example for 24/7
};
