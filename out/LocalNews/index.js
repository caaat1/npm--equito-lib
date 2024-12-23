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
const Populated_1 = __importDefault(require("../Call/Stack/Defined/Populated"));
const Traces_1 = __importDefault(require("../Call/Stack/Traces"));
const CallTrace = __importStar(require("../Call/Trace"));
const Parent_1 = __importDefault(require("../Class/Parent"));
const Console = __importStar(require("../Console"));
const ConstStr = __importStar(require("../Const/String"));
class LocalNews extends globalThis.Error {
    constructor(...args) {
        super(args.join(ConstStr.SPACE));
        this.name =
            args.length === 0
                ? Parent_1.default.getCompositeConstructorName(this)
                : ConstStr.EMPTY;
        console.log('LocalNews', this.stack);
    }
    print(...args) {
        new Console.GroupCollapsed(this.toString()).log(() => {
            Console.Log.col(new CallTrace.Print(new Traces_1.default(new Populated_1.default(this.stack)).getMatches(new CallTrace.Pattern(CallTrace.browser), new CallTrace.Pattern(CallTrace.node))).toString())
                .void(this.out(...args))
                .col(ConstStr.HR);
        });
        return this;
    }
}
exports.default = LocalNews;
//# sourceMappingURL=index.js.map