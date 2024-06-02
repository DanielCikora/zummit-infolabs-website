import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
export default function LateLoad({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const time = 1600;
  const loaderStyles = {
    width: "100%",
    height: "100dvh",
    display: "grid",
    placeItems: "center",
    backgroundColor: "black",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Triangle
        height='120'
        width='140'
        radius='10'
        color='white'
        ariaLabel='triangle-loading'
        wrapperStyle={loaderStyles}
      />
    );
  }
  return <>{children}</>;
}
