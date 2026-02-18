export const getApiUrl = () => {
  // Draaien we op de server (in Docker)?
  if (import.meta.env.SSR) {
    // Gebruik de interne Docker naam 'api' en poort 3000
    // (Zorg dat SERVER_API_URL in je docker-compose staat)
    return process.env.SERVER_API_URL || "http://api:3000";
  }

  // Draaien we in de browser?
  // Gebruik de publieke URL (localhost:3001)
  return import.meta.env.VITE_API_URL || "http://localhost:3001";
};
