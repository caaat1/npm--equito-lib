// declare module 'equito-library';
// declare module './LocalNews/Col' {}
// declare module './LocalNews/Row' {}

// export const Col: typeof import('./LocalNews/Col').default;
// export const Row: typeof import('./LocalNews/Row').default;

/// <reference path="./types.d.ts" />

declare module 'equito-library' {
    export class Col extends LocalNews {
        protected out(...args: Console.T[]): void;
    }

    export class Row extends LocalNews {
        protected out(...args: Console.T[]): void;
    }
}

// No need to declare modules again
export const Col: typeof import('./LocalNews/Col').default;
export const Row: typeof import('./LocalNews/Row').default;
