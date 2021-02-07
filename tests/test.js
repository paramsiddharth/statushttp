const os = require('os');
const path = require('path');
const shell = require('shelljs');

let toRun = path.join(__dirname, 'test.sh');

if (os.type() === 'Windows_NT')
	toRun = path.join(__dirname, 'test.bat');

const cmd = `"${toRun}"` + ' ' + process.argv.slice(2).join(' ');
console.log('Running: ' + cmd + '\n');
shell.exec(cmd);
