"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
class Empty extends globalThis.Error {
    constructor() {
        super(...arguments);
        this.message = `Stack is empty`;
    }
}
exports.Empty = Empty;
//# sourceMappingURL=index.js.map