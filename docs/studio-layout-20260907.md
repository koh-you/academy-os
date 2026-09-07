# 시험분석·SNS 스튜디오 공통 레이아웃 · 2026-09-07

## 변경 범위

프런트엔드 표현·선택 방식만 변경한 중위험 UI 작업이다. 원본 데이터, local draft, API/DB, 저장 revision, 사람 확정값, 권한, AI 실행 경계는 기존 소유자에 유지한다. 공유 컴포넌트 StudioWorkspace는 슬롯과 단계 선택 콜백만 받으며 데이터를 저장하지 않는다.

## 기능·위치 대응

| 기존 기능/위치 | 변경 후 위치 |
| --- | --- |
| 시험분석 상단 4열 학교·학년·고사·분석 목록 | 공통 왼쪽 자료 목록: 학교·학년·고사 선택 메뉴 + 분석본 카드·삭제 버튼. 기존 필터 콜백 그대로 사용 |
| 시험분석 전체 흐름 카드 + 현재 할 일 + 7단계 | 공통 요약 + 번호가 있는 단계 탭. 모바일은 단계 선택 메뉴 |
| 원본·PDF 등록/열람, 문항 수·경계, AI 분석, 연속 문항 검수·확정 | 기존 7단계 내 각 본문. 원본 비교, 입력·실행·저장 버튼 유지 |
| 최종 미리보기의 모든 차트·주요문항·카드 제작이 세로로 연결 | 출제 비중 / 난이도·문항 흐름 / 주요문항 / 카드 제작 중 선택한 본문만 표시 |
| 최종 미리보기 설명 | 검수 위치는 항상 표시, 표시 기준은 접기·펼치기 |
| 산출물 작성·프롬프트 복사·편집·저장·다운로드 / 분석·작업 이력 | 산출물 / 기록 단계 유지 |
| SNS 콘텐츠 목록과 별도 편집 프레임 | 같은 StudioWorkspace 목록·단계·본문 프레임 |
| SNS 콘텐츠 스튜디오 이름 | 메뉴·헤더에서 SNS 스튜디오. 내부 식별자와 저장 키는 유지 |
| SNS 자료 유형·내신 기록 가져오기·동의·익명화·사실 확인 | 자료 준비 단계 유지 |
| Chat 복사 / JSON 붙여넣기·미리보기·반영 모달 | Chat 전달 / 완성본 단계 유지 |
| 블로그·인스타그램·카드 편집과 미리보기, 추천 태그·직접 편집 | 완성본의 기존 StudioEditor와 해시태그 옆 패널 유지 |
| 초안 저장·완성본 확정·이전 버전·이미지 링크·발행 기록 | 기존 저장 바와 완성본 단계 유지 |

## 조작 규칙

- 자료 목록은 두 화면 모두 같은 버튼으로 접고 연다. 준비 단계로 돌아오면 목록을 보여주고 편집 단계에서는 본문 폭을 확보한다.
- 필터를 바꾼 뒤 분석본 카드를 선택하는 기존 동작을 유지한다.
- 최종 미리보기의 차트·주요문항은 높이를 제한한 키보드 접근 가능한 영역에서 읽는다. 카드 제작은 긴 편집이므로 기존 본문을 그대로 사용한다.
- 미리보기 선택 전환은 표시만 변경한다. 카드 제작 입력·임시 메모·역할 펼침 상태를 유지한다.
- 공통 PageHeader / WorkspaceTabs / StudioWorkspace / StudioEditor / StudioDialog / StickySaveBar / Disclosure를 재사용한다. 저장 대상과 성공 판정은 도메인별 기존 계약을 유지한다.

## 검증

- check:duplication 기존 중복 현황 확인 후 구현. runtime lint, file-size ratchet, 828/828 정적 scenario, production build 및 teacher lazy chunk budget 통과.
- 관련 fixture: pipeline boundary, output draft contract, prompt studio UI, final preview model, CSS domain split, CSS hygiene 통과.
- safe browser: SNS 3개(동의·Chat·태그·모달 취소/초점 복귀·채널 편집·서버 재조회·새로고침·409·재조회 불일치)와 시험분석 2개 통과.
- 시험분석 최종 집중 검사: 필터 → 분석본 선택 → 문항 수 확정 → 검수 수정·저장 → 보기 전환 → 카드 입력 보존·저장 → 산출물 편집·저장 → 재조회·새로고침. PC 1280 / 모바일 390에서 보기 전환과 가로 넘침 확인.
- 최초 병렬 safe 서버의 Vite 캐시 rename EPERM으로 화면 로드가 실패했다. ACADEMY_SAFE_WORKER_COUNT=1, --workers=1로 환경을 격리한 재검사 통과. 제품 동작 실패로 숨기거나 assertion을 완화하지 않았다.
- 최신 이미지: 로컬 worktrees/studio-layout-evidence의 studio-exam-source-desktop.png, blog-hybrid-desktop.png, studio-final-preview-desktop.png, studio-final-preview-mobile.png. 이전 레이아웃은 studio-ui-evidence / exam-workflow-evidence 및 기존 문서에서 확인 가능.

## 제한

- 운영 PDF 업로드, 유료 AI 실행, 실제 플랫폼 게시·운영 DB 쓰기는 수행하지 않았다. 시험 원본 비교는 가상 PDF 링크 fixture다.
- 긴 카드 제작·SNS 자료 입력 자체는 긴 본문으로 남는다. 최종 미리보기의 여러 결과를 한꺼번에 이어 붙이던 구조를 제거한 것이며 전체 페이지 높이를 고정하지 않는다.
- 병합과 운영 배포는 아직 진행하지 않았다. 저장 API·DB migration 변경 없음.
