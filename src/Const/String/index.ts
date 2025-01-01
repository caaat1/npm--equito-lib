export const COLON: string = ':';
export const COMMA: string = ',';
export const DASH: string = '-';
export const DOT: string = '.';
export const EMPTY: string = '';
export const PERCENT: string = '%';
export const HR: string = DASH.repeat(80);
export const NEW_LINE: string = '\n';
export const SEMICOLON: string = ';';
export const SLASH: string = '/';
export const SPACE_TAB: string = '    ';
export const SPACE: string = ' ';
export const TAB: string = '\t';
export const UNDERSCORE: string = '_';
export const Wrap: Record<string, (str: string) => string> = {
  angle(str: string): string {
    return `<${str}>`;
  },
  square(str: string): string {
    return `[${str}]`;
  },
  curly(str: string): string {
    return `{${str}}`;
  },
  parens(str: string): string {
    return `(${str})`;
  },
  singleQuote(str: string): string {
    return `'${str}'`;
  },
  doubleQuote(str: string): string {
    return `"${str}"`;
  },
  backtick(str: string): string {
    return `\`${str}\``;
  },
};
// Add more wrapping methods as needed...
