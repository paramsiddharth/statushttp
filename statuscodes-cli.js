#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');
const { StatusCode, statusClass } = require('./statuscodes');
const ack = chalk.greenBright(`Made with ❤ by Param Siddharth.`);

if (require && require.main === module) {
	var args = yargs(hideBin(process.argv))
		.usage(`\
${chalk.yellowBright('HTTP Status Codes (statuscodes)')}
Gives details about HTTP status codes/messages.

Usage: statuscodes <value> [options]`)
		.example('statuscodes 200', `Gives information about status code 200.`)
		.example('statuscodes Ok', `Gives information about the HTTP status with message OK.`)
		.example('statuscodes not found', `Gives information about the HTTP status with message 'Not Found'.`)
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
Textual Identifier: ${chalk.yellow(status.Text)}
Message: ${chalk.cyan(status.Desc)}
Class: ${chalk.yellow(Object.keys(statusClass).filter(k => statusClass[k] === status.Class)[0])}
`);
}
