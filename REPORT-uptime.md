# Change Report: GET /uptime route

## What changed

A new route was added to `server.js`:

```js
if (req.url === '/uptime') {
  res.end(String(process.uptime()))
  return
}
```

The route responds to `GET /uptime` with the Node.js process uptime (in seconds)
as a plain-text string, using `process.uptime()`.

## Why

Exposes a simple diagnostic endpoint that lets operators confirm the server is
alive and see how long it has been running, without adding any dependencies or
changing existing behaviour.

## How to verify

Start the server:

```sh
node server.js
```

In another terminal, run:

```sh
curl http://localhost:3000/uptime
```

Expected output: a floating-point number representing seconds elapsed since the
process started, for example:

```
5.234187609
```

The number increases with each request. All other routes (`/ping`, catch-all)
are unaffected.
