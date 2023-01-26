import { Span } from "@/components/ui/Typography";
import Anchor from "@/components/ui/Anchor";

export default function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-13.25 md:mb-44 xl:mb-64.5">
      <div className="md:col-start-2 flex flex-wrap md:flex-nowrap">
        <div className="md:border-l-0.5 border-black pt-5 pr-0.5 md:pr-2.5 pb-4.25 md:pl-2.5 md:pt-10 md:pb-0.5 xl:pl-5 xl:pr-10 xl:pb-0">
          <div className="max-w-48.25 md:max-w-54.75 pr-4.5 md:pr-3">
            <Span>
              Even wants to fundamentally change the way artists and their
              communities interact. Even aims to reshape the future of music
              through deeper collaboration of all participants in the ecosystem.
            </Span>
          </div>
        </div>
        <div className="flex flex-col border-l-0.5 border-black pt-5 pl-5 gap-y-2.5 md:pl-2.5 md:pt-10 xl:pl-5 xl:gap-y-5">
          <Anchor url="https://evenmusic.co/">Litepaper</Anchor>
          <Anchor url="mailto:even@apeunit.com">Get In Touch</Anchor>
        </div>
      </div>
    </div>
  );
}
