import { createContext } from "react";
import { LocalStorage } from "@@core";

export const LocalStorageContext = createContext<LocalStorage>(null as any);
