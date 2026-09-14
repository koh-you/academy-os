import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/slack-daily-schedule.yml", "utf8");

assert.match(workflow, /cron: "30 13 \* \* \*"/);
assert.match(workflow, /secrets\.NOTIFICATION_DISPATCH_TOKEN/);
assert.match(workflow, /TZ=Asia\/Seoul date -d tomorrow \+%F/);
assert.match(workflow, /T00:00:00\.000Z/);
assert.match(workflow, /X-Dispatch-Token/);
assert.match(workflow, /slack-today-schedule\/reserve/);
assert.doesNotMatch(workflow, /slack-today-schedule"\s*$/m);

console.log("Slack next-day reservation workflow contract passed.");
