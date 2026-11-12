// Run: npm test  (Node's built-in runner; Node strips the route's TS types itself)
import { test } from "node:test";
import assert from "node:assert/strict";
import { registerHooks } from "node:module";

// The route imports the JSX email template through the "@/" alias, which Node can't load; stub it
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith("@/")) {
      return {
        url: "data:text/javascript,export const EmailTemplate = () => null;",
        shortCircuit: true,
      };
    }
    return next(specifier, context);
  },
});

delete process.env.RESEND_API_KEY; // never reach the real email service
const { POST } = await import("../app/api/send/route.ts");

let ip = 0;
const send = (body, from = `10.0.0.${++ip}`) =>
  POST(
    new Request("http://localhost/api/send", {
      method: "POST",
      headers: { "x-forwarded-for": from },
      body: JSON.stringify(body),
    }),
  );

const valid = { name: "Ana", email: "ana@example.com", message: "Hi there" };

test("honeypot pretends success", async () => {
  const res = await send({ ...valid, website: "spam.com" });
  assert.equal(res.status, 200);
  assert.equal((await res.json()).success, true);
});

test("rejects bad input", async () => {
  for (const body of [
    { ...valid, name: 42 },
    { ...valid, name: "   " },
    { ...valid, email: "not-an-email" },
    { ...valid, name: "a".repeat(101) },
    { ...valid, message: "a".repeat(2001) },
  ]) {
    assert.equal((await send(body)).status, 400, JSON.stringify(body).slice(0, 60));
  }
});

test("valid message without an API key reports misconfiguration", async () => {
  const res = await send(valid);
  assert.equal(res.status, 500);
  assert.equal((await res.json()).error, "Email service is not configured.");
});

test("4th message from one IP in 10 minutes is rate limited", async () => {
  const statuses = [];
  for (let i = 0; i < 4; i++) statuses.push((await send(valid, "10.9.9.9")).status);
  assert.deepEqual(statuses, [500, 500, 500, 429]);
});
