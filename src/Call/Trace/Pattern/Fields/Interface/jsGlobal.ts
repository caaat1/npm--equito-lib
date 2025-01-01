import PatternInterface from '.';

const jsGlobal: PatternInterface = {
  file: `:`,
  locator(loc: string): string {
    return `${loc}`;
  },
};

export default jsGlobal;
