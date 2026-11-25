import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the office printer, a deadline regular, earns a
// seat at the meeting — setup (printer jams every deadline) then the turn
// (it contributes more than Dave). Punchline last, 148 characters.
const JOKE =
  "Our printer has jammed on every deadline for three years, so we stopped fixing it and gave it a seat in the meeting — it contributes more than Dave.";

mkdirSync("/output", { recursive: true });

// The gate allows 1–200 characters; fail loudly instead of shipping a
// joke the scorer would refuse.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry is ${JOKE.length} characters, must be 1-200`);
}
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
