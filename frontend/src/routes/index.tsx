import { HomeHeroSection, HomeTechStackSection } from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex grow flex-col gap-6">
      <HomeHeroSection />
      <HomeTechStackSection />
    </div>
  );
}
