import { useState } from "react";
import { WorkspaceTabs } from "../shared/components/WorkspaceTabs.jsx";
import { getRememberedLoginId, saveRememberedLoginId } from "./rememberedLoginIds.js";

export function RoleLoginScreen({
  academyBrandName,
  initialRole = "student",
  onLogin,
  windowTarget = typeof window === "undefined" ? null : window
}) {
  const [role, setRole] = useState(initialRole);
  const [loginId, setLoginId] = useState(() => getRememberedLoginId(windowTarget, initialRole));
  const [shouldRememberLoginId, setShouldRememberLoginId] = useState(
    () => Boolean(getRememberedLoginId(windowTarget, initialRole))
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleLabels = {
    student: "학생",
    parent: "학부모",
    teacher: "선생님"
  };
  const loginHelpId = "role-login-help";
  const loginErrorId = "role-login-error";
  const rememberLoginIdId = "role-login-remember";

  function selectRole(nextRole) {
    setRole(nextRole);
    // 역할마다 아이디가 다르므로 기억해 둔 값도 역할별로 꺼낸다. 없으면 빈 칸이다.
    const rememberedLoginId = getRememberedLoginId(windowTarget, nextRole);
    setLoginId(rememberedLoginId);
    setShouldRememberLoginId(Boolean(rememberedLoginId));
    setPassword("");
    setError("");
  }

  async function submit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await onLogin(role, loginId.trim(), password.trim());
      if (!result.ok) {
        setError(result.message);
        return;
      }
      // 성공한 아이디만 기억한다. 오타를 기억해 두면 다음 로그인이 더 번거로워진다.
      saveRememberedLoginId(windowTarget, role, shouldRememberLoginId ? loginId.trim() : "");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="loginPage">
      <form className="loginCard" onSubmit={submit}>
        <p className="loginEyebrow">{academyBrandName}</p>
        <h1>로그인</h1>
        <WorkspaceTabs label="로그인 유형 선택" variant="primary">
          {["student", "parent", "teacher"].map((item) => (
            <button
              className={role === item ? "active" : ""}
              key={item}
              onClick={() => selectRole(item)}
              type="button"
            >
              {roleLabels[item]}
            </button>
          ))}
        </WorkspaceTabs>
        <p className="muted" id={loginHelpId}>
          {role === "student" ? "학생 본인 계정으로 입장합니다." : null}
          {role === "parent" ? "학부모 열람 계정으로 입장합니다." : null}
          {role === "teacher" ? "강사 운영 화면으로 입장합니다." : null}
        </p>
        <input
          aria-describedby={error ? `${loginHelpId} ${loginErrorId}` : loginHelpId}
          aria-invalid={Boolean(error) || undefined}
          aria-label={`${roleLabels[role]} 아이디`}
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
          placeholder="아이디"
        />
        <input
          aria-describedby={error ? `${loginHelpId} ${loginErrorId}` : loginHelpId}
          aria-invalid={Boolean(error) || undefined}
          aria-label={`${roleLabels[role]} 비밀번호`}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호"
        />
        <label className="loginRememberRow" htmlFor={rememberLoginIdId}>
          <input
            checked={shouldRememberLoginId}
            id={rememberLoginIdId}
            onChange={(event) => setShouldRememberLoginId(event.target.checked)}
            type="checkbox"
          />
          <span>아이디 저장</span>
          <small>비밀번호는 저장하지 않습니다.</small>
        </label>
        {error ? <div className="loginError" id={loginErrorId} role="alert">{error}</div> : null}
        <button className="primaryButton full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "확인 중" : `${roleLabels[role]} 로그인`}
        </button>
      </form>
    </main>
  );
}
