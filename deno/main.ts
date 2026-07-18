const port = Number(Deno.env.get("PORT") ?? 3000);

Deno.serve({ port, hostname: "0.0.0.0" }, (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/health") return new Response("ok");
  return Response.json({ service: "orbit-deno-starter", status: "ok" });
});
