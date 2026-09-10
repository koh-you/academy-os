// 원장 전용 · 어느 선생님의 자료를 보고 있는지 고르는 전환기.
//
// 학원 전체를 관리하려면 각 선생님의 학생 명단과 수업일지를 열어보고 고칠 수 있어야 한다.
// 선생님을 고르면 그 선생님의 테넌트로 모든 화면이 바뀐다 — 조회뿐 아니라 수정도 그쪽에
// 저장된다. 그래서 "지금 누구를 보고 있는지" 가 항상 눈에 띄어야 한다.
//
// 권한은 서버가 다시 판정한다(apiAccessPolicy.resolveViewAsTenantId). 협력 교사가 같은
// 헤더를 흉내내도 자기 테넌트로 되돌아간다.

import { useEffect, useState } from "react";
import { apiFetch } from "../shared/utils/apiClient.js";
import "./teacherViewSwitcher.css";

export function TeacherViewSwitcher({ ownTenantId, viewTenantId, onChangeViewTenant }) {
  const [accounts, setAccounts] = useState([]);
  const [loadState, setLoadState] = useState("loading");

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const result = await (await apiFetch("/api/teacher-accounts")).json();
        if (!isMounted) return;
        if (!result.ok) throw new Error(result.error || "교사 목록을 불러오지 못했습니다.");
        setAccounts((result.accounts ?? []).filter((account) => account.isActive));
        setLoadState("loaded");
      } catch {
        if (isMounted) setLoadState("failed");
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  // 선생님이 나 하나뿐이면 고를 것이 없다. 빈 자리를 차지하지 않는다.
  if (loadState !== "loaded" || accounts.length < 2) return null;

  const activeTenantId = viewTenantId || ownTenantId;
  const isViewingOther = activeTenantId !== ownTenantId;

  return (
    <div className={isViewingOther ? "teacherViewSwitcher viewingOther" : "teacherViewSwitcher"}>
      <span className="teacherViewSwitcherLabel">보는 중</span>
      <div className="teacherViewSwitcherList" role="group" aria-label="선생님별 자료 보기">
        {accounts.map((account) => {
          const isActive = account.tenantId === activeTenantId;
          return (
            <button
              aria-pressed={isActive}
              className={isActive ? "teacherViewSwitcherItem active" : "teacherViewSwitcherItem"}
              key={account.teacherId}
              onClick={() => onChangeViewTenant(account.tenantId === ownTenantId ? "" : account.tenantId)}
              type="button"
            >
              {account.name}
              {account.tenantId === ownTenantId ? " (나)" : ""}
            </button>
          );
        })}
      </div>
      {isViewingOther ? (
        <p className="teacherViewSwitcherNotice">
          다른 선생님 자료를 보고 있습니다. <b>여기서 수정하면 그 선생님 자료가 바뀝니다.</b>
        </p>
      ) : null}
    </div>
  );
}
