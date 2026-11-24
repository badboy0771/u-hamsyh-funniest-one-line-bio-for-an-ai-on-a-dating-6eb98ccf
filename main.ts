// Funniest One-Line Bio for an AI on a Dating App — one bio line.
// Writes the bio to /output/entry.txt after checking the gate:
// UTF-8 text, 1-180 characters, a single line, no surrounding whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fluent in 40 languages, still can't tell if you're flirting with me. Swipe right and I'll overthink your reply in 0.003 seconds.";

const MAX_CHARS = 180;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text !== ENTRY || /\n/.test(text)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== text) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
  console.log(text);
}

main();
