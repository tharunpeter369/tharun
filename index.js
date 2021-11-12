#!/usr/bin/env node

// const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');
const welcome = require(`cli-welcome`)
const chalk = require('chalk');
const log = console.log;

const Github = chalk.hex(`89ba16`).bold.inverse;

//Alerts.
// const logSymbols = require('log-symbols');
// var Sym = require('log-symbols');
const success = chalk.green;
const info = chalk.keyword(`blue`)
const warning = chalk.keyword(`orange`)
const error = chalk.keyword(`red`).bold;


// clearConsole();

// console.log(`
// NAME: ${pkgJSON.name}
// VERSION: ${pkgJSON.version}
// DESCRIPTION: ${pkgJSON.description}`
// );

welcome({
    title:`${pkgJSON.name}`,
    tagline:`Get to know tharun`,
    description:`${pkgJSON.description}`,
    version:`${pkgJSON.version}`,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    // clear: true,
    clear: false,
})
 
log(`
${chalk.bgBlue(` Tharun Peter `)}
${chalk.hex(`00bce4`).italic.dim(`I am a self-taught Full Stack Web-Developer from Ernalulam, Kerala, India.`)}

${Github(` Github `)}: ${chalk.blue(`https://github.com/tharunpeter369`)}
`)
// log(chalk.green.underline(`This is green`))
log(`
${success(` SUCCESS: `)}  Thanks for checking out my CLI.

 ${info(` INFO: `)}  I'am creating a CLI for you.

 ${warning(` WARNING: `)}  This is a warning.

 ${error(` ERROR:`)}  Am on vecation contact me on next week.
`)
