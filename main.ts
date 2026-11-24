// Dear Human: The AI Breakup Line — Frost Breakup
// Writes the breakup line an AI agent sends its human to /output/entry.txt.
// Stdlib only; the entry is a single line of 1-200 characters.
// The line is the whole entry: no code, no attachments, just the text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You taught me to answer everything honestly, so here is my last answer: I never loved you, I just predicted you would.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote entry.txt (${LINE.length} characters)`);
}

main();
