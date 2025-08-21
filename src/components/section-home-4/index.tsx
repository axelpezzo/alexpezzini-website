import React from "react";
import { Container } from "../container";
import Education from "@/assets/images/education.svg";
import { useTranslations } from "next-intl";

const SectionHome_4 = () => {
  const t = useTranslations("Section_4");

  return (
    <div
      className="h-full w-full relative bg-white overflow-hidden"
      id="section-home-4"
    >
      <Container>
        <div className="py-24 lg:py-32">
          <h2 className="mb-12 lg:mb-20">{t("title")}</h2>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>{t("block_1_title")}</h3>
                <p>
                  {t.rich("block_1_text", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    i: (chunks) => <i>{chunks}</i>,
                  })}
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
