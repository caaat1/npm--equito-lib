import Defined from '..';
import * as Str from '../../../../Const/String';
import * as Error from './Error';

export default class Populated extends Defined {
  protected override isNot(stackTrace: string | undefined): boolean {
    return Str.EMPTY === stackTrace;
  }
  protected override throwError() {
    throw new Error.Empty();
  }
}
