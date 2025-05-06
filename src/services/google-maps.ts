/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves a Google Maps embed URL for a given location.
 *
 * @param location The location for which to retrieve a Google Maps embed URL.
 * @returns A promise that resolves to a Google Maps embed URL.
 */
export async function getGoogleMapsEmbedUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3442949729276!2d-73.89931472379732!3d40.8666573713701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f62c85ff9631%3A0x245a04ef49c8c430!2s2398%20Grand%20Concourse%2C%20The%20Bronx%2C%20NY%2010458!5e0!3m2!1sen!2sus!4v1717434305173!5m2!1sen!2sus';
}
