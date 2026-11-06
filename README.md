To Store importnant data
========================
Maintenance (2026-11)
---------------------
- `npm test` runs the mocha tests, then lint.
- Dependencies were upgraded for security advisories; transitive fixes live in
  `overrides` in package.json. Still open, with no fix upstream: `ip`,
  `request`, `uuid` and `aws-sdk` under loopback-component-storage (pkgcloud).
- loopback-component-explorer was removed: it was switched off and its bundled
  Swagger UI 2 has an unfixed XSS. Re-adding it brings that back.
