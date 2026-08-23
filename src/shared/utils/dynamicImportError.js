const staleDeploymentChunkPattern = /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module/i;

export function isStaleDeploymentChunkError(error) {
  const message = String(error?.message ?? error ?? "");
  return staleDeploymentChunkPattern.test(message);
}
