// 출결 태블릿 전용 앱.
//
// 왜 App.jsx 를 안 쓰는가: attendance.html 이 교사용과 같은 진입점(/src/main.jsx)을 가리키고
// 있어서, 번호 4자리만 찍는 태블릿이 시험분석·정산·알림관리까지 포함한 앱 전체(948 KB)를
// 내려받고 나서야 첫 화면을 그렸다. 태블릿은 매일 학생들이 쓰는 화면이라 이 비용이 크다.
//
// 이 파일은 태블릿에 필요한 것만 갖는다: 오늘 명단 조회, 60초 동기화, 출결 미리보기/체크인.
// 로그인·세션·교사 화면은 일절 들어오지 않는다.

import { useCallback, useEffect, useRef, useState } from "react";
import { AttendanceKiosk } from "../domains/lessons/AttendanceKiosk.jsx";
import { checkKioskAttendanceAction } from "../domains/lessons/attendanceKioskCheckController.js";
import { previewKioskAttendanceAction } from "../domains/lessons/attendanceKioskPreviewController.js";
import { createAttendanceRequestBindings } from "../domains/lessons/attendanceApi.js";
import { defaultAttendanceSettings, normalizeAttendanceSettings } from "../domains/lessons/attendanceSettings.js";
import {
  useAttendanceDateRollover,
  useAttendanceRecordSync
} from "../domains/lessons/useAttendanceRecordSync.js";
import {
  filterActiveLessons,
  filterRecordsForLessons,
  upsertById,
  upsertLessonStudentRecord
} from "../domains/lessons/lessonRecordCollections.js";
import { apiFetch, getJsonWithTimeout, postJsonWithTimeout } from "../shared/utils/apiClient.js";
import { getKoreaDateString } from "../shared/utils/koreaDate.js";

// attendanceApi 의 원본 함수는 { payload, request } 를 받는다. 컨트롤러는 payload 하나만
// 넘기므로 반드시 바인딩된 형태를 써야 한다 — 원본을 그대로 넘기면 요청이 조용히 안 나간다.
const {
  checkAttendanceRequest,
  previewAttendanceRequest
} = createAttendanceRequestBindings({ request: postJsonWithTimeout });

function formatLessonTimeRange(lesson = {}) {
  return [lesson.startTime, lesson.endTime].filter(Boolean).join(" ~ ");
}

function formatLessonDisplayName(lesson = {}) {
  return [lesson.className, formatLessonTimeRange(lesson)].filter(Boolean).join(" · ");
}

