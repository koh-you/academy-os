import { Component, createElement } from "react";
import { reportClientError } from "../shared/runtime/clientErrorReporter.js";

export function TeacherViewLoadingState() {
  return createElement(
    "section",
    { "aria-live": "polite", className: "teacherViewLoadState", role: "status" },
    createElement("strong", null, "교사 화면을 불러오는 중입니다."),
    createElement("span", null, "처음 여는 화면은 필요한 코드만 안전하게 준비합니다.")
  );
}

export class TeacherViewLoadBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { report: null };
  }

  static getDerivedStateFromError() {
    return { report: { errorId: "기록 중", message: "교사 화면 코드를 불러오지 못했습니다." } };
  }

  componentDidCatch(error, info) {
    const report = reportClientError(error, {
      componentStack: info?.componentStack,
      kind: "teacher_view_load_error",
      source: `TeacherViewLoadBoundary:${this.props.activeView || "unknown"}`
    });
    this.setState({ report });
  }

  render() {
    if (!this.state.report) return this.props.children;
    return createElement(
      "section",
      { className: "teacherViewLoadState error", role: "alert" },
      createElement("strong", null, "교사 화면을 불러오지 못했습니다."),
      createElement("span", null, "입력이나 운영 데이터는 변경되지 않았습니다. 네트워크를 확인한 뒤 새로고침해 주세요."),
      createElement("small", null, `오류 번호: ${this.state.report.errorId}`),
      createElement("button", { onClick: () => window.location.reload(), type: "button" }, "안전하게 새로고침")
    );
  }
}
