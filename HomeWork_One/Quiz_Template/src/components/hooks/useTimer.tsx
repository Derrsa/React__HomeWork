import { useEffect, useRef } from "react";
type UseTimerCallback = () => void;
export function useTimer(callback: UseTimerCallback, enabled: boolean) {
  const savedCallback = useRef<UseTimerCallback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });
  // function reUse() {
  //   return (savedCallback.current = callback);
  // }

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (!enabled) {
      const id = setInterval(tick, 100000);
      return () => clearInterval(id);
    }
  }, [enabled]);
}
