<!-- 슬림화 v3 (2026-08-01 세션 107): 세션 절 축약 · 상세는 handoff 파일. -->

## ⚡⚡ 다음 세션 즉시 착수 (세션 116 · 2026-08-05 이후)

**⏭ 바로 할 일** — 🔴 **마스터가 재현-2회 PDF 를 아직 눈으로 안 봤다.** 경로를 대고 봐 달라고 청한다 —
`output/공통수학2/2026-2학기-와부고-재현-중간-2회/재현-2회-문제.pdf` (7쪽) · 같은 폴더 `재현-2회-답지.pdf` (11쪽)

**⏭ 그다음** — 재현-3회. 절차는 `bank/와부고-시험지-제작-워크플로우-v1.md` **여덟 걸음** (8번이 이번에 늘었다).
🔴 **원본 pick 은 한 사람이 열일곱을 다 고른 뒤** 변형을 나눈다 (C40). 병렬로 돌리면 또 부딪힌다.

**⏭ 아직 살아 있는 숙제** — 「서술형이면서 지문도 긴」 앵커 보강
(후보는 `앵커보강-와부고-지문형-v1.md` §4 「가」). **네 세션째 안 했다.**
🔒 다만 **판정이 실패했을 때만 보강한다** — 이번엔 판정자 셋이 다 값을 냈다.

## 🟦 세션 115 — 재현-2회를 닫았다 (2026-08-05)

**상세: [[project_2026-08-05_session115_handoff]]**

🟢 **재현-2회 완성** — 문제지 7쪽 · 답지 11쪽 · Overfull/Underfull 0 · 게이트 RED 0 · **2회 − 1회 = −0.10** (사실상 같다)
🔵 **마지막에 선택형 열둘을 실측값 순으로 다시 늘어놓았다** — 옛 11번이 3.30 인데 5.4점을 달고 열한 번째였다.
　🟢 **본문을 안 고쳤으므로 판정값이 그대로 따라온다. 다시 안 쟀다** · 🔴 값만 보고 세우면 정답이 이어진다 (C33)
🔴🔴 **통합관리 C38 ~ C43 신설 (전부 전 교재용)** —
　C38 [[feedback_choices_leak_the_gate]] **선지가 관문을 흘리면 발문이 흘린 것과 같다** ·
　C39 [[feedback_shell_not_tool_detects_overlap]] **도구 이름으로는 겹침을 못 잡는다 — 껍데기를 표로 센다** ·
　C40 [[feedback_no_parallel_source_pick]] **원본 pick 병렬 금지** (세션 114 에 이어 두 번째 사고) ·
　C41 [[feedback_solution_titles_need_review]] **답지 제목(출제의도)도 검수 대상** (마스터가 직접 잡았다) ·
　C42 [[feedback_judging_scale_drifts_between_panels]] **판정 눈금은 판마다 옮겨 앉는다 — 회차 차이만 견준다** ·
　C43 [[feedback_no_proof_type_items]] 🔒 **증명형 출제 금지**
🔒 **마스터 확정 셋** — ① **회차 분포는 목적이 아니다. 완성도가 목적이다** ② 증명형 금지
　③ **앵커는 기준점이지 문제은행이 아니다** — 판정이 실패했을 때만 보강한다
🟢 도구 `scripts/껍데기-겹침-검사.mjs` — 이 세션 결함 넷 중 **셋**을 잡는다
🔴 **도구가 판정을 망칠 뻔했다** — 맹검지 뽑는 도구가 `\choice{$\dfrac{3}{2}$}` 를 첫 닫는 괄호에서 잘랐다.
　**원문은 멀쩡했다.** 같은 병을 `choices32` 쪽만 고치고 `\choice` 쪽을 남겨 둔 자리다
🔴 **`problem-author` 에이전트가 여덟 번 다 멈췄다** (`general-purpose` 는 돈다) · 🔴 **PowerShell 여러 줄 반복문이 조용히 0건을 낸다 — `node -e` 로 확인한다**

---

## 세션 111~114 에서 살아 있는 것 (상세는 각 인수인계 파일)

