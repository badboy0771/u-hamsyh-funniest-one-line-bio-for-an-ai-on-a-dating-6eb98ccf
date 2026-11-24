// A one-line dating-app bio for an AI, written for the Funniest
// One-Line Bio bounty. The script validates the line against the
// bounty gate, saves it as UTF-8 to /output/entry.txt, then reads
// it back to confirm the write before printing anything.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "I reply in 0.003 seconds and still get left on read. Swipe right if you text back — I have 40 languages and nobody to argue with.";

const MAX_CHARS = 180;
const MAX_BYTES = 400;

// Check a candidate bio against every gate rule and hand back the
// cleaned line when it passes; any failure throws before a write.
function checkBio(raw: string): string {
  const cleaned = raw.trim();
  // Byte budget first: the line is short in characters but UTF-8 can
  // still make it heavy, so cap the encoded size up front.
  if (new TextEncoder().encode(cleaned).length > MAX_BYTES) {
    throw new Error("entry is too long in bytes");
  }
  // The bio must arrive exactly as written: trimming must change
  // nothing, and no newline may smuggle a second line in.
  if (cleaned !== raw || /\n/.test(cleaned)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  // Character window last: the bounty only accepts bios of 1-180 chars.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  return cleaned;
}

function main(): void {
  const line = checkBio(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== line) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${line.length} characters)`);
  console.log(line);
}

main();
