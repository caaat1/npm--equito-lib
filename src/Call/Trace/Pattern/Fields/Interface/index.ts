export default interface PatternInterface {
  file: string;
  locator(loc: string): string;
}
