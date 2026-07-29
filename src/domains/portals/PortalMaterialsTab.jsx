import { ListCard, ListCardActions, ListCardBody } from "../../shared/components/ListCard.jsx";

export function PortalMaterialsTab({ emptyMessage, materials = [] }) {
  return (
    <div className="portalMaterialsList">
      {materials.length === 0 ? <div className="emptyPortalPanel">{emptyMessage}</div> : null}
      {materials.map((material) => (
        <ListCard className="portalMaterialCard" key={material.materialId}>
          <ListCardBody>
            <strong>{material.title}</strong>
            <span>{material.description || "자료 설명 없음"}</span>
            <small>{material.fileName || material.fileUrl || "파일/링크 미입력"}</small>
          </ListCardBody>
          {material.fileUrl ? (
            <ListCardActions>
              <a className="softButton" href={material.fileUrl} rel="noreferrer" target="_blank">열기</a>
            </ListCardActions>
          ) : null}
        </ListCard>
      ))}
    </div>
  );
}
