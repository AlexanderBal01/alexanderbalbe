import { createFileRoute } from "@tanstack/react-router";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  return (
    <div className="flex grow flex-col gap-18 mb-2">
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
