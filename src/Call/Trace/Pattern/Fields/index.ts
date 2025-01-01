export default class Fields {
  [key: string]: string;
  public constructor(
    public readonly column: string,
    public readonly file: string,
    public readonly func: string,
    public readonly line: string
  ) {}
}
