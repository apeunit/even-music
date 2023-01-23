import Image from "next/image";
import React from "react";
import { Heading, Paragraph, Span } from "../ui/Typography";

export default function Even() {
  return (
    <div className="mt-[70px] sm:mt-[178px] xl:mt-[258px]">
      <div className="relative w-full aspect-[60/23]">
        <Image src="/svg/even.svg" fill className="" />
      </div>
      <div className="max-w-[350px] sm:max-w-[452.22px] mx-auto sm:mx-0 xl:max-w-[638px] mt-10 relative">
        <div className="font-medium text-lg sm:text-1xl xl:text-3.5xl -tracking-thinnest sm:-tracking-thinner xl:-tracking-thin leading-5.5 sm:leading-7 xl:leading-10 text-primary">
          A decentralised protocol for music artists, fans and{" "}
          <div className="text-accent underline  decoration-4 underline-offset-2 relative inline-block">
            collective forms
            <div className="flex flex-col left-[0.8rem] sm:left-[1.4rem] xl:left-[4.3rem] items-center absolute translate-y-full bottom-0 xl:bottom-[3px]">
              <div className="w-2.5 h-[60.9px] sm:h-[71.9px] relative xl:h-[83px]">
                <Image src="/svg/line.svg" fill className="" />
              </div>
              <Span>
                <span className="text-accent leading-4.25 block  mx-auto min-w-[181px] sm:min-w-[213px] text-center">
                  The immaterial and collaborative nature of music productions
                  need flexible models
                </span>
              </Span>
            </div>
          </div>{" "}
          of value exchange
        </div>
      </div>
    </div>
  );
}
