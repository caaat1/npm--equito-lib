declare namespace Console {
  type T = unknown;
  const Log: {
    col: (...args: T[]) => void;
    row: (...args: T[]) => void;
  };
}
declare class LocalNews {
  protected out(...args: unknown[]): void;
}