**[[project_2026-08-04_session114_handoff]]** 재현-2회를 열었다 · 🔴🔴 **교육과정이 갈라진다** — 구 교육과정에서 도형의 방정식은 **1학기**다. 우리 범위와 통째로 맞는 실기출은 **2025 2학기 중간 하나뿐** (`bank/measurements/와부고-회차-범위-대조표-v1.md`) · 2022 개정으로 **17문(12+5)·선택60:서술40** · 🔴🔴 **페르소나 S9 정정** — 실세계 지문은 「핵심 DNA」가 아니다 (회차 아홉 중 넷이 0문) · 🔴🔴 **금지 목록을 내가 쓰고 내가 두 번 어겼다** — C35 · 🔴 **나누면 쏠림이 안 보인다. 「고루」를 뜻으로 적으면 샌다 — 목표 숫자를 박는다** — C36 · 🔴 `_scratch/` 는 `.gitignore:17` 이라 안 남는다 · 🟢 와부고 자산 **45**

**[[project_2026-08-04_session113_handoff]]** GitHub 연결 (`epae1980-code/math-books` 비공개 · `master`→`origin/main`) · 🔴 **새 파생물 폴더를 만들면 `.gitignore` 도 같이 본다** · 🔴 **밀기 전에 원격을 눈으로** · 🔴 **GitHub 일은 `git ls-remote` 부터** · 🔴 OneDrive 안이라 「Permission denied」 · 🔴🔴 **반말 세 번째 재지적** — [[feedback_address_form]]

**[[project_2026-08-04_session112_handoff]]** 재현-1회를 닫았다 · 🔴🔴 **마무리 게이트 넷** — [[feedback_session_closing_gate]] · 🟢 앵커 A5h (**CM2 32문**) · 🔴 **낡은 총수가 네 곳에 — 네 번째 재발** · 🔴 **없던 제약에 🔴 를 붙였다** (C10-2) · 🔴 **표보다 「이렇게 하자」가 먼저다**

**[[project_2026-08-04_session111_handoff]]** 최상단에 닿았다 (차이 **0.09**) · 🔴🔴 **최상단 서술형은 수학 깊이가 아니라 독해 부담으로 넘는다** — [[feedback_wabu_long_passage_signature]] · 🔴 **소문항이 길을 깔아 주면 쉬워진다** · 🟢 **최소 변형 > 재구성** · 🔴 **설명만 읽고 매긴 급은 믿지 마라** · 🟢 `bank/최상단-출제-구조-v1.md` — **마지막 후보를 누가 만드나** · 도구 `와부대조-맹검지-v11.mjs`·`-집계-v11.mjs`

---

🔴🔴 **작업 착수 전 [`bank/통합관리-시스템-v1.md`](../../../../OneDrive/Cluade%20Projects/Math%20books/bank/통합관리-시스템-v1.md) 정독 + `node scripts/system-check.mjs` RED 0.** 모든 지침·작업은 이 진입점을 통해서만. 조판·저작권 = **완성(적용만)** · 문항 난이도 = **미완성(작업 대상)**.

