'use client';

import React from 'react';
import { SiteConfig } from '@/config/site';

interface GoogleMapEmbedProps {
  address: string;
  className?: string;
  // Consider adding width and height props if needed, otherwise rely on container styling
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ address, className }) => {
  // IMPORTANT: You need a Google Maps Embed API key for this to work reliably.
  // Replace 'YOUR_API_KEY' with your actual key.
  // Keep API keys secure, ideally using environment variables.
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'; // Fallback, but use env var

  // If no API key is provided, show a fallback message or use the search URL
  if (apiKey === 'YOUR_API_KEY') {
    console.warn("Google Maps API Key is missing. Map embed might not work or show 'for development purposes only'.");
    // Fallback: Link to Google Maps search
     return (
       <div className={`bg-gray-200 flex items-center justify-center h-full ${className}`}>
         <a
           href={SiteConfig.googleMapsUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-600 hover:underline p-4 text-center"
         >
           View Location on Google Maps
           <br/>
           <span className="text-xs text-gray-500">(Map embed requires API key)</span>
         </a>
       </div>
     );
  }

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;

  return (
    <iframe
      className={`w-full h-full border-0 ${className}`}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
      title={`Map showing location of ${SiteConfig.name}`}
    ></iframe>
  );
};

export default GoogleMapEmbed;
