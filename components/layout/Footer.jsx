import { Span } from "../ui/Typography";
import Anchor from "../ui/Anchor";

export default function Footer() {
    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-20 sm:mt-25">
            <div className="pb-0 sm:pb-10 pt-0.5 sm:pt-0.75 xl:pt-0 sm:pr-2 pr-5  xl:pl-10.5">
                <h5 className="font-variation-secondary block font-semibold sm:text-sm text-xs -tracking-tight leading-3.75 sm:leading-4.25 text-black">Even</h5>
                <Span>C/O Ape Unit,  Waldemarstr. 38</Span>
                <Span>10999 Berlin Germany</Span>
            </div>
            <div className="border-l-0.5 border-black pb-0 sm:pb-10 pt-1 sm:pt-0.75 xl:pt-0 pr-2.5 xl:pr-21.25 pl-5 sm:pl-2.5 xl:pl-5 ">
                <h5 className="font-variation-secondary block font-semibold sm:text-sm text-xs -tracking-tight leading-3.75 sm:leading-4.25 text-black">Miguel Lizio</h5>
                <Span>Tel.: +49 30 306490108</Span>
            </div>
            <div className="sm:border-l-0.5 border-black pl-0 sm:pl-5 pb-5 sm:pb-10  pr-4 sm:pr-2.5 pt-5 sm:pt-0.75 xl:pt-0">
                <div className="max-w-39.5 sm:max-w-54.75">
                    <Span>
                        We are developers, designers, researchers and music enthusiast interested in building decentralised systems, fostering open knowledge and giving people tools to better coordinate.
                    </Span>
                </div>
            </div>
            <div className="flex flex-col justify-between border-l-0.5 border-black pl-5 sm:pl-2.5 xl:pl-5 pb-5 sm:pb-10 pt-0 sm:pt-0.75 xl:pt-0">
                <span className=""><Anchor url={"mailto:even@apeunit.com"}>Get In Touch</Anchor></span>

                <span className="block font-medium text-xxs -tracking-tight leading-3 text-black">© 2021 Even
                    <br />All Rights Reserved.</span>
            </div>
        </div>
    );
}
