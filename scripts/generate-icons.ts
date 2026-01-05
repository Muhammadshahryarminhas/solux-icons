// @ts-nocheck
const fs = require("fs");
const path = require("path");

const ICONS_DIR = path.join(__dirname, "../src/icons/svgs");
const OUTPUT_FILE = path.join(__dirname, "../src/icons/index.ts");

const imports = [];
const entries = [];

function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w)/g, m => m.replace("-", "").toUpperCase());
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal[0].toLowerCase() + pascal.slice(1);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
      return;
    }

    if (!file.endsWith(".svg")) return;

    const fileName = file.replace(".svg", "");
    const componentName = toPascalCase(fileName);
    const keyName = toCamelCase(fileName);

    const relativePath =
      "./" +
      path
        .relative(path.join(__dirname, "../src/icons"), fullPath)
        .replace(/\\/g, "/");

    imports.push(`import ${componentName} from "${relativePath}";`);
    entries.push(`  ${keyName}: ${componentName},`);
  });
}

walk(ICONS_DIR);

const content = `
${imports.join("\n")}

export const icons = {
${entries.join("\n")}
};

export type IconName = keyof typeof icons;
`;

fs.writeFileSync(OUTPUT_FILE, content.trim() + "\n");