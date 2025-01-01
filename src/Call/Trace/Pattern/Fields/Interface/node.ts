import PatternInterface from '.';
import * as Regex from '../../../../../Const/Regex';

const node: PatternInterface = {
  file: `)`,
  locator(loc: string): string {
    return Regex.Wrap.parenthesize(loc);
  },
};

export default node;
