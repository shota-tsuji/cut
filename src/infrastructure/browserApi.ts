/**
 * Firefox exposes the promise-based WebExtension APIs on `browser`, Chrome only
 * on `chrome`. Chrome's MV3 `chrome.*` returns promises too, so preferring
 * `browser` when it exists gives promises on both browsers without a polyfill.
 */
const browserApi: typeof chrome = (globalThis as any).browser ?? chrome;

export default browserApi;
