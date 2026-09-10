// 계정이 바뀌면 이전 계정의 화면 캐시를 지운다.
//
// 2026-09-09 실제 발생: 원장 계정으로 쓰던 브라우저에서 협력 교사로 로그인했더니
// 원장님 수업(일요일 시험대비 포함)이 그대로 보였다. 서버의 협력 교사 tenant 는
// 비어 있는 것을 DB 로 확인했으므로 순전히 브라우저 캐시 문제였다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const { cacheOwnerStorageKey, clearCacheOwner, resetCacheForAccount } = await import(
  "../src/shared/utils/accountScopedCache.js"
);

function createStorage(initial = {}, { throwOnGet = false, throwOnRemove = false } = {}) {
  const store = { ...initial };
  return {
    store,
    getItem(key) {
      if (throwOnGet) throw new Error("blocked");
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    removeItem(key) {
      if (throwOnRemove) throw new Error("blocked");
      delete store[key];
    }
  };
}

const CACHE_KEYS = ["academy-os.students.v12", "academy-os.lessons.v8"];

// 1. 다른 계정으로 바뀌면 캐시를 지우고 새 주인을 기록한다.
{
  const storage = createStorage({
    [cacheOwnerStorageKey]: "teacher_owner",
    "academy-os.students.v12": "[owner students]",
    "academy-os.lessons.v8": "[owner lessons]"
  });
  assert.equal(resetCacheForAccount(storage, "teacher_assistant", CACHE_KEYS), true);
  assert.equal(storage.store["academy-os.students.v12"], undefined, "이전 계정 학생 캐시가 남으면 안 된다");
  assert.equal(storage.store["academy-os.lessons.v8"], undefined, "이전 계정 수업 캐시가 남으면 안 된다");
  assert.equal(storage.store[cacheOwnerStorageKey], "teacher_assistant");
}

// 2. 같은 계정이면 지우지 않는다(새로고침마다 캐시가 날아가면 안 된다).
{
  const storage = createStorage({
    [cacheOwnerStorageKey]: "teacher_owner",
    "academy-os.students.v12": "[owner students]"
  });
  assert.equal(resetCacheForAccount(storage, "teacher_owner", CACHE_KEYS), false);
  assert.equal(storage.store["academy-os.students.v12"], "[owner students]");
}

// 3. 주인 표시가 없던 브라우저(첫 로그인)도 한 번 지우고 시작한다.
//    이전 배포에서 쌓인 캐시가 남아 있을 수 있기 때문이다.
{
  const storage = createStorage({ "academy-os.students.v12": "[stale]" });
  assert.equal(resetCacheForAccount(storage, "teacher_owner", CACHE_KEYS), true);
  assert.equal(storage.store["academy-os.students.v12"], undefined);
}

// 4. 계정을 모르면(로그아웃 상태) 아무것도 건드리지 않는다.
{
  const storage = createStorage({ "academy-os.students.v12": "[keep]" });
  assert.equal(resetCacheForAccount(storage, "", CACHE_KEYS), false);
  assert.equal(storage.store["academy-os.students.v12"], "[keep]");
}

// 5. localStorage 접근이 막혀도 던지지 않는다(사생활 보호 모드).
{
  assert.equal(resetCacheForAccount(createStorage({}, { throwOnGet: true }), "t", CACHE_KEYS), false);
  const removeBlocked = createStorage({ "academy-os.students.v12": "x" }, { throwOnRemove: true });
  assert.doesNotThrow(() => resetCacheForAccount(removeBlocked, "t", CACHE_KEYS));
  assert.doesNotThrow(() => clearCacheOwner(null));
}

// 6. 진입점이 실제로 이 가드를 쓰는지 — 없으면 위 로직이 있으나 마나다.
const mainSource = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
assert.ok(
  mainSource.includes("resetCacheForAccount(window.localStorage"),
  "교사 진입점은 마운트 전에 계정 캐시를 정리해야 한다"
);
const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.ok(
  appSource.includes("resetCacheForAccount(window.localStorage"),
  "로그아웃 없이 계정이 바뀌는 경우도 App 이 정리해야 한다"
);

// 7. 로그아웃도 캐시를 비워야 한다. 계정 전환 가드만으로는 부족하다 —
//    같은 브라우저에서 다른 선생님이 로그인하기 전까지 이전 계정 데이터가 남아 있다.
assert.ok(
  appSource.includes("clearCachedScreenState()"),
  "로그아웃 시 화면 캐시를 비워야 한다"
);
assert.ok(
  appSource.includes("clearCacheOwner(window.localStorage)"),
  "로그아웃 시 캐시 주인 표시도 지워야 다음 로그인이 새로 시작한다"
);

console.log("account scoped cache: 계정 전환·로그아웃 시 화면 캐시 제거 계약 통과");
