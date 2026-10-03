import assert from "node:assert/strict";
import { PDFDocument } from "pdf-lib";
import { ANSWER_SHEET_VERSION, createAnswerRows, comparePilotAnswer, gradePilotAnswers, parseAnswerSheetRecognition, readPilotFile } from "../src/domains/tests/answerSheetPilotModel.js";
import { recognizeAnswerSheet } from "../src/shared/server/answerSheetRecognition.js";
import { createAnswerSheetPilotRouteRegistry } from "../src/shared/server/answerSheetPilotRouteRegistry.js";

assert.equal(comparePilotAnswer("3", "③"), "correct");
assert.equal(comparePilotAnswer("−2", "-2"), "correct");
assert.equal(comparePilotAnswer("", "3"), "excluded");
assert.equal(comparePilotAnswer("2", ""), "blank");
assert.equal(comparePilotAnswer("1/2", "0.5"), "incorrect");
assert.equal(comparePilotAnswer("1/2", "0.5", true), "correct");
assert.equal(comparePilotAnswer("1/3", "0.333333333333", true), "incorrect");
assert.equal(comparePilotAnswer("x(x+1)", "x^2+x", true), "review");
assert.equal(comparePilotAnswer("1/0", "0", true), "review");
assert.equal(comparePilotAnswer("1 2", "12", true), "review");
const key = createAnswerRows(); key[0].answer = "3";
const rows = createAnswerRows(); rows[0].answer = "3";
assert.equal(gradePilotAnswers(key, rows)[0].status, "review");
rows[0].reviewed = true;
assert.equal(gradePilotAnswers(key, rows)[0].status, "correct");
rows[0].verdict = "incorrect";
assert.equal(gradePilotAnswers(key, rows)[0].status, "incorrect");
assert.equal(gradePilotAnswers(key, rows)[1].status, "excluded");
assert.throws(() => parseAnswerSheetRecognition({ answers: [{ no: 1, answer: "3" }] }));
assert.throws(() => parseAnswerSheetRecognition({ answers: Array(20).fill({ no: 1, answer: "3" }) }));
assert.ok(parseAnswerSheetRecognition({ answers: key }).every((item) => !item.reviewed));
assert.equal(readPilotFile({ version: ANSWER_SHEET_VERSION, key, sheets: [{ name: "가상 답안", rows }] }).sheets[0].rows[0].answer, "3");
assert.throws(() => readPilotFile({ version: ANSWER_SHEET_VERSION, key, sheets: [{ name: "가상", rows, image: "javascript:alert(1)" }] }));

const pdf = await PDFDocument.create(); pdf.addPage();
const pdfBase64 = await pdf.saveAsBase64();
let calls = 0;
const deps = { env: { ANTHROPIC_API_KEY: "fixture-not-a-key" }, anthropic: async () => { calls++; return JSON.stringify({ answers: key }); } };
await assert.rejects(() => recognizeAnswerSheet({ pdfBase64 }, deps), /확인/);
assert.equal(calls, 0);
await assert.rejects(() => recognizeAnswerSheet({ paidConsent: true, pdfBase64: "bad" }, deps), /PDF/);
assert.equal(calls, 0);
const result = await recognizeAnswerSheet({ paidConsent: true, pdfBase64 }, deps);
assert.equal(result.rows[0].answer, "3"); assert.equal(calls, 1);
pdf.addPage();
const twoPages = await pdf.saveAsBase64();
await assert.rejects(() => recognizeAnswerSheet({ paidConsent: true, pdfBase64: twoPages }, deps), /한 쪽/);
assert.equal(calls, 1);
// 판독으로 보내는 쪽은 원본 그대로여야 한다. 예전에는 화면용 1800px JPEG 을 A4 에 **늘려** 넣어서
// 스캐너 JPEG → 우리 JPEG → 판독기 래스터화로 손실이 세 번 겹치고 사진 비율까지 눌렸다.
// 여기서는 pdf-lib 가 원본 PDF 한 쪽을 그대로 복사하는지(쪽 수 1 · 원본 크기 유지) 확인한다.
const sourcePdf = await PDFDocument.create();
sourcePdf.addPage([300, 500]);
sourcePdf.addPage([400, 600]);
const sourceBytes = await sourcePdf.save();
const extracted = await PDFDocument.create();
const [onlySecond] = await extracted.copyPages(await PDFDocument.load(sourceBytes), [1]);
extracted.addPage(onlySecond);
assert.equal(extracted.getPageCount(), 1, "판독은 한 쪽만 보낸다");
assert.deepEqual(
  [Math.round(extracted.getPage(0).getWidth()), Math.round(extracted.getPage(0).getHeight())],
  [400, 600],
  "원본 쪽 크기를 A4 로 늘이지 않는다"
);

let session = null, response;
let release;
const registry = createAnswerSheetPilotRouteRegistry({
  getTeacherSession: () => session,
  readJsonBody: async () => ({ paidConsent: true, pdfBase64 }),
  sendJson: (_req, _res, status, body) => { response = { status, body }; },
  recognize: () => new Promise((resolve) => { release = resolve; })
});
const context = { request: { method: "POST" }, response: {}, requestUrl: new URL("http://local/api/answer-sheet-pilot/recognize") };
await registry.dispatch(context); assert.equal(response.status, 401);
session = { teacherRole: "assistant" }; await registry.dispatch(context); assert.equal(response.status, 403);
session = { teacherRole: "owner", tenantId: "fixture" };
const pending = registry.dispatch(context);
await new Promise((resolve) => setImmediate(resolve));
await registry.dispatch(context); assert.equal(response.status, 409);
release(result); await pending; assert.equal(response.status, 200);
assert.equal(await registry.dispatch({ ...context, request: { method: "GET" } }), false);
console.log("공통 답안지 비교·복원·판독 계약·권한·중복 실행 fixture 통과 (유료 호출 0)");
