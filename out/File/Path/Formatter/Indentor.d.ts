import PathFormatter from '.';
export default class Indentor extends PathFormatter {
    private char;
    private size;
    constructor(char?: string, size?: number);
    format(path: string): string;
}
