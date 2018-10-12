import express from 'express';
import Insight from './../mongoose/Insight';

import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  let filter = {};
  if (req.query.userId) {
    filter = { 'author._id': mongoose.Types.ObjectId(req.query.userId) };
  }

  const response = await Insight.find(filter);
  await res.status(200).send(response);
});

router.get('/:slug', async (req, res) => {
  const response = await Insight.find({ slug: req.params.slug });
  await res.status(200).send(response);
});

module.exports = router;