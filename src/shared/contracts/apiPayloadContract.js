const supportedFieldTypes = new Set(["array", "boolean", "number", "object", "string"]);

function isPlainObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function createContractError({ contractName, field = "", message }) {
  const error = new Error(message);
  error.name = "ApiPayloadContractError";
  error.code = "INVALID_API_PAYLOAD";
  error.statusCode = 400;
  error.contractName = contractName;
  error.field = field;
  return error;
}

function matchesFieldType(value, types) {
  return types.some((type) => {
    if (type === "array") return Array.isArray(value);
    if (type === "object") return isPlainObject(value);
    if (type === "number") return typeof value === "number" && Number.isFinite(value);
    return typeof value === type;
  });
}

function normalizeFieldSpec(fieldName, spec = {}) {
  const types = [...new Set(
    (Array.isArray(spec.type) ? spec.type : [spec.type])
      .map((type) => String(type ?? "").trim())
      .filter(Boolean)
  )];
  const unsupportedType = types.find((type) => !supportedFieldTypes.has(type));
  if (!types.length || unsupportedType) {
    throw new Error(
      `지원하지 않는 API contract field type입니다: ${fieldName}=${unsupportedType || "(empty)"}`
    );
  }
  const aliases = [...new Set((spec.aliases ?? []).map((alias) => String(alias).trim()).filter(Boolean))];
  if (aliases.includes(fieldName)) {
    throw new Error(`API contract alias가 canonical field와 같습니다: ${fieldName}`);
  }
  return Object.freeze({
    aliases: Object.freeze(aliases),
    allowEmpty: spec.allowEmpty !== false,
    defaultValue: spec.defaultValue,
    hasDefault: Object.prototype.hasOwnProperty.call(spec, "defaultValue"),
    required: spec.required === true,
    trim: spec.trim === true,
    types: Object.freeze(types)
  });
}

function cloneDefaultValue(value) {
  if (Array.isArray(value)) return [...value];
  if (isPlainObject(value)) return { ...value };
  return value;
}

export function defineApiPayloadContract({
  allowUnknownFields = false,
  fields = {},
  name
} = {}) {
  const contractName = String(name ?? "").trim();
  if (!contractName) throw new Error("API payload contract name이 필요합니다.");
  if (!isPlainObject(fields)) throw new Error(`${contractName} fields는 object여야 합니다.`);

  const normalizedFields = Object.freeze(Object.fromEntries(
    Object.entries(fields).map(([fieldName, spec]) => [fieldName, normalizeFieldSpec(fieldName, spec)])
  ));
  const acceptedKeyList = Object.entries(normalizedFields)
    .flatMap(([fieldName, spec]) => [fieldName, ...spec.aliases]);
  const duplicateKey = acceptedKeyList.find((key, index) => acceptedKeyList.indexOf(key) !== index);
  if (duplicateKey) throw new Error(`${contractName} contract field/alias가 중복되었습니다: ${duplicateKey}`);
  const acceptedKeys = new Set(acceptedKeyList);

  function parse(payload) {
    if (!isPlainObject(payload)) {
      throw createContractError({
        contractName,
        message: `${contractName} 요청 본문은 object여야 합니다.`
      });
    }
    if (!allowUnknownFields) {
      const unknownField = Object.keys(payload).find((key) => !acceptedKeys.has(key));
      if (unknownField) {
        throw createContractError({
          contractName,
          field: unknownField,
          message: `${contractName} 요청에 허용되지 않은 필드가 있습니다: ${unknownField}`
        });
      }
    }

    const parsed = {};
    for (const [fieldName, spec] of Object.entries(normalizedFields)) {
      const suppliedKeys = [fieldName, ...spec.aliases].filter((key) => (
        Object.prototype.hasOwnProperty.call(payload, key)
      ));
      if (suppliedKeys.length > 1) {
        throw createContractError({
          contractName,
          field: fieldName,
          message: `${contractName} 요청의 ${fieldName} 필드와 legacy alias를 동시에 보낼 수 없습니다.`
        });
      }
      const [sourceKey] = suppliedKeys;
      if (!sourceKey) {
        if (spec.required) {
          throw createContractError({
            contractName,
            field: fieldName,
            message: `${contractName} 요청에 ${fieldName} 필드가 필요합니다.`
          });
        }
        if (spec.hasDefault) parsed[fieldName] = cloneDefaultValue(spec.defaultValue);
        continue;
      }

      let value = payload[sourceKey];
      if (!matchesFieldType(value, spec.types)) {
        throw createContractError({
          contractName,
          field: fieldName,
          message: `${contractName} 요청의 ${fieldName} 필드는 ${spec.types.join(" 또는 ")}여야 합니다.`
        });
      }
      if (typeof value === "string" && spec.trim) value = value.trim();
      if (typeof value === "string" && !spec.allowEmpty && !value) {
        throw createContractError({
          contractName,
          field: fieldName,
          message: `${contractName} 요청의 ${fieldName} 필드는 비어 있을 수 없습니다.`
        });
      }
      parsed[fieldName] = value;
    }
    return parsed;
  }

  return Object.freeze({
    allowUnknownFields: allowUnknownFields === true,
    fields: normalizedFields,
    name: contractName,
    parse
  });
}

export function defineApiRouteContract({
  domain,
  key,
  method,
  path,
  request,
  response,
  sources = []
} = {}) {
  const normalizedKey = String(key ?? "").trim();
  const normalizedMethod = String(method ?? "").trim().toUpperCase();
  const normalizedPath = String(path ?? "").trim();
  if (!normalizedKey || !normalizedMethod || !normalizedPath.startsWith("/api/")) {
    throw new Error("API route contract에는 key, method, /api/ path가 필요합니다.");
  }
  if (typeof request?.parse !== "function" || typeof response?.parse !== "function") {
    throw new Error(`${normalizedKey} route contract에는 request와 response payload contract가 필요합니다.`);
  }
  return Object.freeze({
    domain: String(domain ?? "").trim(),
    key: normalizedKey,
    method: normalizedMethod,
    path: normalizedPath,
    request,
    response,
    sources: Object.freeze([...new Set(sources.map((source) => String(source).trim()).filter(Boolean))])
  });
}
