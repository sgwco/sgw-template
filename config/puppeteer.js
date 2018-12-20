import puppeteer from 'puppeteer';
import path from 'path';
import sharp from 'sharp';

export async function takeScreenshot(url, filename) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`https://${url}`);
  const buffer = await page.screenshot({
    fullPage: true,
  });
  browser.close();
  await sharp(buffer)
    .resize(300)
    .toFile(path.resolve(__dirname, '..', 'static', 'images', 'uploads', filename));

  return `/static/images/uploads/${filename}`;
}
