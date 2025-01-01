import * as ConstString from '../../../Const/String';
import * as ConstStringColon from '../../../Const/String/Colon';
import * as ConstStringHr from '../../../Const/String/Hr';
import FilePathFormatter from '../../../File/Path/Formatter';
import Indentor from '../../../File/Path/Formatter/Indentor';
import {ucfirst} from '../../../Func';
import Fields from '../Pattern/Fields';

const names = new Fields(`column`, `file`, `func`, `line`);
export default class Print extends String {
  public constructor(
    matches: Fields,
    pathFormatter: FilePathFormatter = new Indentor()
  ) {
    matches = {
      ...matches,
      file: pathFormatter.format(matches.file),
    };
    for (const key in matches) {
      matches[key] =
        ucfirst(names[key].toLowerCase()) +
        ConstStringColon.SPACE +
        matches[key] +
        ConstString.NEW_LINE;
    }
    const {file, func, line, column} = matches;
    super(
      ConstStringHr.HALF +
        '\n' +
        file +
        func +
        line +
        column +
        ConstStringHr.HALF
    );
  }
}
