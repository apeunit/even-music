import Wrapper from "@/components/wrapper/Wrapper";
import Description from "@/components/sections/Description";
import Header from "@/components/layout/Header";
import Even from "@/components/sections/Even";
import Head from "next/head";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Even</title>
      </Head>
      <Wrapper>
        <Header />
        <Even />
        <Description />
        <Footer />
      </Wrapper>
    </>
  );
}
