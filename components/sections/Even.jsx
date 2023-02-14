import Image from "next/image";
import { Span } from "@/components/ui/Typography";

export default function Even() {
  return (
    <div>
      <div className="relative w-full aspect-logo">
        <Image src="/svg/even.svg" fill alt="logo" priority />
      </div>
      <div className="max-w-62.5 xs:max-w-87.5 sm:max-w-113.05 md:max-w-127.18 lg:max-w-141.31 xl:max-w-219.31 mx-auto sm:mx-0 mt-10 relative pr-4 sm:pr-0">
        <div className="font-normal text-lg sm:text-5.75 md:text-6.46 lg:text-7.18 xl:text-11 -tracking-0.25 sm:-tracking-0.34 leading-5.5 sm:leading-6.96 md:-tracking-0.38 md:leading-7.83 lg:-tracking-0.42 lg:leading-8.7 xl:-tracking-0.61 xl:leading-13.75 text-primary">
          A decentralised protocol for music artists, fans and&nbsp;
          <div className="relative inline-block underline text-secondary">
            <span className="inline-block w-max underline decoration-0.475 sm:decoration-0.8 underline-offset-2 sm:underline-offset-1.25 xl:underline-offset-2">
              collective forms
            </span>
            <div className="flex flex-col left-2 sm:left-5.6 xl:left-24.4 items-center absolute translate-y-full bottom-0.25 sm:-bottom-0.25 xl:bottom-[0.60rem]">
              <div className="w-2.5 h-15.22 sm:h-17.9 relative xl:h-20.75">
                <Image src="/svg/line.svg" fill alt="line" />
              </div>
              <div className="mx-auto min-w-45.25 sm:min-w-53.25 md:min-w-59.9 lg:min-w-66.56 xl:min-w-73.19 text-center ">
                <Span secondary>
                  The immaterial and collaborative nature of music productions
                  need flexible models
                </Span>
              </div>
            </div>
          </div>
          &nbsp;of value exchange
        </div>
      </div>
    </div>
  );
}
