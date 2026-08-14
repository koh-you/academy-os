// @ts-check
// Pure JSDoc type definitions shared across src/shared/server/*RouteRegistry.js.
// No runtime exports — each registry references these via
// `@typedef {import("./routeRegistryTypes.js").X} X`, a type-only reference that
// leaves the existing dependency-injection boundary between registries untouched.

/**
 * @typedef {Object} MinimalHttpRequest
 * @property {string} [method]
 * @property {Record<string, string|string[]|undefined>} headers
 * @property {{ remoteAddress?: string }} [socket]
 * @property {(event: string, listener: (...args: *[]) => void) => void} on
 * @property {() => void} [destroy]
 */

/**
 * @typedef {Object} MinimalHttpResponse
 * @property {(statusCode: number, headers?: Record<string, string>) => void} writeHead
 * @property {(chunk?: string) => void} end
 */

/**
 * @typedef {Object} RouteSignature
 * @property {string} method
 * @property {string} path
 */

/**
 * @typedef {Object} RouteDispatchContext
 * @property {MinimalHttpRequest} request
 * @property {MinimalHttpResponse} response
 * @property {URL} requestUrl
 */

/**
 * @typedef {Object} RouteRegistry
 * @property {(context: RouteDispatchContext) => Promise<boolean>} dispatch
 * @property {readonly RouteSignature[]} routeSignatures
 */

export {};
