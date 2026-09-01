# REPORT: GET /health

## What changed

- `server.js` — added `GET /health` returning `{"status":"ok"}`, same style as `/ping` (`res.end`, early return).
- `README.md` — added a `## Routes` section listing `/`, `/ping`, `/version`, `/health`.
- `REPORT-health.md` — this report.

Note: `/` and `/version` have no dedicated handler; both fall through to the default `res.end('ok')`. Not changed.

## How to verify

There is no `package.json`; the server is started directly (listens on port 3000):

```sh
node server.js
```

Then:

```sh
curl -s http://localhost:3000/health
```

Expected output:

```
{"status":"ok"}
```

## Verify result

**NOT RUN.** The session could not execute `node` (every `node` invocation — background
start, inline `node -e`, even `node --check` — required an approval that the non-interactive
session cannot grant). The change was reviewed by reading only: the new branch is a copy of
the `/ping` branch with the URL and body swapped, so it is expected to behave identically.
Please run the commands above to confirm.
