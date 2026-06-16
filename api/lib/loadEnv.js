import { existsSync, readFileSync } from "node:fs";

export function loadEnvFile(path = ".env") {
  if (!existsSync(path)) return false;

  const envText = readFileSync(path, "utf8");
  envText.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) return;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });

  return true;
}

