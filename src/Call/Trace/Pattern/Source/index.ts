import * as Regex from '../../../../Const/Regex';
import Fields from '../Fields';
import PatternInterface from '../Fields/Interface';

const driveLetter = `([A-Za-z]:\\/)?`;
const patterns = new Fields(`\\d+`, `${driveLetter}[^%s]+`, `[^(]+\\s`, `\\d+`);
export default class Source extends String {
  public constructor(type: PatternInterface) {
    const groups: Fields = {
      ...patterns,
      file: patterns.file.replace(`%s`, type.file),
    };
    for (const key in groups) {
      if (Regex.Wrap['group']) {
        if (groups[key] !== undefined) {
          groups[key] = Regex.Wrap['group'](groups[key] as string, key);
        }
      }
    }
    const {file, func, line, column} = groups;
    super(
      `at\\s${func}?${type.locator(`(?:file:///)?${file}:${line}:${column}`)}`
    );
  }
}
