import { useEffect, useState } from "react";

export default function useScale() {
  const [windowWidth, setWindowWidth] = useState(0);
  let scale = windowWidth ? windowWidth / 1024 : 1;
  if (scale > 1.5) {
    scale = 1.5;
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return { scale, windowWidth };
}
