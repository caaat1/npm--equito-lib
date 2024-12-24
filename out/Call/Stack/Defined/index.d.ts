export default class Defined extends String {
    constructor(stackTrace: string | undefined);
    protected isNot(stackTrace: string | undefined): boolean;
    protected throwError(): void;
}
