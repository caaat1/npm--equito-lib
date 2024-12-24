import PathFormatter from '../../File/Path/Formatter';
export declare class Fields {
    readonly column: string;
    readonly file: string;
    readonly func: string;
    readonly line: string;
    [k: string]: string;
    constructor(column: string, file: string, func: string, line: string);
}
interface IPattern {
    file: string;
    locator(loc: string): string;
}
export declare class Print extends String {
    constructor(matches: Fields, pathFormatter?: PathFormatter);
}
export declare class Pattern extends RegExp {
    constructor(variety: IPattern);
}
export declare const browser: IPattern;
export declare const node: IPattern;
export {};
