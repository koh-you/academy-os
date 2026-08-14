// @ts-check

// @ts-expect-error -- no @types/node in this project; node: imports are unresolved for type-checking only, runtime is unaffected
import { Buffer } from "node:buffer";

/** @typedef {import("./routeRegistryTypes.js").MinimalHttpRequest} MinimalHttpRequest */
/** @typedef {import("./routeRegistryTypes.js").MinimalHttpResponse} MinimalHttpResponse */

export function parseAllowedOrigins(value = "*") {
  return String(value ?? "*")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

/**
 * @param {MinimalHttpRequest} request
 * @param {string} name
 * @returns {string|string[]}
 */
export function getRequestHeader(request, name) {
  return request.headers[name.toLowerCase()] ?? request.headers[name] ?? "";
}

/**
 * @param {MinimalHttpRequest} request
 * @param {{ limitBytes?: number }} [options]
 * @returns {Promise<Record<string, *>>}
 */
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

/**
 * @param {MinimalHttpRequest} request
 * @param {string[]} [allowedOrigins]
 * @returns {string}
 */
export function getCorsOrigin(request, allowedOrigins = ["*"]) {
  if (allowedOrigins.includes("*")) return "*";
  const origin = request.headers.origin;
  return (typeof origin === "string" && allowedOrigins.includes(origin)) ? origin : allowedOrigins[0] ?? "*";
}

/**
 * @param {MinimalHttpRequest} request
 * @param {MinimalHttpResponse} response
 * @param {number} statusCode
 * @param {*} data
 * @param {{ allowedOrigins?: string[] }} [options]
 */
export function sendJson(request, response, statusCode, data, { allowedOrigins = ["*"] } = {}) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Headers": "Content-Type,Tally-Signature,Authorization",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Origin": getCorsOrigin(request, allowedOrigins),
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(data));
}

/**
 * @param {{ allowedOrigins?: string[] }} [options]
 */
export function createHttpRouteAdapter({ allowedOrigins = ["*"] } = {}) {
  return Object.freeze({
    getRequestHeader,
    readJsonBody,
    sendJson(request, response, statusCode, data) {
      return sendJson(request, response, statusCode, data, { allowedOrigins });
    }
  });
}
