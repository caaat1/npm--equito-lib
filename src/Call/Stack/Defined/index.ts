import * as Error from './Error';

export default class Defined extends String {
  public constructor(stackTrace: string | undefined) {
    super(stackTrace);
    if (this.isNot(stackTrace)) {
      this.throwError();
    }
  }
  protected isNot(stackTrace: string | undefined): boolean {
    return undefined === stackTrace;
  }
  protected throwError() {
    throw new Error.Undefined();
  }
}
