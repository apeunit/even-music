import Wrapper from "@/components/wrapper/Wrapper";
import Description from "@/components/sections/Description";
import Header from "@/components/layout/Header";
import Even from "@/components/sections/Even";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Even</title>
      </Head>
      <Wrapper>
        <Header />
        <Even />
        <Description />
      </Wrapper>
    </>
  );
}
