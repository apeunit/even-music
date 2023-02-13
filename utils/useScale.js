import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  let scale =  width / 1024;
  if (scale > 1.40625) {
    scale = 1.40625;
  }
  useEffect(() => {
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
export default useWidth;