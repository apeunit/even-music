import Wrapper from "@/components/wrapper/Wrapper";
import Description from "@/components/sections/Description";
import Header from "@/components/layout/Header";
import Even from "@/components/sections/Even";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Even />
      <Description />
    </Wrapper>
  );
}
