#!/usr/bin/env node
import http from "node:http";
import { stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const port = Number(process.env.PORT) || 4173;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400);
    res.end("Bad Request");
    return;
  }

  const safeSuffix = path.normalize(req.url.split("?")[0]).replace(/^\/+/, "");
  let filePath = path.join(rootDir, safeSuffix);

  try {
    let fileStat = await stat(filePath).catch(async () => {
      const fallbackPath = path.join(filePath, "index.html");
      try {
        const fallbackStat = await stat(fallbackPath);
        filePath = fallbackPath;
        return fallbackStat;
      } catch (error) {
        throw error;
      }
    });

    if (fileStat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
      fileStat = await stat(filePath);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });

    if (req.method === "GET" || req.method === "HEAD") {
      if (req.method === "HEAD") {
        res.end();
      } else {
        const stream = createReadStream(filePath);
        stream.pipe(res);
        stream.on("error", (error) => {
          console.error(error);
          if (!res.headersSent) {
            res.writeHead(500);
          }
          res.end("Interner Serverfehler");
        });
      }
    } else {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end("Methode nicht erlaubt");
    }
  } catch (error) {
    if (error && error.code !== "ENOENT") {
      console.error(error);
    }
    if (!res.headersSent) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    }
    res.end("Datei nicht gefunden");
  }
});

server.listen(port, () => {
  console.log(`Radio Volare läuft auf http://localhost:${port}`);
});
