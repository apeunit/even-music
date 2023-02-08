import { Span } from "@/components/ui/Typography";
import Anchor from "@/components/ui/Anchor";

export default function Header() {
  return (
    <div className="font-variation grid grid-cols-1 sm:grid-cols-2 mb-13.25 sm:mb-44 xl:mb-52">
      <div className="flex flex-wrap sm:col-start-2 sm:flex-nowrap">
        <div className="flex-1 sm:flex-initial">
          <div className="sm:border-l-0.5 border-black pt-5 pr-0.5 sm:pr-2.5 pb-4.25 sm:pl-2.5 sm:pt-10 sm:pb-0.5 xl:pl-5 xl:pr-10 xl:pb-0">
            <div className="max-w-48.25 sm:max-w-54.75 md:max-w-61.59 lg:max-w-68.34 xl:max-w-75.28 pr-4.5 sm:pr-3">
              <Span>
                Even wants to fundamentally change the way artists and their
                communities interact. Even aims to reshape the future of music
                through deeper collaboration of all participants in the
                ecosystem.
              </Span>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial">
          <div className="h-full flex flex-col border-l-0.5 border-black pt-5 pl-5 gap-y-2.5 sm:pl-2.5 sm:pt-10 xl:pl-5 xl:gap-y-5">
            <Anchor url="/pdfs/even-litepaper.pdf">Litepaper</Anchor>
            <Anchor url="mailto:even@apeunit.com">Get In Touch</Anchor>
          </div>
        </div>
      </div>
    </div>
  );
}
