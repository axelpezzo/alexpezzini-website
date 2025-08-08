"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  {
    lang: "it",
    path: "it",
    name: "IT",
  },
  {
    lang: "en",
    path: "en",
    name: "EN",
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
      className="p-2 w-12 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition cursor-pointer"
      aria-label="Switch the language"
      onClick={handleSwitch}
    >
      {otherLocale?.name}
    </button>
  );
};

export default LangSwitcher;
