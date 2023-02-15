import Link from "next/link";
import useScale from "@/utils/useScale";

export default function Anchor({ children, url }) {
  const { scale } = useScale()
  return (
    <Link
      href={url}
      target="_blank"
      className="inline-block font-normal sm:text-sm text-xs -tracking-0.1 leading-0.3 text-primary underline whitespace-nowrap underline-offset-0.625 hover:text-secondary text-opacity-95"
      style={
        scale > 1
          ? {
            fontSize: `${0.875 * scale}rem`,
            letterSpacing: `${-0.025 * scale}rem`,
          }
          : null
      }
    >
      {children}
    </Link>
  );
}
