const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  return <div className="m-20">ALEX PEZZINI - {lang}</div>;
};

export default Home;
