import React from "react";
import { Container } from "../container";
import Website from "@/assets/images/website.svg";
import Mobile from "@/assets/images/mobile.svg";
import Ecommerce from "@/assets/images/ecommerce.svg";

const SectionHome_3 = () => {
  return (
    <div className="h-full w-full relative bg-primary-800 overflow-hidden text-white">
      <Container>
        <div className="py-32">
          <h2>Sviluppo</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 w-full">
              <div>
                <h3>Web Site & Web Applications</h3>
                <p>
                  Progetto e realizzo siti e applicazioni web moderni, veloci e
                  sicuri, su misura per aziende e professionisti. Utilizzo
                  tecnologie come React, Next.js e Node.js per garantire
                  prestazioni elevate e un design responsive. Grazie
                  all’esperienza con CMS come Drupal, Strapi e Payload, offro
                  soluzioni flessibili, scalabili e facili da gestire.
                </p>
              </div>
              <div>
                <Website width={420} />
              </div>
            </div>

            <div className="flex gap-8 w-full">
              <div>
                <h3>Mobile First & PWA</h3>
                <p>
                  Sviluppo applicazioni mobile performanti e intuitive,
                  compatibili con dispositivi iOS e Android, utilizzando
                  tecnologie cross-platform come React Native. L’obiettivo è
                  fornire un’esperienza fluida e coinvolgente, integrata con
                  servizi e API personalizzati, così da offrire agli utenti la
                  massima funzionalità e alle aziende uno strumento potente per
                  raggiungere il proprio pubblico ovunque si trovi.
                </p>
              </div>
              <div>
                <Mobile width={420} />
              </div>
            </div>

            <div className="flex gap-8 w-full">
              <div>
                <h3>E-Commerce & B2B</h3>
                <p>
                  Progetto e realizzo siti e applicazioni web moderni, veloci e
                  sicuri, su misura per aziende e professionisti. Utilizzo
                  tecnologie come React, Next.js e Node.js per garantire
                  prestazioni elevate e un design responsive. Grazie
                  all’esperienza con CMS come Drupal, Strapi e Payload, offro
                  soluzioni flessibili, scalabili e facili da gestire.
                </p>
              </div>
              <div>
                <Ecommerce width={500} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_3;
