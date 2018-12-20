import path from 'path';
import sharp from 'sharp';
import axios from 'axios';
import fs from 'fs';

export async function takeScreenshot(url, filename) {
  const filePath = path.resolve('static', 'images', 'uploads', filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(path.resolve('static', 'images', 'uploads', filename));
  }
  const response = await axios.get(
    `https://image.thum.io/get/width/300/fullpage/png/https://${url}`,
    { responseType: 'arraybuffer' }
  );
  const buffer = new Buffer(response.data, 'binary');
  await sharp(buffer)
    .resize(300)
    .toFile(path.resolve('static', 'images', 'uploads', filename));

  return `/static/images/uploads/${filename}`;
}
