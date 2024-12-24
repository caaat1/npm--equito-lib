import * as Console from '../Console';
export default abstract class LocalNews extends globalThis.Error {
    constructor(...args: string[]);
    print(...args: Console.T[]): this;
    protected abstract out(...args: Console.T[]): void;
}
