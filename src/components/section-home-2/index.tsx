import React from "react";
import { Container } from "../container";

const SectionHome_2 = () => {
  return (
    <div className="h-full w-full relative bg-white overflow-hidden">
      <Container>
        <div className="py-32">
          <h2>Carriera</h2>
          <div>
            <p>
              Dopo le prime esperienze nel settore web, in cui ho progettato
              soluzioni e-commerce, ho intrapreso la carriera di{" "}
              <strong>sviluppatore full-stack </strong>in un'agenzia di
              comunicazione digitale. Con il tempo, ho avuto l'opportunità di
              guidare un team nello sviluppo di soluzioni web per importanti
              brand nazionali come <i>Paluani, Borsalino, Bertazzoni</i> e{" "}
              <i>Fedrigoni</i>. Tutti i progetti sono stati realizzati con{" "}
              <strong>Drupal</strong>, un potente e versatile CMS open-source.
              Ho inoltre partecipato attivamente alla community, contribuendo
              allo sviluppo e prendendo parte a eventi nazionali e
              internazionali.
            </p>
            <p>
              Durante questo periodo, ho maturato un'esperienza a 360 gradi
              nella gestione dei progetti digitali: mi sono occupato dei
              rapporti con i clienti, ho implementato e gestito l'infrastruttura
              web utilizzando <strong>Amazon Web Services (AWS)</strong> e ho
              dedicato particolare attenzione alla progettazione della UI e
              della SEO.
            </p>

            <p>
              Oggi sono <strong>sviluppatore web/mobile</strong> in{" "}
              <a href="https://www.intesys.it/" target="_blank" title="Intesys">
                Intesys
              </a>
              , azienda che dal 2025 fa parte del gruppo Lynx. Nel team di
              frontend, lavoro quotidianamente su progetti per i settori
              Industrial e Fintech, utilizzando principalmente{" "}
              <i>React, Typescript</i> e <i>Next.js</i> in progetti headless con
              integrazioni di terze parti .
            </p>
            <p>
              Parallelamente, ho la passione di condividere le mie conoscenze e
              la mia esperienza nel settore insegnando{" "}
              <strong>sviluppo web full-stack</strong> all'
              <a
                href="https://www.itslogistica.it/"
                title="ITS Academy di Verona"
              >
                ITS Academy di Verona
              </a>
              , dove trasmetto competenze, metodologie e best practice alle
              future generazioni di sviluppatori.
            </p>
          </div>
          <div className="mt-20">
            <h3>Competenze</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Piattaforme:</strong> Drupal, Strapi, Payload CMS,
                BigCommerce, HubSpot
              </li>
              <li>
                <strong>Infrastruttura:</strong> Amazon Web Services, Docker,
                Kubernetes, GitHub / GitLab
              </li>
              <li>
                <strong>Backend:</strong> Node.js, PHP, GraphQL, REST APIs
              </li>
              <li>
                <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind
                CSS
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_2;
