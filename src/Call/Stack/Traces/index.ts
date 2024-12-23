import * as Regex from '../../../Const/Regex';
import * as Str from '../../../Const/String';
import * as Trace from '../../Trace';
import Defined from '../Defined';
import * as Error from './Error';
export default class Traces extends globalThis.Array<string> {
    public constructor(stackTrace: Defined) {
        super(...stackTrace.split(Str.NEW_LINE));
    }
    public getMatches(...patterns: Trace.Pattern[]): Trace.Fields {
        for (const trace of this) {
            for (const type of patterns) {
                const groups = trace.match(type)?.groups;
                if (groups) {
                    groups.file = groups.file.replace(
                        Regex.BACKSLASH,
                        Str.SLASH,
                    );
                    const { file, func, line, column } = groups;
                    return { file, func, line, column };
                }
            }
        }
        throw new Error.Matches();
    }
}
