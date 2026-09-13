import { useEffect, useState } from "react";

export function createLessonJournalDraftLifecycleInitialState() {
  return {
    journalEditMode: false,
    journalHomeworkDrafts: {},
    journalMakeupTaskDrafts: {},
    journalManualSaveMessage: "",
    journalRecordDrafts: {}
  };
}

export function useLessonJournalDraftLifecycle(lessonId) {
  const [journalEditMode, setJournalEditMode] = useState(false);
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
    setJournalEditMode,
    setJournalHomeworkDrafts,
    setJournalMakeupTaskDrafts,
    setJournalManualSaveMessage,
    setJournalRecordDrafts
  };
}
