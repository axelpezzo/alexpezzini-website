import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default function Home() {
  const defaultLocale = routing.defaultLocale;

  redirect(`/${defaultLocale}`);
}
