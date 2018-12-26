import express from 'express';
import Insight from './../mongoose/Insight';

import mongoose from 'mongoose';

const router = express.Router();

router.delete('/:_id', async (req, res) => {
  const _id = req.params._id;
  const response = await Insight.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Insight delete failed ' + err);
      res.status(500).json({ error: err, message: 'Insight delete failed!' });
      return err;
    }
    console.log(`--- Insight ${_id} deleted successfully`);
    res.status(200).json({ message: 'Successfully deleted Insight ' + _id});
  });
  await res.status(200).send(response);
});

router.get('/', async (req, res) => {
  let filter = {};

  if ( req.query.search ) {
    const search = new RegExp(req.query.search, 'i');
    filter = { $text: { $search: search }};
  }

  if (req.query.userId) {
    filter = { 'author._id': mongoose.Types.ObjectId(req.query.userId) };
  }

  const response = await Insight.find(filter).select({ content: 0 });
  await res.status(200).send(response);
});

router.get('/author/:authorId', async (req, res) => {
  const response = await Insight.find({ 'author._id': req.params.authorId });
  await res.status(200).send(response);
});

router.get('/slug/:slug', async (req, res) => {
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
    res.status(200).json({
      item: insight,
      message: 'Successfully saved a new insight'
    });
  })
});

router.put('/:_id', async (req, res) => {
  const _id = req.params._id;
  const now = new Date();

  const insight = {
    ...req.body,
    modifiedAt: now,
  };

  await Insight.findOneAndUpdate({ _id }, { $set: insight }, { new: true }, (err, result) => {
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