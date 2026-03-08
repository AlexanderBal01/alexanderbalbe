import ErvaringItem from "@/components/ui/ErvaringItem";
import { useErvaring } from "@/hooks/useErvaring";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ervaring")({
  component: Ervaring,
});

function Ervaring() {
  const { data } = useErvaring();

  return (
    <div className="flex grow flex-col gap-6">
      <section className="max-w-7xl mx-auto">
        <div className="px-6">
          <h1 className="text-4xl font-black text-obsidian mb-16 text-center tracking-tight">
            Werk ervaring
          </h1>
          <div className="space-y-12">
            {data.map((ervaring) => (
              <ErvaringItem key={ervaring.id} ervaring={ervaring} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
