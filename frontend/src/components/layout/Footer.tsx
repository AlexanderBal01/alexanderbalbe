import { FaEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mb-12 flex px-6">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <img
                src={"/logo.svg"}
                alt="logo"
                className="fill-obsidian"
                width={50}
                height={50}
              />
              <span className="font-bold text-iceblue uppercase tracking-widest text-sm">
                Alexander Bal © {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-iceblue text-obsidian hover:text-white transition-all"
              href="mailto:balalexander73@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-iceblue text-obsidian hover:text-white transition-all"
              href="https://github.com/AlexanderBal01"
            >
              <FaGithub />
            </a>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-iceblue text-obsidian hover:text-white transition-all"
              href="https://www.linkedin.com/in/alexander-bal/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
