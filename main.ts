import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The chosen commit message, picked from a shortlist of candidates for
// the "Worst Fix Ever" brief: a fix for a mass-email bug that made the
// exact same bug worse — it now emails everyone twice. It reads as a
// real one-line commit subject, lands on its own with no explanation
// needed, and the irony is specific: the repair doubled the damage
// instead of undoing it.
const ENTRY = "fix: mass email bug, now it emails everyone twice";

// The harness runs this program in a sandbox and reads the text from
// /output/entry.txt. OUTPUT_DIR is honoured only so the same program
// can be smoke-tested locally; the default is the harness path.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${outputPath}`);
