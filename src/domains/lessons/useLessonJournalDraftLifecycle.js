import { useEffect, useState } from "react";

export function createLessonJournalDraftLifecycleInitialState() {
  return {
    // 수업일지는 열자마자 편집할 수 있다. 별도의 "수정 시작" 단계가 없어야
    // 수업 자체를 고치는 "수업 수정"(LessonModal)과 헷갈리지 않는다.
    journalEditMode: true,
    journalHomeworkDrafts: {},
    journalMakeupTaskDrafts: {},
    journalManualSaveMessage: "",
    journalRecordDrafts: {}
  };
}

export function useLessonJournalDraftLifecycle(lessonId) {
  const [journalEditMode, setJournalEditMode] = useState(true);
  const [journalRecordDrafts, setJournalRecordDrafts] = useState({});
  const [journalHomeworkDrafts, setJournalHomeworkDrafts] = useState({});
  const [journalMakeupTaskDrafts, setJournalMakeupTaskDrafts] = useState({});
  const [journalManualSaveMessage, setJournalManualSaveMessage] = useState("");

  useEffect(() => {
    const initialState = createLessonJournalDraftLifecycleInitialState();
    setJournalEditMode(initialState.journalEditMode);
    setJournalRecordDrafts(initialState.journalRecordDrafts);
    setJournalHomeworkDrafts(initialState.journalHomeworkDrafts);
    setJournalMakeupTaskDrafts(initialState.journalMakeupTaskDrafts);
    setJournalManualSaveMessage(initialState.journalManualSaveMessage);
  }, [lessonId]);

  return {
    journalEditMode,
    journalHomeworkDrafts,
    journalMakeupTaskDrafts,
    journalManualSaveMessage,
    journalRecordDrafts,
    setJournalHomeworkDrafts,
    setJournalMakeupTaskDrafts,
    setJournalManualSaveMessage,
    setJournalRecordDrafts
  };
}
