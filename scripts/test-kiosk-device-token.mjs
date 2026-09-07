// 태블릿별 키오스크 토큰 저장 계약.
// 빌드 하나로 여러 태블릿을 쓰려면 기기가 자기 토큰을 들고 있어야 한다.
import assert from "node:assert/strict";

const modulePath = "../src/shared/utils/kioskToken.js";

function installWindow({ href, store = {}, storageThrows = false, historyThrows = false }) {
  const replaced = [];
  globalThis.window = {
    location: { href },
    history: {
      replaceState(_state, _title, url) {
        if (historyThrows) throw new Error("history blocked");
        replaced.push(url);
        globalThis.window.location.href = new URL(url, href).href;
      }
    },
    localStorage: {
      getItem(key) {
        if (storageThrows) throw new Error("storage blocked");
        return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
      },
      setItem(key, value) {
        if (storageThrows) throw new Error("storage blocked");
        store[key] = String(value);
      }
    }
  };
  return { replaced, store };
}

// 모듈은 상태를 갖지 않으므로 한 번만 import 하고 window 만 갈아끼운다.
const { kioskTokenStorageKey, resolveKioskDeviceToken } = await import(modulePath);
const KEY = kioskTokenStorageKey;

// 1. URL 로 설정하면 저장하고 주소에서 지운다.
{
  const { replaced, store } = installWindow({
    href: "https://os.example.com/attendance?kiosk=kiosk_abc123&foo=1"
  });
  assert.equal(resolveKioskDeviceToken(""), "kiosk_abc123");
  assert.equal(store[KEY], "kiosk_abc123", "토큰이 기기에 저장되어야 한다");
  assert.equal(replaced.length, 1, "주소창에서 토큰을 지워야 한다");
  assert.ok(!replaced[0].includes("kiosk_abc123"), "지운 주소에 토큰이 남으면 안 된다");
  assert.ok(replaced[0].includes("foo=1"), "다른 파라미터는 보존해야 한다");
}

// 2. 다음 실행부터는 저장값을 쓴다(주소에 토큰 없이).
{
  const { replaced } = installWindow({
    href: "https://os.example.com/attendance",
    store: { [KEY]: "kiosk_abc123" }
  });
  assert.equal(resolveKioskDeviceToken(""), "kiosk_abc123");
  assert.equal(replaced.length, 0, "지울 것이 없으면 주소를 건드리지 않는다");
}

// 3. 저장값이 빌드 환경변수보다 우선한다(태블릿별 토큰이 이겨야 한다).
{
  installWindow({ href: "https://os.example.com/attendance", store: { [KEY]: "kiosk_device" } });
  assert.equal(resolveKioskDeviceToken("build_token"), "kiosk_device");
}

// 4. 저장값이 없으면 빌드 환경변수로 폴백한다(기존 태블릿이 계속 동작해야 한다).
{
  installWindow({ href: "https://os.example.com/attendance" });
  assert.equal(resolveKioskDeviceToken("build_token"), "build_token");
  assert.equal(resolveKioskDeviceToken(""), "", "아무것도 없으면 빈 문자열");
}

// 5. URL 토큰은 빌드 환경변수를 덮어쓴다(기기 재지정).
{
  const { store } = installWindow({
    href: "https://os.example.com/attendance?kiosk=kiosk_new",
    store: { [KEY]: "kiosk_old" }
  });
  assert.equal(resolveKioskDeviceToken("build_token"), "kiosk_new");
  assert.equal(store[KEY], "kiosk_new", "재지정하면 저장값도 갱신된다");
}

// 6. localStorage 가 막혀 있어도 이번 세션은 동작하고, 주소는 지우지 않는다.
//    저장 실패 + 주소 삭제가 겹치면 토큰이 완전히 사라져 버린다.
{
  const { replaced } = installWindow({
    href: "https://os.example.com/attendance?kiosk=kiosk_abc123",
    storageThrows: true
  });
  assert.equal(resolveKioskDeviceToken(""), "kiosk_abc123", "저장은 실패해도 이번엔 써야 한다");
  assert.equal(replaced.length, 0, "저장에 실패했으면 주소에서 지우면 안 된다");
}

// 7. history 조작이 막혀도 저장과 반환은 정상이어야 한다.
{
  const { store } = installWindow({
    href: "https://os.example.com/attendance?kiosk=kiosk_abc123",
    historyThrows: true
  });
  assert.equal(resolveKioskDeviceToken(""), "kiosk_abc123");
  assert.equal(store[KEY], "kiosk_abc123");
}

// 8. 서버 렌더링(window 없음)에서는 빌드 환경변수만 쓴다.
{
  delete globalThis.window;
  assert.equal(resolveKioskDeviceToken("build_token"), "build_token");
}

console.log("kiosk device token: URL 설정 · 기기 저장 · 빌드 폴백 계약 통과");
