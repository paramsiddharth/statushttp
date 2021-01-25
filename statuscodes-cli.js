#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');
const { StatusCode, statusClass } = require('./statuscodes');
const ack = `Made with ❤ by Param Siddharth.`;

if (require && require.main === module) {
	var args = yargs(hideBin(process.argv))
		.usage(`\
${chalk.yellowBright('HTTP Status Codes (statuscodes)')}
Usage: $0 <value> [options]
`)
		.demandCommand(1)
		.alias('?', 'help')
		.help('?')
		.epilog(ack)
		.argv;
	let value = args._[0];
	if (args._.length > 1)
		value = args._.join(' ');
	let status = null;
	try {
		status = new StatusCode(value);
	} catch(e) {
		process.stderr.write(`${e.message}\n`);
		process.exit(1);
	}
	process.stdout.write(`\
Status Code: ${chalk.greenBright(status.Code)}
Textual Identifier: ${chalk.yellowBright(status.Text)}
Message: ${chalk.blueBright.bgBlack(status.Desc)}
Class: ${chalk.yellowBright(Object.keys(statusClass).filter(k => statusClass[k] === status.Class)[0])}

${ack}
`);
}
