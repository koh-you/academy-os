import { Buffer } from "node:buffer";

export function parseAllowedOrigins(value = "*") {
  return String(value ?? "*")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function getRequestHeader(request, name) {
  return request.headers[name.toLowerCase()] ?? request.headers[name] ?? "";
}

export function readJsonBody(request, options = {}) {
  const limitBytes = options.limitBytes ?? 2_000_000;
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > limitBytes) {
        reject(new Error("요청 본문이 너무 큽니다."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("JSON 형식이 올바르지 않습니다."));
      }
    });
    request.on("error", reject);
  });
}

export function getCorsOrigin(request, allowedOrigins = ["*"]) {
  if (allowedOrigins.includes("*")) return "*";
  const origin = request.headers.origin;
  return origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0] ?? "*";
}

export function sendJson(request, response, statusCode, data, { allowedOrigins = ["*"] } = {}) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Headers": "Content-Type,Tally-Signature,Authorization",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Origin": getCorsOrigin(request, allowedOrigins),
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(data));
}

export function createHttpRouteAdapter({ allowedOrigins = ["*"] } = {}) {
  return Object.freeze({
    getRequestHeader,
    readJsonBody,
    sendJson(request, response, statusCode, data) {
      return sendJson(request, response, statusCode, data, { allowedOrigins });
    }
  });
}
