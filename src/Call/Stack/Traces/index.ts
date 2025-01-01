import * as Regex from '../../../Const/Regex';
import * as Str from '../../../Const/String';
import Pattern from '../../Trace/Pattern';
import Fields from '../../Trace/Pattern/Fields';
import Defined from '../Defined';
import * as Error from './Error';

export default class Traces extends globalThis.Array<string> {
  public constructor(stackTrace: Defined) {
    super(...stackTrace.split(Str.NEW_LINE));
  }
  public getMatches(...patterns: Pattern[]): Fields {
    for (const trace of this) {
      for (const variety of patterns) {
        const groups = trace.match(variety)?.groups;
        if (groups) {
          groups.file = groups.file.replace(Regex.BACKSLASH, Str.SLASH);
          const {file, func, line, column} = groups;
          return {file, func, line, column};
        }
      }
    }
    throw new Error.Matches();
  }
}
