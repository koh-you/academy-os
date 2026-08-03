const reportSnapshotStatuses = new Set(["mock_sent", "snapshot_saved"]);

function createReportSnapshotError(message, details = {}) {
  const error = new Error(message);
  Object.assign(error, details);
  return error;
}

export function normalizeReportSnapshot(snapshot = {}) {
  return {
    body: String(snapshot.body ?? ""),
    createdAt: String(snapshot.createdAt ?? ""),
    lessonId: String(snapshot.lessonId ?? ""),
    reportId: String(snapshot.reportId ?? ""),
    status: String(snapshot.status ?? "snapshot_saved"),
    studentId: String(snapshot.studentId ?? ""),
    title: String(snapshot.title ?? "")
  };
}

export function areReportSnapshotsEqual(left, right) {
  return JSON.stringify(normalizeReportSnapshot(left)) === JSON.stringify(normalizeReportSnapshot(right));
}

export function createReportSnapshot({ now = () => new Date(), randomUUID, report, status = "snapshot_saved" } = {}) {
  const createdAt = now().toISOString();
  const studentId = String(report?.studentId ?? report?.student?.studentId ?? "");
  const lessonId = String(report?.lessonId ?? report?.lesson?.lessonId ?? "");
  const randomToken = String(randomUUID?.() ?? Math.random().toString(36).slice(2));
  return requireReportSnapshot({
    body: report?.body,
    createdAt,
    lessonId,
    reportId: report?.reportId || `report_${createdAt.replace(/\D/g, "")}_${studentId}_${randomToken}`,
    status,
    studentId,
    title: report?.title
  });
}

export function isReportSnapshotRetryMatch(snapshot, report, status = "snapshot_saved") {
  const normalized = normalizeReportSnapshot(snapshot);
  return (
    normalized.status === status &&
    normalized.studentId === String(report?.studentId ?? report?.student?.studentId ?? "") &&
    normalized.lessonId === String(report?.lessonId ?? report?.lesson?.lessonId ?? "") &&
    normalized.title === String(report?.title ?? "") &&
    normalized.body === String(report?.body ?? "")
  );
}

export function requireReportSnapshot(snapshot) {
  const normalized = normalizeReportSnapshot(snapshot);
  if (!normalized.reportId || !normalized.studentId || !normalized.lessonId || !normalized.createdAt) {
    throw createReportSnapshotError("보고서 ID·학생·수업·생성시각이 필요합니다.", {
      code: "REPORT_SNAPSHOT_INVALID",
      statusCode: 400
    });
  }
  if (!normalized.title.trim() || !normalized.body.trim()) {
    throw createReportSnapshotError("저장할 보고서 제목과 본문이 필요합니다.", {
      code: "REPORT_SNAPSHOT_INVALID",
      statusCode: 400
    });
  }
  if (!reportSnapshotStatuses.has(normalized.status)) {
    throw createReportSnapshotError("지원하지 않는 보고서 저장 상태입니다.", {
      code: "REPORT_SNAPSHOT_INVALID",
      statusCode: 400
    });
  }
  return normalized;
}

export async function saveReportSnapshotWithVerification({ operations, snapshot } = {}) {
  if (typeof operations?.read !== "function" || typeof operations?.write !== "function") {
    throw new Error("보고서 저장 read/write 경계가 필요합니다.");
  }
  const requestedSnapshot = requireReportSnapshot(snapshot);
  const current = await operations.read();
  if (current?.source !== "supabase") {
    throw createReportSnapshotError("보고서 저장 원천을 Supabase에서 확인하지 못했습니다.", {
      code: "REPORT_SNAPSHOT_SOURCE_UNAVAILABLE",
      statusCode: 503
    });
  }
  const currentSnapshots = Array.isArray(current.states?.reportSnapshots) ? current.states.reportSnapshots : [];
  const existingSnapshot = currentSnapshots.find((item) => item?.reportId === requestedSnapshot.reportId);
  if (existingSnapshot) {
    if (!areReportSnapshotsEqual(existingSnapshot, requestedSnapshot)) {
      throw createReportSnapshotError("같은 보고서 ID가 다른 내용으로 먼저 저장되었습니다.", {
        code: "REPORT_SNAPSHOT_CONFLICT",
        currentSnapshot: existingSnapshot,
        statusCode: 409
      });
    }
    return {
      recovered: true,
      reportSnapshots: currentSnapshots,
      snapshot: existingSnapshot,
      source: "supabase",
      verified: true
    };
  }

  const currentRow = (current.stateRows ?? []).find((row) => row?.key === "reportSnapshots");
  const nextSnapshots = [requestedSnapshot, ...currentSnapshots];
  await operations.write(
    { reportSnapshots: nextSnapshots },
    { expectedUpdatedAt: { reportSnapshots: currentRow?.updatedAt ?? null } }
  );

  const verified = await operations.read();
  const verifiedSnapshots = Array.isArray(verified?.states?.reportSnapshots)
    ? verified.states.reportSnapshots
    : [];
  const verifiedSnapshot = verifiedSnapshots.find((item) => item?.reportId === requestedSnapshot.reportId);
  const currentIds = new Set(currentSnapshots.map((item) => item?.reportId).filter(Boolean));
  const preservedCurrentSnapshots = [...currentIds].every((reportId) => (
    verifiedSnapshots.some((item) => item?.reportId === reportId)
  ));
  if (
    verified?.source !== "supabase" ||
    !verifiedSnapshot ||
    !areReportSnapshotsEqual(verifiedSnapshot, requestedSnapshot) ||
    !preservedCurrentSnapshots
  ) {
    throw createReportSnapshotError("보고서 저장 뒤 Supabase 값을 재조회로 확인하지 못했습니다.", {
      code: "REPORT_SNAPSHOT_VERIFICATION_FAILED",
      statusCode: 500
    });
  }
  return {
    recovered: false,
    reportSnapshots: verifiedSnapshots,
    snapshot: verifiedSnapshot,
    source: "supabase",
    verified: true
  };
}
