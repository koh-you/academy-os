---
name: reference-go1-haghpyeong-pdf
description: 고1 전국연합학력평가 수학 2020~2026 PDF 52개 위치·다운로드 패턴.
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2bf8fa29-771c-4444-80bc-6c32c7573261
---

# 고1 학평 수학 PDF 자료 (2020~2026)

**위치**: `참고자료/고1 모의고사 기출 모음/`
**INDEX**: `참고자료/고1 모의고사 기출 모음/INDEX.md`
**수집일**: 2026-06-28
**총량**: 52 PDF / 28 MB

## 폴더 구조
```
참고자료/고1 모의고사 기출 모음/
├── INDEX.md
├── 2020/  (8 PDF: 3·6·9·11월 × 문제·해설)
├── 2021/  (8 PDF)
├── 2022/  (8 PDF)
├── 2023/  (8 PDF)
├── 2024/  (8 PDF: 3·6·9·10월)
├── 2025/  (8 PDF: 3·6·9·10월)
└── 2026/  (4 PDF: 3·6월, 진행 중)
```

## 출처
- **호랭이닷컴** (horaeng.com) 재배포
- 원본: 서울·부산·인천·경기 등 시도교육청

## 다운로드 패턴 (재사용 가능)
- PowerShell `Invoke-WebRequest`
- 헤더: `User-Agent: Mozilla/5.0... AppleWebKit/537.36` + `Referer: https://horaeng.com/`
- UTF-8 한글 URL 자동 인코딩 (Bash curl은 인코딩 한계, PowerShell 권장)
- 핫링크 차단 회피 위해 Referer 헤더 필수

## 활용
- 본 시스템 ★ 4·5 슬롯 출제 시 변별 정점 패턴 분석
- 회차 간 출제 경향·통찰 카드 변화 추적
- 단원별 학평 빈도 통계
- 마더텅 미니모의고사 자료와 교차 분석

## 관련
- [[project_rpm_madotung_status]] — 다음 세션 작업 큐
- `참고자료/2026_마더텅_전국연합_학력평가_기출_20분_미니모의고사_24회_고1_공통수학1/` — 마더텅 24회 통합 PDF
