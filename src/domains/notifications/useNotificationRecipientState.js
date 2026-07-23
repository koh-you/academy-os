import { useEffect, useMemo, useState } from "react";
import {
  createNotificationRecipientViewModel,
  filterNoticeSelectedStudentIds,
  selectAllNoticeStudentIds,
  toggleNoticeSelectedStudentId
} from "./notificationCenterModel.js";

export function useNotificationRecipientState({
  classTemplates,
  normalizePhoneNumber,
  normalizeSearchText,
  noticeWithdrawnClassFilterId,
  students
}) {
  const [classFilter, setClassFilter] = useState("all");
  const [noticeRecipientMode, setNoticeRecipientMode] = useState("selected");
  const [searchText, setSearchText] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const recipientViewModel = useMemo(() => createNotificationRecipientViewModel({
    classFilter,
    classTemplates,
    normalizePhoneNumber,
    normalizeSearchText,
    noticeRecipientMode,
    noticeWithdrawnClassFilterId,
    searchText,
    selectedStudentIds,
    students
  }), [
    classFilter,
    classTemplates,
    noticeRecipientMode,
    searchText,
    selectedStudentIds,
    students
  ]);

  useEffect(() => {
    setSelectedStudentIds((current) =>
      filterNoticeSelectedStudentIds(current, recipientViewModel.classFilteredStudents)
    );
  }, [recipientViewModel.classFilteredStudents]);

  function toggleStudentSelection(studentId) {
    setSelectedStudentIds((current) =>
      toggleNoticeSelectedStudentId(current, studentId)
    );
  }

  function selectAllVisibleStudents() {
    setSelectedStudentIds(
      selectAllNoticeStudentIds(recipientViewModel.searchableStudents)
    );
  }

  function clearSelectedStudents() {
    setSelectedStudentIds([]);
  }

  return {
    ...recipientViewModel,
    classFilter,
    clearSelectedStudents,
    noticeRecipientMode,
    searchText,
    selectAllVisibleStudents,
    selectedStudentIds,
    setClassFilter,
    setNoticeRecipientMode,
    setSearchText,
    toggleStudentSelection
  };
}
