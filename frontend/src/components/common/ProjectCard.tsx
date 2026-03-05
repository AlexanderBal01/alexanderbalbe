import { Button, Card } from "../ui";
import { FaLink, FaGithub } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <Card>
      <>
        <div className="h-56 bg-slate-200 relative overflow-hidden">
          <img
            alt="Data visualization"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="Modern abstract visualization of global data networks with neon highlights"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBECyPSG-W67_ABkuzIwX5-b0DFNQ_KcpJ9bVkeqg788AnrtvE1mzgnWmg97WzmWiXmKRjFFF4HUPdMOCv7wDmYCtvbdfzG2zHjCjobJ6wlt_FAao0lHsjQ54aTm8JQjVT-6GDvRJa8PSUYQyQf70Pi2J2aK54MXMPNHikRg3aexGGI7-VFRqbWULeqHTsm62SpBLmaK-h5k_rwV9JGLhOGT7Gi7bA91NqYWpBiMekR0-8DMia3xEwmOLkSMk7utyxeJPJurapy7kJg"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
              Python
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
              PostgreSQL
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Synthetix Analytics
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Real-time data aggregation platform processing over 1M events daily
            with customizable dashboard widgets.
          </p>
          <div className="flex gap-4 pt-2">
            <Button uri="">
              <span className=" text-lg">
                <FaLink />
              </span>{" "}
              Demo
            </Button>
            <Button uri="">
              <span className="text-lg">
                <FaGithub />
              </span>{" "}
              GitHub
            </Button>
          </div>
        </div>
      </>
    </Card>
  );
};

export default ProjectCard;
