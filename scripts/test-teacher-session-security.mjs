import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [server, app, examPostApi] = await Promise.all([
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/portals/examPostApi.js", import.meta.url), "utf8")
]);

assert.match(server, /function createTeacherSessionToken\(/);
assert.match(server, /function verifyTeacherSessionToken\(/);
assert.match(server, /timingSafeEqualText\(signSessionPayload\(payload\), signature\)/);
assert.match(server, /\/api\/exam-post-submissions\/confirm[\s\S]{0,700}verifyTeacherSessionToken\(token\)/);
assert.match(server, /\/api\/exam-post-files\/open[\s\S]{0,900}파일 열람 세션 인증이 필요합니다/);
assert.match(server, /submission\.studentId !== portalSession\.studentId/);
assert.match(server, /sendJson\(request, response, 200, \{ ok: true, signedUrl \}\)/);
assert.doesNotMatch(server, /exam-post-files\/open[\s\S]{0,700}Location: signedUrl/);
assert.match(examPostApi, /Authorization: `Bearer \$\{sessionToken\}`/);
assert.match(examPostApi, /confirmTeacherExamPostSubmission\(sessionToken, submissionId, teacherConfirmed\)/);
assert.match(app, /confirmTeacherExamPostSubmission\(session\?\.sessionToken, submissionId, teacherConfirmed\)/);
assert.match(app, /handleOpenExamPostFile\(sessionToken, file\)/);

console.log("teacher session and exam submission file ownership contract passed");
