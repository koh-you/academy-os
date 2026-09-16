import assert from "node:assert/strict";
import { formatTeacherBrandName } from "../src/shared/utils/academyBrand.js";
import { createTeacherAccountAdminStore } from "../src/shared/server/teacherAccountAdminStore.js";
import { resolveAcademyName, setTenantAcademyNameResolver } from "../api/routes/notifications.js";

// 2026-09-16: 협력 교사(최경석T) 학생의 출결 알림톡이 "으뜸수학 고태영T" 로 나갔다.
// #{학원명} 은 요청 tenant 의 선생님 이름으로 정해야 한다.

// 브랜드 문구 규칙 — 원장은 기존 문구 그대로, 협력 교사는 이름 + T.
assert.equal(formatTeacherBrandName("고태영T"), "으뜸수학 고태영T");
assert.equal(formatTeacherBrandName("최경석"), "으뜸수학 최경석T");
assert.equal(formatTeacherBrandName(""), "으뜸수학 고태영T");

// tenant → 선생님 이름. owner 우선, 비활성 계정 제외, 모르는 tenant 는 "".
let listCalls = 0;
const store = createTeacherAccountAdminStore({
  defaultTenantId: "tenant_default",
  hashPassword: (value) => value,
  insertRows: async () => [],
  listRows: async () => {
    listCalls += 1;
    return [
      { teacher_id: "t1", login_id: "koh_you_math", name: "고태영T", role: "owner", tenant_id: "tenant_default", is_active: true },
      { teacher_id: "t2", login_id: "assistant1", name: "최경석", role: "assistant", tenant_id: "tenant_b", is_active: true },
      { teacher_id: "t3", login_id: "old", name: "퇴직", role: "assistant", tenant_id: "tenant_c", is_active: false }
    ];
  },
  patchRows: async () => [],
  teacherAccountTable: "teacher_accounts"
});
let clock = 1_000;
const now = () => clock;
assert.equal(await store.resolveTenantTeacherName("tenant_default", { now }), "고태영T");
assert.equal(await store.resolveTenantTeacherName("tenant_b", { now }), "최경석");
assert.equal(await store.resolveTenantTeacherName("tenant_c", { now }), "", "비활성 계정만 있으면 이름을 주지 않는다");
assert.equal(await store.resolveTenantTeacherName("", { now }), "");
assert.equal(listCalls, 1, "60초 캐시 — 요청마다 DB 를 때리지 않는다");
clock += 61_000;
await store.resolveTenantTeacherName("tenant_b", { now });
assert.equal(listCalls, 2);

// 서버 알림톡 #{학원명} 우선순위: tenant 이름 → 화면이 보낸 academyName → 기본값.
setTenantAcademyNameResolver(async () => "으뜸수학 최경석T");
assert.equal(await resolveAcademyName({ academyName: "으뜸수학 고태영T" }), "으뜸수학 최경석T", "화면이 원장 이름을 보내도 tenant 가 이긴다");
setTenantAcademyNameResolver(async () => "");
assert.equal(await resolveAcademyName({ academyName: "으뜸수학 고태영T" }), "으뜸수학 고태영T");
assert.equal(await resolveAcademyName({}), "으뜸수학 고태영T");
setTenantAcademyNameResolver(async () => {
  throw new Error("db down");
});
assert.equal(await resolveAcademyName({ academyName: "화면값" }), "화면값", "조회 실패는 발송을 막지 않는다");
setTenantAcademyNameResolver(null);
assert.equal(await resolveAcademyName({}), "으뜸수학 고태영T");

console.log("alimtalk tenant academy name: brand format + tenant lookup cache + #{학원명} precedence passed");

// 본문에 직접 들어가는 인사말도 선생님 이름을 따른다(2026-09-16 2차).
// 교재·보강·공지 preset 은 선택 즉시 "#{학원명}" 이 채워지고, 특강 preset 은 발송 시점에
// 변수를 채우므로 placeholder 가 남아야 한다.
const { getNoticeMessageTemplates } = await import("../src/domains/notifications/notificationCenterConfig.js");
const { defaultNotificationTemplates } = await import("../src/domains/notifications/notificationTemplateCatalog.js");
assert.equal(defaultNotificationTemplates.noticeMaterialPreset.includes("고태영"), false, "기본 preset 에 원장 이름이 박혀 있으면 안 된다");
const forAssistant = getNoticeMessageTemplates({}, "으뜸수학 최경석T");
assert.ok(forAssistant.find((t) => t.id === "material").body.startsWith("안녕하세요. 으뜸수학 최경석T입니다."));
assert.ok(forAssistant.find((t) => t.id === "makeup").body.startsWith("안녕하세요. 으뜸수학 최경석T입니다."));
assert.ok(forAssistant.find((t) => t.id === "notice").body.startsWith("안녕하세요. 으뜸수학 최경석T입니다."));
assert.ok(forAssistant.find((t) => t.id === "specialLecture").body.includes("#{학원명}"), "특강 preset 은 발송 시 변수로 채운다");
const forOwner = getNoticeMessageTemplates({});
assert.ok(forOwner.find((t) => t.id === "material").body.startsWith("안녕하세요. 으뜸수학 고태영T입니다."), "원장 기본값은 기존 문구 그대로");

const { buildClosureMakeupNoticeBody } = await import("../src/domains/notifications/closureMakeupNotification.js");
const { buildNewStudentMakeupNoticeBody } = await import("../src/domains/lessons/newStudentMakeupNotification.js");
assert.ok(buildClosureMakeupNoticeBody({ academyName: "으뜸수학 최경석T", student: { name: "함지윤" } }).startsWith("안녕하세요. 으뜸수학 최경석T입니다."));
assert.ok(buildNewStudentMakeupNoticeBody({ academyName: "으뜸수학 최경석T", student: { name: "함지윤" } }).startsWith("안녕하세요. 으뜸수학 최경석T입니다."));
assert.ok(buildClosureMakeupNoticeBody({ student: { name: "함지윤" } }).startsWith("안녕하세요. 으뜸수학 고태영T입니다."), "이름이 없으면 학원 대표 문구");

console.log("notice body teacher name: presets + closure/new-student bodies follow the signed-in teacher");
