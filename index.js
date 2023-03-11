import { useEffect, useState } from "react";
export function useNow() {
  const [now, setNow] = useState();
  useEffect(() => {
    let oneSec = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      clearInterval(oneSec);
    };
  }, []);

  return now;
}
