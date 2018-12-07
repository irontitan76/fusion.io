import express from 'express';
import Standard from './../mongoose/Standard';

import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Standard.find({});
  await res.status(200).send(response);
});

module.exports = router;