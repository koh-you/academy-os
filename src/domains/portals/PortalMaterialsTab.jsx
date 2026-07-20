export function PortalMaterialsTab({ emptyMessage, materials = [] }) {
  return (
    <div className="portalMaterialsList">
      {materials.length === 0 ? <div className="emptyPortalPanel">{emptyMessage}</div> : null}
      {materials.map((material) => (
        <article className="portalMaterialCard" key={material.materialId}>
          <div>
            <strong>{material.title}</strong>
            <span>{material.description || "자료 설명 없음"}</span>
            <small>{material.fileName || material.fileUrl || "파일/링크 미입력"}</small>
          </div>
          {material.fileUrl ? (
            <a className="softButton" href={material.fileUrl} rel="noreferrer" target="_blank">열기</a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
