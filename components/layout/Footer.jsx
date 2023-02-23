import SmallText from "../ui/typography/SmallText";
import CustomLink from "../ui/CustomLink";
import useScale from "@/hooks/useScale";

export default function Footer() {
  const { scale } = useScale();
  return (
    <div className="grid mt-20 sm:grid-cols-2 sm:mt-25">
      <div className="grid grid-cols-2 sm:flex 1.5lg:grid xl:flex 1.5xl:grid">
        <div className="flex-1 xl:flex-initial pt-0.5 sm:pt-0.75 xl:pt-0 px-0 sm:pr-2">
          <div className="max-w-none sm:max-w-48.5 md:max-w-54.56 lg:max-w-60.62 xl:max-w-72 xl:w-full">
            <h5
              className="block font-semibold sm:text-sm text-xs -tracking-0.1 text-primary text-opacity-95 leading-0.3"
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
            <SmallText>C/O Ape Unit, Waldemarstr. 38</SmallText>
            <SmallText>10999 Berlin Germany</SmallText>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial xl:flex-1 border-l-0.5 border-black pt-1 pl-5 sm:pt-0.75 xl:pt-0 sm:px-2.5 xl:pl-5 pr-0 xl:pr-0">
          <div className="max-w-33 sm:max-w-38.75 md:max-w-43.59 lg:max-w-48.43 xl:max-w-60">
            <h5
              className="block font-semibold sm:text-sm text-xs -tracking-0.1 text-primary text-opacity-95 leading-0.3"
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
            <SmallText>Tel.: +49 30 306490108</SmallText>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex 1.5lg:grid xl:flex">
        <div className="flex-1 lg:flex-initial xl:pr-10 sm:border-l-0.5 border-black py-5 sm:pb-10 sm:pt-0.75 xl:pt-0 pr-1 sm:pr-2.5 pl-0 sm:pl-2.5 xl:pl-5">
          <div className="max-w-48.25 sm:max-w-xs md:max-w-56 lg:max-w-67.2 xl:max-w-xs lg:pr-1.5 xl:w-full">
            <SmallText>
              We are developers, designers, researchers and music enthusiast
              interested in building decentralised systems, fostering open
              knowledge and giving people tools to better coordinate.
            </SmallText>
          </div>
        </div>
        <div className="flex-1 sm:flex-initial flex flex-col justify-between border-l-0.5 border-black pl-5 pb-5 pt-0 sm:pt-0.5 xl:pt-0 sm:pl-2.5 xl:pl-5 sm:pb-10.75 xl:pb-10 pr-0 sm:pr-9.75 xl:pr-0">
          <CustomLink url="mailto:even@apeunit.com">Get In Touch</CustomLink>
          <div>
            <span
              className="block font-normal text-primary text-2.5 -tracking-0.1 text-opacity-95 leading-0.3"
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
              className="block font-normal text-primary text-2.5 -tracking-0.1 text-opacity-95 leading-0.3"
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
