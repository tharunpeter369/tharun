#!/usr/bin/env node

// const clearConsole = require('clear-any-console');
const pkgJSON = require('./package.json');
const welcome = require(`cli-welcome`)

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

console.log(`Tharun Peter`)