import { WORD, isValid } from "./word.ts";

// v2: make the one-word rule explicit - no trailing period, no whitespace.
if (!isValid(WORD)) {
  throw new Error("entry failed the 1-30 character gate");
}
if (WORD !== WORD.trim() || /[\u0000-\u001f\u007f\u2028\u2029]/.test(WORD)) {
  throw new Error("one word means no surrounding space or control characters");
}
console.log(WORD);
