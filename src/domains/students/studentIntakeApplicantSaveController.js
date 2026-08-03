function patchApplicantSaveState(current, applicantId, saveState) {
  return { ...current, [applicantId]: saveState };
}

export function createStudentIntakeApplicantSaveController({
  onError = () => {},
  onPersisted = () => {},
  request,
  setSaveStates
}) {
  if (typeof request !== "function") {
    throw new Error("Tally 후보 저장 request가 필요합니다.");
  }
  if (typeof setSaveStates !== "function") {
    throw new Error("Tally 후보 저장 상태 updater가 필요합니다.");
  }

  const activeByApplicantId = new Map();
  const inFlightByApplicantId = new Map();
  const pendingByApplicantId = new Map();

  async function drain(applicantId) {
    let lastError = null;
    while (pendingByApplicantId.has(applicantId)) {
      const applicant = pendingByApplicantId.get(applicantId);
      pendingByApplicantId.delete(applicantId);
      activeByApplicantId.set(applicantId, applicant);

      try {
        const persistedApplicant = await request(applicant);
        const pendingApplicant = pendingByApplicantId.get(applicantId);
        const hasPendingChanges = Boolean(pendingApplicant);
        if (pendingApplicant) {
          pendingByApplicantId.set(applicantId, {
            ...pendingApplicant,
            updatedAt: persistedApplicant.updatedAt
          });
        }
        onPersisted({
          applicant: persistedApplicant,
          hasPendingChanges,
          pendingApplicant: pendingApplicant
            ? { ...pendingApplicant, updatedAt: persistedApplicant.updatedAt }
            : null
        });
        if (!hasPendingChanges) {
          setSaveStates((current) => patchApplicantSaveState(current, applicantId, "saved"));
        }
      } catch (error) {
        lastError = error;
        pendingByApplicantId.delete(applicantId);
        onError(error);
        setSaveStates((current) => patchApplicantSaveState(current, applicantId, "failed"));
      } finally {
        activeByApplicantId.delete(applicantId);
      }

      if (lastError) break;
    }
    return lastError ? { error: lastError, ok: false } : { ok: true };
  }

  function save(applicant) {
    const applicantId = applicant?.applicantId;
    if (!applicantId) return Promise.resolve({ ok: true });
    const pendingApplicant = pendingByApplicantId.get(applicantId);
    const activeApplicant = activeByApplicantId.get(applicantId);
    if (
      JSON.stringify(pendingApplicant ?? activeApplicant ?? null) === JSON.stringify(applicant)
    ) {
      return inFlightByApplicantId.get(applicantId) ?? Promise.resolve({ ok: true });
    }

    pendingByApplicantId.set(applicantId, applicant);
    setSaveStates((current) => patchApplicantSaveState(current, applicantId, "saving"));
    if (!inFlightByApplicantId.has(applicantId)) {
      const currentDrain = drain(applicantId).finally(() => {
        if (inFlightByApplicantId.get(applicantId) === currentDrain) {
          inFlightByApplicantId.delete(applicantId);
        }
      });
      inFlightByApplicantId.set(applicantId, currentDrain);
    }
    return inFlightByApplicantId.get(applicantId);
  }

  function waitForIdle(applicantId) {
    return inFlightByApplicantId.get(applicantId) ?? Promise.resolve({ ok: true });
  }

  return { save, waitForIdle };
}
