import Link from "next/link";
import { Paragraph } from "@/components/ui/Typography";

export default function Description() {
  return (
    <div className="font-variation grid xl:grid-cols-2">
      <div className="col-start-2 flex flex-col gap-5 sm:gap-10 pl-4 pr-6 mt-36.5 sm:mt-45.75 xl:mt-20 xl:max-w-104.75 sm:px-10 xl:px-0 xl:pl-5">
        <Paragraph>
          <span className="block">The music industry is broken.</span> Creating
          cultural value does not provide a livable income for 90+% of artists.
          We need to rethink the value and distribution of creative work. We
          need new, transparent, flexible economic models. Even wants to tackle
          the problem of financial inequity within the music industry. Even is
          an open protocol that encourages group collaboration, connects niche
          artists to micro-communities, and supports culture through productive
          exchanges. Edited By Noella, hotfix.
        </Paragraph>
        <Paragraph>
          Each artist has an ideal way to fund their practice, involve and
          reward their audiences, or orchestrate collaborations. No single tool
          could satisfy the complex requirements that millions of individual
          artists have. In light of these individualities, Even is a protocol
          with a modular architecture that enables artists, curators, and fans
          to easily compose custom economic mechanisms that give them complete
          control over how they share and distribute the value of their work. We
          want artists to be able to create their ideals and own their success,
          with ease. Edited by Izzeddin, hotfix on stage
        </Paragraph>
        <Link
          href="/pdfs/even-litepaper.pdf"
          target="_blank"
          className="inline-block font-normal text-sm -tracking-tight leading-4.25 text-black underline underline-offset-3 hover:text-secondary"
        >
          Litepaper
        </Link>
      </div>
    </div>
  );
}
