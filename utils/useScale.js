import { useEffect,useLayoutEffect, useState } from "react";

const useScale = () => {
  const [width, setWidth] = useState(0);
  let scale =  width ? width / 1024 : 1;
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
  return {scale, width};
}
export default useScale;