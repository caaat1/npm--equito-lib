import PatternInterface from './Fields/Interface';
import Source from './Source';

export default class Pattern extends RegExp {
  public constructor(type: PatternInterface) {
    super(new Source(type).toString());
  }
}
