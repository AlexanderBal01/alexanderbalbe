import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoDocker,
  BiLogoTailwindCss,
} from "react-icons/bi";

const TechStack = () => {
  return (
    <section className="py-12 bg-iceblue/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-iceblue mb-8 text-center">
          Tech Stack &amp; Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoTypescript size={20} />
            </span>
            <span className="font-bold text-obsidian">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoReact size={20} />
            </span>
            <span className="font-bold text-obsidian">React</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoNodejs size={20} />
            </span>
            <span className="font-bold text-obsidian">Node.js</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoPostgresql size={20} />
            </span>
            <span className="font-bold text-obsidian">PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoDocker size={20} />
            </span>
            <span className="font-bold text-obsidian">Docker</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
            <span className="text-obsidian group-hover:scale-110 transition-transform">
              <BiLogoTailwindCss size={20} />
            </span>
            <span className="font-bold text-obsidian">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
