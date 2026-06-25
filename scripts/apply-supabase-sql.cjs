const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
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
    cwd: options.cwd ?? workspaceRoot,
    env: process.env,
    shell: process.platform === "win32",
    stdio: "inherit",
    ...options
  });
}

function getSupabaseBin() {
  return path.join(workspaceRoot, "node_modules", ".bin", process.platform === "win32" ? "supabase.cmd" : "supabase");
}

function splitSqlStatements(sql) {
  const statements = [];
  let current = "";
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inLineComment = false;

  for (let index = 0; index < sql.length; index += 1) {
    const char = sql[index];
    const next = sql[index + 1];

    if (inLineComment) {
      current += char;
      if (char === "\n") inLineComment = false;
      continue;
    }

    if (!inSingleQuote && !inDoubleQuote && char === "-" && next === "-") {
      inLineComment = true;
      current += char;
      continue;
    }

    if (!inDoubleQuote && char === "'" && next === "'" && inSingleQuote) {
      current += char + next;
      index += 1;
      continue;
    }

    if (!inDoubleQuote && char === "'") inSingleQuote = !inSingleQuote;
    if (!inSingleQuote && char === '"') inDoubleQuote = !inDoubleQuote;

    if (!inSingleQuote && !inDoubleQuote && char === ";") {
      const statement = current.trim();
      if (statement) statements.push(statement);
      current = "";
      continue;
    }

    current += char;
  }

  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
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

const sqlStatements = splitSqlStatements(fs.readFileSync(sqlPath, "utf8"));
if (!sqlStatements.length) fail(`No SQL statements found in ${sqlArg}`);

function buildQueryArgs(statementFile) {
  const cliArgs = ["db", "query"];
  if (process.env.SUPABASE_DB_URL) {
    cliArgs.push("--db-url", process.env.SUPABASE_DB_URL);
  } else {
    cliArgs.push("--linked", "--workdir", workspaceRoot);
  }
  cliArgs.push("--file", statementFile);
  return cliArgs;
}

if (process.env.SUPABASE_DB_URL) {
  // Ready to apply using the direct connection string.
} else {
  const projectRef = process.env.SUPABASE_PROJECT_REF || getProjectRefFromUrl();
  if (projectRef && process.env.SUPABASE_DB_PASSWORD) {
    const linkArgs = ["link", "--project-ref", projectRef, "--password", process.env.SUPABASE_DB_PASSWORD, "--workdir", workspaceRoot];
    const linkResult = run(getSupabaseBin(), linkArgs, { cwd: os.tmpdir() });
    if ((linkResult.status ?? 1) !== 0) {
      fail("Supabase project link failed. Check SUPABASE_ACCESS_TOKEN/SUPABASE_DB_PASSWORD or run `npm run supabase -- login`.");
    }
  }
}

console.log(`Applying SQL: ${path.relative(workspaceRoot, sqlPath)}`);
if (process.env.SUPABASE_DB_URL) {
  console.log("Using SUPABASE_DB_URL.");
} else {
  console.log("Using linked Supabase project.");
}

for (const [index, statement] of sqlStatements.entries()) {
  console.log(`Running statement ${index + 1}/${sqlStatements.length}`);
  const statementFile = path.join(os.tmpdir(), `academy-os-supabase-${process.pid}-${index}.sql`);
  fs.writeFileSync(statementFile, `${statement};\n`, "utf8");
  const result = run(getSupabaseBin(), buildQueryArgs(statementFile), { cwd: os.tmpdir() });
  fs.rmSync(statementFile, { force: true });
  if ((result.status ?? 1) !== 0) process.exit(result.status ?? 1);
}

process.exit(0);
