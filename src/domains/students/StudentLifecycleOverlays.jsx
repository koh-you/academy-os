import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { ModalFooter } from "../../shared/components/Modal.jsx";
import { getStudentHandoverTitle } from "./studentHandoverPdf.js";

export function StudentLifecycleOverlays({
  batchForceDeleteWithReferences,
  batchPermanentDeleteAuditState,
  batchPermanentDeleteAudits,
  batchPermanentDeleteConfirmation,
  batchPermanentDeleteError,
  batchPermanentDeleteStudents,
  closeBatchPermanentDeleteModal,
  closePermanentDeleteModal,
  confirmDeleteStudent,
  deleteStudent,
  forceDeleteWithReferences,
  handoverComment,
  handoverStudent,
  ModalComponent,
  permanentDeleteAudit,
  permanentDeleteAuditState,
  permanentDeleteConfirmation,
  permanentDeleteError,
  permanentDeleteStudent,
  permanentlyDeleteSelectedWithdrawnStudents,
  permanentlyDeleteWithdrawnStudent,
  printStudentHandover,
  setBatchForceDeleteWithReferences,
  setBatchPermanentDeleteConfirmation,
  setDeleteStudentId,
  setForceDeleteWithReferences,
  setHandoverComment,
  setHandoverStudentId,
  setPermanentDeleteConfirmation,
  setWithdrawalDraft,
  withdrawalDraft,
  withdrawalError,
  withdrawalReasonOptions,
  withdrawalSaveState
}) {
  return (
    <>
      {deleteStudent ? (
        <ModalComponent
          className="studentDeleteModal"
          closeDisabled={withdrawalSaveState === "saving"}
          onClose={() => {
            if (withdrawalSaveState !== "saving") setDeleteStudentId("");
          }}
          subtitle="퇴원 처리하면 학생 목록에서 제외됩니다. 오늘 수업 행이 있으면 명단 제외를 오늘부터 또는 내일부터 선택하고, 이미 저장된 수업기록은 보존합니다."
          title="학생 퇴원 처리 확인"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <span className="studentInitial">{deleteStudent.name?.[0] ?? "학"}</span>
              <div>
                <strong>{deleteStudent.name}</strong>
                <p className="muted">
                  {[deleteStudent.grade, deleteStudent.schoolName].filter(Boolean).join(" · ") || "기본 정보 없음"}
                </p>
              </div>
            </div>
            <div className="deleteWarningBox">
              <span>아이디</span>
              <strong>{deleteStudent.loginId || "-"}</strong>
              <span>PIN</span>
              <strong>{deleteStudent.pin || "-"}</strong>
            </div>
            <p className="dangerCopy">정말 이 학생을 퇴원 처리할까요? 이미 저장된 수업기록·출결·숙제는 보존하고, 선택한 적용일부터 수업 명단에서 제외합니다.</p>
            <div className="withdrawalReasonGrid">
              <label>
                퇴원 사유
                <select
                  disabled={withdrawalSaveState === "saving"}
                  value={withdrawalDraft.reason}
                  onChange={(event) => setWithdrawalDraft((current) => ({ ...current, reason: event.target.value }))}
                >
                  {withdrawalReasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <label>
                코멘트
                <input
                  disabled={withdrawalSaveState === "saving"}
                  value={withdrawalDraft.comment}
                  onChange={(event) => setWithdrawalDraft((current) => ({ ...current, comment: event.target.value }))}
                  placeholder="예: 보호자 요청, 시간표 조정 등"
                />
              </label>
            </div>
            {withdrawalDraft.hasTodayLessonRow ? (
              <label className="studentRosterEffectiveField">
                오늘 수업일지 반영
                <select
                  aria-label={`${deleteStudent.name} 퇴원 적용 시점`}
                  disabled={withdrawalSaveState === "saving"}
                  onChange={(event) => setWithdrawalDraft((current) => ({
                    ...current,
                    rosterEffectiveMode: event.target.value
                  }))}
                  value={withdrawalDraft.rosterEffectiveMode ?? "tomorrow"}
                >
                  <option value="tomorrow">오늘 행 유지 · 내일부터 제외</option>
                  <option value="today">오늘부터 행 제외</option>
                </select>
              </label>
            ) : null}
            {withdrawalSaveState === "saving" ? <InlineSaveStatus label="학생 상태·미래 수업 명단" saveState="saving" /> : null}
            {withdrawalSaveState === "failed" ? <p className="errorText" role="alert">{withdrawalError || "퇴원 처리에 실패했습니다. 입력을 유지했으니 다시 시도해 주세요."}</p> : null}
          </div>
          <ModalFooter tone="danger">
            <button className="softButton" disabled={withdrawalSaveState === "saving"} onClick={() => setDeleteStudentId("")} type="button">취소</button>
            <button className="dangerSoftButton" disabled={withdrawalSaveState === "saving"} onClick={confirmDeleteStudent} type="button">
              {withdrawalSaveState === "saving" ? "저장·확인 중" : withdrawalSaveState === "failed" ? "다시 퇴원 처리" : "퇴원 처리"}
            </button>
          </ModalFooter>
        </ModalComponent>
      ) : null}

      {handoverStudent ? (
        <ModalComponent className="studentHandoverModal" onClose={() => setHandoverStudentId("")} scrollable subtitle="수업·출결·숙제와 Tally 접수정보를 읽어 PDF 인쇄 창을 엽니다. 원천 데이터는 수정하지 않습니다." title={`${handoverStudent.name} ${getStudentHandoverTitle(handoverStudent)}`}>
          <div className="deleteConfirmBody">
            <p className="muted">등원일부터 퇴원일({String(handoverStudent.withdrawnAt || "").slice(0, 10) || "미입력"})까지의 수업만 포함합니다.</p>
            <label>교사 인계 코멘트<textarea value={handoverComment} onChange={(event) => setHandoverComment(event.target.value)} placeholder="재등록 시 참고사항, 보호자 전달사항 등을 입력하세요. 이 코멘트는 이번 PDF에만 포함되며 저장하지 않습니다." rows={7} /></label>
          </div>
          <ModalFooter><button className="softButton" onClick={() => setHandoverStudentId("")} type="button">닫기</button><button className="primaryButton" onClick={printStudentHandover} type="button">PDF 인쇄 창 열기</button></ModalFooter>
        </ModalComponent>
      ) : null}

      {permanentDeleteStudent ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
          closeDisabled={permanentDeleteAuditState === "saving"}
          onClose={closePermanentDeleteModal}
          subtitle="연결 기록을 먼저 확인합니다. 기록이 있어도 영향 범위를 확인한 뒤 강제 삭제할 수 있으며, 삭제 후에는 복구할 수 없습니다."
          title="퇴원 중복 데이터 영구 삭제"
        >
          <div className="permanentDeleteStudentSummary">
            <span className="studentInitial">{permanentDeleteStudent.name?.[0] ?? "학"}</span>
            <div>
              <strong>{permanentDeleteStudent.name}</strong>
              <p className="muted">
                {[permanentDeleteStudent.grade, permanentDeleteStudent.schoolName, permanentDeleteStudent.studentId]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
          </div>

          {permanentDeleteAuditState === "saving" ? (
            <div className="permanentDeleteAuditStatus" role="status">
              <InlineSaveStatus label="연결 기록 점검 / 삭제" saveState="saving" />
              <p>Supabase의 수업·출결·숙제·특강·알림·운영 저장 데이터를 확인하고 있습니다.</p>
            </div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit?.allowed ? (
            <div className="permanentDeleteSafeBox">
              <strong>삭제 가능 · 연결된 운영 기록 0건</strong>
              <p>학생 원천 행만 삭제하며, 삭제 뒤 Supabase 학생 목록을 다시 조회해 사라진 것을 확인합니다.</p>
            </div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit && !permanentDeleteAudit.allowed ? (
            <div className="permanentDeleteBlockedBox" role="alert">
              <strong>주의 · 연결 기록이 있습니다</strong>
              <ul>
                {permanentDeleteAudit.blockingReferences.map((reference) => (
                  <li key={reference.table}>
                    {reference.label} {reference.count}건
                    {reference.matchedKeys?.length ? ` (${reference.matchedKeys.join(", ")})` : ""}
                  </li>
                ))}
              </ul>
              <p>강제 삭제하면 수업 명단·자료·운영 저장 참조를 정리하고, DB 정책에 따라 수업일지·숙제·성적·시험 제출 등 연결 기록이 함께 삭제되거나 학생 연결이 해제됩니다.</p>
            </div>
          ) : null}

          {permanentDeleteError ? (
            <div className="permanentDeleteError" role="alert">{permanentDeleteError}</div>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit && !permanentDeleteAudit.allowed ? (
            <label className="permanentDeleteForceField">
              <input
                checked={forceDeleteWithReferences}
                onChange={(event) => setForceDeleteWithReferences(event.target.checked)}
                type="checkbox"
              />
              <span>표시된 연결 기록이 함께 정리·삭제되거나 학생 연결이 해제될 수 있음을 확인했습니다.</span>
            </label>
          ) : null}

          {permanentDeleteAuditState !== "saving" && permanentDeleteAudit ? (
            <label className="permanentDeleteConfirmationField">
              영구 삭제하려면 학생 이름 <strong>{permanentDeleteStudent.name}</strong>을 정확히 입력
              <input
                autoComplete="off"
                value={permanentDeleteConfirmation}
                onChange={(event) => setPermanentDeleteConfirmation(event.target.value)}
                placeholder={permanentDeleteStudent.name}
              />
            </label>
          ) : null}

          <ModalFooter tone="danger">
            <button
              className="softButton"
              disabled={permanentDeleteAuditState === "saving"}
              onClick={closePermanentDeleteModal}
              type="button"
            >
              닫기
            </button>
            {permanentDeleteAudit ? (
              <button
                className="dangerSoftButton"
                disabled={
                  permanentDeleteAuditState === "saving" ||
                  (!permanentDeleteAudit.allowed && !forceDeleteWithReferences) ||
                  permanentDeleteConfirmation.trim() !== permanentDeleteStudent.name?.trim()
                }
                onClick={permanentlyDeleteWithdrawnStudent}
                type="button"
              >
                {permanentDeleteAuditState === "saving"
                  ? "삭제 및 확인 중"
                  : permanentDeleteAudit.allowed
                    ? "학생 원천 영구 삭제"
                    : "연결 기록 포함 강제 삭제"}
              </button>
            ) : null}
          </ModalFooter>
        </ModalComponent>
      ) : null}

      {batchPermanentDeleteStudents.length ? (
        <ModalComponent
          className="studentPermanentDeleteModal"
          closeDisabled={batchPermanentDeleteAuditState === "saving"}
          onClose={closeBatchPermanentDeleteModal}
          subtitle="선택한 학생별 연결 기록을 Supabase에서 먼저 점검합니다. 실제 삭제는 아래 최종 확인 뒤에만 실행됩니다."
          title={`퇴원생 ${batchPermanentDeleteStudents.length}명 영구 삭제`}
        >
          {batchPermanentDeleteAuditState === "saving" ? (
            <div className="permanentDeleteAuditStatus" role="status"><InlineSaveStatus label="선택 학생 연결 기록 점검" saveState="saving" /></div>
          ) : null}
          {batchPermanentDeleteAuditState !== "saving" ? (
            <div className="batchPermanentDeleteTargetList">
              <strong>삭제 대상 및 연결 데이터</strong>
              <ul>{batchPermanentDeleteStudents.map((student) => {
                const audit = batchPermanentDeleteAudits[student.studentId];
                const references = audit?.blockingReferences ?? [];
                const referenceCount = references.reduce((sum, reference) => sum + Number(reference.count || 0), 0);
                return (
                  <li key={student.studentId}>
                    <div><strong>{student.name}</strong><span>{audit?.allowed ? "연결 기록 0건 · 학생 원천만 삭제 가능" : `연결 기록 ${referenceCount}건`}</span></div>
                    {!audit?.allowed ? <p>{references.map((reference) => `${reference.label} ${reference.count}건`).join(" · ")}</p> : null}
                  </li>
                );
              })}</ul>
            </div>
          ) : null}
          {batchPermanentDeleteError ? <div className="permanentDeleteError" role="alert">{batchPermanentDeleteError}</div> : null}
          {batchPermanentDeleteAuditState === "saved" ? (
            <>
              {batchPermanentDeleteStudents.some((student) => !batchPermanentDeleteAudits[student.studentId]?.allowed) ? (
                <label className="permanentDeleteForceField"><input checked={batchForceDeleteWithReferences} onChange={(event) => setBatchForceDeleteWithReferences(event.target.checked)} type="checkbox" /><span>표시된 연결 기록이 함께 정리·삭제되거나 학생 연결이 해제될 수 있음을 확인했습니다.</span></label>
              ) : null}
              <label className="permanentDeleteConfirmationField">선택한 {batchPermanentDeleteStudents.length}명을 영구 삭제하려면 <strong>영구 삭제</strong>를 정확히 입력<input autoComplete="off" onChange={(event) => setBatchPermanentDeleteConfirmation(event.target.value)} placeholder="영구 삭제" value={batchPermanentDeleteConfirmation} /></label>
            </>
          ) : null}
          <ModalFooter tone="danger">
            <button className="softButton" disabled={batchPermanentDeleteAuditState === "saving"} onClick={closeBatchPermanentDeleteModal} type="button">닫기</button>
            <button className="dangerSoftButton" disabled={batchPermanentDeleteAuditState !== "saved" || batchPermanentDeleteConfirmation.trim() !== "영구 삭제" || (batchPermanentDeleteStudents.some((student) => !batchPermanentDeleteAudits[student.studentId]?.allowed) && !batchForceDeleteWithReferences)} onClick={permanentlyDeleteSelectedWithdrawnStudents} type="button">선택 학생 영구 삭제</button>
          </ModalFooter>
        </ModalComponent>
      ) : null}
    </>
  );
}
