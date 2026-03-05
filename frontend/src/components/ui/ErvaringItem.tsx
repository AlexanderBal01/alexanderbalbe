import type { Ervaring } from "@/types/werkErvaring";
import { FaBriefcase } from "react-icons/fa6";

const ErvaringItem = ({ ervaring }: { ervaring: Ervaring }) => {
  return (
    <div className="relative pl-12 before:absolute before:left-4 before:top-2 before:bottom-0 before:w-px before:bg-iceblue">
      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-iceblue flex items-center justify-center text-white">
        <FaBriefcase />
      </div>
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h3 className="text-xl font-bold text-obsidian">
            {ervaring.position}
          </h3>
          <span className="text-sm font-bold text-white px-3 py-1 rounded-full bg-iceblue">
            {`${new Date(ervaring.start_date).getFullYear()} - ${ervaring.end_date ? new Date(ervaring.end_date).getFullYear() : "Present"}`}
          </span>
        </div>
        <p className="text-lg font-medium text-obsidian">
          {ervaring.company_name}
        </p>
        <p className="text-obsidian leading-relaxed">{ervaring.description}</p>
      </div>
    </div>
  );
};

export default ErvaringItem;
