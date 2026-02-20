const Footer = () => {
  return (
    <footer className="flex max-w-7xl justify-center">
      <div className=" mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-md">
                <span className="material-symbols-outlined text-white text-xs">
                  terminal
                </span>
              </div>
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">
                DevPortfolio © 2024
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
