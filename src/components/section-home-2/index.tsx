import React from "react";
import { Container } from "../container";
import { useTranslations } from "next-intl";

const SectionHome_2 = () => {
  const t = useTranslations("Section_2");

  return (
    <section
      className="h-full w-full relative bg-white overflow-hidden"
      id="section-home-2"
    >
      <Container>
        <div className="py-24 lg:py-32">
          <h2>{t("title")}</h2>
          <div>
            <p>
              {t.rich("p_1", {
                strong: (chunks) => <strong>{chunks}</strong>,
                i: (chunks) => <i>{chunks}</i>,
              })}
            </p>
            <p>
              {t.rich("p_2", {
                strong: (chunks) => <strong>{chunks}</strong>,
                i: (chunks) => <i>{chunks}</i>,
              })}
            </p>
            <p>
              {t.rich("p_3", {
                strong: (chunks) => <strong>{chunks}</strong>,
                i: (chunks) => <i>{chunks}</i>,
                link: (chunks) => (
                  <a
                    href="https://www.intesys.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
            <p>
              {t.rich("p_4", {
                strong: (chunks) => <strong>{chunks}</strong>,
                i: (chunks) => <i>{chunks}</i>,
                link: (chunks) => (
                  <a
                    href="https://www.itslogistica.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
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
