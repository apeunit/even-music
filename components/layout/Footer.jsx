import { Span } from "@/components/ui/Typography";
import Anchor from "@/components/ui/Anchor";
import useScale from "@/utils/useScale";

export default function Footer() {
  const { scale } = useScale();
  return (
    <div className="grid mt-20 sm:grid-cols-2 sm:mt-25">
      <div className="grid grid-cols-2 sm:flex 1.5lg:grid xl:flex 1.5xl:grid">
        <div className="flex-1 xl:flex-initial pt-0.5 sm:pt-0.75 xl:pt-0 pl-0 pr-0 sm:pr-2">
          <div className="max-w-none sm:max-w-48.5 md:max-w-54.56 lg:max-w-60.62 xl:max-w-[18rem] xl:w-full">
            <h5
              className="block font-semibold sm:text-sm text-xs -tracking-0.1 text-primary text-opacity-95 leading-0.30"
              style={
                scale > 1
                  ? {
                      fontSize: `${0.875 * scale}rem`,
                      letterSpacing: `${-0.025 * scale}rem`,
                    }
                  : null
              }
            >
              Even
            </h5>
            <Span>C/O Ape Unit, Waldemarstr. 38</Span>
            <Span>10999 Berlin Germany</Span>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial xl:flex-1 border-l-0.5 border-black pt-1 pl-5 sm:pt-0.75 xl:pt-0 sm:pl-2.5 xl:pl-5 pr-0 sm:pr-2.5 xl:pr-0">
          <div className="max-w-33 sm:max-w-38.75 md:max-w-43.59 lg:max-w-48.43 xl:max-w-[15rem]">
            <h5
              className="block font-semibold sm:text-sm text-xs -tracking-0.1 text-primary text-opacity-95 leading-0.30"
              style={
                scale > 1
                  ? {
                      fontSize: `${0.875 * scale}rem`,
                      letterSpacing: `${-0.025 * scale}rem`,
                    }
                  : null
              }
            >
              Miguel Lizio
            </h5>
            <Span>Tel.: +49 30 306490108</Span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex 1.5lg:grid xl:flex">
        <div className="flex-1 lg:flex-initial xl:pr-10 sm:border-l-0.5 border-black pt-5 pb-5 sm:pb-10 sm:pt-0.75 xl:pt-0 pr-1 xs:pr-0 sm:pr-2.5 pl-0 sm:pl-2.5 xl:pl-5">
          <div className="max-w-39.5 sm:max-w-54.75 md:max-w-61.59 lg:max-w-68.34 lg:pr-1.5 xl:max-w-[22rem] xl:w-full">
            <Span>
              We are developers, designers, researchers and music enthusiast
              interested in building decentralised systems, fostering open
              knowledge and giving people tools to better coordinate.
            </Span>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial flex flex-col justify-between border-l-0.5 border-black pl-5 pb-5 pt-0 sm:pt-0.5 xl:pt-0 sm:pl-2.5 xl:pl-5 sm:pb-10.75 xl:pb-10 pr-0 sm:pr-9.75 xl:pr-0 ">
          <Anchor url="mailto:even@apeunit.com">Get In Touch</Anchor>
          <div>
            <span
              className="block font-normal text-primary text-2.5 -tracking-0.1 text-opacity-95 leading-0.30"
              style={
                scale > 1
                  ? {
                      fontSize: `${0.625 * scale}rem`,
                      letterSpacing: `${-0.025 * scale}rem`,
                    }
                  : null
              }
            >
              © 2021 Even
            </span>
            <span
              className="block font-normal text-primary text-2.5 -tracking-0.1 text-opacity-95 leading-0.30"
              style={
                scale > 1
                  ? {
                      fontSize: `${0.625 * scale}rem`,
                      letterSpacing: `${-0.025 * scale}rem`,
                    }
                  : null
              }
            >
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
