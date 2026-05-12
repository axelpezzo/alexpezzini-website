import React from "react";
import { Container } from "../container";
import {
  IconMail,
  IconBrandLinkedin,
  IconFileCertificate,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";

const TINYREX_SITE = "https://www.tinyrex.it/";
const TINYREX_DRUPAL = "https://www.tinyrex.it/servizi/drupal-specialist";
const TINYREX_DAAS = "https://www.tinyrex.it/servizi/developer-as-a-service";
const TINYREX_FCTO = "https://www.tinyrex.it/servizi/fractional-cto";

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
                  rel="me author noopener"
                  title={t("tinyrex_link_title")}
                >
                  {chunks}
                </a>
              ),
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-28">
            {/* Drupal Specialist — spans full width on md, 1 col on lg */}
            <div className="group md:col-span-2 lg:col-span-1 flex flex-col justify-between gap-8 rounded-xl bg-white p-8 shadow-sm transition-colors duration-300 hover:bg-primary-800">
              <div>
                <h3>
                  <a
                    href={TINYREX_DRUPAL}
                    target="_blank"
                    rel="me noopener"
                    title="Drupal Specialist: sviluppo Drupal su misura"
                    className="no-underline hover:underline text-gray-900 transition-colors group-hover:text-white"
                  >
                    {t("drupal_title")}
                  </a>
                </h3>
                <p className="mb-0 text-gray-600 transition-colors group-hover:text-primary-100">
                  {t("drupal_body")}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 w-fit no-underline font-semibold text-sm rounded-lg bg-primary-800 text-white px-4 py-2.5 transition-colors hover:bg-primary-950 group-hover:bg-white group-hover:text-primary-800 group-hover:hover:bg-primary-100"
                title="Drupal Specialist: sviluppo Drupal su misura"
                href={TINYREX_DRUPAL}
                target="_blank"
                rel="noopener"
              >
                <span>{t("drupal_cta")}</span>
                <IconArrowUpRight size={16} className="shrink-0" aria-hidden />
              </a>
            </div>

            <div className="group flex flex-col justify-between gap-8 rounded-xl bg-white p-8 shadow-sm transition-colors duration-300 hover:bg-primary-800">
              <div>
                <h3>
                  <a
                    href={TINYREX_DAAS}
                    target="_blank"
                    rel="me noopener"
                    title="Developer-as-a-Service: sviluppatore senior su richiesta"
                    className="no-underline hover:underline text-gray-900 transition-colors group-hover:text-white"
                  >
                    {t("daas_title")}
                  </a>
                </h3>
                <p className="mb-0 text-gray-600 transition-colors group-hover:text-primary-100">
                  {t("daas_body")}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 w-fit no-underline font-semibold text-sm rounded-lg bg-primary-800 text-white px-4 py-2.5 transition-colors hover:bg-primary-950 group-hover:bg-white group-hover:text-primary-800 group-hover:hover:bg-primary-100"
                title="Developer-as-a-Service: sviluppatore senior su richiesta"
                href={TINYREX_DAAS}
                target="_blank"
                rel="noopener"
              >
                <span>{t("daas_cta")}</span>
                <IconArrowUpRight size={16} className="shrink-0" aria-hidden />
              </a>
            </div>

            <div className="group flex flex-col justify-between gap-8 rounded-xl bg-white p-8 shadow-sm transition-colors duration-300 hover:bg-primary-800">
              <div>
                <h3>
                  <a
                    href={TINYREX_FCTO}
                    target="_blank"
                    rel="me noopener"
                    title="Fractional CTO: direzione tecnica senior su base frazionata"
                    className="no-underline hover:underline text-gray-900 transition-colors group-hover:text-white"
                  >
                    {t("fcto_title")}
                  </a>
                </h3>
                <p className="mb-0 text-gray-600 transition-colors group-hover:text-primary-100">
                  {t("fcto_body")}
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 w-fit no-underline font-semibold text-sm rounded-lg bg-primary-800 text-white px-4 py-2.5 transition-colors hover:bg-primary-950 group-hover:bg-white group-hover:text-primary-800 group-hover:hover:bg-primary-100"
                title="Fractional CTO: direzione tecnica senior su base frazionata"
                href={TINYREX_FCTO}
                target="_blank"
                rel="noopener"
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
