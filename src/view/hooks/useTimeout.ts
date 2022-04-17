import { useEffect, useMemo, useRef } from "react";

export interface UseTimeoutResult {
  start: (handler: () => void, timeout: number) => void;
  cancel: () => void;
}

export function useTimeout(): UseTimeoutResult {
  const idRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (idRef.current) {
        window.clearTimeout(idRef.current);
      }
    };
  }, []);

  const result = useMemo(() => {
    function start(handler: () => void, timeout: number) {
      if (idRef.current) {
        window.clearTimeout(idRef.current);
      }

      idRef.current = window.setTimeout(() => {
        idRef.current = undefined;
        handler();
      }, timeout);
    }

    function cancel() {
      if (idRef.current) {
        window.clearTimeout(idRef.current);
        idRef.current = undefined;
      }
    }

    return { start, cancel };
  }, []);

  return result;
}
