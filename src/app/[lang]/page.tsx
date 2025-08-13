import SectionHome_1 from "@/components/section-home-1";
import SectionHome_2 from "@/components/section-home-2";
import SectionHome_3 from "@/components/section-home-3";

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  return (
    <div className="">
      <SectionHome_1 />
      <SectionHome_2 />
      <SectionHome_3 />
    </div>
  );
};

export default Home;
