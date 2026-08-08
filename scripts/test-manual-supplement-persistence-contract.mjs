import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const schemaSource = await readFile(new URL("../supabase/schema.sql", import.meta.url), "utf8");
const migrationSource = await readFile(
  new URL("../supabase/20260808_manual_makeup_task_type.sql", import.meta.url),
  "utf8"
);
const allowedTypes = "'homework_makeup', 'absence_makeup', 'manual_makeup', 'retest'";

assert.ok(schemaSource.includes(`type text not null check (type in (${allowedTypes}))`));
assert.ok(migrationSource.includes("drop constraint if exists makeup_tasks_type_check"));
assert.ok(migrationSource.includes(`check (type in (${allowedTypes}))`));
assert.ok(migrationSource.trim().startsWith("begin;"));
assert.ok(migrationSource.trim().endsWith("commit;"));

console.log("manual supplement persistence contract: schema and migration passed");
