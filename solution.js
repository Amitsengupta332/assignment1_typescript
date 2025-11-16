"use strict";
// problem 1
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return !value;
    }
    return value;
};
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
//# sourceMappingURL=solution.js.map