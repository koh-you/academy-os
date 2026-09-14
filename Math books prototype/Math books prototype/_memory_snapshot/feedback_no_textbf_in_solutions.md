---
name: feedback-no-textbf-in-solutions
description: 답지·해설지 전체에서 \textbf 굵은 글씨 사용 금지 (2026-06-28 마스터 영구 정책). 풀이는 일반 굵기로 통일.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 671260ff-03e2-415a-8105-3e2793ab188a
---

# 답지 \textbf 굵은 글씨 사용 금지 (영구 정책)

마스터 명시 (2026-06-28, 7회차 답지 작업 중): "전체 풀이에서 두꺼운 글씨 없게"

## 🔴 금지

- `\textbf{...}` — 일체 사용 금지
- `\bfseries` — 풀이 본문에서 사용 금지
- 강조용 굵은 글씨 사용 자제

## ✅ 허용 (적용 외)

- 매크로 내부 굵기 (`\soltitle`·`\step`·`answerbox` 등 디자인 매크로 안의 굵기)
- 헤더/표지/배너 굵기
- `\sffamily\bfseries` 디자인 요소 안의 굵기
- 결론·답 표시 강조 (예: $\textbf{②}$ 같은 정답 번호 강조도 일반화 권장)

## How to apply

- 신규 답지·해설지 작성 시 `\textbf{...}` 사용 자제
- 강조가 필요한 경우 색상(`\color{vB-accent}`)이나 박스(`\fbox`) 사용
- 케이스 라벨 `(i)`, `(ii)` 등도 일반 굵기
- 결론 키워드 ("만족"/"불만족"/"참"/"거짓" 등) 일반 굵기

## 자동 정정

기존 `.tex` 파일에서 일괄 제거:
```powershell
$path = "FILE.tex"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$new = [System.Text.RegularExpressions.Regex]::Replace($content, '\\textbf\{([^}]*)\}', '$1')
[System.IO.File]::WriteAllText($path, $new, (New-Object System.Text.UTF8Encoding $False))
```

sed/perl은 한국어 인코딩 처리에 실패 — PowerShell .NET 정규식 권장.

## 본 세션 적용 결과 (7회차 답지)

총 21건 제거:
- 케이스 라벨: `\textbf{(i)}`·`\textbf{(ii)}`·`\textbf{(iii)}`·`\textbf{(iv)}` × 4건
- 결론 키워드: `\textbf{참}`·`\textbf{거짓}`·`\textbf{만족시킨다}`·`\textbf{만족시키지 않는다}` 등
- ㄱ/ㄴ/ㄷ 라벨: `\textbf{ㄱ.}`·`\textbf{ㄴ.}`·`\textbf{ㄷ.}`
- 부정 결론: `\textbf{아니다}`·`\textbf{않는다}`

## 관련 메모리

- [[feedback_graph_design_style]] — 그래프 디자인 양식
- [[project_7회차_session_handoff]] — 본 세션 작업 위치
- [[feedback_natural_korean_wording]] — 자연스러운 한국어 어법
