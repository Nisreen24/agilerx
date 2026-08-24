import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const url = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3] ?? '';
const width = Number(process.argv[4] ?? 1440);
const height = Number(process.argv[5] ?? 1000);
const dir = 'temporary screenshots';

await mkdir(dir, { recursive: true });
const existing = await readdir(dir);
const next = 1 + existing.reduce((max, f) => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? Math.max(max, Number(m[1])) : max;
}, 0);
const out = join(dir, `screenshot-${next}${label ? '-' + label : ''}.png`);

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width, height, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
