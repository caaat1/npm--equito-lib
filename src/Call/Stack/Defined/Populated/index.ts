import Defined from '..';
import * as Str from '../../../../Const/String';
import * as Error from './Error';

export default class Populated extends Defined {
    protected isNot(stackTrace: string | undefined): boolean {
        return Str.EMPTY === stackTrace;
    }
    protected throwError() {
        throw new Error.Empty();
    }
}
