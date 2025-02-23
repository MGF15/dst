#!/usr/bin/env node

// Get the timestamp argument from the command line
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: dst <timestamp>");
    process.exit(1);
}

const timestamp = parseInt(args[0], 10);

if (isNaN(timestamp)) {
    console.error("Error: Invalid timestamp. Please provide a valid Unix timestamp.");
    process.exit(1);
}

const date = new Date(timestamp * 1000);
console.log(`Decoded Date: ${date.toISOString()} (${date.toLocaleString()})`);

