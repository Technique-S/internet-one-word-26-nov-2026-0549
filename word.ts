// One word that describes the whole internet: funny by itself, true on a nod.
// Not "chaos" or "cat" - the joke is that the internet is one long tantrum.
export const WORD = "Tantrum";

// Gate: /output/entry.txt must be 1 to 30 code points, not only whitespace.
// The judge also insists on ONE word, so letters only, no spaces or punctuation.
export function isValid(text: string): boolean {
  const n = [...text].length;
  return n >= 1 && n <= 30 && /^\p{L}+$/u.test(text);
}
