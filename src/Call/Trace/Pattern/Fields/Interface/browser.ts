import PatternInterface from '.';

const browser: PatternInterface = {
  file: `:`,
  locator(loc: string): string {
    return `@${loc}`;
  },
};

export default browser;
