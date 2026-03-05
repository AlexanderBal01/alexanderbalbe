import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const Button = ({ uri, children }: { uri: string; children: ReactNode }) => {
  return (
    <Link
      to={uri}
      className="bg-iceblue text-obsidian hover:text-white px-8 py-4 text-center rounded-full font-bold shadow-lg shadow-iceblue/20 transition-all transform hover:-translate-y-1"
    >
      {children}
    </Link>
  );
};

export default Button;
