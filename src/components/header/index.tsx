"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import LangSwitcher from "../switcher/lang-switcher";
import { Container } from "../container";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: t("menu_1"), href: "#", target: "section-home-1" },
    { name: t("menu_2"), href: "#", target: "section-home-2" },
    { name: t("menu_3"), href: "#", target: "section-home-3" },
    { name: t("menu_4"), href: "#", target: "section-home-4" },
    { name: t("menu_5"), href: "#", target: "section-home-5" },
  ];

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    k: number
  ) => {
    e.preventDefault();
    const target = menuItems[k].target;
    const section = document.getElementById(target);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-55 transition-colors min-h-[90px] lg:min-h-auto ${
        isScrolled ? "bg-primary-1000" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center fixed z-55 left-6 top-4 lg:static">
            <Link href="/">
              <Image
                src={Logo}
                className="h-[50px] lg:h-[60px] w-auto"
                alt="Alex Pezzini - Fullstack Developer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 bg-primary-900 pl-8 pr-4 py-2 rounded-xl">
            <nav className="flex items-center gap-6">
              {menuItems.map((item, k) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleOnClick(e, k)}
                  className="text-white relative transition-colors no-underline py-2 px-2 link-underline font-semibold text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <LangSwitcher />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden relative">
            <button
              className="flex top-7 fixed z-55 lg:static right-6 flex-col justify-center items-center space-y-[6px] group cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`w-8 h-[3px] bg-white transition-transform ${
                  isMenuOpen
                    ? "translate-y-[12px] rotate-45"
                    : "group-hover:translate-y-[2px]"
                }`}
              ></div>
              <div
                className={`w-8 h-[5px] bg-primary-500 transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-8 h-[3px] bg-white transition-transform ${
                  isMenuOpen
                    ? "-translate-y-[8px] -rotate-45"
                    : "group-hover:-translate-y-[2px]"
                }`}
              ></div>
            </button>

            {/* Mobile Menu con animazione */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed z-50 top-0 right-0 left-0 min-h-screen bg-primary-900 
                             text-white flex flex-col justify-center items-center space-y-8"
                >
                  {menuItems.map((item, k) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleOnClick(e, k)}
                      className="text-white no-underline font-semibold text-2xl"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
