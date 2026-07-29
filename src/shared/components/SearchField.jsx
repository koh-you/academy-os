import { useId } from "react";
import "./SearchField.css";

export function SearchField({
  autoFocus = false,
  className = "",
  disabled = false,
  inputClassName = "",
  label,
  onChange,
  placeholder = "",
  result = null,
  value = ""
}) {
  const generatedId = useId();
  const inputId = `academy-search-${generatedId.replaceAll(":", "")}`;
  const searchFieldClassName = ["sharedSearchField", className].filter(Boolean).join(" ");

  return (
    <div className={searchFieldClassName}>
      <div className="sharedSearchFieldLabelRow">
        <label htmlFor={inputId}>{label}</label>
        {result ? <span className="sharedSearchFieldResult">{result}</span> : null}
      </div>
      <div className="sharedSearchFieldControl">
        <input
          aria-label={label}
          autoFocus={autoFocus}
          className={inputClassName}
          disabled={disabled}
          id={inputId}
          onChange={(event) => onChange?.(event.target.value)}
          placeholder={placeholder}
          type="search"
          value={value}
        />
        {value ? (
          <button
            aria-label={`${label} 지우기`}
            className="sharedSearchFieldClear"
            disabled={disabled}
            onClick={() => onChange?.("")}
            type="button"
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}
