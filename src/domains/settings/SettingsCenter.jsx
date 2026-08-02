
import { useEffect, useState } from "react";
import { academyBrandName } from "../../app/appConfig.js";
import { defaultAttendanceSettings } from "../lessons/attendanceSettings.js";
import { getNotificationJobLabel } from "../notifications/notificationCenterConfig.js";
import { AutosaveRiskNotice } from "../../shared/components/AutosaveRiskNotice.jsx";
import { InlineSaveStatus } from "../../shared/components/InlineSaveStatus.jsx";
import { MetricCard } from "../../shared/components/MetricCard.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";

const aiProviderModels = {
  anthropic: ["claude-opus-4-8", "claude-sonnet-4-5", "claude-3-5-sonnet-latest", "claude-3-5-haiku-latest"],
  mock: ["local-mock"],
  auto: ["server-default"],
  openai: ["gpt-5.5", "gpt-4.1-mini", "gpt-4.1", "gpt-4o-mini"]
};

function getAiModelLabel(model) {
  if (model === "server-default") return "서버 기본값";
  if (model === "local-mock") return "테스트 응답";
  return model;
}

function getAiProviderLabel(provider) {
  if (provider === "openai") return "OpenAI";
  if (provider === "anthropic") return "Claude";
  if (provider === "mock") return "테스트 모드";
  return "자동 선택";
}

function StatusDot({ active }) {
  return <span className={active ? "statusDot active" : "statusDot inactive"} />;
}

