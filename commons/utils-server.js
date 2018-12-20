import path from 'path';
import sharp from 'sharp';
import axios from 'axios';
import fs from 'fs';

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

  const response = await axios.get(
    `https://image.thum.io/get/width/300/fullpage/allowJPG/wait/2/https://${url}`,
    { responseType: 'arraybuffer' }
  );
  const buffer = new Buffer(response.data, 'binary');
  const sharpFile = await sharp(buffer).resize(300);
  await Promise.all([sharpFile.toFile(filePathWebp), sharpFile.toFile(filePathPng)]);
}
