function defaultIsEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

export function createAppStateSaveQueue({
  isEqual = defaultIsEqual,
  onBatchSaved = () => {},
  onError = () => {},
  onStatusChange = () => {},
  save
} = {}) {
  if (typeof save !== "function") {
    throw new TypeError("app_state save queue requires a save function");
  }

  let drainPromise = null;
  let inFlightStates = null;
  let pendingStates = {};

  async function drain() {
    const failedKeys = new Set();

    while (Object.keys(pendingStates).length > 0) {
      const batch = pendingStates;
      pendingStates = {};
      inFlightStates = batch;

      try {
        await save(batch);
        onBatchSaved(batch);
        Object.keys(batch).forEach((key) => failedKeys.delete(key));
      } catch (error) {
        onError(error);
        Object.keys(batch).forEach((key) => failedKeys.add(key));
      } finally {
        inFlightStates = null;
      }
    }

    onStatusChange(failedKeys.size > 0 ? "failed" : "saved");
  }

  function ensureDrain() {
    if (drainPromise) return drainPromise;
    drainPromise = drain().finally(() => {
      drainPromise = null;
      if (Object.keys(pendingStates).length > 0) ensureDrain();
    });
    return drainPromise;
  }

  function enqueue(states) {
    if (!states || typeof states !== "object" || Array.isArray(states)) {
      return drainPromise ?? Promise.resolve();
    }

    Object.entries(states).forEach(([key, value]) => {
      if (
        inFlightStates
        && Object.prototype.hasOwnProperty.call(inFlightStates, key)
        && isEqual(inFlightStates[key], value)
      ) {
        delete pendingStates[key];
        return;
      }
      pendingStates[key] = value;
    });

    if (Object.keys(pendingStates).length === 0) {
      return drainPromise ?? Promise.resolve();
    }

    onStatusChange("saving");
    return ensureDrain();
  }

  return { enqueue };
}
