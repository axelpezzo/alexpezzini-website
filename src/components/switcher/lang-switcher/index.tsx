"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconPizza } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";

const locales = [
  {
    lang: "it",
    path: "it",
    name: "IT",
    icon: (
      <IconPizza
        size={16}
        strokeWidth={2}
        color={"white"}
        className="relative top-[2px]"
      />
    ),
  },
  {
    lang: "en",
    path: "en",
    name: "EN",
    icon: (
      <IconWorld
        size={16}
        strokeWidth={2}
        color={"white"}
        className="relative top-[2px]"
      />
    ),
  },
];

const LangSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale =
    locales.find((locale) => pathname.startsWith(`/${locale.path}`)) || "it";

  const otherLocale = locales.find((locale) => locale !== currentLocale);

  const handleSwitch = () => {
    if (!otherLocale) return;
    const newPath = pathname.replace(/^\/(en|it)/, `/${otherLocale.path}`);
    router.push(newPath);
  };

  return (
    <button
      className="flex gap-2 justify-center px-2 py-2 w-16 rounded bg-primary-600 text-white transition cursor-pointer text-sm hover:bg-primary-900"
      aria-label="Switch the language"
      onClick={handleSwitch}
    >
      {otherLocale?.icon}
      {otherLocale?.name}
    </button>
  );
};

export default LangSwitcher;
