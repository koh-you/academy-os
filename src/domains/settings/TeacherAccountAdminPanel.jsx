// 원장 전용 · 협력 교사 계정 관리.
//
// 계정을 만들 방법이 OS 안에 없어서 선생님이 늘 때마다 DB 에 직접 행을 넣어야 했다.
// 이 패널이 그걸 대신한다. 서버는 /api/teacher-accounts 이고, 전역 게이트가 owner 만
// 통과시킨다(협력 교사에게는 이 탭 자체가 보이지 않는다).

import { useCallback, useEffect, useState } from "react";
import { apiFetch, postJson } from "../../shared/utils/apiClient.js";
import "./teacherAccountAdminPanel.css";

const emptyForm = { loginId: "", name: "", password: "" };

export function TeacherAccountAdminPanel() {
  const [accounts, setAccounts] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [form, setForm] = useState(emptyForm);
  const [createState, setCreateState] = useState("idle");
  const [message, setMessage] = useState("");
  const [busyTeacherId, setBusyTeacherId] = useState("");

  const loadAccounts = useCallback(async () => {
    setLoadState("loading");
    try {
      const result = await (await apiFetch("/api/teacher-accounts")).json();
      if (!result.ok) throw new Error(result.error || "교사 계정을 불러오지 못했습니다.");
      setAccounts(result.accounts ?? []);
      setLoadState("loaded");
    } catch (error) {
      setMessage(error.message);
      setLoadState("failed");
    }
  }, []);

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function createAccount(event) {
    event.preventDefault();
    if (createState === "saving") return;
    setCreateState("saving");
    setMessage("");
    try {
      const result = await postJson("/api/teacher-accounts", form);
      setAccounts((current) => [...current, result.account]);
      setForm(emptyForm);
      setCreateState("idle");
      setMessage(`${result.account.name} 선생님 계정을 만들었습니다. 초기 비밀번호를 직접 전달해 주세요.`);
    } catch (error) {
      setCreateState("idle");
      setMessage(error.message || "계정을 만들지 못했습니다.");
    }
  }

  async function toggleActive(account) {
    if (busyTeacherId) return;
    const nextActive = !account.isActive;
    const question = nextActive
      ? `${account.name} 선생님 계정을 다시 사용하도록 할까요?`
      : `${account.name} 선생님의 로그인을 막을까요? 등록된 학생과 수업일지는 그대로 남습니다.`;
    if (typeof window !== "undefined" && !window.confirm(question)) return;
    setBusyTeacherId(account.teacherId);
    setMessage("");
    try {
      const result = await postJson("/api/teacher-accounts/status", {
        teacherId: account.teacherId,
        isActive: nextActive
      });
      setAccounts((current) =>
        current.map((item) => (item.teacherId === result.account.teacherId ? result.account : item))
      );
    } catch (error) {
      setMessage(error.message || "상태를 바꾸지 못했습니다.");
    } finally {
      setBusyTeacherId("");
    }
  }

  return (
    <section className="settingsPanel" aria-label="교사 계정 관리">
      <div className="settingsPanelHeader">
        <strong>교사 계정</strong>
        <p className="muted">
          선생님을 추가하면 학생·수업·수업일지가 <b>계정마다 따로</b> 관리됩니다. 서로의 자료는 보이지 않습니다.
          추가된 선생님은 출결과 수업일지만 사용할 수 있습니다.
        </p>
      </div>

      <form className="teacherAccountForm" onSubmit={createAccount}>
        <label>
          <span>아이디</span>
          <input
            autoComplete="off"
            disabled={createState === "saving"}
            onChange={(event) => update("loginId", event.target.value)}
            placeholder="영문·숫자 3~32자"
            value={form.loginId}
          />
        </label>
        <label>
          <span>선생님 이름</span>
          <input
            disabled={createState === "saving"}
            onChange={(event) => update("name", event.target.value)}
            placeholder="홍길동"
            value={form.name}
          />
        </label>
        <label>
          <span>초기 비밀번호</span>
          <input
            autoComplete="new-password"
            disabled={createState === "saving"}
            onChange={(event) => update("password", event.target.value)}
            placeholder="4자리 이상"
            type="password"
            value={form.password}
          />
        </label>
        <button className="primaryButton" disabled={createState === "saving"} type="submit">
          {createState === "saving" ? "만드는 중" : "선생님 추가"}
        </button>
      </form>

      {message ? <p className="teacherAccountMessage">{message}</p> : null}

      <div className="teacherAccountList" aria-label="등록된 교사 계정">
        {loadState === "loading" ? <p className="muted">불러오는 중입니다.</p> : null}
        {loadState === "loaded" && accounts.length === 0 ? (
          <p className="muted">등록된 계정이 없습니다.</p>
        ) : null}
        {accounts.map((account) => (
          <div className="teacherAccountRow" key={account.teacherId}>
            <div>
              <strong>{account.name}</strong>
              <small className="muted">
                {account.loginId} · {account.teacherRole === "owner" ? "원장" : "협력 교사"}
                {account.isActive ? "" : " · 로그인 막힘"}
              </small>
            </div>
            {account.teacherRole === "owner" ? (
              <span className="muted">본인 계정</span>
            ) : (
              <button
                className={account.isActive ? "dangerSoftButton" : "softButton"}
                disabled={busyTeacherId === account.teacherId}
                onClick={() => toggleActive(account)}
                type="button"
              >
                {busyTeacherId === account.teacherId
                  ? "처리 중"
                  : account.isActive ? "로그인 막기" : "다시 허용"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
