import express from 'express';
import Strategy from './../mongoose/Strategy';

import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Strategy.find({});
  await res.status(200).send(response);
});

module.exports = router;