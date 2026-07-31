import { Component } from "react";
import { reportClientError } from "./clientErrorReporter.js";

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { report: null };
  }

  static getDerivedStateFromError() {
    return { report: { errorId: "기록 중", message: "화면 렌더링 중 오류가 발생했습니다." } };
  }

  componentDidCatch(error, info) {
    const report = reportClientError(error, {
      componentStack: info?.componentStack,
      kind: "react_render_error",
      source: "AppErrorBoundary"
    });
    this.setState({ report });
  }

  render() {
    if (!this.state.report) return this.props.children;
    return (
      <main style={{ fontFamily: "system-ui, sans-serif", margin: "48px auto", maxWidth: 680, padding: 24 }}>
        <h1>Academy OS 화면 오류가 기록되었습니다.</h1>
        <p>빈 화면 대신 오류 번호를 남겼습니다. 새로고침 후 같은 동작을 반복하지 말고 이 번호를 AI에게 알려주세요.</p>
        <p><strong>오류 번호:</strong> {this.state.report.errorId}</p>
        <p style={{ color: "#7f1d1d", overflowWrap: "anywhere" }}>{this.state.report.message}</p>
        <button onClick={() => window.location.reload()} type="button">안전하게 새로고침</button>
      </main>
    );
  }
}
