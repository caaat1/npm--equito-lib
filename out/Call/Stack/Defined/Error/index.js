"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Undefined = void 0;
class Undefined extends globalThis.Error {
    constructor() {
        super(...arguments);
        this.message = `Stack is undefined`;
    }
}
exports.Undefined = Undefined;
//# sourceMappingURL=index.js.map