"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matches = void 0;
class Matches extends globalThis.Error {
    constructor() {
        super(...arguments);
        this.message = `Stack trace does not match`;
    }
}
exports.Matches = Matches;
//# sourceMappingURL=index.js.map