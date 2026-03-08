export const getApiUrl = () => {
  // Draaien we op de server (in Docker)?
  if (typeof window === "undefined") {
    // We zitten op de server (SSR) binnen Docker.
    // Gebruik de interne Docker-naam van de container.
    return process.env.SERVER_API_URL || "http://api:3000";
  }

  // We zitten in de browser van de bezoeker.
  // Gebruik de publieke URL die via Cloudflare bereikbaar is.
  return import.meta.env.VITE_API_URL || "https://api.alexanderbal.be";
};
