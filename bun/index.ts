const port = Number(process.env.PORT || 3000);

Bun.serve({
  port,
  hostname: "0.0.0.0",
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/health") return new Response("ok");
    return Response.json({ service: "orbit-bun-starter", status: "ok" });
  },
});
console.log(`listening on ${port}`);
