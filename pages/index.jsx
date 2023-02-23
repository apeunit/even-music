import Wrapper from "@/components/wrapper/Wrapper";
import Description from "@/components/sections/Description";
import Header from "@/components/layout/Header";
import Even from "@/components/sections/Even";
import Head from "next/head";
import Footer from "@/components/layout/Footer";
import useScale from "@/hooks/useScale";

export default function Home() {
  const { width } = useScale();
  return (
    <>
      <Head>
        <title>Even</title>
      </Head>
      {width !== 0 && (
        <Wrapper>
          <Header />
          <Even />
          <Description />
          <Footer />
        </Wrapper>
      )}
    </>
  );
}
