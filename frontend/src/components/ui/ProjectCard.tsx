import { CardButton } from "../ui";
import { FaLink, FaGithub } from "react-icons/fa6";
import type { Project } from "@/types/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex grow flex-col items-center gap-2 py-3 rounded-xl bg-white border border-slate-200 w-[90%] lg:w-full transition-all group mx-auto h-full">
      <div className="h-56 bg-slate-200 relative overflow-hidden">
        <img
          alt={project.title}
          className="h-full object-cover transition-transform duration-700 group-hover:scale-110"
          data-alt={project.title}
          src={project.image_url ?? ""}
        />
      </div>
      <div className="flex flex-wrap gap-2 mx-8 justify-center">
        {project.tags.map((tagName) => (
          <span
            key={tagName}
            className="text-[10px] font-bold uppercase tracking-widest text-obsidian bg-white/10 even:bg-iceblue/20 even:text-iceblue px-2 py-1 rounded"
          >
            {tagName}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-obsidian">{project.title}</h3>
      <p className="text-obsidian/80 text-sm leading-relaxed mx-8">
        {project.short_description}
      </p>
      <div className="flex mt-auto gap-4 pt-2">
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
  );
};

export default ProjectCard;
