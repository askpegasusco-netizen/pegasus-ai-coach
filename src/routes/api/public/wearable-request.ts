import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/wearable-request")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { device?: string; email?: string };
          if (!body?.device || !body?.email) {
            return new Response(JSON.stringify({ ok: false, error: "missing fields" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }
          // TODO: persist + email notification once Lovable Cloud is wired up.
          console.log("[wearable-request]", body.device, body.email);
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch {
          return new Response(JSON.stringify({ ok: false }), { status: 400 });
        }
      },
    },
  },
});