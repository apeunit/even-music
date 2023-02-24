export default function MainWrapper({ children }) {
  return (
    <div className="px-5 sm:px-10 xl:px-20 selection:bg-lightGrey">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
