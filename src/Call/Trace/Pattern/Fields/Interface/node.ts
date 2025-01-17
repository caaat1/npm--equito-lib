import PatternInterface from '.';
import * as Regex from '../../../../../Const/Regex';

const node: PatternInterface = {
  file: `)`,
  locator(loc: string): string {
    if (Regex.Wrap && Regex.Wrap['parenthesize']) {
      return Regex.Wrap['parenthesize'](loc);
    }
    throw new Error('parenthesize is not defined');
  },
};

export default node;