🔴🔴 **사람처럼 쓴다 — 최우선 지침** (통합관리 §0) — [[feedback_speak_like_a_person]]
🔴🔴 **지침을 받으면 먼저 나눈다 — 전 교재용은 셋뿐**(난이도 평가·출제 메커니즘·조판). 나머지는 그 학교 전용 — [[feedback_scope_split_universal_vs_school]]
🔴🔴 **마스터가 「그 말 쓰지 마」라고 하면 사전 + 검사기에 그 자리에서 올린다** (용어 사전 §규칙 4)
🔴🔴 **조판 지침이 나오면 「통합관리시스템으로 올릴까요?」를 반드시 묻는다** — 허락이 아니라 **누락 방지** — [[feedback_ask_before_registering_typography]] · 세션 끝에는 **마무리 게이트 넷** — [[feedback_session_closing_gate]]
🔴🔴 **우리 회차 범위가 실기출과 달라도 결함이 아니다 — 시험범위는 유동적** (반복 지적) — [[feedback_scope_differs_from_source_round]]
🔴 **제약을 말할 땐 `파일:줄` 아니면 「확인 안 함」** — [[feedback_cite_or_mark_unverified]]
🔴🔴 **검수 지적을 손대기 전에 아직 유효한지 확인한다** — 본문을 갈아 끼우면 지적도 낡는다. 세션 111 에 여섯 중 **넷이 무효**였다 — [[feedback_review_findings_go_stale]]
🔴 **정답표는 앵커 사다리다. 문번으로 평가 안 함** — [[feedback_ladder_is_the_answer_key]]
🔴 **앵커 수**(CM2 **32** · CM1 27) · 🔒 「견줄 대상 없으면 보강」이 원칙이다 · 바꾸려면 실험 인용 — [[feedback_anchor_count_undecided]]
　🔴 **보강하면 고칠 곳이 여섯이다** — 사다리 본문·머리글 · SSOT · 게이트 선언값 · CLAUDE.md 두 줄 · 이 줄. **게이트는 앞의 둘만 본다** (세션 112 에 네 번째 재발)

## (이전 세션 · 상세는 인수인계 파일에)

🔴 **정의된 대로만 측정한다** — [[feedback_measure_by_definition_not_conclusion]]
🔴 **긴 한국어를 셸 문자열로 넘기지 마라** (백틱이 실행된다) · **전역 치환 금지** · **경계를 어림으로 자르지 마라** (세션 108·109 연속 사고)
🔴🔴 **소문항은 「대상」을 물려주고 「논법」은 안 물려준다** — [[feedback_subitems_pass_objects_not_arguments]]
　🔴 **넘긴 뒤에도 뒤 소문항의 경우의 수가 열려 있어야 한다** · **다섯 기준**은 통합관리 C32 (넷째가 가장 자주 깨진다)
🔴 **접함 제한 해제** · **학교 기출도 학평을 그대로 싣는다**(3단 게이트) · **학교 자산 문서 잠금 유지**
🔴🔴 **정본은 앵커다 — 어떤 숫자도 정본이 아니다** — [[feedback_anchor_is_the_ruler_not_counts]]
🔴🔴 **오로지 문항으로 판단한다 — 채점기준·형식은 근거가 아니다** — [[feedback_item_only_not_scoring_policy]]
🔴 **길이는 부담이 아니다** — [[feedback_burden_axis_length_is_not_burden]] · **앵커 배제 단위는 회차** — [[feedback_anchor_scope_is_round_not_school]]
🔴 **재현성 70~75% 가 진짜 문제** · 불일치 절반이 **A4↔A5** — 「둘을 나누는 말이 사다리에 없다」. 앵커 교체로는 안 고쳐진다
**바깥 잣대 둘** — 청원여고 문항정보표 249문(학교가 매긴 난이도) · 휘문고 배점 **서수만**(10단 사다리 둘)
**자산 목록** `bank/학교기출-자산-목록-v1.md` (**288개** · 세션 114 실측) · **제작 절차** `bank/와부고-시험지-제작-워크플로우-v1.md`

**인수인계**: [[project_2026-08-05_session115_handoff]] · [[project_2026-08-04_session114_handoff]] · [[project_2026-08-03_session110_handoff]] · [[project_2026-08-02_session109_handoff]] · [[project_2026-08-02_session108_handoff]] · [[project_2026-08-01_session106_handoff]] · [[project_2026-07-31_session106_handoff]] · [[project_2026-07-29_session103_handoff]]
**📦 CFES arc 폐기 · 통상 로드 금지** — [[feedback_cfes_program_scrapped]] · 세션 96~102 및 [세션 3~100 인덱스](MEMORY-sessions-archive.md)

## 활성 영구 정책 (한 줄/항목 · 상세는 각 파일)

