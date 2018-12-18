import express from 'express';
import Career from './../mongoose/Career';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Career.find({});
  await res.status(200).send(response);
});

export default router;