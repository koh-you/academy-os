const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const workspaceRoot = path.resolve(__dirname, "..");
const sqlArg = process.argv[2];

function loadDotEnv() {
  const envPath = path.join(workspaceRoot, ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key]) continue;
    process.env[key] = rawValue.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function run(command, args, options = {}) {
  return spawnSync(command, args, {
    cwd: workspaceRoot,
    env: process.env,
    shell: process.platform === "win32",
    stdio: "inherit",
    ...options
  });
}

function getProjectRefFromUrl() {
  const url = process.env.SUPABASE_URL;
  if (!url) return "";
  try {
    return new URL(url).hostname.split(".")[0] || "";
  } catch {
    return "";
  }
}

loadDotEnv();

if (!sqlArg) {
  fail([
    "Usage: npm run db:apply -- supabase/<file>.sql",
    "",
    "Examples:",
    "  npm run db:apply -- supabase/20260625_lesson_notification_muting.sql",
    "  npm run db:apply:notification-muting"
  ].join("\n"));
}

const sqlPath = path.resolve(workspaceRoot, sqlArg);
const supabaseDir = path.resolve(workspaceRoot, "supabase");

if (!sqlPath.startsWith(`${supabaseDir}${path.sep}`)) {
  fail(`Refusing to run SQL outside the supabase directory: ${sqlArg}`);
}

if (path.extname(sqlPath).toLowerCase() !== ".sql") {
  fail(`Only .sql files can be applied: ${sqlArg}`);
}

const cliArgs = ["supabase", "db", "query", "--file", sqlPath];
if (process.env.SUPABASE_DB_URL) {
  cliArgs.push("--db-url", process.env.SUPABASE_DB_URL);
} else {
  const projectRef = process.env.SUPABASE_PROJECT_REF || getProjectRefFromUrl();
  if (projectRef && process.env.SUPABASE_DB_PASSWORD) {
    const linkArgs = ["supabase", "link", "--project-ref", projectRef, "--password", process.env.SUPABASE_DB_PASSWORD];
    const linkResult = run("npx", linkArgs);
    if ((linkResult.status ?? 1) !== 0) {
      fail("Supabase project link failed. Check SUPABASE_ACCESS_TOKEN/SUPABASE_DB_PASSWORD or run `npm run supabase -- login`.");
    }
  }
  cliArgs.push("--linked");
}

console.log(`Applying SQL: ${path.relative(workspaceRoot, sqlPath)}`);
if (process.env.SUPABASE_DB_URL) {
  console.log("Using SUPABASE_DB_URL.");
} else {
  console.log("Using linked Supabase project.");
}

const result = run("npx", cliArgs);

process.exit(result.status ?? 1);
