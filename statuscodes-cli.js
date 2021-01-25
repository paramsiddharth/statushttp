#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { StatusCode, statusClass } = require('./statuscodes');
const ack = `Made with ❤ by Param Siddharth.`;

if (require && require.main === module) {
	var args = yargs(hideBin(process.argv))
		.usage(`\
HTTP Status Codes (statuscodes)
Usage: $0 <value> [options]
`)
		.demandCommand(1, 1)
		.alias('?', 'help')
		.help('?')
		.epilog(ack)
		.argv;
	const value = args._[0];
	let status = null;
	try {
		status = new StatusCode(value);
	} catch(e) {
		process.stderr.write(`${e.message}\n`);
		process.exit(1);
	}
	process.stdout.write(`\
HTTP Status Codes (statuscodes)

  Status Code: ${status.Code}
  Textual Identifier: ${status.Text}
  Message: ${status.Desc}
  Class: ${Object.keys(statusClass).filter(k => statusClass[k] === status.Class)[0]}

${ack}
`);
}
