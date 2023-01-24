import Image from "next/image";
import React from "react";
import { Span } from "../ui/Typography";

export default function Even() {
  return (
    <div>
      <div className="relative w-full aspect-logo">
        <Image src="/svg/even.svg" fill alt="logo" />
      </div>
      <div className="max-w-87.5 sm:max-w-113.05 mx-auto sm:mx-0 xl:max-w-159.5 mt-10 relative">
        <div className="font-medium text-lg sm:text-1xl xl:text-3.5xl -tracking-thinnest sm:-tracking-thinner xl:-tracking-thin leading-5.5 sm:leading-7 xl:leading-10 text-primary">
          A decentralised protocol for music artists, fans and&nbsp;
          <div className="text-accent underline  relative inline-block">
            <span className="inline-block w-max underline decoration-4 underline-offset-2 ">
              collective forms
            </span>
            <div className="flex flex-col left-2 sm:left-4 xl:left-17.2 items-center absolute translate-y-full bottom-0 xl:bottom-0.75">
              <div className="w-2.5 h-15.22 sm:h-17.9 relative xl:h-20.75">
                <Image src="/svg/line.svg" fill alt="line" />
              </div>
              <div className="mx-auto min-w-45.25 sm:min-w-53.25 text-center">
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
