export interface LocalStorageItem<T> {
  get(): T;
  set(value: T): void;
  remove(): void;
}

export class LocalStorage {
  appSidenavMinimized = createItem("appSidenavMinimized", false);
}

function createItem<T>(key: string, defaultValue: T): LocalStorageItem<T> {
  return {
    get(): T {
      const value = localStorage.getItem(key);

      if (value === null) {
        return defaultValue;
      }

      return JSON.parse(value);
    },
    set(value: T) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove() {
      localStorage.removeItem(key);
    },
  };
}
