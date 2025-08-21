import React from "react";
import { Container } from "../container";
import Website from "@/assets/images/website.svg";
import Mobile from "@/assets/images/mobile.svg";
import Ecommerce from "@/assets/images/ecommerce.svg";
import { useTranslations } from "next-intl";

const SectionHome_3 = () => {
  const t = useTranslations("Section_3");

  return (
    <div
      className="h-full w-full relative bg-primary-800 overflow-hidden text-white"
      id="section-home-3"
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
                <Website />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>{t("block_2_title")}</h3>
                <p>
                  {t.rich("block_2_text", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    i: (chunks) => <i>{chunks}</i>,
                  })}
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-4 lg:-top-10 w-[80%] mx-auto md:w-1/3">
                <Mobile />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full">
              {/* Testo - 2/3 da desktop */}
              <div className="md:w-2/3">
                <h3>{t("block_3_title")}</h3>
                <p>
                  {t.rich("block_3_text", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    i: (chunks) => <i>{chunks}</i>,
                  })}
                </p>
              </div>

              {/* Logo/Icona - 1/3 da desktop */}
              <div className="relative -top-4 lg:-top-10 w-[80%] mx-auto md:w-1/3">
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
