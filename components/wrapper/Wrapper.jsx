export default function Wrapper({ children }) {
  return (
    <div className="px-5 sm:px-10 xl:px-20">
      <div className="max-w-280 mx-auto">{children}</div>
    </div>
  );
}
