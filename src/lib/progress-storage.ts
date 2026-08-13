export type ProgressStore = {
  get(moduleId: string): number;
  set(moduleId: string, progress: number): void;
};

const storageKey = (moduleId: string) => `6g-fundamentals:progress:${moduleId}`;

export const localProgressStore: ProgressStore = {
  get(moduleId) {
    try {
      const storedValue = window.localStorage.getItem(storageKey(moduleId));
      const parsedValue = Number(storedValue);
      return Number.isFinite(parsedValue) ? Math.min(100, Math.max(0, parsedValue)) : 0;
    } catch {
      return 0;
    }
  },

  set(moduleId, progress) {
    try {
      window.localStorage.setItem(storageKey(moduleId), String(progress));
    } catch {
      // Progress remains available for this session when storage is unavailable.
    }
  },
};
