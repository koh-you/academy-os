const { spawnSync } = require("node:child_process");
const path = require("node:path");

const workspaceRoot = path.resolve(__dirname, "..");
const sqlArg = process.argv[2];

function fail(message) {
  console.error(message);
  process.exit(1);
}

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
  cliArgs.push("--linked");
}

console.log(`Applying SQL: ${path.relative(workspaceRoot, sqlPath)}`);
if (!process.env.SUPABASE_DB_URL) {
  console.log("Using linked Supabase project. Run `npm run supabase -- link --project-ref <ref>` first if this fails.");
}

const result = spawnSync("npx", cliArgs, {
  cwd: workspaceRoot,
  env: process.env,
  shell: process.platform === "win32",
  stdio: "inherit"
});

process.exit(result.status ?? 1);
