import express from 'express';
import Insight from './../mongoose/Insight';

import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  let filter = {};

  if ( req.query.search ) {
    const search = new RegExp(req.query.search, 'i');
    filter = { $text: { $search: search }};
  }

  if (req.query.userId) {
    filter = { 'author._id': mongoose.Types.ObjectId(req.query.userId) };
  }

  const response = await Insight.find(filter);
  await res.status(200).send(response);
});

router.get('/:slug', async (req, res) => {
  const response = await Insight.findOne({ slug: req.params.slug });
  await res.status(200).send(response);
});

router.post('/', async (req, res) => {
  const now = new Date();

  const insight = new Insight({
    ...req.body,
    _createdAt: now,
    _modifiedAt: now,
  });

  insight.save((err, result) => {
    if (err) {
      console.log('-X Insight save failed ' + err);
      res.status(500).json({ error: err, message: 'Insight save failed!' });
      return err;
    }
    console.log(`--- Insight ${insight._id} saved successfully`);
    res.status(200).json({ message: 'Successfully saved a new insight' });
  })
});

router.put('/:_id', async (req, res) => {
  const _id = req.params._id;
  const now = new Date();

  const insight = {
    ...req.body,
    modifiedAt: now,
  };

  await Insight.updateOne({ _id }, { $set: insight }, (err, result) => {
    if (err) {
      console.log('-X Insight update failed ' + err);
      res.status(500).json({ error: err, message: 'Insight update failed!' });
      return err;
    }
    console.log(`--- Insight ${_id} updated successfully`);
    res.status(200).json({ message: 'Successfully updated insight ' + _id});
  });
});

export default router;