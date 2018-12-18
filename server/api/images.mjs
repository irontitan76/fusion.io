import express from 'express';
import fs from 'fs';
import path from 'path';
import gm from 'gm';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const router = express.Router();

function generateSlug() {
  let slug = '';
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for ( let i = 0; i < 5; i++ ) {
    slug += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return slug;
}

router.get('/', async (req, res) => {
  await res.status(200).send('hi');
});

router.get('/resize/:imageId/:width?/:height?', async (req, res) => {
  let { height, imageId, width } = req.params;
  const d = new Date();
  const now = d.toISOString();

  try {
    const imageToResize = path.join(__dirname, `./../assets/images/${imageId}`);
    const cachePath = path.join(__dirname, '../cache');
    const cacheImagePath = path.join(cachePath, '/images');

    await gm(imageToResize).format(async (err, val) => {
      height = height || null;
      width = width || null;

      if ( err ) {
        console.error(err);
        return err;
      }

      const outputImage = path.join(cacheImagePath, `${generateSlug()}.${val}`);

      if ( height === null && width === null ) {
        return res.sendFile(imageToResize);
      }

      if (!fs.existsSync(cachePath)) {
        fs.mkdirSync(cachePath);
      }

      if (!fs.existsSync(cacheImagePath)) {
        fs.mkdirSync(cacheImagePath);
      }

      let { maintain } = req.query;
      maintain = !maintain ? null : '!';
      await gm(imageToResize).resize(width, height, maintain).write(outputImage, (err) => {
        if (err) {
          console.error(`${now} - The image ${imageId} could not be resized`);
          res.json({ err, message: 'Could not resize image' });
        }
        else return res.sendFile(outputImage);
      });
    });
  } catch (err) {
    console.error(`${now} - The image ${imageId} could not be resized`);
    res.json({ err, message: 'Could not resize image' });
  }
});

export default router;