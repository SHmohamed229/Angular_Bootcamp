"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringModifier = void 0;
class StringModifier {
    constructor(data) {
        this.data = data;
    }
    modifyString() {
        const modified = this.data.split('').reverse().join('');
        return {
            original: this.data,
            modified: modified,
        };
    }
}
exports.StringModifier = StringModifier;
