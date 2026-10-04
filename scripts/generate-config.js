#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const outPath = path.resolve(__dirname, '..', 'config.js');
const value = process.env.COC_DEFAULT_KEY || '';
const script = `window.COC_DEFAULT_KEY = ${JSON.stringify(value)};\n`;

fs.writeFileSync(outPath, script, 'utf8');
console.log(`Wrote ${path.relative(process.cwd(), outPath)} with COC_DEFAULT_KEY=${value ? 'set' : 'empty'}`);
