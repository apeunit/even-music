import Link from "next/link";

export default function Anchor({ children, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-block font-normal sm:text-sm md:text-3.93 lg:text-4.37 xl:text-4.81 text-xs -tracking-0.1 md:-tracking-0.11 md:leading-4.76 lg:-tracking-0.125 lg:leading-5.29 xl:-tracking-0.13 xl:leading-5.82 sm:leading-4.25 leading-3.63 text-primary underline underline-offset-3 hover:text-secondary text-opacity-90"
    >
      {children}
    </Link>
  );
}
