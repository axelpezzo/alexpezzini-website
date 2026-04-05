import React from "react";
import { Container } from "../container";
import {
  IconMail,
  IconBrandLinkedin,
  IconFileCertificate,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

const TINYREX_SITE = "https://www.tinyrex.it/it/stack";
const TINYREX_STACK_URL = "https://www.tinyrex.it/it/stack";
const TINYREX_CONTACTS_URL = "https://www.tinyrex.it/it/contatti";

const SectionHome_5 = async () => {
  const t = await getTranslations("Section_5");

  return (
    <section className="h-full w-full relative bg-gray-100 overflow-hidden" id="section-home-5">
      <Container>
        <div className="py-24 lg:py-32">
          <h2 className="mb-8 lg:mb-10">{t("title")}</h2>

          <p className="mb-16 lg:mb-20 max-w-2xl text-[1.05rem] leading-relaxed text-gray-700">
            {t.rich("tinyrex_intro", {
              tinyrex: (chunks) => (
                <a
                  href={TINYREX_SITE}
                  target="_blank"
                  rel="noopener"
                  title={t("tinyrex_link_title")}
                >
                  {chunks}
                </a>
              ),
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 lg:mb-28">
            <div className="flex flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:p-10 shadow-sm">
              <div>
                <h3 className="mb-3">{t("daas_title")}</h3>
                <p className="mb-0">{t("daas_body")}</p>
              </div>
              <a
                className="inline-flex items-center gap-2 w-fit no-underline font-semibold text-sm rounded-lg bg-primary-800 text-white px-4 py-2.5 hover:bg-primary-950 transition-colors"
                title="TinyREX - Developer-as-a-Service"
                href={TINYREX_STACK_URL}
                target="_blank"
                rel="noopener"
              >
                <span>{t("daas_cta")}</span>
                <IconArrowUpRight size={16} className="shrink-0" aria-hidden />
              </a>
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-xl bg-primary-800 p-8 lg:p-10 text-white">
              <div>
                <h3 className="mb-3 text-white">{t("fcto_title")}</h3>
                <p className="mb-0 text-primary-100">{t("fcto_body")}</p>
              </div>
              <a
                className="inline-flex items-center gap-2 w-fit no-underline font-semibold text-sm rounded-lg bg-white text-primary-800 px-4 py-2.5 hover:bg-primary-100 transition-colors"
                title="TinyREX - Fractional CTO"
                href={TINYREX_CONTACTS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("fcto_cta")}</span>
                <IconArrowUpRight size={16} className="shrink-0" aria-hidden />
              </a>
            </div>
          </div>

          <h3 className="mb-10">{t("subtitle")}</h3>
          <div className="flex flex-col gap-6">
            <a className="flex items-center gap-2 w-fit" href="mailto:info@tinyrex.it">
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
            <a className="flex items-center gap-2 w-fit" target="_blank" href="/cv_alexpezzini.pdf">
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
