import { Span } from "../ui/Typography";
import Anchor from "../ui/Anchor";

export default function Header() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-13.25 sm:mb-44 xl:mb-64.5">
      <div className=" sm:col-start-2 flex flex-wrap sm:flex-nowrap">
        <div className="flex-1 sm:flex-none sm:w-auto xl:w-1/2 sm:border-l-0.5 border-black pt-5 pr-4 sm:pr-2.5 pb-4.25 sm:pl-2.5 sm:pt-10 sm:pb-0.5 xl:pl-5 xl:pb-0">
          <div className="max-w-48.25 sm:max-w-54.75">
            <Span>
              Even wants to fundamentally change the way artists and their
              communities interact. Even aims to reshape the future of music
              through deeper collaboration of all participants in the ecosystem.
            </Span>
          </div>
        </div>
        <div className="flex-1 sm:flex-none sm:w-auto xl:w-1/2 flex flex-col border-l-0.5 border-black pt-5 pl-5 gap-y-2.5 sm:pl-2.5 sm:pt-10 xl:pl-5 xl:gap-y-5">
          <Anchor url={"https://evenmusic.co/"}>Litepaper</Anchor>
          <Anchor url={"mailto:email@example.com"}>Get In Touch</Anchor>
        </div>
      </div>
    </div>
  );
}