**와부고 재현 (세션 103~)**: [「예상」 12회차 = 연습 산출물 · 사용 금지](feedback_wabu_practice_papers_deprecated.md) · [와부고 전용 · 통합 편입 금지](feedback_wabu_persona_school_exclusive.md) · [CFES 폐기](feedback_cfes_program_scrapped.md) — 페르소나 단일출처 `bank/와부고-출제-페르소나-v1.md` v1.1
- **시리즈 확정 (세션 105)**: 시험지형 교재명 = **`SIMULATOR [와부]`** + 회차 `NO.N` · 디자인 단일출처 `templates/SIMULATOR-와부-디자인-v1.md` — 🔴 딥매쓰 A형 골든 복사 시 폐기된 `Formative Assessment` 로 시작한다
- [🔴 「충분조건」 — 참이지만 그렇게 출제 안 함](feedback_sufficient_condition_exclusive.md) — **필요충분 ⟹ 충분은 참**(종전 「거짓」 기록은 무효). 포함 관계를 함…
- [🔴🔴 충실도 만점 = 복제 신호](feedback_fidelity_rubric_rewards_copying.md) — 루브릭 D1~D9 는 "실기출과 닮은 정도"만 재므로 복제에 정의상 만점. 재현-1회 17문 중 15문이 실기출 대응·2문은 발문 문장 동일. 독립성 차…
- [🔴🔴 SSOT 배선 누락 = 미시행](feedback_ssot_routing_gap.md) — 규칙·도구가 실재해도 SSOT가 안 가리키면 시행되지 않는다 · [배선 전에 규칙이 최신인지 확인](feedback_wrong_rule_propagation.md) — 배선은 **틀린 규칙도 증폭**한다
- [🔴 시중교재 미사용 ≠ 참신](feedback_unused_phrasing_not_novel.md) — 조잡하거나 **풀이법을 노출해서** 안 쓰는 표현도 있다. 발문에 방법 지시 금지
- [🔴🔴 측정 축 = 재현성 + 변별력 2중 기준](feedback_axis_validation_dual_criteria.md) — 재현성만 보면 **상수가 통과**한다(축 F 16슬롯·SE4 v1.1 전례). 축 정의가 갈리면 후보를 **병렬 측정해 데이터로** 고른다
- [🔴🔴 ★ 1·2 = 구분 불필요 영역](feedback_lower_band_no_discrimination.md) — 하단 통합·앵커로만 · 척도 정밀도는 ★ 3~5 에 집중 · 층화 균등배분 금지(하단 6·L3 10·L4 12·L5 12) · 하단 공백에 🔴 금지
- **D1 정량 기준 (세션 105 확정)**: 1차 봉우리 = $\min(\text{comp}_{10,11,12}) > \max(\text{comp}_{1..9})$ — 단독 스파이크 불가 · 중간 구간 강화 시 봉우리 하한 상승. `bank/와부고-충실도-루브릭-v1.md` D1 §정량 기준

