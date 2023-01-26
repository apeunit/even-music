export function Heading({ children }) {
  return (
    <h1 className="font-medium text-lg md:text-1xl xl:text-3.5xl -tracking-thinnest md:-tracking-thinner xl:-tracking-thin leading-5.5 md:leading-7 xl:leading-10 text-primary">
      {children}
    </h1>
  );
}

export function Paragraph({ children }) {
  return (
    <p className="text-sm font-medium -tracking-tight md:text-base xl:text-lg md:-tracking-thinnest leading-4.25 md:leading-4.75 xl:leading-5.5 text-black">
      {children}
    </p>
  );
}

export function Span({ children, secondary }) {
  return (
    <span className={`block font-medium md:text-sm text-xs -tracking-tight leading-3.75 md:leading-4.25 ${secondary ? "text-secondary" : "text-black"}`}>
      {children}
    </span>
  );
}
