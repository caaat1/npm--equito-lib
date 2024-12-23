"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.GroupCollapsed = void 0;
class GroupCollapsed {
    constructor(...args) {
        this.args = args;
    }
    log(...funcs) {
        console.groupCollapsed(...this.args);
        {
            funcs.forEach((func) => {
                func();
            });
        }
        console.groupEnd();
    }
}
exports.GroupCollapsed = GroupCollapsed;
class Log {
    static col(...args) {
        args.forEach((arg) => {
            console.log(arg);
        });
        return this;
    }
    static row(...args) {
        console.log(...args);
        return this;
    }
    static void(...args) {
        args;
        return this;
    }
}
exports.Log = Log;
//# sourceMappingURL=index.js.map