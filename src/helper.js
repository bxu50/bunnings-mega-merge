
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import csv from 'csv-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const readCsv = (pathname) => {
  return new Promise((resolve) => {
    const output = [];
    fs.createReadStream(pathname)
    .pipe(csv())
    .on('data', data => {
      output.push(data)
    })
    .on('end', () => {
      resolve(output)
    })
  })
};

export const pathname = (pathUrl) => path.resolve(__dirname, pathUrl)
