function text(value = "") {
  return String(value ?? "").trim();
}

export function sortWithdrawnStudents(students = [], sortBy = "name") {
  return [...students].sort((left, right) => {
    if (sortBy === "withdrawn_date") {
      const dateDifference = text(right.withdrawnAt).localeCompare(text(left.withdrawnAt));
      if (dateDifference) return dateDifference;
    }
    const nameDifference = text(left.name).localeCompare(text(right.name), "ko");
    if (nameDifference) return nameDifference;
    return text(left.studentId).localeCompare(text(right.studentId));
  });
}
