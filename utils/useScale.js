import { useLayoutEffect, useState } from "react";

const useScale = () => {
  const [width, setWidth] = useState(0);
  let scale =  width / 1024;
  if (scale > 1.5) {
    scale = 1.5;
  }
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return scale;
}
export default useScale;