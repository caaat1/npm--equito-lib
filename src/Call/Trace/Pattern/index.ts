import PatternInterface from './Fields/Interface';
import Source from './Source';

export default class Pattern extends RegExp {
  public static new(...types: PatternInterface[]): Pattern[] {
    return types.map((type) => new Pattern(type));
  }
  private constructor(type: PatternInterface) {
    super(new Source(type).toString());
  }
}
