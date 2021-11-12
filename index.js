#!/usr/bin/env node

// const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');
const welcome = require(`cli-welcome`)
const chalk = require('chalk');
const log = console.log;

const Github = chalk.hex(`89ba16`).bold.inverse;

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