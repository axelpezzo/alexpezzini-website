import React from "react";
import { Container } from "../container";
import Website from "@/assets/images/website.svg";
import Mobile from "@/assets/images/mobile.svg";
import Ecommerce from "@/assets/images/ecommerce.svg";

const SectionHome_3 = () => {
  return (
    <div
      className="h-full w-full relative bg-primary-800 overflow-hidden text-white"
      id="section-home-3"
    >
      <Container>
        <div className="py-32">
          <h2 className="mb-20">Sviluppo</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>Web Site & Web Applications</h3>
                <p>
                  Progetto e sviluppo <strong>siti e applicazioni web</strong>{" "}
                  tailor-made completamente gestibili in autonomia dagli utenti
                  amministrativi creando soluzioni personalizzate come aree
                  riservate, portali aziendali, intranet e dashboard
                  interattive. Nel frontend mi affido a tecnologie moderne come{" "}
                  <strong>Next.js, React e TypeScript</strong>. La mia
                  esperienza include anche l'utilizzo di numerosi CMS, sia nella
                  loro versione tradizionale che headless. In particolare, ho
                  una approfondita conoscenza di <strong>Drupal</strong> e sono
                  in grado di integrare nuove funzionalità con sistemi esistenti
                  o di realizzare progetti completamente personalizzati.
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-10 md:w-1/3">
                <Website />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>Mobile First & PWA</h3>
                <p>
                  Sviluppo interfacce con un approccio mobile first, garantendo
                  un'esperienza ottimale su smartphone e tablet fin dalle prime
                  fasi del progetto. Inoltre creo{" "}
                  <strong>Progressive Web App (PWA)</strong>, applicazioni web
                  che combinano le funzionalità di un sito con quelle di un'app
                  nativa: installabili direttamente sul dispositivo, accessibili
                  offline e con tempi di caricamento ridotti.
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-10 md:w-1/3">
                <Mobile />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>Ecommerce & B2B</h3>
                <p>
                  Realizzo piattaforme{" "}
                  <strong>Ecommerce e soluzioni B2B</strong>, avendo maturato
                  una lunga esperienza nello sviluppo di sistemi di vendita
                  online sia per il mercato consumer che per quello aziendale.
                  Questa competenza è supportata dalla certificazione ufficiale
                  di <strong>BigCommerce Developer</strong>, che mi permette di
                  integrare al meglio flussi di acquisto, cataloghi complessi e
                  interfacce personalizzate per esigenze specifiche.
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-10 md:w-1/3">
                <Ecommerce />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_3;
