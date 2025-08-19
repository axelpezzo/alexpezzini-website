import React from "react";
import { Container } from "../container";
import {
  IconMail,
  IconBrandLinkedin,
  IconFileCertificate,
} from "@tabler/icons-react";

const SectionHome_5 = () => {
  return (
    <div
      className="h-full w-full relative bg-gray-100 overflow-hidden"
      id="section-home-5"
    >
      <Container>
        <div className="py-32">
          <h2 className="mb-20">Contatti</h2>
          <h3 className="mb-10">Per qualunque informazione puoi:</h3>
          <div className="flex flex-col gap-6">
            <a
              className="flex items-center gap-2 w-fit"
              href="mailto:info@alexpezzini.it"
            >
              <IconMail />
              <span className="text-xl">Scrivermi una mail</span>
            </a>
            <a
              target="_blank"
              className="flex items-center gap-2 w-fit"
              href="https://www.linkedin.com/in/alexpezzini"
            >
              <IconBrandLinkedin />
              <span className="text-xl">Contattarmi su LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2 w-fit"
              target="_blank"
              href="/cv_alexpezzini.pdf"
            >
              <IconFileCertificate />
              <span className="text-xl">Scaricare il mio CV</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionHome_5;
