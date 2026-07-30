import { useState } from "react";

export function RoleLoginScreen({
  academyBrandName,
  initialRole = "student",
  onLogin
}) {
  const [role, setRole] = useState(initialRole);
  const [loginId, setLoginId] = useState("");
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

  function selectRole(nextRole) {
    setRole(nextRole);
    setLoginId("");
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
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="loginPage">
      <form className="loginCard" onSubmit={submit}>
        <p className="loginEyebrow">{academyBrandName}</p>
        <h1>로그인</h1>
        <div className="loginTabs">
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
        </div>
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
        {error ? <div className="loginError" id={loginErrorId} role="alert">{error}</div> : null}
        <button className="primaryButton full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "확인 중" : `${roleLabels[role]} 로그인`}
        </button>
      </form>
    </main>
  );
}
