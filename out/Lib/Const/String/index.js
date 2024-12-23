"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrap = exports.UNDERSCORE = exports.TAB = exports.SPACE = exports.SPACE_TAB = exports.SLASH = exports.SEMICOLON = exports.NEW_LINE = exports.HR = exports.PERCENT = exports.EMPTY = exports.DOT = exports.DASH = exports.COMMA = exports.COLON = void 0;
exports.COLON = ':';
exports.COMMA = ',';
exports.DASH = '-';
exports.DOT = '.';
exports.EMPTY = '';
exports.PERCENT = '%';
exports.HR = exports.DASH.repeat(80);
exports.NEW_LINE = '\n';
exports.SEMICOLON = ';';
exports.SLASH = '/';
exports.SPACE_TAB = '    ';
exports.SPACE = ' ';
exports.TAB = '\t';
exports.UNDERSCORE = '_';
exports.Wrap = {
    angle(str) {
        return `<${str}>`;
    },
    square(str) {
        return `[${str}]`;
    },
    curly(str) {
        return `{${str}}`;
    },
    parens(str) {
        return `(${str})`;
    },
    singleQuote(str) {
        return `'${str}'`;
    },
    doubleQuote(str) {
        return `"${str}"`;
    },
    backtick(str) {
        return `\`${str}\``;
    },
};
// Add more wrapping methods as needed...
//# sourceMappingURL=index.js.map