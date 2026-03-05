import { CardButton } from "../ui";
import { FaLink, FaGithub } from "react-icons/fa6";
import type { Project } from "@/types/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
      <div className="h-56 bg-slate-200 relative overflow-hidden">
        <img
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          data-alt={project.title}
          src={project.image_url ?? ""}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tagName) => (
            <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian bg-white/10 even:bg-iceblue/20 even:text-iceblue px-2 py-1 rounded">
              {tagName}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-obsidian">{project.title}</h3>
        <p className="text-obsidian/80 text-sm leading-relaxed">
          {project.short_description}
        </p>
        <div className="flex gap-4 pt-2">
          <CardButton uri={project.live_url ?? ""}>
            <span className="text-lg">
              <FaLink />
            </span>{" "}
            Demo
          </CardButton>
          <CardButton uri={project.github_url}>
            <span className="text-lg">
              <FaGithub />
            </span>{" "}
            GitHub
          </CardButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
