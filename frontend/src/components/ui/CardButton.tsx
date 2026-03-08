import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const CardButton = ({
  uri,
  children,
}: {
  uri: string;
  children: ReactNode;
}) => {
  return (
    <Link
      to={uri}
      className="flex bg-iceblue text-obsidian hover:text-white px-8 py-2 text-center rounded-full font-bold shadow-lg shadow-iceblue/20 transition-all transform hover:-translate-y-1 items-center gap-x-2 max-h-10"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};

export default CardButton;
