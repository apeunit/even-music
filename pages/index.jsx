import Wrapper from "@/components/wrapper/Wrapper";
import { Heading, Paragraph, Span } from "@/components/ui/Typography";
import Anchor from "@/components/ui/Anchor";

export default function Home() {
  return (
    <Wrapper>
      <Heading>
        A decentralised protocol for music artists, fans and collective forms of
        value exchange
      </Heading>
      <Paragraph>
        The music industry is broken. Creating cultural value does not provide a
        livable income for 90+% of artists. We need to rethink the value and
        distribution of creative work. We need new, transparent, flexible
        economic models. Even wants to tackle the problem of financial inequity
        within the music
      </Paragraph>
      <Span>
        We are developers, designers, researchers and music enthusiast
        interested in building decentralised systems, fostering open knowledge
        and giving people tools to better coordinate.
      </Span>
      <Anchor url={"https://www.google.com"}>Get In Touch</Anchor>
      <Anchor url={"mailto:email@example.com"}>Litepaper</Anchor>
      <h1 className="text-3xl font-bold underline">Even music. In progress</h1>
    </Wrapper>
  );
}
