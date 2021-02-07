const { sc } = require('statushttp');

let status;
try {
	status = sc(Number(process.argv[2]) || process.argv.slice(2).join(' ') || 200);
} catch(e) {
	status = sc(200);
}

console.log(`\
STATUS
Code: ${status.Code}
Text: ${status.Text}
Description: ${status.Desc}
Class: ${status.Class}
`);
