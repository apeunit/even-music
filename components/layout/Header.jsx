import { Span } from "../ui/Typography";
import Anchor from "../ui/Anchor";

export default function Header() {
    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 mb-13.25 sm:mb-44 xl:mb-64.5">
            <div className="sm:col-start-3 sm:border-l-0.5 border-black pt-5 pr-4 sm:pr-6 xl:pr-12 pb-4.25 sm:pl-2.5 sm:pt-10 sm:pb-0.5 xl:pl-5 xl:pb-0">
                <Span>
                    Even wants to fundamentally change the way artists and their communities interact. Even aims
                    to reshape the future of music through deeper collaboration of
                    all participants in the ecosystem.
                </Span>
            </div>
            <div className="flex flex-col border-l-0.5 border-black pt-5 pl-5 gap-y-2.5 sm:pl-2.5 sm:pt-10 xl:pl-5 xl:gap-y-5">
                <Anchor url={"mailto:email@example.com"}>Litepaper</Anchor>
                <Anchor url={"https://www.google.com"}>Get In Touch</Anchor>
            </div>
        </div>
    )
}
