export function Heading({ children }) {
  return (
    <h1 className="font-normal text-lg sm:text-1xl xl:text-3.5xl -tracking-thinnest sm:-tracking-thinner xl:-tracking-thin leading-5.5 sm:leading-7 xl:leading-10 text-primary">
      {children}
    </h1>
  );
}

export function Paragraph({ children }) {
  return (
    <p className="text-sm font-normal -tracking-tight sm:text-base xl:text-lg sm:-tracking-thinnest leading-4.25 sm:leading-4.75 xl:leading-6 text-black">
      {children}
    </p>
  );
}

export function Span({ children, secondary }) {
  return (
    <span
     
      className={`block font-normal sm:text-sm text-xs -tracking-tight leading-3.63 sm:leading-4.25 ${
        
        secondary ? "text-secondary" : "text-black"
      
      }`}
    
    >
      {children}
    </span>
  );
}
