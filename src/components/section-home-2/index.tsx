import React from "react";
import { Container } from "../container";
import { useTranslations } from "next-intl";

const MAX_PARAGRAPHS = 3;
const TINYREX_URL = "https://www.tinyrex.it/";

const SectionHome_2 = () => {
  const t = useTranslations("Section_2");

  return (
    <section className="h-full w-full relative bg-white overflow-hidden" id="section-home-2">
      <Container>
        <div className="py-24 lg:py-32">
          <h2>{t("title")}</h2>
          <div>
            {Array.from({ length: MAX_PARAGRAPHS }, (_, i) => i + 1).map((n) => (
              <p key={n}>
                {t.rich(`p_${n}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                  i: (chunks) => <i>{chunks}</i>,
                  tinyrex: (chunks) => (
                    <a
                      href={TINYREX_URL}
                      target="_blank"
                      rel="me author noopener"
                      title={t("tinyrex_link_title")}
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            ))}
          </div>
          <div className="mt-20">
            <h3>{t("skill_title")}</h3>
            <ul className="list-disc pl-6">
              <li>
                {t.rich("skill_1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li>
                {t.rich("skill_2", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li>
                {t.rich("skill_3", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
              <li>
                {t.rich("skill_4", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHome_2;
