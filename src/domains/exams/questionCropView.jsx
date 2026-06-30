import { normalizeCropBox } from "./sourceMedia.js";

export function FinalQuestionCropImage({ image }) {
  const cropBox = normalizeCropBox(image?.cropBox);
  if (!image?.sourceUrl || !cropBox) return null;
  return (
    <figure
      className="finalQuestionCropImage"
      style={{ aspectRatio: `${Math.max(1, cropBox.width)} / ${Math.max(1, cropBox.height)}` }}
    >
      <img
        alt={image.alt || "원문항 크롭"}
        src={image.sourceUrl}
        style={{
          height: `${10000 / cropBox.height}%`,
          left: `-${(cropBox.x / cropBox.width) * 100}%`,
          top: `-${(cropBox.y / cropBox.height) * 100}%`,
          width: `${10000 / cropBox.width}%`
        }}
      />
    </figure>
  );
}
