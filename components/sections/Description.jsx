import Link from "next/link";
import { Paragraph } from "@/components/ui/Typography";
import useScale from "@/utils/useScale";

export default function Description() {
  const {scale} = useScale()
  return (
    <div className="grid font-variation xl:grid-cols-2">
      <div className="col-start-2 pl-4 pr-6 mt-36.5 sm:mt-45.75 xl:mt-20 sm:px-10 xl:px-0 xl:pl-5">
        <div className="xl:max-w-134.8 2xl:max-w-150 flex flex-col gap-5 sm:gap-10">
          <Paragraph>
            <span className="block">The music industry is broken.</span>
            Creating cultural value does not provide a livable income for 90+%
            of artists. We need to rethink the value and distribution of
            creative work. We need new, transparent, flexible economic models.
            Even wants to tackle the problem of financial inequity within the
            music industry. Even is an open protocol that encourages group
            collaboration, connects niche artists to micro-communities, and
            supports culture through productive exchanges.
          </Paragraph>
          <Paragraph>
            Each artist has an ideal way to fund their practice, involve and
            reward their audiences, or orchestrate collaborations. No single
            tool could satisfy the complex requirements that millions of
            individual artists have. In light of these individualities, Even is
            a protocol with a modular architecture that enables artists,
            curators, and fans to easily compose custom economic mechanisms that
            give them complete control over how they share and distribute the
            value of their work. We want artists to be able to create their
            ideals and own their success, with ease.
          </Paragraph>
          <Link
            href="/pdfs/even-litepaper.pdf"
            target="_blank"
            className="inline-block font-normal text-sm leading-0.30 -tracking-0.1 text-primary underline underline-offset-3 hover:text-secondary text-opacity-95"
            style={scale > 1 ? {fontSize: `${0.875 * scale}rem`, letterSpacing: `${-0.025 * scale}rem`} : null}
          >
            Litepaper
          </Link>
        </div>
      </div>
    </div>
  );
}
