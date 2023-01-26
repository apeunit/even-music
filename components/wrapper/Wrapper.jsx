export default function Wrapper({ children }) {
  return (
    <div className="px-5 md:px-10 xl:px-20">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
