import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import LangSwitcher from "../switcher/lang-switcher";
import { Container } from "../container";

const Header = () => {
  const menuItems = [
    { name: "Intro", href: "/" },
    { name: "Carriera", href: "/about" },
    { name: "Sviluppo", href: "/projects" },
    { name: "Formazione", href: "/projects" },
    { name: "Contatti", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary-1000">
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
          <div className="flex items-center space-x-8 bg-primary-800 pl-8 pr-4 py-2 rounded-xl">
            {/* Menu */}
            <nav className="flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white relative transition-colors py-2 px-2 link-underline font-semibold"
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
