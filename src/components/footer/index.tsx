"use client";
import React from "react";
import { Container } from "../container";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="w-full relative bg-gray-900 text-white text-sm p-10">
      <Container>
        <div className="flex justify-between">
          <div>
            &copy; {currentYear} {t("copyrights")}
          </div>
          {/* <div>P.IVA 0000000000</div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
