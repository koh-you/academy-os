import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { ListCard, ListCardActions, ListCardBody } from "../../shared/components/ListCard.jsx";

export function PortalMaterialsTab({ emptyMessage, materials = [], onOpenMaterial }) {
  return (
    <div className="portalMaterialsList">
      {materials.length === 0 ? <EmptyState className="emptyPortalPanel" title={emptyMessage} /> : null}
      {materials.map((material) => (
        <ListCard className="portalMaterialCard" key={material.materialId}>
          <ListCardBody>
            <strong>{material.title}</strong>
            <span>{material.description || "자료 설명 없음"}</span>
            <small>{material.fileName || material.fileUrl || "파일/링크 미입력"}</small>
          </ListCardBody>
          {material.fileUrl ? (
            <ListCardActions>
              <button className="softButton" onClick={() => onOpenMaterial?.(material)} type="button">열기</button>
            </ListCardActions>
          ) : null}
        </ListCard>
      ))}
    </div>
  );
}