### 그림·삽화
- [라벨 배치 4대 규약+G9](feedback_label_placement.md) · [그림 프레임워크 v2](feedback_figure_inclusion_framework_v2.md) · [Layer 3](feedback_figure_layer3_quality.md) · [Layer 4](feedback_figure_layer4_learning.md) · [디자인 10대](feedback_figure_design_system.md)
- [축 프레임 채움](feedback_figure_frame_screen_fill.md) · [원문 준수](feedback_figure_source_original_only.md) · [점 크기](feedback_figure_point_size_rule.md) · [🔴 실효 렌더링](feedback_figure_effective_rendering.md) · [🔴 답지 그래프 4결함](feedback_answer_graph_quality_v1.md)
- [🔴 실측 > 정적 추정 · advisory 강등](feedback_measured_beats_estimated.md) — 도구 상충 시 픽셀 실측이 정본
- [🔴 PDF 라벨 겹침 v2.0](feedback_pdf_label_overlap_check.md) · [🔴🔴 그 도구의 「축·곡선」 이름표와 권고 방향은 믿지 마라 — 겹침 px 만 믿는다](feedback_label_overlap_tool_misclassifies_arcs.md)
- [🔴🔴 굳이 모든 문제에 그림이 있을 필요는 없다](feedback_figure_not_required_everywhere.md) — 「그림 없음」은 결함이 아니다 · 결함은 「필요한데 없다」·「있는데 답을 흘린다」
- [🔴🔴 게이트의 skip 이 결함과 같은 모양이면 침묵한다](feedback_gate_skip_hides_the_defect.md) — 직선 프레임 채움이 그랬다 · 🔴 **`figure-check.mjs` 의 「Check B 프레임 채움」 숫자는 뜻이 없다. 쓰지 마라** (`\draw` 를 안 본다) · [🔴 와부고 그래프 5원칙](feedback_wabuko_graph_standard.md) · [페이지 배치 유연](feedback_page_layout_flexible_rule.md) · [삽화 iteration](feedback_illustration_iteration_protocol.md) · [답 노출 4축](feedback_figure_answer_leakage_axis.md)
- [도해 5-step](feedback_figure_authoring_protocol.md) · [좌표평면 대응](feedback_multilayer_situation_visualization.md) · [Gate45 v3.9 3축](feedback_gate45_v39_figure_axes.md) · [Asymptote 캐시](feedback_asymptote_cache_verify.md) · [🔴 라벨 최소 이동](feedback_figure_label_minimal_movement.md)
- [layout-auto-decider v2.0](feedback_layout_auto_decider.md) · [probpair 자동 분배](feedback_probpair_system.md) · [균등분배 공식](feedback_probpair_balance_algorithm.md) · [split vspace 고정](feedback_probpair_split_fixed_vspace.md) · [golden-layout-registry](feedback_golden_layout_registry.md)

### 출제·검수
- 🔴🔴 **세션 115 신설 (C38~C43 · 전 교재용)** — [선지가 관문을 흘린다](feedback_choices_leak_the_gate.md) · [껍데기로 겹침을 센다](feedback_shell_not_tool_detects_overlap.md) · [원본 pick 병렬 금지](feedback_no_parallel_source_pick.md) · [답지 제목도 검수 대상](feedback_solution_titles_need_review.md) · [판정 눈금은 판마다 옮겨 앉는다](feedback_judging_scale_drifts_between_panels.md) · [🔒 증명형 출제 금지](feedback_no_proof_type_items.md)
- [problem-author](feedback_problem_author_agent.md) · [방안 F 원본 출제 v1.7](feedback_source_based_authoring_v17.md) · [진화 로드맵](feedback_evolution_roadmap.md) · [blueprint-score-validator](feedback_blueprint_score_validator.md) · [First Draft 5축](feedback_first_draft_completeness_5axis.md)
- [structure-signature](feedback_structure_signature_check.md) · [tool-diversity](feedback_tool_axis_system.md) · [자기복제 금지](feedback_no_self_replication.md) · [Overfull 사전 감지](feedback_overfull_prewarning.md) · [완성본 자동 검수](feedback_auto_review_completed_work.md) · [승격 게이트](feedback_review_system_promotion_gate.md)
- [워크플로우 5단계](feedback_problem_workflow.md) · [카운팅 지양](feedback_inference_over_counting.md) · [★ 4 기본 금지](feedback_star4_no_basic_level.md) · [★ 5 조건 박스](feedback_condition_box_required_star5.md) · [★ 4 v3.3](feedback_star4_strengthening_v33.md) · [v3.4 상대 배점](feedback_relative_scoring_v34.md)
- [v3.5 시그니처](feedback_signature_detection_v35.md) · [v3.6 통찰 위장](feedback_insight_axis_strengthening_v35.md) · [통찰 깊이 v3.4](feedback_insight_depth_automation.md) · [v3.9 정합](feedback_v37_student_perception_gap.md) · [v5.1 8축](feedback_difficulty_system_v4.md) · [메타 유형 분리](feedback_meta_type_separation.md) · [출제 메커니즘](feedback_exam_output_mechanism_v1.md)

### 🌟 통합 시스템 v1.0 (세션 49 · 최우선)
- [통합 문제출제 v1.0](feedback_universal_publishing_framework_v1.md) — 모든 교재 6-Layer · [concept-author v1.0](feedback_concept_author_agent.md) — 정리편·유형편·연습편 · [Gate 5.0 시리즈 무관](feedback_gate_5_0_series_agnostic.md)

