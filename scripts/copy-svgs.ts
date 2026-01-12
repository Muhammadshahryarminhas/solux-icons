// @ts-nocheck
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "../src/icons/svgs");
const dest = path.join(__dirname, "../dist/icons/svgs");

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

fs.cpSync(src, dest, { recursive: true });

console.log("✅ SVGs copied to dist/icons/svgs");
