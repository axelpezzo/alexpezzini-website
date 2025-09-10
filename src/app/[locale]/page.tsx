import SectionHome_1 from "@/components/section-home-1";
import SectionHome_2 from "@/components/section-home-2";
import SectionHome_3 from "@/components/section-home-3";
import SectionHome_4 from "@/components/section-home-4";
import SectionHome_5 from "@/components/section-home-5";
import { setRequestLocale } from "next-intl/server";

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <SectionHome_1 />
      <SectionHome_2 />
      <SectionHome_3 />
      <SectionHome_4 />
      <SectionHome_5 />
    </main>
  );
};

export default Home;
