import React from "react";
import { Container } from "../container";
import {
  IconMail,
  IconBrandLinkedin,
  IconFileCertificate,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const SectionHome_5 = () => {
  const t = useTranslations("Section_5");

  return (
    <section
      className="h-full w-full relative bg-gray-100 overflow-hidden"
      id="section-home-5"
    >
      <Container>
        <div className="py-24 lg:py-32">
          <h2 className="mb-12 lg:mb-20">{t("title")}</h2>
          <h3 className="mb-10">{t("subtitle")}</h3>
          <div className="flex flex-col gap-6">
            <a
              className="flex items-center gap-2 w-fit"
              href="mailto:axel.pezzo@gmail.com"
            >
              <IconMail />
              <span className="text-xl">{t("block_1_title")}</span>
            </a>
            <a
              target="_blank"
              className="flex items-center gap-2 w-fit"
              href="https://www.linkedin.com/in/alexpezzini"
            >
              <IconBrandLinkedin />
              <span className="text-xl">{t("block_2_title")}</span>
            </a>
            <a
              className="flex items-center gap-2 w-fit"
              target="_blank"
              href="/cv_alexpezzini.pdf"
            >
              <IconFileCertificate />
              <span className="text-xl">{t("block_3_title")}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHome_5;
