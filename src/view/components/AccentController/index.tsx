import { createContext, FC, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

interface AccentClient {
  acquire: () => void;
  release: () => void;
}

interface AccentContextValue {
  clients: Set<AccentClient>;
  activeClient: AccentClient | null;
  handleAcquire(client: AccentClient): void;
  handleRelease(client: AccentClient): void;
}

const AccentContext = createContext<AccentContextValue | null>(null);

export interface AccentControllerProps {
  children?: ReactNode;
}

export const AccentController: FC<AccentControllerProps> = (props) => {
  const clients = useMemo(() => new Set<AccentClient>(), []);

  const [activeClient, setActiveClient] = useState<AccentClient | null>(null);

  const handleAcquire = useCallback((client: AccentClient) => {
    setActiveClient(client);
  }, []);

  const handleRelease = useCallback((client: AccentClient) => {
    setActiveClient((value) => (value === client ? null : value));
  }, []);

  const contextValue = useMemo<AccentContextValue>(
    () => ({
      clients,
      activeClient,
      handleAcquire,
      handleRelease,
    }),
    [clients, activeClient, handleAcquire, handleRelease]
  );

  return <AccentContext.Provider value={contextValue}>{props.children}</AccentContext.Provider>;
};

export interface AccentClientResult {
  muted: boolean;
  acquire: () => void;
  release: () => void;
}

export function useAccentClient(): AccentClientResult {
  const contextValue = useContext(AccentContext);
  const activeClient = contextValue?.activeClient;
  const handleAcquire = contextValue?.handleAcquire;
  const handleRelease = contextValue?.handleRelease;

  const client: AccentClient = useMemo(
    () => ({
      acquire: () => handleAcquire?.(client),
      release: () => handleRelease?.(client),
    }),
    [handleAcquire, handleRelease]
  );

  useEffect(() => {
    contextValue?.clients.add(client);
    return () => {
      contextValue?.clients.delete(client);
    };
  }, [client, contextValue]);

  const muted = !!activeClient && activeClient !== client;

  const result = useMemo<AccentClientResult>(
    () => ({
      muted,
      acquire: client.acquire,
      release: client.release,
    }),
    [client, muted]
  );

  return result;
}
