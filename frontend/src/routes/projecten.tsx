import { ProjectCard } from "@/components";
import { useProjects } from "@/hooks/useProjects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projecten")({ component: Projecten });

function Projecten() {
  const { data } = useProjects();

  return (
    <div className="flex grow flex-col gap-6">
      <section className="mx-auto max-w-7xl w-full relative overflow-hidden px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-obsidian tracking-tight">
              Mijn projecten
            </h2>
            <p className="text-obsidian max-w-xl">
              Hier vindt je alle projecten terug die ik al gerealiseerd heb.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
