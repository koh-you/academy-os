import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  applyLastLoginRole,
  applyRememberedLoginId,
  getLastLoginRole,
  getRememberedLoginId,
  normalizeRememberedLoginIds,
  readRememberedLoginIds,
  rememberedLoginIdsStorageKey,
  saveRememberedLoginId
} from "../src/app/rememberedLoginIds.js";

function createWindow(initialValue = null) {
  const store = new Map();
  if (initialValue !== null) store.set(rememberedLoginIdsStorageKey, initialValue);
  return {
    store,
    localStorage: {
      getItem: (key) => (store.has(key) ? store.get(key) : null),
      setItem: (key, value) => store.set(key, value),
      removeItem: (key) => store.delete(key)
    }
  };
}

// 모르는 역할과 문자열 아닌 값은 버린다. 저장본이 손상돼도 로그인 화면이 죽으면 안 된다.
assert.deepEqual(normalizeRememberedLoginIds(null), {});
assert.deepEqual(normalizeRememberedLoginIds({ teacher: "  koh_you_math  " }), { teacher: "koh_you_math" });
assert.deepEqual(normalizeRememberedLoginIds({ teacher: 12, admin: "x", student: "" }), {});
// 마지막 역할은 아는 역할일 때만 남긴다(2026-09-19).
assert.deepEqual(normalizeRememberedLoginIds({ lastRole: "teacher" }), { lastRole: "teacher" });
assert.deepEqual(normalizeRememberedLoginIds({ lastRole: "admin" }), {});
assert.deepEqual(applyLastLoginRole({ teacher: "a" }, "parent"), { teacher: "a", lastRole: "parent" });
assert.deepEqual(applyLastLoginRole({ lastRole: "teacher" }, "admin"), { lastRole: "teacher" });

// 순수 적용 함수: 값이 있으면 넣고, 비면 그 역할만 지운다.
assert.deepEqual(applyRememberedLoginId({}, "teacher", "koh_you_math"), { teacher: "koh_you_math" });
assert.deepEqual(
  applyRememberedLoginId({ teacher: "koh_you_math", student: "04김보현" }, "teacher", ""),
  { student: "04김보현" }
);
assert.deepEqual(applyRememberedLoginId({ teacher: "a" }, "admin", "b"), { teacher: "a" });

// 역할별로 따로 기억한다. 선생님 아이디가 학생 칸에 새어 나오면 안 된다.
const windowTarget = createWindow();
assert.equal(getLastLoginRole(windowTarget), "");
saveRememberedLoginId(windowTarget, "teacher", "koh_you_math");
assert.equal(getLastLoginRole(windowTarget), "teacher");
saveRememberedLoginId(windowTarget, "student", "04김보현");
assert.equal(getRememberedLoginId(windowTarget, "teacher"), "koh_you_math");
assert.equal(getRememberedLoginId(windowTarget, "student"), "04김보현");
assert.equal(getRememberedLoginId(windowTarget, "parent"), "");
// 마지막으로 성공한 역할이 다음 로그인 화면의 첫 탭이다.
assert.equal(getLastLoginRole(windowTarget), "student");
// lastRole 키를 역할 아이디로 잘못 읽지 않는다.
assert.equal(getRememberedLoginId(windowTarget, "lastRole"), "");

// 체크를 풀고 로그인하면 그 역할의 아이디만 지운다. 역할 기억은 남는다.
saveRememberedLoginId(windowTarget, "teacher", "");
assert.equal(getRememberedLoginId(windowTarget, "teacher"), "");
assert.equal(getRememberedLoginId(windowTarget, "student"), "04김보현");
assert.equal(getLastLoginRole(windowTarget), "teacher");

// 아이디를 전부 지워도 마지막 역할만 남는다(2026-09-19 · 그 전에는 저장 항목 자체를 지웠다).
saveRememberedLoginId(windowTarget, "student", "");
assert.deepEqual(readRememberedLoginIds(windowTarget), { lastRole: "student" });
assert.equal(JSON.parse(windowTarget.store.get(rememberedLoginIdsStorageKey)).student, undefined);

// 깨진 JSON / 저장소 접근 불가에서도 빈 값으로 답한다.
assert.deepEqual(readRememberedLoginIds(createWindow("{{{")), {});
assert.deepEqual(readRememberedLoginIds(null), {});
assert.equal(getRememberedLoginId(null, "teacher"), "");
const throwingWindow = {
  localStorage: {
    getItem() { throw new Error("blocked"); },
    setItem() { throw new Error("blocked"); },
    removeItem() { throw new Error("blocked"); }
  }
};
assert.deepEqual(readRememberedLoginIds(throwingWindow), {});
assert.deepEqual(saveRememberedLoginId(throwingWindow, "teacher", "koh_you_math"), { teacher: "koh_you_math", lastRole: "teacher" });
assert.equal(getLastLoginRole(throwingWindow), "");
assert.equal(getLastLoginRole(null), "");

// 비밀번호는 어떤 경로로도 저장하지 않는다.
const moduleSource = await readFile(new URL("../src/app/rememberedLoginIds.js", import.meta.url), "utf8");
assert.ok(!/password/i.test(moduleSource), "아이디 기억 모듈은 비밀번호를 다루면 안 된다");

const loginScreenSource = await readFile(new URL("../src/app/RoleLoginScreen.jsx", import.meta.url), "utf8");
assert.ok(
  loginScreenSource.includes('saveRememberedLoginId(windowTarget, role, shouldRememberLoginId ? loginId.trim() : "")'),
  "로그인 성공 뒤에만 아이디를 기억해야 한다"
);
assert.ok(
  !/saveRememberedLoginId\([^)]*password/i.test(loginScreenSource),
  "비밀번호를 기억 모듈로 넘기면 안 된다"
);
// 로그인 화면은 마지막 역할 탭으로 열리고, 아이디 초기값도 그 역할 기준이어야 탭과 칸이 어긋나지 않는다.
assert.ok(
  loginScreenSource.includes("const [initialRole] = useState(() => getLastLoginRole(windowTarget) || fallbackRole);") &&
    loginScreenSource.includes("const [role, setRole] = useState(initialRole);") &&
    loginScreenSource.includes("useState(() => getRememberedLoginId(windowTarget, initialRole))"),
  "역할 탭과 아이디 초기값은 같은(마지막 로그인) 역할을 기준으로 정해야 한다"
);
// 실패한 로그인은 기억하지 않는다 — 오타를 기억하면 다음 로그인이 더 번거로워진다.
const submitBody = loginScreenSource.slice(
  loginScreenSource.indexOf("async function submit(event)"),
  loginScreenSource.indexOf("return (")
);
assert.ok(
  submitBody.indexOf("setError(result.message)") < submitBody.indexOf("saveRememberedLoginId"),
  "실패 분기에서 먼저 빠져나온 뒤에 기억해야 한다"
);

console.log("remembered login ids: per-role recall, last-role memory, opt-out clearing, broken storage, and password exclusion passed");
