// 멀티테넌트 1단계 · 협력 교사(assistant) 프로토타입에 노출하는 메뉴.
// 출결 + 수업 캘린더(수업일지 화면 안) + 학생 명단만. 정확한 범위는 제품 확정 대상.
export const ASSISTANT_VISIBLE_MENU_IDS = new Set(["lessons", "students"]);

/** 해당 role 이 이 화면(view id)에 접근 가능한가. owner 는 전부 허용. */
export function isViewAllowedForRole(viewId, teacherRole = "owner") {
  if (teacherRole !== "assistant") return true;
  return ASSISTANT_VISIBLE_MENU_IDS.has(viewId);
}

export function createSidebarMenuGroups(supplementAttention = null, { teacherRole = "owner" } = {}) {
  const supplementAttentionCount = Number(supplementAttention?.total ?? 0);
  const supplementAttentionLabel = supplementAttention?.label || "";
  const groups = [
    {
      title: "Lesson Hub",
      items: [
        { id: "lessons", label: "수업일지", icon: "📓" },
        { id: "specialLectureManagement", label: "특강관리", icon: "🎓" },
        { id: "overdue", label: "숙제현황", icon: "📊" },
        { id: "followups", label: "오답관리", icon: "✕" },
        {
          id: "supplements",
          label: "보충관리",
          icon: "↪",
          badge: supplementAttentionCount > 0 ? `확인 ${supplementAttentionCount}건` : "",
          badgeTitle: supplementAttentionLabel || "확인할 보충관리 항목 없음"
        },
        { id: "materials", label: "시험지관리", icon: "📚" },
        { id: "resources", label: "자료함", icon: "📁" }
      ]
    },
    {
      title: "학생",
      items: [
        { id: "students", label: "학생관리", icon: "👥" },
        { id: "classes", label: "반관리", icon: "🏫" }
      ]
    },
    {
      title: "시험",
      items: [
        { id: "examPrep", label: "시험관리", icon: "📋" },
        { id: "examAnalysisPipeline", label: "시험분석", icon: "🧾" },
        { id: "schoolCalendar", label: "학사일정", icon: "🗓️" }
      ]
    },
    {
      title: "연구실",
      items: [
        { id: "lessonResearch", label: "수업연구", icon: "📚" },
        { id: "aiVariants", label: "AI 도구", icon: "✨" }
      ]
    },
    {
      title: "운영",
      items: [
        { id: "settlements", label: "정산", icon: "₩" },
        { id: "notifications", label: "알림관리", icon: "📣" },
        { id: "settings", label: "설정", icon: "⚙️" }
      ]
    }
  ];

  if (teacherRole !== "assistant") return groups;
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => ASSISTANT_VISIBLE_MENU_IDS.has(item.id))
    }))
    .filter((group) => group.items.length > 0);
}
