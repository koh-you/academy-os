export function checkAttendanceRequest({ payload, request }) {
  return request(
    "/api/attendance/check",
    payload,
    30000,
    "출결 저장과 알림톡 처리가 지연되고 있습니다."
  );
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
