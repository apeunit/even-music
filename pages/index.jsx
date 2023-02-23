import MainWrapper from "@/components/wrappers/MainWrapper";
import Description from "@/components/sections/Description";
import Header from "@/components/layout/Header";
import Even from "@/components/sections/Even";
import Head from "next/head";
import Footer from "@/components/layout/Footer";
import useScale from "@/hooks/useScale";

export default function Home() {
  const { windowWidth } = useScale();
  return (
    <>
      <Head>
        <title>Even</title>
      </Head>
      {windowWidth !== 0 && (
        <MainWrapper>
          <Header />
          <Even />
          <Description />
          <Footer />
        </MainWrapper>
      )}
    </>
  );
}
