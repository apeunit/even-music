export function Heading({ children }) {
  return (
    <h1 className="font-normal text-lg sm:text-5.75 xl:text-8 -tracking-0.25 sm:-tracking-0.34 xl:-tracking-0.45 leading-5.5 sm:leading-7 xl:leading-10 text-primary">
      {children}
    </h1>
  );
}

export function Paragraph({ children }) {
  return (
    <p className="text-sm md:text-lg md:-tracking-0.28 md:leading-5.5 lg:text-xl lg:leading-6.05 lg:-tracking-0.31 xl:-tracking-0.34 xl:leading-8.25 font-normal -tracking-0.1 sm:text-base xl:text-6.18 sm:-tracking-0.25 leading-4.25 sm:leading-4.84 text-black">
      {children}
    </p>
  );
}

export function Span({ children, secondary }) {
  return (
    <span
     
      className={`block font-normal sm:text-sm md:text-3.93 lg:text-4.37 xl:text-4.81 text-xs -tracking-0.1 md:-tracking-0.11 md:leading-4.76 lg:-tracking-0.125 xl:-tracking-0.13 lg:leading-5.29 xl:leading-5.82 leading-3.63 sm:leading-4.25 ${
        
        secondary ? "text-secondary" : "text-black"
      
      }`}
    
    >
      {children}
    </span>
  );
}
