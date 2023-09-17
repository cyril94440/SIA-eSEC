class LocalStorage {
  appSidenavMinimized = createItem("appSidenavMinimized", false);
}

interface LocalStorageItem<T> {
  get(): T;
  set(value: T): void;
  remove(): void;
}

function createItem<T>(key: string, defaultValue: T): LocalStorageItem<T> {
  return {
    get(): T {
      const value = window.localStorage.getItem(key);

      if (value === null) {
        return defaultValue;
      }

      return JSON.parse(value);
    },
    set(value: T) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    remove() {
      window.localStorage.removeItem(key);
    },
  };
}

export const localStorage = new LocalStorage();
