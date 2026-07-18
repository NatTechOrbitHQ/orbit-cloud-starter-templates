const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => res.json({ service: "orbit-node-express-starter", status: "ok" }));
app.get("/health", (_req, res) => res.status(200).send("ok"));

app.listen(port, "0.0.0.0", () => console.log(`listening on ${port}`));
