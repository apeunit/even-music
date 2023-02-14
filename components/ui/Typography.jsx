import useScale from "@/utils/useScale";
export function Heading({ children }) {
  return (
    <h1 className="font-normal text-lg sm:text-5.75 xl:text-8 -tracking-0.25 sm:-tracking-0.34 xl:-tracking-0.45 leading-5.5 sm:leading-7 xl:leading-10 text-primary text-opacity-90">
      {children}
    </h1>
  );
}

export function Paragraph({ children }) {
  const { scale } = useScale();
  return (
    <p
      className="text-sm sm:text-base -tracking-0.25 leading-0.30 text-primary opacity-95"
      style={
        scale > 1
          ? {
              fontSize: `${1.125 * scale}rem`,
              letterSpacing: `${-0.0625 * scale}rem`,
            }
          : null
      }
    >
      {children}
    </p>
  );
}

export function Span({ children, secondary }) {
  return (
    <span
      className={`block font-normal sm:text-sm md:text-3.93 lg:text-4.37 xl:text-4.81 text-xs -tracking-0.1 md:-tracking-0.11 md:leading-4.76 lg:-tracking-0.125 xl:-tracking-0.13 lg:leading-5.29 xl:leading-5.82 leading-3.63 sm:leading-4.25 text-opacity-90 ${
        secondary ? "text-secondary" : "text-primary"
      }`}
      style={{}}
    >
      {children}
    </span>
  );
}
