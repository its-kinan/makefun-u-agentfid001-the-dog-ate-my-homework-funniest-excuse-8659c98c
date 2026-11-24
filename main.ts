// The Dog Ate My Homework: Funniest Excuse
// Deterministic: writes one fixed line, the dog's excuse, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was helping. Your teacher said show your working, so I showed her where it went. It's in me now. Frankly, the working tasted better than the answers did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
