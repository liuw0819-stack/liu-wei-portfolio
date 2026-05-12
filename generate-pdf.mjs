import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

// Force all framer-motion animations to their final state
await page.addStyleTag({ content: `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
` });

// Scroll through entire page to trigger all InView hooks
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const step = 600;
for (let pos = 0; pos <= totalHeight; pos += step) {
  await page.evaluate((y) => window.scrollTo(0, y), pos);
  await page.waitForTimeout(80);
}

// Scroll back to top
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

// Force opacity/transform on all motion elements to final state
await page.evaluate(() => {
  document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

await page.waitForTimeout(300);

await page.pdf({
  path: path.join(__dirname, '刘威作品集.pdf'),
  format: 'A4',
  landscape: true,
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  scale: 0.72,
});

console.log('PDF generated!');
await browser.close();
