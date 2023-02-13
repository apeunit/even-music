
export default function Wrapper({ children }) {

  return (
    <div className="px-5 sm:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div>
          <div >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
