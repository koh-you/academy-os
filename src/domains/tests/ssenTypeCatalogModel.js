// 쎈 유형 카탈로그를 만드는 순수 함수(과목 → 대단원 → 중단원 → 유형).
//
// 원천 JSON 을 여기서 import 하지 않는다. 데이터를 붙이는 건 ssenTypeCatalog.js 가 하고,
// 이 파일은 rows 를 받아 변환만 한다 — 그래야 Node 에서 그대로 테스트할 수 있고,
// 284 KB JSON 이 이 모듈을 import 하는 쪽까지 딸려오지 않는다.
import { safeIdPart } from "../../shared/utils/id.js";

export function buildSsenTypeCatalog(rows = []) {
  const subjectMap = new Map();
  rows.forEach((row) => {
    const subject = row.subject || "과목 미지정";
    const chapterName = row.partName || "대단원 미지정";
    const unitName = row.unitName || "중단원 미지정";
    if (!subjectMap.has(subject)) subjectMap.set(subject, new Map());
    const chapterMap = subjectMap.get(subject);
    const chapterId = `${row.bookCode || subject}_${safeIdPart(chapterName)}`;
    if (!chapterMap.has(chapterName)) {
      chapterMap.set(chapterName, {
        id: chapterId,
        title: chapterName,
        units: new Map()
      });
    }
    const chapter = chapterMap.get(chapterName);
    const unitKey = `${row.unitNo || ""}_${unitName}`;
    if (!chapter.units.has(unitKey)) {
      chapter.units.set(unitKey, {
        id: `${row.bookCode || subject}_${row.unitNo || safeIdPart(unitName)}`,
        title: unitName,
        unitNo: row.unitNo || "",
        types: []
      });
    }
    chapter.units.get(unitKey).types.push({
      id: row.typeCode || `${subject}_${row.unitNo || ""}_${row.typeNo || ""}_${safeIdPart(row.typeName || "")}`,
      title: row.typeName || "유형명 미입력",
      typeNo: row.typeNo || "",
      bookTitle: row.bookTitle || "",
      partName: chapterName,
      unitName
    });
  });

  return Object.fromEntries(
    Array.from(subjectMap.entries()).map(([subject, chapterMap]) => [
      subject,
      Array.from(chapterMap.values()).map((chapter) => ({
        ...chapter,
        units: Array.from(chapter.units.values()).map((unit) => ({
          ...unit,
          types: unit.types.sort((a, b) => String(a.typeNo).localeCompare(String(b.typeNo), "ko", { numeric: true }))
        }))
      }))
    ])
  );
}
