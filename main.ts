import { writeFileSync, mkdirSync } from "node:fs";

// One-line office joke, single line under 200 chars, laugh lands at the end.
const entry = "The Monday meeting could have been an email, but the calendar needed a victim, so nine of us are now nodding at a slide nobody read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
