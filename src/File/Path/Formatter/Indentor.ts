import PathFormatter from '.';
import * as Str from '../../../Const/String';

export default class Indentor extends PathFormatter {
  public constructor(
    private char: string = Str.SPACE,
    private size: number = 2
  ) {
    super();
  }
  public format(path: string): string {
    const parts: string[] = path.split(Str.SLASH);
    parts.forEach((part, index) => {
      parts[index] = this.char.repeat(index * this.size) + part;
    });
    return parts.join(Str.NEW_LINE);
  }
}
