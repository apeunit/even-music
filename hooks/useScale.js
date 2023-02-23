import { useEffect, useState } from "react";

export default function useScale() {
  const [width, setWidth] = useState(0);
  let scale = width ? width / 1024 : 1;
  if (scale > 1.5) {
    scale = 1.5;
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
  return { scale, width };
}
