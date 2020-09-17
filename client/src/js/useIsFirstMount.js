import { useRef, useEffect } from "react";

const useIsFirstMount = () => {
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    isFirstMountRef.current = false;
  }, []);

  return isFirstMountRef.current;
};

export default useIsFirstMount;
