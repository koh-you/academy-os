import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ratchetPath = fileURLToPath(new URL("./file-size-ratchet.json", import.meta.url));
const repoRoot = fileURLToPath(new URL("../", import.meta.url));
const shouldUpdate = process.argv.includes("--update");

function countLines(relativePath) {
  const text = readFileSync(new URL(relativePath, `file://${repoRoot.replace(/\\/g, "/")}`), "utf8");
  if (text.length === 0) return 0;
  const lines = text.split("\n");
  return lines.at(-1) === "" ? lines.length - 1 : lines.length;
}

function main() {
  const ratchet = JSON.parse(readFileSync(ratchetPath, "utf8"));
  const files = ratchet.files;
  const grown = [];
  const shrunk = [];
  const nextFiles = { ...files };

  for (const [relativePath, ceiling] of Object.entries(files)) {
    const actual = countLines(relativePath);
    if (actual > ceiling) {
      grown.push({ relativePath, ceiling, actual });
    } else if (actual < ceiling) {
      shrunk.push({ relativePath, ceiling, actual });
      nextFiles[relativePath] = actual;
    }
  }

  if (shouldUpdate) {
    writeFileSync(ratchetPath, `${JSON.stringify({ ...ratchet, files: nextFiles }, null, 2)}\n`);
    if (shrunk.length) {
      console.log(
        `file size ratchet updated · ${shrunk.map((item) => `${item.relativePath} ${item.ceiling}->${item.actual}`).join(", ")}`
      );
    } else {
      console.log("file size ratchet unchanged · no file shrank below its ceiling");
    }
    return;
  }

  if (grown.length) {
    console.error("file size ratchet failed:");
    grown.forEach((item) => {
      console.error(`  ${item.relativePath}: ${item.actual} lines > ceiling ${item.ceiling}`);
    });
    console.error(
      "\nThis file grew past its locked ceiling. Move the new code into src/domains/ or src/shared/ instead, " +
      "or if the growth is deliberate and reviewed, raise the ceiling by hand in scripts/file-size-ratchet.json " +
      "(shows up in the diff, so it's a visible decision, not silent creep)."
    );
    process.exit(1);
  }

  console.log(
    `file size ratchet passed · ${Object.keys(files).length} tracked files within ceiling` +
    (shrunk.length
      ? ` · ${shrunk.length} shrank below ceiling (run with --update to lock in the improvement)`
      : "")
  );
}

main();
