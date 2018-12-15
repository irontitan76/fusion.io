import express from 'express';
import Strategy from './../mongoose/Strategy';

import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Strategy.find({});
  await res.status(200).send(response);
});

router.get('/:id', async (req, res) => {
  const response = await Strategy.findOne({ _id: req.params.id });
  await res.status(200).send(response);
});

router.post('/', async (req, res) => {
  const parent = await Strategy.findOne({ id: req.body.parentId });
  const sibling = await Strategy.findOne({ id: req.body.siblingId });
  const siblingChildrenCount = await Strategy.countDocuments({
    parentId: req.body.siblingId
  });
  const count = await Strategy.countDocuments() + 1;

  let level, order;
  if ( sibling ) {
    level = parent.level + 1;
    order = sibling.order + siblingChildrenCount + 1;
  } else  if ( parent ){
    level = parent.level + 1;
    order = parent.order + 1;
  } else {
    level = 0;
    order = 0;
  }

  await Strategy.updateMany(
    { order: { $gte: order }},
    { $inc: { order: 1 }},
    { multi: true }
  );

  const now = new Date();

  const strategy = new Strategy({
    _createdAt: now,
    _modifiedAt: now,
    id: count,
    content: req.body.content,
    level: req.body.level || level,
    order: req.body.order || order,
    parentId: req.body.parentId || null,
    siblingId: req.body.siblingId || null,
    title: req.body.title,
  });

  strategy.save((err, result) => {
    if (err) {
      console.log('-X Strategy save failed ' + err);
      res.status(500).json({ error: err, message: 'Strategy save failed!' });
      return err;
    }
    console.log(`--- Strategy ${strategy._id} saved successfully`);
    res.status(200).json({ message: 'Successfully saved a new strategy' });
  })
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const parent = await Strategy.findOne({ id: req.body.parentId });
  const self = await Strategy.findOne({ _id });
  const sibling = await Strategy.findOne({ id: req.body.siblingId });
  const siblingChildrenCount = await Strategy.countDocuments({
    parentId: req.body.siblingId
  });



  let level, order;
  if ( sibling ) {
    level = parent.level + 1;
    order = sibling.order;
    const count = await Strategy.findOne({ order: { $gt: order }, level: parent.level });
    console.log('COUNT', count);
    if ( siblingChildrenCount ) {
      order = order + siblingChildrenCount + 1;
    };
  } else  if ( parent ){
    level = parent.level + 1;
    order = parent.order + 1;
  } else {
    level = 0;
    order = 0;
  }

  await Strategy.updateMany(
    { order: { $gt: self.order, $lte: order }},
    { $inc: { order: -1 }},
  );

  const now = new Date();

  const strategy = {
    _modifiedAt: now,
    content: req.body.content,
    level,
    order,
    parentId: req.body.parentId || null,
    siblingId: req.body.siblingId || null,
    title: req.body.title,
  };

  await Strategy.updateOne({ _id }, { $set: strategy }, (err, result) => {
    if (err) {
      console.log('-X Strategy update failed ' + err);
      res.status(500).json({ error: err, message: 'Strategy update failed!' });
      return err;
    }
    console.log(`--- Strategy ${_id} updated successfully`);
    res.status(200).json({ message: 'Successfully updated strategy ' + _id});
  });
})

module.exports = router;