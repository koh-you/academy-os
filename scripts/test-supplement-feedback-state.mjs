import assert from "node:assert/strict";
import {
  createSupplementFeedback
} from "../src/domains/supplements/useSupplementFeedbackState.js";

assert.deepEqual(
  createSupplementFeedback("저장 완료", "Supabase 재확인까지 마쳤습니다."),
  {
    title: "저장 완료",
    message: "Supabase 재확인까지 마쳤습니다.",
    tone: "success"
  }
);

assert.deepEqual(
  createSupplementFeedback("저장 실패", "입력값을 다시 확인해 주세요.", "failed"),
  {
    title: "저장 실패",
    message: "입력값을 다시 확인해 주세요.",
    tone: "failed"
  }
);

console.log("supplement feedback state: deterministic contract passed");
