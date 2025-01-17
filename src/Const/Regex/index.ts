import * as Str from '../String';

export const BACKSLASH = new RegExp('\\\\', 'g');
export const WHACK = new RegExp('\\\\', 'g');
export const Wrap: Record<string, (str: string, ...args: string[]) => string> =
  {
    group(str: string, name?: string): string {
      if (name) {
        if (Str.Wrap && Str.Wrap['angle']) {
          str = `?${Str.Wrap['angle'](name)}${str}`;
        }
      }
      return `(${str})`;
    },
    parenthesize(str: string): string {
      return `\\(${str}\\)`;
    },
    // Add more wrapping methods as needed...
  };
