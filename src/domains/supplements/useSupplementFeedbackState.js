import { useState } from "react";

export function createSupplementFeedback(title, message, tone = "success", { reloadRequired = false } = {}) {
  return {
    title,
    message,
    tone,
    ...(reloadRequired ? { reloadRequired: true } : {})
  };
}

export function useSupplementFeedbackState() {
  const [feedback, setFeedback] = useState(null);

  function showFeedback(title, message, tone = "success", options) {
    setFeedback(createSupplementFeedback(title, message, tone, options));
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
