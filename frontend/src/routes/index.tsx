import { HomeHeroSection } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex grow flex-col">
      <HomeHeroSection />
    </div>
  );
}
