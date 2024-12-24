import * as Trace from '../../Trace';
import Defined from '../Defined';
export default class Traces extends globalThis.Array<string> {
    constructor(stackTrace: Defined);
    getMatches(...patterns: Trace.Pattern[]): Trace.Fields;
}
