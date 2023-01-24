import Image from "next/image";
import React from "react";
import { Heading, Paragraph, Span } from "../ui/Typography";

export default function Even() {
  return (
    <div className="mt-17.5 sm:mt-44.5 xl:mt-64.5">
      <div className="relative w-full aspect-logo">
        <Image src="/svg/even.svg" fill className="" alt="logo" />
      </div>
      <div className="max-w-87.5 sm:max-w-113.05 mx-auto sm:mx-0 xl:max-w-159.5 mt-10 relative">
        <div className="font-medium text-lg sm:text-1xl xl:text-3.5xl -tracking-thinnest sm:-tracking-thinner xl:-tracking-thin leading-5.5 sm:leading-7 xl:leading-10 text-primary">
          A decentralised protocol for music artists, fans and{" "}
          <div className="text-accent underline  decoration-4 underline-offset-2 relative inline-block">
            collective forms
            <div className="flex flex-col left-3.2 sm:left-5.6 xl:left-18.4 items-center absolute translate-y-full bottom-0 xl:bottom-0.75">
              <div className="w-2.5 h-15.22 sm:h-17.9 relative xl:h-20.75">
                <Image src="/svg/line.svg" fill className="" alt="line" />
              </div>
              <Span>
                <span className="text-accent leading-4.25 block  mx-auto min-w-45.25 sm:min-w-53.25 text-center">
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
