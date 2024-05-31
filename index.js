"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringModifier_1 = require("./StringModifier");
const data = "PoaJB";
const modifier = new StringModifier_1.StringModifier(data);
const result = modifier.modifyString();
console.log(result); // { original: "PoaJB", modified: "aBJoP" }
