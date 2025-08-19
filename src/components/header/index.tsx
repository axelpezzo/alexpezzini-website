"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import LangSwitcher from "../switcher/lang-switcher";
import { Container } from "../container";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Intro", href: "#", target: "section-home-1" },
    { name: "Carriera", href: "#", target: "section-home-2" },
    { name: "Sviluppo", href: "#", target: "section-home-3" },
    { name: "Formazione", href: "#", target: "section-home-4" },
    { name: "Contatti", href: "#", target: "section-home-5" },
  ];

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    k: number
  ) => {
    e.preventDefault();
    const target = menuItems[k].target;
    const section = document.getElementById(target);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors ${
        isScrolled ? "bg-primary-1000" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                height={60}
                alt="Alex Pezzini - Fullstack Developer"
              />
            </Link>
          </div>
          {/* Header actions */}
          <div className="flex items-center space-x-8 bg-primary-900 pl-8 pr-4 py-2 rounded-xl">
            {/* Menu */}
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
            {/* Language Switch Icon */}
            <LangSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