function NotificationSettingsSection({ integrationStatus, runtime }) {
  const { buildNotificationTemplatePreview, getKoreaDateString, postJson } = runtime;
  const [testSendResult, setTestSendResult] = useState("");
  const [testSendDetail, setTestSendDetail] = useState(null);
  const [testingTemplate, setTestingTemplate] = useState("");
  const notificationStatus = integrationStatus?.notifications;

  async function handleTemplateTest(testType) {
    setTestingTemplate(testType);
    setTestSendResult("");
    setTestSendDetail(null);
    const todayKey = getKoreaDateString(new Date());
    const basePayload = {
      academyName: academyBrandName,
      assignmentStatus: "complete_thorough",
      attendanceStatus: testType === "attendance" ? "late" : "present",
      checkedAt: testType === "attendance" ? "태블릿/수기 출결 테스트" : "19:00",
      forceDryRun: false,
      forceTestRecipient: true,
      lessonContent: "개별 진도 점검",
      lessonDate: todayKey,
      lessonMaterial: "공통수학1",
      lessonName: testType === "attendance"
        ? "출결 테스트 수업"
        : testType === "specialLecture"
          ? "2026 여름 개별 진도 클리닉"
          : "월수금 7-10반",
      lateMinutes: testType === "attendance" ? 5 : "",
      message: "오늘 수업에서 확인한 내용을 바탕으로 다음 과제를 안내드립니다.",
      nextHomework: "쎈 - 경우의 수",
      noticeKind: testType === "specialLecture" ? "special_lecture" : "general",
      noticeTitle: testType === "specialLecture" ? "2026 여름 개별 진도 클리닉" : "",
      parentPhone: notificationStatus?.testRecipient,
      previousHomework: "rpm 순열과 조합",
      reason: testType === "attendance" ? "태블릿/수기 출결 연결 점검" : "",
      specialLectureAudience: testType === "specialLecture" ? "예비고1, 예비고2" : "",
      specialLectureDays: testType === "specialLecture" ? "월·수·금" : "",
      specialLectureTime: testType === "specialLecture" ? "13:00-16:00" : "",
      specialLectureTitle: testType === "specialLecture" ? "2026 여름 개별 진도 클리닉" : "",
      specialLectureUrl: testType === "specialLecture" ? "https://academy-os-blue.vercel.app/special-lecture?guide=2026-summer-high1-clinic-mwf" : "",
      studentName: "테스트학생",
      studentPhone: notificationStatus?.testRecipient,
      target: testType === "student" ? "student" : "parent"
    };
    const endpoint =
      testType === "attendance"
        ? "/api/notifications/attendance-alimtalk"
        : "/api/notifications/comment-alimtalk";
    try {
      const result = await postJson(endpoint, basePayload);
      const modeText = result.result?.dryRun ? "테스트 기록 완료 · 실제 발송 없음" : "테스트 번호로 발송 요청 완료";
      const resultLabelType = testType === "attendance"
        ? "attendance"
        : testType === "student"
          ? "student_comment"
          : testType === "specialLecture"
            ? "notice_parent"
            : "parent_comment";
      setTestSendResult(`${getNotificationJobLabel(resultLabelType)}: ${modeText}`);
      setTestSendDetail({
        label: getNotificationJobLabel(resultLabelType),
        dryRun: Boolean(result.result?.dryRun),
        requestedTo: result.result?.requestedTo || "-",
        sentTo: result.result?.sentTo || "-",
        templateEnvName: result.result?.templateEnvName || "-",
        variables: result.result?.variables ?? {}
      });
    } catch (error) {
      setTestSendResult(`테스트 실패: ${error.message}`);
      setTestSendDetail(null);
    } finally {
      setTestingTemplate("");
    }
  }

  return (
    <section className="panel settingsCard">
      <div className="sectionTitle">
        <div>
          <h2>알림톡 설정</h2>
          <p>솔라피 연결, 실제번호 잠금, 템플릿 테스트를 확인합니다.</p>
        </div>
        <span className={notificationStatus?.missing?.length ? "statusPill status-failed" : "statusPill status-sent"}>
          {notificationStatus?.missing?.length ? "확인 필요" : "준비됨"}
        </span>
      </div>
      <div className="integrationStatusGrid">
        <article>
          <strong>솔라피 기본</strong>
          <span><StatusDot active={notificationStatus?.solapiConfigured} /> API/PFID 설정</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.attendance} /> 출결 알림톡 템플릿</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.dailyReport} /> 학부모 알림톡 템플릿</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.specialLectureNotice} /> 특강 안내 템플릿</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.studentComment} /> 학생 알림톡 템플릿</span>
        </article>
        <article>
          <strong>발송 안전장치</strong>
          <span><StatusDot active={notificationStatus?.dryRun} /> 테스트 보호 {notificationStatus?.dryRun ? "ON" : "OFF"}</span>
          <span><StatusDot active={notificationStatus?.liveTestSendEnabled} /> 테스트 실발송 {notificationStatus?.liveTestSendEnabled ? "ON" : "OFF"}</span>
          <span><StatusDot active={!notificationStatus?.allowRealStudentRecipients} /> 학생 실제번호 잠금 {notificationStatus?.allowRealStudentRecipients ? "OFF" : "ON"}</span>
          <span><StatusDot active={!notificationStatus?.allowRealParentRecipients} /> 학부모 실제번호 잠금 {notificationStatus?.allowRealParentRecipients ? "OFF" : "ON"}</span>
          <span>테스트 수신번호: {notificationStatus?.testRecipient || "미설정"}</span>
        </article>
        <article>
          <strong>Slack 일정</strong>
          <span><StatusDot active={notificationStatus?.slackConfigured} /> 즉시 Webhook</span>
          <span><StatusDot active={notificationStatus?.slackSchedulingConfigured} /> 예약 Bot API</span>
          <span>{notificationStatus?.slackSchedulingConfigured ? "Slack 서버 예약 사용 가능" : "Bot Token·채널 ID 설정 필요"}</span>
        </article>
        <article>
          <strong>AI API</strong>
          <span><StatusDot active={integrationStatus?.ai?.providers?.openai} /> OpenAI</span>
          <span><StatusDot active={integrationStatus?.ai?.providers?.anthropic} /> Claude</span>
          <span>기본값: {integrationStatus?.ai?.defaultProvider || "미설정"}</span>
        </article>
      </div>
      {notificationStatus?.missing?.length ? (
        <p className="inlineNotice danger">미입력 환경변수: {notificationStatus.missing.join(", ")}</p>
      ) : null}
      <div className="templateTestGrid settingsTemplateTestGrid">
        {[
          ["attendance", "출결 알림톡", "선생님 테스트 수신번호로 출결 알림톡 형식을 점검합니다."],
          ["parent", "학부모 알림톡", "출결, 과제 상태, 강의 내용, 코멘트 구조를 점검합니다."],
          ["specialLecture", "특강 안내 알림톡", "카카오 재검수용 특강 템플릿 문구와 변수를 점검합니다."],
          ["student", "학생 알림톡", "학생에게 보낼 안내문과 다음 과제 문구를 점검합니다."]
        ].map(([id, title, description]) => (
          <article key={id}>
            <strong>{title}</strong>
            <p>{description}</p>
            <pre className="templatePreviewText">{buildNotificationTemplatePreview(id)}</pre>
            <button className="softButton" disabled={testingTemplate === id} onClick={() => handleTemplateTest(id)} type="button">
              {testingTemplate === id ? "테스트 중" : `${title.replace(" 알림톡", "")} 테스트`}
            </button>
          </article>
        ))}
      </div>
      {testSendResult ? <p className="inlineNotice">{testSendResult}</p> : null}
      {testSendDetail ? (
        <div className="templateResultCard">
          <div className="templateResultMeta">
            <span>{testSendDetail.label}</span>
            <span>{testSendDetail.dryRun ? "DRY RUN" : "SEND REQUESTED"}</span>
            <span>수신: {testSendDetail.sentTo}</span>
            <span>요청번호: {testSendDetail.requestedTo}</span>
            <span>템플릿: {testSendDetail.templateEnvName}</span>
          </div>
          <pre className="templatePreviewText">
            {Object.entries(testSendDetail.variables)
              .map(([key, value]) => `${key}\n${value}`)
              .join("\n\n")}
          </pre>
        </div>
      ) : null}
    </section>
  );
}

