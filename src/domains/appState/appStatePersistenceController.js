function normalizeAppStateValue(value) {
  if (Array.isArray(value)) return value.map(normalizeAppStateValue);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, entryValue]) => entryValue !== undefined)
      .sort(([leftKey], [rightKey]) => leftKey.localeCompare(rightKey))
      .map(([key, entryValue]) => [key, normalizeAppStateValue(entryValue)])
  );
}

export function areAppStateValuesEqual(left, right) {
  return JSON.stringify(normalizeAppStateValue(left)) ===
    JSON.stringify(normalizeAppStateValue(right));
}

function createUpdatedAtMap({ keys = [], stateRows = [] } = {}) {
  const updatedAtByKey = new Map(keys.map((key) => [key, null]));
  for (const row of stateRows) {
    if (!row?.key) continue;
    updatedAtByKey.set(row.key, row.updatedAt || null);
  }
  return updatedAtByKey;
}

function createPersistedValueMap(states = {}) {
  return new Map(Object.entries(states));
}

export function createAppStatePersistenceController({
  onError = () => {},
  onPersisted = () => {},
  onState = () => {},
  read,
  write
}) {
  let disposed = false;
  let inFlight = null;
  const activeByKey = new Map();
  let pendingByKey = new Map();
  let persistedValueByKey = new Map();
  let updatedAtByKey = new Map();

  function setSnapshot(snapshot = {}) {
    updatedAtByKey = createUpdatedAtMap(snapshot);
    persistedValueByKey = createPersistedValueMap(snapshot.states);
  }

  async function persistKey(key, value) {
    const expectedUpdatedAt = updatedAtByKey.has(key)
      ? updatedAtByKey.get(key)
      : null;
    await write({
      expectedUpdatedAt: { [key]: expectedUpdatedAt },
      states: { [key]: value }
    });
    if (!disposed) onState("verifying");
    const verification = await read();
    const verifiedRow = (verification.stateRows ?? []).find((row) => row?.key === key);
    const hasVerifiedValue = Object.prototype.hasOwnProperty.call(
      verification.states ?? {},
      key
    );
    if (
      verification.source !== "supabase" ||
      !hasVerifiedValue ||
      !verifiedRow?.updatedAt ||
      !areAppStateValuesEqual(verification.states[key], value)
    ) {
      throw new Error(
        `${key} 설정의 Supabase 저장값을 재조회로 확인하지 못했습니다. 현재 입력은 유지됩니다.`
      );
    }
    updatedAtByKey.set(key, verifiedRow.updatedAt);
    persistedValueByKey.set(key, verification.states[key]);
    if (!disposed) {
      onPersisted({ key, updatedAt: verifiedRow.updatedAt, value: verification.states[key] });
    }
  }

  async function drain() {
    while (!disposed && pendingByKey.size > 0) {
      const entries = [...pendingByKey.entries()];
      pendingByKey.clear();
      onState("saving");
      for (let index = 0; index < entries.length; index += 1) {
        const [key, value] = entries[index];
        activeByKey.set(key, value);
        try {
          await persistKey(key, value);
        } catch (error) {
          pendingByKey = new Map([
            ...entries.slice(index),
            ...pendingByKey.entries()
          ]);
          if (!disposed) {
            onError(error);
            onState("failed");
          }
          return { error, ok: false };
        } finally {
          activeByKey.delete(key);
        }
      }
    }
    if (!disposed) onState("saved");
    return { ok: !disposed };
  }

  function startDrain() {
    if (inFlight || disposed || pendingByKey.size === 0) return inFlight;
    const currentDrain = drain().finally(() => {
      if (inFlight === currentDrain) inFlight = null;
    });
    inFlight = currentDrain;
    return currentDrain;
  }

  function save(states = {}) {
    const hasRequestedStates = Object.keys(states).length > 0;
    for (const [key, value] of Object.entries(states)) {
      const pendingValue = pendingByKey.get(key);
      if (pendingByKey.has(key) && areAppStateValuesEqual(pendingValue, value)) continue;
      if (
        !pendingByKey.has(key) &&
        activeByKey.has(key) &&
        areAppStateValuesEqual(activeByKey.get(key), value)
      ) continue;
      if (
        !pendingByKey.has(key) &&
        !activeByKey.has(key) &&
        persistedValueByKey.has(key) &&
        areAppStateValuesEqual(persistedValueByKey.get(key), value)
      ) continue;
      pendingByKey.set(key, value);
    }
    const drainPromise = startDrain();
    if (!drainPromise && !disposed && hasRequestedStates) onState("saved");
    return drainPromise ?? Promise.resolve({ ok: !disposed });
  }

  function retry() {
    return startDrain() ?? Promise.resolve({ ok: !disposed });
  }

  function dispose() {
    disposed = true;
    activeByKey.clear();
    pendingByKey.clear();
  }

  return { dispose, retry, save, setSnapshot };
}
