#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const envFilePath = path.resolve(__dirname, "..", ".env");
const outputPath = path.resolve(__dirname, "..", "assets/js/env.js");

function parseEnv(content) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .reduce((acc, line) => {
      const [key, ...rest] = line.split("=");
      if (!key) return acc;
      const value = rest.join("=").trim();
      acc[key.trim()] = value.replace(/^['"]|['"]$/g, "");
      return acc;
    }, {});
}

let streamUrl = process.env.STREAM_URL;
if (!streamUrl && fs.existsSync(envFilePath)) {
  const envContent = fs.readFileSync(envFilePath, "utf8");
  const parsed = parseEnv(envContent);
  streamUrl = parsed.STREAM_URL;
}

const fileContent = `// Automatisch generiert – bitte nicht manuell bearbeiten.\nwindow.STREAM_URL = ${JSON.stringify(streamUrl || "")};\n`;

fs.writeFileSync(outputPath, fileContent, "utf8");
console.log(`STREAM_URL in assets/js/env.js aktualisiert${streamUrl ? `: ${streamUrl}` : ""}`);
