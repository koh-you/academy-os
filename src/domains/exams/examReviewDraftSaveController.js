export function createExamReviewDraftSaveController({
  clearTimer = clearTimeout,
  delayMs = 500,
  setTimer = setTimeout
} = {}) {
  let latestValue = "";
  let timerId = null;

  function clearPendingTimer() {
    if (timerId === null) return;
    clearTimer(timerId);
    timerId = null;
  }

  function setLatestValue(value = "") {
    latestValue = String(value ?? "");
  }

  function schedule(value, saveValue) {
    setLatestValue(value);
    clearPendingTimer();
    timerId = setTimer(() => {
      timerId = null;
      saveValue(latestValue);
    }, delayMs);
  }

  function flush(saveValue) {
    clearPendingTimer();
    return saveValue(latestValue);
  }

  function cancel() {
    clearPendingTimer();
  }

  return {
    cancel,
    flush,
    schedule,
    setLatestValue
  };
}
