import path from 'path';
import { BrowserApi } from 'phantomjscloud';
import sharp from 'sharp';
import fs from 'fs';

const browser = new BrowserApi('ak-c8w6b-j1cej-n586y-w3167-q9gy5');

export async function takeScreenshot(url) {
  const fileWebp = url + '.webp';
  const fileJpg = url + '.jpg';

  const filePathWebp = path.resolve('static', 'images', 'uploads', fileWebp);
  const filePathPng = path.resolve('static', 'images', 'uploads', fileJpg);

  if (fs.existsSync(filePathWebp)) {
    fs.unlinkSync(filePathWebp);
  }
  if (fs.existsSync(filePathPng)) {
    fs.unlinkSync(filePathPng);
  }

  const photo = await browser.requestSingle({
    url: `https://${url}`,
    renderType: 'jpeg',
    outputAsJson: false,
    renderSettings: {
      viewport: {
        width: 1280,
      },
    },
  });

  const buffer = new Buffer(photo.content.data, 'base64');
  const sharpFile = await sharp(buffer).resize(300);
  await Promise.all([sharpFile.toFile(filePathWebp), sharpFile.toFile(filePathPng)]);
}