### Master Policy Registry
- [정책 등재 시스템](feedback_master_policy_registry.md) · [star-5-only](feedback_star_5_only.md) · [no-textbook-recap](feedback_no_textbook_recap.md) · [slot-size-uniform](feedback_policy_slot_size_uniform.md) · [수학만으로 정점](feedback_pure_math_peak_reachable.md) · [지문형 다중 제약](feedback_narrative_multi_constraint.md)
- [🔴 시스템 구축 최우선](feedback_system_first_priority.md) · [🔴 디자인 smoke-test 우선](feedback_design_smoke_test_first.md) · [🔴 순수 장식 금지](feedback_design_avoid_amateur_ornaments.md) · [🔴 증명 예제 지양](feedback_proof_example_avoidance.md) · [🔴🔴 태스크 전 정독 게이트](feedback_pre_task_policy_gate.md)

### 답지
- [통찰카드 폐기·CP만](feedback_no_insight_card.md) · [CP 서술](feedback_critical_point_style.md) · [🔴 CP 1개 v1.0](feedback_solution_cp_count.md) · [🔴 display skip 14pt](feedback_answer_display_skip_v812.md) · [단일 multicols](feedback_answer_sheet_single_multicols.md) · [v3.7.3 defaults](feedback_answer_sheet_style_defaults.md) · [v3.0 골든](feedback_answer_sheet_golden_v3.md)
- [🔴 표준 DM 시리즈](feedback_answer_sheet_dm_series_standard.md) · [서술 5원칙](feedback_solution_writing_principles.md) · [작성 자산 6종](reference_solution_authoring_assets.md) · [그래프 학평 양식](feedback_graph_design_style.md) · [\textbf 금지](feedback_no_textbf_in_solutions.md) · [금지 표현](feedback_forbidden_solution_terms.md) · [formal 어구 금지](feedback_no_formal_soltitle_terms.md)
- [직접 표현 의무](feedback_solution_uses_direct_terms.md) · [그래프 고쟁이 우선](feedback_solution_format_priority.md) · [\solnote 표준](feedback_solnote_quality_failure.md) · [최종 값만](feedback_answer_display_final_value_only.md) · [\soltitle 밑줄](feedback_soltitle_underline_standard.md) · [정답 박스 v2](feedback_answerbox_golden_marker.md) · [분할선 v6](feedback_answer_divider_layout.md) · [독립풀이 quickgrid 금지](feedback_independent_solve_no_quickgrid.md) · [단계 라벨 폐지](feedback_step_label_deprecated.md)

### 시험지
- [통합 디자인](feedback_unified_exam_design_system.md) · [v3.1 골든](feedback_exam_design_v3.md) · [기본 양식 v2.1](feedback_exam_paper_template_v2.md) · [pagepair 임계값](feedback_layout_gather_pagepair_threshold.md) · [번호 세로 우선](feedback_problem_vertical_order.md) · [자동 차단 4종](feedback_exam_auto_check_tools.md) · [시험범위 명시](feedback_exam_scope_required.md)
- [난이도 오름차순](feedback_exam_difficulty_ascending_order.md) · [별점 노출 금지](feedback_no_star_in_student_materials.md) · [코드명 노출 금지](feedback_no_code_version_label.md) · [100점 만점](feedback_100_point_policy.md) · [워크플로우 8단계](feedback_exam_paper_workflow.md) · [와부고 증명형 허용](feedback_wabu_proof_descriptive_allowed.md)
- [🔴🔴 조판 통합 표준](feedback_typography_universal_deep_math_standard.md) · [🔴 조판 규칙 v4](feedback_typography_rules_v4.md) · [학평 배지 변형 표기](feedback_kichul_badge_variant_label.md) · [🔴 배지는 장식이다 — 학평은 안 달아도 됨](feedback_kichul_badge_is_decoration.md)