export function SettingsCenter({
  runtime,
  aiSettings,
  appStateSaveState = "idle",
  attendanceSettings = defaultAttendanceSettings,
  integrationStatus,
  onUpdateAiSettings,
  onUpdateAttendanceSettings,
  teacherAccountSettings = runtime.defaultTeacherAccountSettings,
  onUpdateTeacherAccountSettings
}) {
  const {
    appStateAutosaveRisk,
    defaultAiPrompts,
    defaultAiSettings,
    defaultNotificationTemplates,
    defaultTeacherAccountSettings,
    normalizeAiPrompts,
    normalizeAiSettings,
    normalizeNotificationTemplates,
    notificationTemplateRows,
    postJson
  } = runtime;
  const [activeSettingsSection, setActiveSettingsSection] = useState("account");
  const [activePromptKey, setActivePromptKey] = useState("commentPolish");
  const account = { ...defaultTeacherAccountSettings, ...teacherAccountSettings };
  const [accountForm, setAccountForm] = useState({
    confirmPassword: "",
    currentPassword: "",
    loginId: account.loginId,
    newPassword: ""
  });
  const [accountMessage, setAccountMessage] = useState("");
  const settings = normalizeAiSettings(aiSettings);
  const attendance = { ...defaultAttendanceSettings, ...attendanceSettings };
  const attendanceUrl =
    typeof window === "undefined"
      ? "/attendance"
      : `${window.location.origin}/attendance`;
  const aiRows = [
    {
      description: "강사코멘트, 학생 알림문구, 학부모 알림톡 문장을 다듬습니다.",
      modelKey: "commentModel",
      providerKey: "commentProvider",
      title: "코멘트 AI"
    },
  ];
  const promptRows = [
    {
      appendedData: "학생/학부모 대상, 수업일, 출결, 과제 상태, 강의 교재/내용, 강사 원문",
      callSite: "수업일지 학생별 코멘트의 AI 수정 버튼",
      description: "학부모/학생 알림톡 코멘트를 다듬을 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "commentPolish",
      serverPrompt: "buildCommentPrompt",
      title: "코멘트 AI"
    },
    {
      appendedData: "시험관리 행의 학교, 학년, 과목, 시험일, 원문 총평",
      callSite: "시험관리 시험 후 총평 모달의 AI 수정 버튼",
      description: "시험관리의 시험 후 총평 모달에서 맞춤법과 띄어쓰기만 고칠 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "examReviewSpelling",
      mode: "polishMode: spellingOnly",
      serverPrompt: "buildCommentPrompt",
      title: "시험 후 총평 맞춤법 AI"
    },
    {
      appendedData: "공지 제목, 작성 날짜, 공지 본문",
      callSite: "알림관리 공지 작성 영역의 AI 수정 버튼",
      description: "알림관리의 교재/보강/공지 문자 초안을 다듬을 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "noticeMessage",
      serverPrompt: "buildCommentPrompt",
      title: "알림관리 공지 AI"
    },
  ];
  const activePrompt = promptRows.find((row) => row.key === activePromptKey) ?? promptRows[0];
  const normalizedPromptSettings = normalizeAiPrompts(settings.prompts);
  const settingsSections = [
    { id: "account", label: "계정" },
    { id: "notification", label: "알림톡 연결" },
    { id: "notificationTemplates", label: "알림톡 문구" },
    { id: "ai", label: "AI 모델" },
    { id: "prompts", label: "AI 프롬프트" },
    { id: "attendance", label: "출결" }
  ];

  useEffect(() => {
    setAccountForm((current) => ({
      ...current,
      loginId: account.loginId
    }));
  }, [account.loginId]);

  function updateProvider(row, provider) {
    const models = row.modelOptions?.[provider] ?? aiProviderModels[provider] ?? aiProviderModels.auto;
    const defaultModel = row.preferredModels?.[provider] && models.includes(row.preferredModels[provider])
      ? row.preferredModels[provider]
      : models[0] ?? "server-default";
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: normalizeAiPrompts(current?.prompts),
      [row.providerKey]: provider,
      [row.modelKey]: defaultModel
    }));
  }

  function updateModel(row, model) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: normalizeAiPrompts(current?.prompts),
      [row.modelKey]: model
    }));
  }

  function updatePrompt(promptKey, value) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: {
        ...normalizeAiPrompts(current?.prompts),
        [promptKey]: value
      }
    }));
  }

  function resetPrompt(promptKey) {
    updatePrompt(promptKey, defaultAiPrompts[promptKey] ?? "");
  }

  function updateNotificationTemplate(templateKey, value) {
    onUpdateAiSettings((current) => ({
      ...normalizeAiSettings(current),
      notificationTemplates: {
        ...normalizeNotificationTemplates(current?.notificationTemplates),
        [templateKey]: value
      }
    }));
  }

  function resetNotificationTemplate(templateKey) {
    updateNotificationTemplate(templateKey, defaultNotificationTemplates[templateKey] ?? "");
  }

  function updateAttendanceSetting(field, value) {
    onUpdateAttendanceSettings((current) => ({
      ...defaultAttendanceSettings,
      ...current,
      [field]: value
    }));
  }

  function updateAccountForm(field, value) {
    setAccountForm((current) => ({ ...current, [field]: value }));
    setAccountMessage("");
  }

  async function saveTeacherAccount(event) {
    event.preventDefault();
    const nextLoginId = accountForm.loginId.trim();
    const nextPassword = accountForm.newPassword.trim();
    const currentPassword = accountForm.currentPassword.trim();
    const confirmPassword = accountForm.confirmPassword.trim();

    if (!nextLoginId) {
      setAccountMessage("아이디를 입력해주세요.");
      return;
    }
    if (nextPassword && nextPassword.length < 4) {
      setAccountMessage("새 비밀번호는 4자리 이상이어야 합니다.");
      return;
    }
    if (nextPassword && nextPassword !== confirmPassword) {
      setAccountMessage("새 비밀번호 확인이 맞지 않습니다.");
      return;
    }

    try {
      const result = await postJson("/api/auth/teacher-account", {
        currentLoginId: account.loginId,
        currentPassword,
        loginId: nextLoginId,
        newPassword: nextPassword
      });
      onUpdateTeacherAccountSettings?.((current) => ({
        ...defaultTeacherAccountSettings,
        ...current,
        loginId: result.account?.loginId ?? nextLoginId,
        name: result.account?.name ?? current?.name ?? defaultTeacherAccountSettings.name
      }));
      setAccountForm({
        confirmPassword: "",
        currentPassword: "",
        loginId: result.account?.loginId ?? nextLoginId,
        newPassword: ""
      });
      setAccountMessage("서버 인증 계정이 저장되었습니다.");
    } catch (error) {
      setAccountMessage(`서버 저장 실패: ${error.message}`);
    }
  }

  return (
    <section className="settingsPage">
      <PageHeader
        actions={<InlineSaveStatus label="설정 자동저장" saveState={appStateSaveState} />}
        className="settingsHero"
        description="AI 사용 모드는 이곳에서 한 번 정해두고 각 기능에서 그대로 사용합니다."
        eyebrow="SETTINGS"
        title="설정"
      />

      <AutosaveRiskNotice className="autosaveRiskNoticeInline" {...appStateAutosaveRisk} />

      <WorkspaceTabs className="notificationSectionTabs settingsSectionTabs" label="설정 항목 선택">
        {settingsSections.map((section) => (
          <button
            aria-selected={activeSettingsSection === section.id}
            className={activeSettingsSection === section.id ? "active" : ""}
            key={section.id}
            onClick={() => setActiveSettingsSection(section.id)}
            role="tab"
            type="button"
          >
            {section.label}
          </button>
        ))}
      </WorkspaceTabs>

      {activeSettingsSection === "account" ? (
      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>계정 설정</h2>
            <p>선생님 로그인 아이디와 비밀번호를 관리합니다.</p>
          </div>
        </div>
        <form className="accountSettingsGrid" onSubmit={saveTeacherAccount}>
          <label>
            <span>아이디</span>
            <input value={accountForm.loginId} onChange={(event) => updateAccountForm("loginId", event.target.value)} />
          </label>
          <label>
            <span>현재 비밀번호</span>
            <input
              autoComplete="current-password"
              type="password"
              value={accountForm.currentPassword}
              onChange={(event) => updateAccountForm("currentPassword", event.target.value)}
            />
          </label>
          <label>
            <span>새 비밀번호</span>
            <input
              autoComplete="new-password"
              type="password"
              value={accountForm.newPassword}
              onChange={(event) => updateAccountForm("newPassword", event.target.value)}
            />
          </label>
          <label>
            <span>새 비밀번호 확인</span>
            <input
              autoComplete="new-password"
              type="password"
              value={accountForm.confirmPassword}
              onChange={(event) => updateAccountForm("confirmPassword", event.target.value)}
            />
          </label>
          <div className="accountSettingsActions">
            <button className="primaryButton" type="submit">계정 저장</button>
            {accountMessage ? <span className="muted">{accountMessage}</span> : null}
          </div>
        </form>
      </section>
      ) : null}

      {activeSettingsSection === "notification" ? (
        <NotificationSettingsSection integrationStatus={integrationStatus} runtime={runtime} />
      ) : null}

      {activeSettingsSection === "notificationTemplates" ? (
      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>알림톡 템플릿 문구</h2>
            <p>실제 발송/예약 job이 읽는 문구 원천입니다. 보충 알림톡부터 설정값을 사용합니다.</p>
          </div>
        </div>
        <div className="notificationTemplateSettingsGrid">
          {notificationTemplateRows.map((row) => (
            <div className="notificationTemplateEditor" key={row.key}>
              <div className="notificationTemplateEditorTop">
                <div>
                  <strong>{row.title}</strong>
                  <span>{row.callSite}</span>
                </div>
                <button className="softButton mini" onClick={() => resetNotificationTemplate(row.key)} type="button">
                  기본값
                </button>
              </div>
              <div className="promptMappingCard">
                <div>
                  <strong>대상</strong>
                  <span>{row.audience}</span>
                </div>
                <div>
                  <strong>저장 원천</strong>
                  <span>{row.source}</span>
                </div>
                <div>
                  <strong>사용 변수</strong>
                  <span>{row.variables}</span>
                </div>
              </div>
              <textarea
                aria-label={`${row.title} 템플릿 문구`}
                value={settings.notificationTemplates[row.key] ?? ""}
                onChange={(event) => updateNotificationTemplate(row.key, event.target.value)}
                rows="8"
              />
            </div>
          ))}
        </div>
      </section>
      ) : null}

      {activeSettingsSection === "ai" ? (
      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>AI 설정</h2>
            <p>기능별 기본 AI 제공자와 모델을 관리합니다.</p>
          </div>
        </div>
        <div className="settingsRows">
          {aiRows.map((row) => {
            const provider = settings[row.providerKey] ?? "auto";
            const models = row.modelOptions?.[provider] ?? aiProviderModels[provider] ?? aiProviderModels.auto;
            const model = models.includes(settings[row.modelKey]) ? settings[row.modelKey] : models[0];
            return (
              <div className="settingsRow" key={row.providerKey}>
                <div>
                  <strong>{row.title}</strong>
                  <span className="muted">{row.description}</span>
                </div>
                <select aria-label={`${row.title} AI 제공자`} value={provider} onChange={(event) => updateProvider(row, event.target.value)}>
                  <option value="auto">자동 선택</option>
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Claude</option>
                  <option value="mock">테스트 모드</option>
                </select>
                <select aria-label={`${row.title} AI 모델`} value={model} onChange={(event) => updateModel(row, event.target.value)}>
                  {models.map((item) => (
                    <option key={item} value={item}>{getAiModelLabel(item)}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </section>
      ) : null}

      {activeSettingsSection === "prompts" ? (
      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>AI 프롬프트</h2>
            <p>웹앱에서 AI 호출이 있는 기능의 기본 지시문을 확인하고 수정합니다.</p>
          </div>
          <button className="softButton" onClick={() => resetPrompt(activePrompt.key)} type="button">
            기본값 복원
          </button>
        </div>
        <div className="promptSettingsLayout">
          <div className="promptTabList" role="tablist" aria-label="AI 프롬프트 기능 선택">
            {promptRows.map((row) => (
              <button
                className={activePromptKey === row.key ? "active" : ""}
                key={row.key}
                onClick={() => setActivePromptKey(row.key)}
                type="button"
              >
                <strong>{row.title}</strong>
                <span>{row.description}</span>
              </button>
            ))}
          </div>
          <label className="promptEditor">
            <span>{activePrompt.title} 프롬프트</span>
            <div className="promptMappingCard">
              <div>
                <strong>설정 키</strong>
                <span>{activePrompt.key}</span>
              </div>
              <div>
                <strong>실제 호출</strong>
                <span>{activePrompt.callSite}</span>
              </div>
              <div>
                <strong>API / 서버 빌더</strong>
                <span>{activePrompt.endpoint} · {activePrompt.serverPrompt}</span>
              </div>
              <div>
                <strong>호출 시 추가 데이터</strong>
                <span>{activePrompt.appendedData}</span>
              </div>
              {activePrompt.mode ? (
                <div>
                  <strong>호출 모드</strong>
                  <span>{activePrompt.mode}</span>
                </div>
              ) : null}
            </div>
            <textarea
              value={normalizedPromptSettings[activePrompt.key] ?? ""}
              onChange={(event) => updatePrompt(activePrompt.key, event.target.value)}
              rows="14"
            />
            <small className="muted">
              위 프롬프트는 기본 지시문이고, 실제 호출 시에는 매핑된 서버 빌더가 업무 데이터와 출력 형식 지시를 함께 붙입니다.
            </small>
          </label>
        </div>
      </section>
      ) : null}

      {activeSettingsSection === "attendance" ? (
      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>출결 설정</h2>
            <p>태블릿 출결 전용 화면과 자동 지각 판정 기준을 관리합니다.</p>
          </div>
        </div>
        <div className="settingsRows">
          <div className="settingsRow">
            <div>
              <strong>태블릿 전용 화면</strong>
              <span className="muted">학생이 휴대폰 번호 뒤 4자리만 입력하는 출결 화면입니다.</span>
            </div>
            <input aria-label="태블릿 출결 화면 주소" readOnly value={attendanceUrl} />
            <a className="softButton linkButton" href={attendanceUrl} target="_blank" rel="noreferrer">
              새 창 열기
            </a>
          </div>
          <div className="settingsRow compact">
            <div>
              <strong>지각 유예시간</strong>
              <span className="muted">수업 정각 이후 이 시간까지는 등원으로 처리합니다.</span>
            </div>
            <input
              aria-label="지각 유예시간 분"
              inputMode="numeric"
              min="5"
              type="number"
              value={attendance.lateGraceMinutes}
              onChange={(event) =>
                updateAttendanceSetting("lateGraceMinutes", Math.max(5, Number(event.target.value) || 5))
              }
            />
            <span className="aiSettingBadge fieldBadge">분 단위</span>
          </div>
        </div>
      </section>
      ) : null}
    </section>
  );
}
