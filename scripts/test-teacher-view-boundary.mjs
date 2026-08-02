import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createTeacherViewAdapters,
  TeacherViewOutlet,
  teacherViewContracts,
  teacherViewIds
} from "../src/app/TeacherViewOutlet.js";

const expectedContracts = [
  ["lessons", "TeacherLessonHubV2"],
  ["specialLectureManagement", "NotificationCenter"],
  ["overdue", "OverdueHomework"],
  ["followups", "FollowUpCenter"],
  ["supplements", "SupplementCenter"],
  ["materials", "MaterialManager"],
  ["resources", "ResourceLibraryCenter"],
  ["students", "StudentManager"],
  ["classes", "ClassManager"],
  ["examPrep", "ExamPrepCenter"],
  ["examAnalysisPipeline", "ExamAnalysisPipelineCenter"],
  ["schoolCalendar", "SchoolCalendarCenter"],
  ["lessonResearch", "LessonResearchCenter"],
  ["aiVariants", "AIVariantProblemCenter"],
  ["settlements", "SettlementWorkspace"],
  ["notifications", "NotificationCenter"],
  ["settings", "SettingsCenter"]
];

assert.equal(teacherViewContracts.length, 17);
assert.deepEqual(teacherViewIds, expectedContracts.map(([id]) => id));
assert.deepEqual(
  teacherViewContracts.map(({ id, componentName }) => [id, componentName]),
  expectedContracts
);
assert.equal(new Set(teacherViewIds).size, teacherViewIds.length);
assert.equal(Object.isFrozen(teacherViewContracts), true);
assert.equal(Object.isFrozen(teacherViewIds), true);

const allowedEffectKinds = new Set(["save", "delete", "reserve", "cancel", "send", "reconcile"]);
for (const contract of teacherViewContracts) {
  assert.equal(Object.isFrozen(contract), true);
  assert.equal(Object.isFrozen(contract.effectKinds), true);
  assert.equal(new Set(contract.effectKinds).size, contract.effectKinds.length);
  assert.equal(contract.effectKinds.every((effectKind) => allowedEffectKinds.has(effectKind)), true);
}
assert.deepEqual(
  teacherViewContracts.find(({ id }) => id === "lessons").effectKinds,
  ["save", "delete", "reserve", "cancel", "send", "reconcile"]
);
assert.deepEqual(
  teacherViewContracts.find(({ id }) => id === "supplements").effectKinds,
  ["save", "reserve", "cancel"]
);

const componentNames = new Set(expectedContracts.map(([, componentName]) => componentName));
componentNames.add("Modal");
const components = Object.fromEntries([...componentNames].map((componentName) => [
  componentName,
  function FixtureComponent() { return componentName; }
]));

const actionStubs = new Map();
const actions = new Proxy({}, {
  get(_target, property) {
    if (!actionStubs.has(property)) actionStubs.set(property, () => property);
    return actionStubs.get(property);
  }
});
const models = new Proxy({
  aiSettings: { notificationTemplates: [] },
  lessonClipboard: null,
  lessonUndoStack: []
}, {
  get(target, property) {
    return property in target ? target[property] : [];
  }
});

const adapters = createTeacherViewAdapters({ actions, components, models });
assert.deepEqual(Object.keys(adapters), teacherViewIds);
for (const [id, componentName] of expectedContracts) {
  assert.equal(adapters[id].Component, components[componentName], `${id} must retain its component`);
  assert.equal(typeof adapters[id].props, "object");
}