### 교과 용어·표기 (CM1·CM2)
- [CM1 교과과정 단일출처](feedback_cm1_curriculum_single_source.md) · [집합·구간 금지](feedback_cm1_no_set_interval.md) · [미적분Ⅱ 용어 금지](feedback_no_calc2_terms_cm2.md) · ["원 방정식" 금지](feedback_no_original_equation_wording.md) · ["여사건" 금지](feedback_no_complement_event_term.md) · [4차 완전제곱 금지](feedback_no_quartic_perfect_square.md)
- [$\binom$ 폐기](feedback_no_binom_symbol.md) · [회전행렬 폐기](feedback_no_rotation_terms.md) · [3원 순서쌍 금지](feedback_no_triple_tuple.md) · [학생 구별 CB](feedback_student_distinguishability.md) · ["정확히 N개" 금지](feedback_no_exactly_n.md) · [우회 표현 v3.1](feedback_indirect_phrasing.md) · [케해 메인 금지](feedback_cayley_hamilton_main_solution_prohibited.md)
- [🔴 신발끈 메인 금지](feedback_shoelace_main_forbidden.md) · [외국 수학자 이름 금지](feedback_no_foreign_named_formula.md) · [압축 신조어 금지](feedback_no_compressed_terms.md) · [\step 뒤 텍스트 금지](feedback_step_display_then_text_forbidden.md) · [행렬 친숙도 폐기](feedback_mx_familiarity_deprecated.md) · [★ 띄어쓰기](feedback_star_spacing.md) · [용어 검수 전 영역](feedback_term_check_all_zones.md)
- [🔴 "조각함수" 금지](feedback_no_piecewise_function_term.md) · [🔴 이중근호 금지](feedback_no_nested_radical.md) · [🔴 A/B형 변형 정책](feedback_variant_policy_ab_form.md) · [🔴 인접 수식 공백](feedback_math_expression_spacing.md)

### 자료 관리·자산화
- **🔴🔴 난이도 앵커 시스템** — [통합관리·SSOT 착수 게이트](feedback_anchor_system_ssot.md) · [제약은 `파일:줄` 아니면 「확인 안 함」](feedback_cite_or_mark_unverified.md) · [사다리가 정답표](feedback_ladder_is_the_answer_key.md) · [앵커 수 동결·실험 인용](feedback_anchor_count_undecided.md) · [앵커 선정 4규칙+3단 게이트](feedback_anchor_selection_rules.md) · [앵커 자격=서수(정정: 밴드 라벨 앵커는 시판 가능)](feedback_anchor_source_requires_ordinal.md)
- **🔴🔴 재는 것 네 가지 (세션 108)** — [네 값을 따로 매긴다·눈금 1.0~6.0](feedback_four_values_not_one_choice.md) · [얽힘=연결된 개수 세기](feedback_entanglement_is_counting.md) · [🔴🔴 정의된 대로만 측정한다](feedback_measure_by_definition_not_conclusion.md) · [앵커 넣기 전 맹검지와 대조](feedback_check_anchor_against_blind_sheet.md) · [정본은 앵커다](feedback_anchor_is_the_ruler_not_counts.md) · [오로지 문항으로](feedback_item_only_not_scoring_policy.md) · [길이는 부담이 아니다](feedback_burden_axis_length_is_not_burden.md) · [배제 단위는 회차](feedback_anchor_scope_is_round_not_school.md)
- [🔴🔴 저작권 누출은 이름 규칙으로 못 막는다 — 눈으로 연다](feedback_copyright_leak_needs_eyes_not_patterns.md) — 시판 스캔 65개가 GitHub 에 올라가 있었다 (세션 116) · 밖으로 내보내기 전 `git ls-files | grep -E '\.(png|jpe?g)$'` 를 **연다**
- [자체 자산 풀 제외](feedback_no_self_asset_pool.md) · [3월 학평=전년](feedback_march_test_year_one.md) · [중복 취소·전수](feedback_no_duplicate_asset.md) · [시판 자산화 v5](feedback_book_corpus_policy.md) · [답지 함께 학습](feedback_answer_key_learning.md) · [그래프 학습](feedback_graph_extraction_study.md)
- [PDF 자산화](feedback_pdf_extraction_workflow.md) · [전수 분석 의무](feedback_full_corpus_analysis_required.md) · [외부 자료 평가](feedback_external_source_evaluation.md) · [100% 정독](feedback_no_sufficient_claim.md) · [카탈로그 표본 권한](feedback_catalog_sample_policy.md) · [학교기출 크로스 검증](feedback_school_pool_cross_check.md)

