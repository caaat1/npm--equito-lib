"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.node = exports.browser = exports.Pattern = exports.Print = exports.Fields = void 0;
const Regex = __importStar(require("../../Const/Regex"));
const Str = __importStar(require("../../Const/String"));
const Colon = __importStar(require("../../Const/String/Colon"));
const Hr = __importStar(require("../../Const/String/Hr"));
const Indentor_1 = __importDefault(require("../../File/Path/Formatter/Indentor"));
class Fields {
    constructor(column, file, func, line) {
        this.column = column;
        this.file = file;
        this.func = func;
        this.line = line;
    }
}
exports.Fields = Fields;
const names = new Fields(`column`, `file`, `func`, `line`);
const patterns = new Fields(`\\d+`, `[^%s]+`, `[^(]+\\s`, `\\d+`);
class RegExpSource extends String {
    constructor(type) {
        const groups = Object.assign(Object.assign({}, patterns), { file: patterns.file.replace(`%s`, type.file) });
        for (const key in groups) {
            groups[key] = Regex.Wrap.group(groups[key], key);
        }
        const { file, func, line, column } = groups;
        super(`at ${func}?${type.locator(`${file}:${line}:${column}`)}`);
    }
}
class Print extends String {
    constructor(matches, pathFormatter = new Indentor_1.default()) {
        matches = Object.assign(Object.assign({}, matches), { file: pathFormatter.format(matches.file) });
        for (const key in matches) {
            matches[key] =
                ucfirst(names[key].toLowerCase()) +
                    Colon.SPACE +
                    matches[key] +
                    Str.NEW_LINE;
        }
        const { file, func, line, column } = matches;
        super(Hr.HALF + '\n' + file + func + line + column + Hr.HALF);
    }
}
exports.Print = Print;
function ucfirst(word) {
    if (word.length) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}
class Pattern extends RegExp {
    constructor(variety) {
        super(new RegExpSource(variety).toString());
    }
}
exports.Pattern = Pattern;
exports.browser = {
    file: `:`,
    locator(loc) {
        return `@${loc}`;
    },
};
exports.node = {
    file: `)`,
    locator(loc) {
        return Regex.Wrap.parens(loc);
    },
};
//# sourceMappingURL=index.js.map