const highRiskCallbackMappings = [
  ["lessons", "onDeleteLesson", "handleDeleteLesson"],
  ["lessons", "onCancelNotificationJob", "handleCancelNotificationJob"],
  ["lessons", "onScheduleLessonNotificationsAt", "handleScheduleLessonNotificationsAt"],
  ["lessons", "onSendComment", "handleSendLessonComment"],
  ["lessons", "onReconcileSolapiNotificationResults", "handleReconcileSolapiNotificationResults"],
  ["specialLectureManagement", "onDeleteSpecialLectureApplication", "handleDeleteSpecialLectureApplication"],
  ["supplements", "onSaveTask", "handleSaveMakeupTask"],
  ["supplements", "onReserveNotification", "handleReserveSupplementNotificationControl"],
  ["supplements", "onCancelNotification", "handleCancelSupplementNotificationControl"],
  ["students", "onSaveStudent", "handleSaveStudent"],
  ["students", "onDeleteStudent", "handleDeleteStudent"],
  ["examPrep", "onDeleteRow", "handleDeleteExamPrepRow"],
  ["schoolCalendar", "onSaveEvent", "handleSaveSchoolEvent"],
  ["schoolCalendar", "onDeleteEvent", "handleDeleteSchoolEvent"],
  ["settlements", "onSaveMonthlySettlement", "handleSaveMonthlySettlementMonth"],
  ["notifications", "onCancelNotificationJob", "handleCancelNotificationJob"],
  ["notifications", "onReconcileSolapiNotificationResults", "handleReconcileSolapiNotificationResults"]
];
for (const [viewId, propName, actionName] of highRiskCallbackMappings) {
  assert.equal(adapters[viewId].props[propName], actions[actionName], `${viewId}.${propName} must preserve ${actionName}`);
}

const lessonElement = TeacherViewOutlet({ activeView: "lessons", adapters });
assert.equal(lessonElement.type, components.TeacherLessonHubV2);
assert.equal(lessonElement.props.onDeleteLesson, actions.handleDeleteLesson);
assert.equal(TeacherViewOutlet({ activeView: "studentPortal", adapters }), null);
assert.equal(TeacherViewOutlet({ activeView: "reports", adapters }), null);
assert.equal(TeacherViewOutlet({ activeView: "unknown", adapters }), null);

const [appSource, outletSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8")
]);
assert.equal(appSource.includes('from "./TeacherViewOutlet.js"'), true);
assert.equal(appSource.includes("const teacherViewAdapters = createTeacherViewAdapters({"), true);
assert.equal(appSource.includes("<TeacherViewOutlet activeView={activeView} adapters={teacherViewAdapters} />"), true);
for (const viewId of teacherViewIds) {
  assert.equal(appSource.includes(`{activeView === "${viewId}" ? (`), false, `${viewId} must render through the outlet`);
}
assert.equal(appSource.includes('activeView === "studentPortal"'), true);
assert.equal(appSource.includes('activeView === "reports"'), true);

const componentsBlock = appSource.slice(appSource.indexOf("    components: {"), appSource.indexOf("    models: {"));
const modelsBlock = appSource.slice(appSource.indexOf("    models: {"), appSource.indexOf("    actions: {"));
const actionsBlock = appSource.slice(appSource.indexOf("    actions: {"), appSource.indexOf("\n    }\n  });", appSource.indexOf("    actions: {")));
const injectedNames = (block) => new Set(block.split(/\r?\n/).map((line) => line.trim().replace(/,$/, "")));
const injectedComponents = injectedNames(componentsBlock);
const injectedModels = injectedNames(modelsBlock);
const injectedActions = injectedNames(actionsBlock);
for (const componentName of new Set([...componentNames])) {
  assert.equal(injectedComponents.has(componentName), true, `App must inject ${componentName}`);
}
for (const [, actionName] of outletSource.matchAll(/actions\.([A-Za-z0-9_]+)/g)) {
  assert.equal(injectedActions.has(actionName), true, `App must inject ${actionName}`);
}
for (const [, modelName] of outletSource.matchAll(/models\.([A-Za-z0-9_]+)/g)) {
  assert.equal(injectedModels.has(modelName), true, `App must inject ${modelName}`);
}
for (const forbiddenToken of ["fetch(", "postJson(", "getJsonWithTimeout(", "localStorage", '"/api/']) {
  assert.equal(outletSource.includes(forbiddenToken), false, `outlet must not own ${forbiddenToken}`);
}

console.log("teacher view contracts, callback adapters, and App ownership boundary fixtures passed");
