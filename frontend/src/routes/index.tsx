import { Button, Card, ProjectCard } from "@/components/ui";
import { useFeaturedProjects } from "@/hooks/useProjects";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BiLogoDocker,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaArrowRightLong, FaEnvelope, FaPhone } from "react-icons/fa6";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const { data } = useFeaturedProjects();
  console.log(data);

  return (
    <div className="flex grow flex-col gap-18 mb-2">
      <section className="mx-auto max-w-7xl w-full relative overflow-hidden px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h1 className="text-5xl lg:text-7xl font-black text-obsidian leading-[1.1] tracking-tight">
              Building the <span className="text-iceblue">Next Generation</span>{" "}
              of Web Apps.
            </h1>
            <p className="text-lg text-obsidian max-w-lg leading-relaxed">
              Ik ben een gedreven full-stack developer met een voorkeur voor het
              bouwen van slimme, schaalbare en gebruiksvriendelijke digitale
              oplossingen. Ik zorg graag voor het vertalen van ideeën naar
              functionele, goed presterende toepassingen.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 flex-row justify-center">
              <Button uri="/projecten">Mijn projecten</Button>
              <Button uri="/contact">Contacteer mij</Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-iceblue rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-terminal-body rounded-xl border border-obsidian shadow-2xl overflow-hidden font-mono">
                <div className="bg-terminal-header px-4 py-3 border-b border-obsidian flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[11px] text-obsidian font-medium">
                    zsh — 80x24
                  </div>
                  <div className="w-12"></div>
                </div>
                <div className="p-6 text-sm lg:text-base leading-relaxed flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex gap-2">
                      <span className="text-obsidian font-bold">➜</span>
                      <span className="text-emerald-400">~</span>
                      <span className="text-obsidian/30">whoami</span>
                    </div>
                    <div className="text-obsidian/80">
                      [Name: Alexander Bal]
                      <br />
                      [Role: Junior Software Developer]
                      <br />
                      [Focus: Web Applications]
                      <br />
                      [Location: Dendermonde, België]
                    </div>
                    <div className="flex gap-2">
                      <span className="text-obsidian font-bold">➜</span>
                      <span className="text-emerald-400">~</span>
                      <span className="text-obsidian/30">neofetch</span>
                    </div>
                    <div className="flex gap-3 text-xs leading-tight">
                      <div className="text-obsidian font-bold">
                        <span>#####</span>
                        <br />
                        <span>#######</span>
                        <br />
                        <span>##&nbsp;&nbsp;&nbsp;&nbsp;##</span>
                        <br />
                        <span>##&nbsp;&nbsp;&nbsp;&nbsp;##</span>
                        <br />
                        <span>#######</span>
                        <br />
                        <span>#####</span>
                      </div>
                      <div className="text-obsidian/80">
                        <span className="text-obsidian font-bold">OS:</span>{" "}
                        macOS Tahoe
                        <br />
                        <span className="text-obsidian font-bold">
                          Shell:
                        </span>{" "}
                        zsh 5.9
                        <br />
                        <span className="text-obsidian font-bold">
                          Uptime:
                        </span>{" "}
                        12 days
                        <br />
                        <span className="text-obsidian font-bold">
                          Editor:
                        </span>{" "}
                        Visual Studio Code
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 items-center">
                      <span className="text-obsidian font-bold">➜</span>
                      <span className="text-emerald-400">~</span>
                      <span className="text-obsidian/30">
                        cat headshot_alexander_bal.img
                      </span>
                      <span className="terminal-cursor"></span>
                    </div>
                  </div>
                  <div className="w-full md:w-56 shrink-0">
                    <div className="rounded-lg border border-slate-700 overflow-hidden group/image relative">
                      <img
                        alt="Een foto van Alexander Bal"
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Een foto van Alexander Bal"
                        src="/headshot_alexander_bal.jpeg"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
                        <p className="text-[10px] text-white/70 font-mono italic">
                          headshot_alexander_bal.jpg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-iceblue/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-iceblue mb-8 text-center">
            Tech Stack &amp; Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoTypescript size={20} />
                </span>
                <span className="font-bold text-obsidian">TypeScript</span>
              </>
            </Card>
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoReact size={20} />
                </span>
                <span className="font-bold text-obsidian">React</span>
              </>
            </Card>
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoNodejs size={20} />
                </span>
                <span className="font-bold text-obsidian">Node.js</span>
              </>
            </Card>
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoPostgresql size={20} />
                </span>
                <span className="font-bold text-obsidian">PostgreSQL</span>
              </>
            </Card>
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoDocker size={20} />
                </span>
                <span className="font-bold text-obsidian">Docker</span>
              </>
            </Card>
            <Card>
              <>
                <span className="text-obsidian group-hover:scale-110 transition-transform">
                  <BiLogoTailwindCss size={20} />
                </span>
                <span className="font-bold text-obsidian">Tailwind CSS</span>
              </>
            </Card>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl w-full relative overflow-hidden px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-obsidian tracking-tight">
              Favoriete projecten
            </h2>
            <p className="text-obsidian max-w-xl">
              Een selectie van mijn Favoriete projecten, die ik al gerealiseerd
              heb.
            </p>
          </div>
          <Link
            className="text-primary font-bold flex items-center gap-2 group"
            to="/projecten"
          >
            Zie al mijn projecten
            <span className="group-hover:translate-x-1 transition-transform">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl w-full relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black text-obsidian tracking-tight leading-tight">
              Samen een project starten? <br />
              Let's{" "}
              <span className="text-iceblue underline decoration-primary/30 underline-offset-8">
                build it together
              </span>
              .
            </h2>
            <p className="text-lg text-obsidian/80 leading-relaxed">
              Ik sta momenteel open voor nieuwe uitdagingen en creatieve
              projecten. Heb je een vraag of wil je gewoon even kennismaken? Je
              kunt me altijd een bericht sturen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                className="bg-iceblue hover:bg-iceblue/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
                href="mailto:balalexander73@gmail.com?subject=Project%20verzoek%20"
              >
                <FaEnvelope />
                Verstuur een Email
              </a>
              <a
                className="bg-iceblue hover:bg-iceblue/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
                href="tel:+32486385483"
              >
                <FaPhone />
                Bel me op
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
