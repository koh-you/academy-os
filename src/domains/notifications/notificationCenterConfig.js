import { academyBrandName } from "../../shared/utils/academyBrand.js";
import { normalizeNotificationTemplates, renderNotificationTemplate } from "./notificationTemplateCatalog.js";

// academyName: 로그인한 선생님 기준 브랜드("으뜸수학 최경석T"). 교재·보강·공지 preset 의
// "#{학원명}" 은 선택 즉시 채운다(변수 없이 그대로 발송되는 초안이라서). 특강 preset 은
// 발송 시점에 변수를 채우므로 placeholder 를 남긴다.
export function getNoticeMessageTemplates(notificationTemplates = {}, academyName = academyBrandName) {
  const templates = normalizeNotificationTemplates(notificationTemplates);
  const fill = (body) => renderNotificationTemplate(body, { 학원명: academyName });
  return [
    {
      id: "material",
      label: "교재문자",
      title: "교재 안내",
      body: fill(templates.noticeMaterialPreset)
    },
    {
      id: "makeup",
      label: "보강문자",
      title: "보강 안내",
      body: fill(templates.noticeMakeupPreset)
    },
    {
      id: "notice",
      label: "공지문자",
      title: "공지 안내",
      body: fill(templates.noticeAnnouncementPreset)
    },
    {
      id: "specialLecture",
      label: "특강문자",
      title: "특강 안내",
      body: "#{학원명} 재원생 보호자님께 드리는 특강 안내입니다.\n\n안녕하세요. #{학원명}입니다.\n#{학생명} 학생 보호자님께 특강 일정을 안내드립니다.\n\n특강명: #{특강명}\n대상: #{대상}\n요일: #{요일}\n시간: #{시간}\n\n세부 시수와 수강료, 회차별 일정은 아래 버튼에서 확인해 주세요.\n수강을 원하시거나 문의사항이 있으신 경우 아래 버튼을 눌러 안내문에서 신청해 주세요."
    }
  ];
}

export const noticeMessageTemplates = getNoticeMessageTemplates();

const notificationJobLabels = {
  attendance: "출결 알림톡",
  daily_report: "학부모 알림톡",
  notice_parent: "학부모 공지",
  notice_student: "학생 공지",
  parent_comment: "학부모 알림톡",
  schedule_reminder: "학생 보충 일정 안내",
  student_comment: "학생 알림톡",
  student_reminder: "학생 일정 알림톡"
};

const notificationStatusLabels = {
  draft: "테스트/초안",
  dry_run: "테스트 기록",
  send_unconfirmed: "확인 필요",
  pending_send: "발송 대기",
  queued: "내부 대기",
  scheduled: "예약됨",
  sent: "발송 완료",
  failed: "실패",
  empty_message: "내용 없음"
};

export function getNotificationJobLabel(type) {
  return notificationJobLabels[type] ?? type ?? "알림톡";
}

export function getNotificationStatusLabel(status) {
  return notificationStatusLabels[status] ?? status ?? "대기";
}

export function resolveNotificationJobStatusClass(job, isSchedulePast) {
  if (!job) return "draft";
  if (job.status === "scheduled" && isSchedulePast(job.scheduledAt)) {
    return "send_unconfirmed";
  }
  return job.status || "draft";
}
