import React from "react";
import ThemeSwitcher from "../switcher/theme-switcher";
import LangSwitcher from "../switcher/lang-switcher";

const Header = () => {
  const menuItems = [
    { name: "Intro", href: "/" },
    { name: "Carriera", href: "/about" },
    { name: "Sviluppo", href: "/projects" },
    { name: "Formazione", href: "/projects" },
    { name: "Contatti", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full dark:bg-black dark:text-gray-100 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>
        {/* Menu */}
        <nav className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          {/* Theme Switch Icon */}
          <ThemeSwitcher />
          {/* Language Switch Icon */}
          <LangSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
