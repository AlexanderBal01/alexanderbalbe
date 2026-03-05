import type { ReactElement } from "react";

const Card = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-all group">
      {children}
    </div>
  );
};

export default Card;
