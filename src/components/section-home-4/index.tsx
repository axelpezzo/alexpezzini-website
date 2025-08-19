import React from "react";
import { Container } from "../container";
import Education from "@/assets/images/education.svg";

const SectionHome_4 = () => {
  return (
    <div
      className="h-full w-full relative bg-white overflow-hidden"
      id="section-home-4"
    >
      <Container>
        <div className="py-24 lg:py-32">
          <h2 className="mb-12 lg:mb-20">Formazione</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>ITS Digital Academy</h3>
                <p>
                  La mia esperienza come docente ITS per il corso di{" "}
                  <strong>Sviluppatore Web Fullstack</strong> mi ha consentito
                  di trasformare concetti complessi in spiegazioni chiare e
                  sintetiche, guidando i ragazzi nell'acquisizione di competenze
                  tecniche immediatamente spendibili nel mondo del lavoro. Ogni
                  percorso formativo è studiato su misura, calibrato in base al
                  livello di partenza e agli obiettivi da raggiungere, e si
                  sviluppa attraverso un approccio pratico e orientato a
                  progetti reali, così da unire teoria e applicazione concreta.
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-4 lg:-top-10 w-[80%] mx-auto md:w-1/3">
                <Education />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_4;
