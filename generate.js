
const fs = require("fs");
const path = require("path");

const topics = [
  "basics/variables.js",
  "basics/operators.js",
  "basics/controlFlow.js",
  "basics/control-flow.js",
  "functions/functions.js",
  "functions/closures.js",
  "functions/higher-order.js",
  "arrays/arrays.js",
  "objects/objects.js",
  "oop/classes.js",
  "oop/prototypes.js",
  "async/promises.js",
  "async/asyncAwait.js",
  "async/async-await.js",
  "async/fetch-api.js",
  "dom/dom.js",
  "dom/events.js",
  "browser/timers.js",
  "storage/localStorage.js",
  "advanced/destructuring.js",
  "advanced/spreadRest.js",
  "advanced/spread-rest.js",
  "advanced/thisKeyword.js",
  "advanced/this-keyword.js",
  "utils/helpers.js",
  "browser-api/geolocation.js",
  "browser-api/timers.js",
  "error-handling/errors.js",
  "modules/index.js",
  "modules/module1.js",
  "modules/module2.js",
  "index.js"
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateContent(title) {
  let content = `// =========================================\n`;
  content += `// ${title.toUpperCase()} MASTER FILE\n`;
  content += `// =========================================\n\n`;

  content += `console.log("Running ${title} examples");\n\n`;

  // generate many examples
  for (let i = 1; i <= 120; i++) {
    content += `// Example ${i}\n`;
    content += `function example${i}(a = ${i}, b = ${i + 1}) {\n`;
    content += `  let result = a + b;\n`;
    content += `  console.log("Example ${i}:", result);\n`;
    content += `  return result;\n`;
    content += `}\n`;
    content += `example${i}();\n\n`;

    content += `const obj${i} = { id: ${i}, name: "Item${i}" };\n`;
    content += `console.log(obj${i});\n\n`;

    content += `const arr${i} = [${i}, ${i + 1}, ${i + 2}];\n`;
    content += `arr${i}.forEach(n => console.log(n));\n\n`;
  }

  content += `// Async Example\n`;
  content += `function asyncTest() {\n`;
  content += `  return new Promise(resolve => {\n`;
  content += `    setTimeout(() => resolve("Done"), 100);\n`;
  content += `  });\n`;
  content += `}\n\n`;
  content += `asyncTest().then(console.log);\n\n`;

  content += `// Classes Example\n`;
  content += `class Person {\n`;
  content += `  constructor(name) {\n`;
  content += `    this.name = name;\n`;
  content += `  }\n`;
  content += `  greet() {\n`;
  content += `    console.log("Hello " + this.name);\n`;
  content += `  }\n`;
  content += `}\n`;
  content += `new Person("Lokesh").greet();\n`;

  return content;
}

topics.forEach(file => {
  ensureDir(file);
  fs.writeFileSync(file, generateContent(file));
  console.log("Created:", file);
});

