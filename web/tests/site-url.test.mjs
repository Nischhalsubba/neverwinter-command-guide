import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSiteUrl, DEFAULT_SITE_URL } from "../lib/site-url.mjs";

test("preserves explicitly configured HTTP for local preview", () => {
  assert.equal(normalizeSiteUrl("http://localhost:3000/"), "http://localhost:3000");
});
test("defaults bare Vercel hostnames to HTTPS", () => {
  assert.equal(normalizeSiteUrl("site.vercel.app"), "https://site.vercel.app");
});
test("strips trailing slash, query and hash from canonical URL base", () => {
  assert.equal(normalizeSiteUrl(" https://example.com/guide/?utm=1#top "), "https://example.com/guide");
});
test("rejects malformed/unsupported site URLs", () => {
  for (const bad of [undefined, null, "", "https://", "ftp://example.com", "://bad"]) {
    assert.equal(normalizeSiteUrl(bad), DEFAULT_SITE_URL);
  }
});
