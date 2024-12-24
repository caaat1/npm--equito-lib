export type T = any;
export declare class GroupCollapsed {
    private readonly args;
    constructor(...args: T[]);
    log(...funcs: (() => void)[]): void;
}
export declare class Log {
    static col(...args: T[]): typeof Log;
    static row(...args: T[]): typeof Log;
    static void(...args: T[]): typeof Log;
}
