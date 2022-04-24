import {
  FC,
  ReactNode,
  RefCallback,
  RefObject,
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
  useRef,
  useMemo,
  useLayoutEffect,
} from "react";

interface ScrollContextValue {
  container: Element | null;
  handlers: Set<ScrollHandler>;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export interface ScrollHandler {
  (container: Element): void;
}

export interface ScrollControllerProps {
  children: (containerRef: RefCallback<Element>) => ReactNode;
}

export const ScrollController: FC<ScrollControllerProps> = (props) => {
  const [container, setContainer] = useState<Element | null>(null);
  const containerRef = useCallback((element: Element) => setContainer(element), []);
  const handlers = useMemo(() => new Set<ScrollHandler>(), []);
  const contextValue = useMemo(() => ({ container, handlers }), [container, handlers]);

  useEffect(() => {
    if (!container) {
      return;
    }

    const listener = () => {
      handlers.forEach((h) => h(container));
    };

    listener();
    container.addEventListener("scroll", listener);
    return () => container.removeEventListener("scroll", listener);
  }, [handlers, container]);

  return <ScrollContext.Provider value={contextValue}>{props.children(containerRef)}</ScrollContext.Provider>;
};

export function useScrollClient(handler: ScrollHandler): void {
  const contextValue = useContext(ScrollContext);

  useEffect(() => {
    const handlers = contextValue?.handlers;
    handlers?.add(handler);
    return () => {
      handlers?.delete(handler);
    };
  }, [contextValue, handler]);

  useLayoutEffect(() => {
    const container = contextValue?.container;
    container && handler(container);
  }, [contextValue, handler]);
}
