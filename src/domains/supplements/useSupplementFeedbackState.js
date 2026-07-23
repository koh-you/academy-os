import { useState } from "react";

export function createSupplementFeedback(title, message, tone = "success") {
  return { title, message, tone };
}

export function useSupplementFeedbackState() {
  const [feedback, setFeedback] = useState(null);

  function showFeedback(title, message, tone = "success") {
    setFeedback(createSupplementFeedback(title, message, tone));
  }

  function dismissFeedback() {
    setFeedback(null);
  }

  return {
    dismissFeedback,
    feedback,
    showFeedback
  };
}