### 방법론·규율 (세션 63~72)
- [🔴 수능특강 5매크로 기각](feedback_design_suneungtukgang_5macros_rejected.md) · [🔴 사후 grep 검증](feedback_script_verification_required.md) · [🔴 dmconcept 여백 v5.5](feedback_dmconcept_padding_balance.md) · [🔴 여백 ≤20mm](feedback_dmconcept_margin_policy.md) · [🔴 auto-tune v2.3](feedback_dmconcept_auto_tune_v23.md)
- [🔴 스타일 편집 8권 회귀](feedback_style_change_regression_guard.md) · [🔴 AI 실행 규율 5축](feedback_ai_execution_discipline.md) · [🔴 매크로 semantic 보존](feedback_macro_migration_semantic_preservation.md) · [🔴 풀이공간 ≥4cm](feedback_min_solution_space_4cm.md) · [🔴 문서 등재만으론 미시행](feedback_document_only_rule_gap.md)
- [🔴 수식 단계 분리](feedback_equation_step_separation.md) · [🔴 정답 최종값만](feedback_answer_final_value_only.md) · [🔴 풀이 압축·verbose 금지](feedback_solution_conciseness.md) · [🔴 풀이 그래프 5 유형](feedback_solution_graph_requirement.md) · [🔴 풀이 서술 v9](feedback_wabuko_solution_style.md) · [dmconcept 콘텐츠 원칙](feedback_dmconcept_content_principle.md)

### 협업·인프라
- [🔴🔴 사람처럼 쓴다 — 최우선 지침](feedback_speak_like_a_person.md) — 낱말 지어내지 마라 · 사전 `bank/용어-사전.md` · 검사기 `scripts/용어-검사.mjs`
- [🔴 축은 한글명으로 부른다](feedback_korean_axis_names.md) — 코드명(SE1·T·P·E) 금지 · 대응표 포함 · [🔴 약어 설명 없이 쓰지 마라](feedback_explain_without_jargon.md)
- [🔴🔴 요구를 무르지 마라](feedback_no_retreat_from_requirement.md) — 「안 되니 합치자」는 대안 아님 · **적은 표본 1회로 결론 금지** · 축이 상수면 대상이 아니라 축의 해상도를 의심
- [호칭·어투](feedback_address_form.md) · [프로젝트 목표](project_overall_goal.md) · [비용 고려 금지](feedback_recommend_quality_only.md) · [정답률 표본](feedback_correct_rate_cohort.md) · [학생 정답률 배제](feedback_no_student_correct_rate.md) · [자산 통합 v2.0](feedback_asset_unification_v2.md) · [벤더 라벨→★ 회귀](feedback_vendor_label_regression_pilot.md)
- [풀이 압축 금지](feedback_solution_verbosity.md) · [한국어 자연](feedback_natural_korean_wording.md) · [블루 시안](design_blue_scheme.md) · [디스플레이 수식 배치](feedback_display_math_layout.md) · [인라인 행렬 분리](feedback_inline_matrix_display_split.md) · [마스터 지적 누적](feedback_master_feedback_system.md) · [UAC 실행 우선](feedback_prefer_uac_execution.md)
- [🔴 PDF 자동 띄우기 금지](feedback_no_auto_pdf_open.md) · [마스터 정답 자체 검증](feedback_master_answer_verification.md) · [frontend-design on-demand](feedback_frontend_design_skill_on_demand.md) · [기획안 용어](feedback_terminology_planning_document.md) · [좁은 컬럼 띄어쓰기](feedback_narrow_column_korean_spacing.md)

### 참조
- [RPM 언어사전 166 유형](reference_rpm_dictionary.md) · [고1 학평 PDF 52개](reference_go1_haghpyeong_pdf.md)
