#!/usr/bin/node
const printMessageForArgs = process.argv.length;
console.log(printMessageForArgs === 2 ? 'No Argument found' : printMessageForArgs === 3 ? 'Argument found' : 'Argument found');
