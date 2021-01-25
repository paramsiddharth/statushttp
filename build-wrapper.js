const fs = require('fs');
const path = require('path');

const MODULEEXT = (process.argv[2] && path.extname(process.argv[2])) || '.js';
const MODULE = (process.argv[2] && path.basename(process.argv[2], MODULEEXT)) || 'statuscodes';

console.log('File:', MODULE + MODULEEXT);

const statuscodes = require(`./${MODULE}`);
const ESM_DIR = path.join(__dirname, 'esm');
const filePath = path.join(ESM_DIR, `wrapper.js`);
let toWrite = `import mODULE from '../${MODULE}${MODULEEXT}';`

if (!fs.existsSync(ESM_DIR))
	fs.mkdirSync(ESM_DIR);
if (fs.existsSync(filePath))
	fs.unlinkSync(filePath);

console.log(`Creating ESM wrapper for "${MODULE}${MODULEEXT}" in ${path.join('esm', 'wrapper.js')}`)

for (const key of Object.keys(statuscodes)) {
	toWrite += `export const ${key} = mODULE['${key}'];`;
}

fs.writeFileSync(filePath, toWrite + '\n');
fs.writeFileSync(path.join(ESM_DIR, 'package.json'), JSON.stringify({ type: 'module' }));
