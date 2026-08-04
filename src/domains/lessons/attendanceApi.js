async function loadAttendanceCheckContract() {
  return import("../../shared/contracts/versionedWriteRouteContracts.js");
}

function omitUndefinedFields(payload = {}) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  );
}

export async function checkAttendanceRequest({ payload, request }) {
  const {
    parseVersionedWriteRequest,
    parseVersionedWriteResponse
  } = await loadAttendanceCheckContract();
  const canonicalPayload = parseVersionedWriteRequest(
    "POST",
    "/api/attendance/check",
    omitUndefinedFields(payload)
  );
  const result = await request(
    "/api/attendance/check",
    canonicalPayload,
    30000,
    "출결 저장과 알림톡 처리가 지연되고 있습니다."
  );
  parseVersionedWriteResponse("POST", "/api/attendance/check", result);
  return result;
}

export function previewAttendanceRequest({ payload, request }) {
  return request(
    "/api/attendance/preview",
    payload,
    30000,
    "출결 확인이 지연되고 있습니다."
  );
}

export function createAttendanceRequestBindings({ request }) {
  return {
    checkAttendanceRequest(payload) {
      return checkAttendanceRequest({ payload, request });
    },
    previewAttendanceRequest(payload) {
      return previewAttendanceRequest({ payload, request });
    }
  };
}
