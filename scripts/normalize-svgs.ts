// @ts-nocheck
const fs = require("fs");
const path = require("path");
const ICONS_DIR = path.join(__dirname, "../src/icons/svgs");

function walk(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
      return;
    }
    if (!file.endsWith(".svg")) return;
    let content = fs.readFileSync(fullPath, "utf8");
    content = content.replace(/\sstroke="[^"]*"/gi, "");
    content = content.replace(/\sstroke-width="[^"]*"/gi, "");
    content = content.replace(/\sfill="[^"]*"/gi, ' fill="none"');
    fs.writeFileSync(fullPath, content, "utf8");
    console.log(`✔ Normalized ${path.relative(ICONS_DIR, fullPath)}`);
  });
}

walk(ICONS_DIR);
console.log("🎉 All SVGs normalized successfully");
