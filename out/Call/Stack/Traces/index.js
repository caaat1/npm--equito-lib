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
Object.defineProperty(exports, "__esModule", { value: true });
const Regex = __importStar(require("../../../Const/Regex"));
const Str = __importStar(require("../../../Const/String"));
const Error = __importStar(require("./Error"));
class Traces extends globalThis.Array {
    constructor(stackTrace) {
        super(...stackTrace.split(Str.NEW_LINE));
    }
    getMatches(...patterns) {
        var _a;
        for (const trace of this) {
            for (const type of patterns) {
                const groups = (_a = trace.match(type)) === null || _a === void 0 ? void 0 : _a.groups;
                if (groups) {
                    groups.file = groups.file.replace(Regex.BACKSLASH, Str.SLASH);
                    const { file, func, line, column } = groups;
                    return { file, func, line, column };
                }
            }
        }
        throw new Error.Matches();
    }
}
exports.default = Traces;
//# sourceMappingURL=index.js.map