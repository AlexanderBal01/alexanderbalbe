import { Link } from "@tanstack/react-router";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto">
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
              <Link
                to={"/projecten "}
                className="bg-iceblue text-obsidian hover:text-white px-8 py-4 text-center rounded-full font-bold shadow-lg shadow-iceblue/20 transition-all transform hover:-translate-y-1"
              >
                Mijn projecten
              </Link>
              <Link
                to={"contact"}
                className="bg-iceblue text-obsidian hover:text-white px-8 py-4 text-center rounded-full font-bold shadow-lg shadow-iceblue/20 transition-all transform hover:-translate-y-1"
              >
                Contacteer mij
              </Link>
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
      </div>
    </section>
  );
};

export default Hero;
