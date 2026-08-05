import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [server, app, examPostApi, examPostConfirmRegistry, sessionGuard] = await Promise.all([
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/portals/examPostApi.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examPostConfirmRouteRegistry.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/sessionRouteGuard.js", import.meta.url), "utf8")
]);

assert.match(sessionGuard, /function createTeacherSessionToken\(/);
assert.match(sessionGuard, /function verifyTeacherSessionToken\(/);
assert.match(sessionGuard, /timingSafeEqualText\(signSessionPayload\(payload\), signature\)/);
assert.match(server, /createSessionRouteGuard\(\{/);
assert.match(server, /createExamPostConfirmRouteRegistry\(\{/);
assert.match(server, /dispatchExamPostConfirmRoute\(\{ request, response, requestUrl \}\)/);
assert.match(examPostConfirmRegistry, /\/api\/exam-post-submissions\/confirm/);
assert.match(examPostConfirmRegistry, /getTeacherSession\(request\)/);
assert.ok(
  examPostConfirmRegistry.indexOf("getTeacherSession(request)") <
  examPostConfirmRegistry.indexOf("readJsonBody(request)")
);
assert.match(server, /\/api\/exam-post-files\/open[\s\S]{0,900}파일 열람 세션 인증이 필요합니다/);
assert.match(server, /submission\.studentId !== portalSession\.studentId/);
assert.match(server, /sendJson\(request, response, 200, \{ ok: true, signedUrl \}\)/);
assert.doesNotMatch(server, /exam-post-files\/open[\s\S]{0,700}Location: signedUrl/);
assert.match(examPostApi, /Authorization: `Bearer \$\{sessionToken\}`/);
assert.match(examPostApi, /confirmTeacherExamPostSubmission\(sessionToken, submissionId, teacherConfirmed\)/);
assert.match(app, /confirmTeacherExamPostSubmission\(session\?\.sessionToken, submissionId, teacherConfirmed\)/);
assert.match(app, /handleOpenExamPostFile\(sessionToken, file\)/);

console.log("teacher session and exam submission file ownership contract passed");
