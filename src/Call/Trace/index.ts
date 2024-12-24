import * as Regex from '../../Const/Regex';
import * as Str from '../../Const/String';
import * as Colon from '../../Const/String/Colon';
import * as Hr from '../../Const/String/Hr';
import PathFormatter from '../../File/Path/Formatter';
import Indentor from '../../File/Path/Formatter/Indentor';

export class Fields {
    [k: string]: string;
    public constructor(
        public readonly column: string,
        public readonly file: string,
        public readonly func: string,
        public readonly line: string,
    ) {}
}
const names = new Fields(`column`, `file`, `func`, `line`);
const patterns = new Fields(`\\d+`, `[^%s]+`, `[^(]+\\s`, `\\d+`);
interface IPattern {
    file: string;
    locator(loc: string): string;
}
class RegExpSource extends String {
    public constructor(type: IPattern) {
        const groups: Fields = {
            ...patterns,
            file: patterns.file.replace(`%s`, type.file),
        };
        for (const key in groups) {
            groups[key] = Regex.Wrap.group(groups[key], key);
        }
        const { file, func, line, column } = groups;
        super(`at ${func}?${type.locator(`${file}:${line}:${column}`)}`);
    }
}
export class Print extends String {
    public constructor(
        matches: Fields,
        pathFormatter: PathFormatter = new Indentor(),
    ) {
        matches = {
            ...matches,
            file: pathFormatter.format(matches.file),
        };
        for (const key in matches) {
            matches[key] =
                ucfirst(names[key].toLowerCase()) +
                Colon.SPACE +
                matches[key] +
                Str.NEW_LINE;
        }
        const { file, func, line, column } = matches;
        super(Hr.HALF + '\n'+ file + func + line + column + Hr.HALF);
    }
}
function ucfirst(word: string): string {
    if (word.length) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}
export class Pattern extends RegExp {
    public constructor(variety: IPattern) {
        super(new RegExpSource(variety).toString());
    }
}
export const browser: IPattern = {
    file: `:`,
    locator(loc: string): string {
        return `@${loc}`;
    },
};
export const node: IPattern = {
    file: `)`,
    locator(loc: string): string {
        return Regex.Wrap.parens(loc);
    },
};
