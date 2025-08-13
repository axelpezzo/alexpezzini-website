import SectionHome_1 from "@/components/section-home-1";
import SectionHome_2 from "@/components/section-home-2";

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  return (
    <div className="">
      <SectionHome_1 />
      <SectionHome_2 />
    </div>
  );
};

export default Home;
