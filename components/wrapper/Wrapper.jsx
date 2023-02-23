export default function Wrapper({ children }) {
  return (
    <div className="px-5 sm:px-10 xl:px-20 selection:bg-lightGrey">
      <div className="mx-auto max-w-7xl font-variation">{children}</div>
    </div>
  );
}
