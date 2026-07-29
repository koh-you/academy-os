import { useMemo, useState } from "react";
import { ListCard, ListCardActions, ListCardHeader } from "../../shared/components/ListCard.jsx";
import { SearchField } from "../../shared/components/SearchField.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { buildParentChannelLookupText, getParentResponseContexts } from "./parentResponseContext.js";

export function ParentResponseContextPanel({ formatDateTime, notificationJobs = [], onCopy, students = [] }) {
  const [copyMessage, setCopyMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const contexts = useMemo(
    () => getParentResponseContexts(notificationJobs, students),
    [notificationJobs, students]
  );
  const keyword = searchText.trim().toLowerCase();
  const visibleContexts = contexts.filter((context) =>
    !keyword || [context.studentName, context.parentPhone, context.lessonDate, context.body]
      .some((value) => String(value ?? "").toLowerCase().includes(keyword))
  );

  async function copyChannelLookup(context) {
    try {
      const copied = await onCopy?.(buildParentChannelLookupText(context));
      if (!copied) throw new Error("Clipboard copy was unavailable");
      setCopyMessage(`${context.studentName} 학부모 확인 정보를 복사했습니다.`);
    } catch {
      setCopyMessage("확인 정보 복사에 실패했습니다.");
    }
  }

  return (
    <section className="notificationPanel parentResponseContextPanel">
      <SectionHeader
        density="slim"
        description="Academy OS에서 발송한 학부모 알림 원문을 확인한 뒤, 별관 채널 상담방에서 답장하세요. 채널 답장은 이곳에 저장하지 않습니다."
        eyebrow="PARENT RESPONSE CONTEXT"
        meta={<span className="countBadge">발신 {contexts.length}건</span>}
        title="학부모 응대"
      />
      <div className="parentResponseContextTools">
        <SearchField
          label="학생·학부모 검색"
          onChange={setSearchText}
          placeholder="학생명, 학부모 번호, 수업일"
          result={`${visibleContexts.length}건`}
          value={searchText}
        />
        <p>모바일에서는 아래 확인 정보를 복사한 뒤 카카오비즈니스 파트너센터 앱에서 해당 학부모 상담방을 찾으세요.</p>
      </div>
      {copyMessage ? <p className="inlineNotice ok" role="status">{copyMessage}</p> : null}
      {visibleContexts.length ? (
        <div className="parentResponseContextList">
          {visibleContexts.map((context) => (
            <ListCard className="parentResponseContextCard" key={context.notificationJobId}>
              <ListCardHeader className="parentResponseContextMeta">
                <div>
                  <strong>{context.studentName}</strong>
                  <span>{context.lessonDate || "수업일 미입력"} · {formatDateTime(context.sentAt)}</span>
                </div>
                <span className="statusPill status-sent">발송 완료</span>
              </ListCardHeader>
              <dl>
                <div><dt>학부모 번호</dt><dd>{context.parentPhone || "미입력"}</dd></div>
                <div><dt>알림 종류</dt><dd>{context.notificationType === "daily_report" ? "데일리 리포트" : "학부모 강사코멘트"}</dd></div>
              </dl>
              <div className="parentResponseContextBody">
                <small>그날 Academy OS에 저장된 발신 본문</small>
                <p>{context.body}</p>
              </div>
              <ListCardActions className="parentResponseContextActions">
                <button className="softButton compact" onClick={() => copyChannelLookup(context)} type="button">별관 채널 확인 정보 복사</button>
                <span>별관 채널 관리자 앱에서 {context.studentName} 학부모 상담방을 열어 답장을 확인하세요.</span>
              </ListCardActions>
            </ListCard>
          ))}
        </div>
      ) : (
        <div className="emptyState">
          {searchText.trim()
            ? "검색 결과가 없습니다. 검색어를 지우거나 학생명·학부모 번호·수업일을 다시 확인하세요."
            : "발송 완료된 학부모 데일리 리포트 또는 강사코멘트 기록이 없습니다."}
        </div>
      )}
    </section>
  );
}
