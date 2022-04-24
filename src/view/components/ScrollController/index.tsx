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
} from "react";

export interface ScrollHandler {
  (element: Element): void;
}

const ScrollContext = createContext<Set<ScrollHandler> | null>(null);

export interface ScrollControllerProps {
  children: (elementRef: RefCallback<Element>) => ReactNode;
}

export const ScrollController: FC<ScrollControllerProps> = (props) => {
  const handlers = useMemo(() => new Set<ScrollHandler>(), []);
  const [container, setContainer] = useState<Element | null>(null);
  const containerRef = useCallback((element: Element) => setContainer(element), []);

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

  return <ScrollContext.Provider value={handlers}>{props.children(containerRef)}</ScrollContext.Provider>;
};

export function useScrollClient(handler: ScrollHandler): void {
  const handlers = useContext(ScrollContext);
  useEffect(() => {
    if (!handlers) {
      return;
    }
    handlers.add(handler);
    return () => {
      handlers.delete(handler);
    };
  }, [handlers, handler]);
}