export function AttendanceKioskApp() {
  const [students, setStudents] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [records, setRecords] = useState([]);
  // 첫 조회가 끝났는지만 본다. 한 번 true 가 되면 다시 false 로 돌아가지 않는다.
  //
  // 날짜가 바뀌거나 60초 동기화로 다시 불러올 때 입력을 잠그면, 학생이 번호를 누르는
  // 순간 키패드가 죽는다. 출결 미리보기/체크인은 서버로 바로 나가므로 로컬 명단이
  // 갱신 중이어도 정확하다. 화면은 계속 쓸 수 있어야 한다.
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [attendanceSettings] = useState(() => normalizeAttendanceSettings(defaultAttendanceSettings));
  const recordsRef = useRef(records);
  // 교사 화면은 저장 중인 셀을 덮어쓰지 않으려고 저장 상태를 추적하지만, 태블릿에는
  // 편집 중인 셀이 없다. 동기화 훅이 요구하는 모양만 맞춰 빈 채로 넘긴다.
  const saveStatesRef = useRef({});

  useEffect(() => {
    recordsRef.current = records;
  }, [records]);

  const {
    loadedDateRef,
    markLoadedDate,
    reloadKey,
    requestReload
  } = useAttendanceDateRollover({
    enabled: true,
    getCurrentDate: getKoreaDateString,
    isReady: hasLoadedOnce,
    // 재조회만 예약한다. 화면을 잠그지 않는다.
    onReloadRequested: () => {}
  });

  useEffect(() => {
    document.body.classList.add("attendanceOnlyBody");
    return () => document.body.classList.remove("attendanceOnlyBody");
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadToday() {
      const attendanceDate = getKoreaDateString();
      try {
        const [studentsResponse, lessonsResponse, recordsResponse] = await Promise.all([
          apiFetch("/api/students"),
          apiFetch(`/api/lessons?date=${encodeURIComponent(attendanceDate)}`),
          apiFetch(`/api/lesson-records?date=${encodeURIComponent(attendanceDate)}`)
        ]);
        const [studentsResult, lessonsResult, recordsResult] = await Promise.all([
          studentsResponse.json(),
          lessonsResponse.json(),
          recordsResponse.json()
        ]);
        if (!isMounted) return;

        const nextLessons = lessonsResult.ok && Array.isArray(lessonsResult.lessons)
          ? filterActiveLessons(lessonsResult.lessons)
          : [];
        if (studentsResult.ok && Array.isArray(studentsResult.students)) {
          setStudents(studentsResult.students);
        }
        setLessons(nextLessons);
        if (recordsResult.ok && Array.isArray(recordsResult.records)) {
          setRecords(
            nextLessons.length > 0
              ? filterRecordsForLessons(recordsResult.records, nextLessons)
              : recordsResult.records
          );
        }
        markLoadedDate(attendanceDate);
      } catch {
        // 네트워크가 끊겨도 화면은 뜬다. 다음 날짜 롤오버나 60초 동기화에서 다시 시도한다.
        if (!isMounted) return;
      } finally {
        if (isMounted) setHasLoadedOnce(true);
      }
    }

    loadToday();
    return () => {
      isMounted = false;
    };
  }, [markLoadedDate, reloadKey]);

  useAttendanceRecordSync({
    enabled: hasLoadedOnce,
    recordsRef,
    request: getJsonWithTimeout,
    saveStatesRef,
    setRecords,
    setStatus: () => {},
    syncDate: getKoreaDateString()
  });

  const handleAttendancePreview = useCallback(
    (phoneLast4, options = {}) =>
      previewKioskAttendanceAction({
        attendanceOnlyMode: true,
        currentDate: getKoreaDateString(),
        lateGraceMinutes: attendanceSettings.lateGraceMinutes,
        loadedDate: loadedDateRef.current,
        onDateChanged: requestReload,
        options,
        phoneLast4,
        request: previewAttendanceRequest
      }),
    [attendanceSettings.lateGraceMinutes, loadedDateRef, requestReload]
  );

  const handleAttendanceCheck = useCallback(
    (phoneLast4, options = {}) =>
      checkKioskAttendanceAction({
        attendanceOnlyMode: true,
        currentDate: getKoreaDateString(),
        lateGraceMinutes: attendanceSettings.lateGraceMinutes,
        loadedDate: loadedDateRef.current,
        // 태블릿은 알림톡 기록을 화면에 쓰지 않는다. 발송 자체는 서버가 한다.
        onAttendanceEvent: () => {},
        onDateChanged: requestReload,
        onLesson: (lesson) => {
          setLessons((current) => upsertById(current, lesson, "lessonId"));
        },
        onRecord: (record) => {
          const nextRecords = upsertLessonStudentRecord(recordsRef.current, record);
          recordsRef.current = nextRecords;
          setRecords(nextRecords);
        },
        options,
        phoneLast4,
        request: checkAttendanceRequest
      }),
    [attendanceSettings.lateGraceMinutes, loadedDateRef, requestReload]
  );

  return (
    <AttendanceKiosk
      isStandalone
      formatLessonDisplayName={formatLessonDisplayName}
      isLoading={!hasLoadedOnce}
      lessons={lessons}
      onAttendanceCheck={handleAttendanceCheck}
      onAttendancePreview={handleAttendancePreview}
      records={records}
      students={students}
    />
  );
}
