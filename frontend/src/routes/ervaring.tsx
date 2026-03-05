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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-obsidian mb-16 text-center tracking-tight">
            Werk ervaring
          </h2>
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
