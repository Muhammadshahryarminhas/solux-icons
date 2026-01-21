// @ts-nocheck
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "../src/icons/svgs");
const dest = path.join(__dirname, "../dist/icons/svgs");

fs.cpSync(src, dest, { recursive: true });
console.log("✔ SVGs copied to dist");
