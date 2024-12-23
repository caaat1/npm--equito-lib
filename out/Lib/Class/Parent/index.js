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
const ConstString = __importStar(require("../../Const/String"));
class Parent {
    static getConstructor(instance) {
        loop: for (let proto; (proto = Object.getPrototypeOf(instance)); instance = proto) {
            switch (proto.constructor) {
                case Object:
                    break loop;
                case instance.constructor:
                    continue;
                default:
                    return proto.constructor;
            }
        }
        throw new Error();
    }
    static getCompositeConstructorName(instance) {
        return (Parent.getConstructor(instance).name +
            ConstString.DOT +
            instance.constructor.name);
    }
}
exports.default = Parent;
class Error extends globalThis.Error {
    constructor() {
        super(...arguments);
        this.message = `No parent class found`;
    }
}
//# sourceMappingURL=index.js.map