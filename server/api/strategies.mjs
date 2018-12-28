import express from 'express';
import Strategy from './../mongoose/Strategy';

import mongoose from 'mongoose';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  const self = await Strategy.findOne({ _id });

  await Strategy.updateMany(
    { order: { $gt: self.order }},
    { $inc: { order: -1, id: -1 }},
  );

  const response = await Strategy.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Strategy delete failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Strategy delete failed!',
      });
      return err;
    }
    console.log(`--- Strategy ${_id} deleted successfully`);
    res.status(200).json({
      message: 'Successfully deleted Strategy ' + _id,
    });
  });
});

router.get('/', async (req, res) => {
  await Strategy.find({}, (err, result) => {
    if ( err ) {
      console.log('-X Strategies find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Strategies find failed!',
      });
      return err;
    }
    console.log(`--- Strategies found successfully`);
    res.status(200).json({
      items: result,
      message: 'Successfully found Strategies',
    });
  });
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;

  await Strategy.findOne({ _id }, (err, result) => {
    if ( err ) {
      console.log(`-X Strategy ${_id} find failed ${err}`);
      res.status(500).json({
        error: err,
        message: `Strategy ${id} find failed!`,
      });
      return err;
    }
    console.log(`--- Strategy ${_id} found successfully`);
    res.status(200).json({
      item: result,
      message: `Successfully found Strategy ${_id}`,
    });
  });
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
      res.status(500).json({
        error: err,
        message: 'Strategy save failed!',
      });
      return err;
    }
    console.log(`--- Strategy ${strategy._id} saved successfully`);
    res.status(200).json({
      message: 'Successfully saved a new strategy',
    });
  })
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const parent = await Strategy.findOne({ id: req.body.parentId });
  const self = await Strategy.findOne({ _id });
  const sibling = await Strategy.findOne({ id: req.body.siblingId });

  let level;
  if ( parent ) {
    level = parent.level + 1;
  } else {
    level = 0;
  }

  let order;
  if ( sibling ) {
    let next;
    next = await Strategy.findOne({
      level: sibling.level,
      order: { $gt: sibling.order },
    }).sort({ order: 1 });

    if ( !next ) {
      next = await Strategy.findOne({
        level: parent.level,
        order: { $gt: parent.order },
      }).sort({ order: 1 });
    }

    const nextChildren = await Strategy.countDocuments({
      order: {
        $gt: sibling.order,
        $lt: (next && next.order) || await Strategy.countDocuments({})
      },
    });

    order = sibling.order + nextChildren + 1;

  } else if ( parent ){
    order = parent.order + 1;
  } else {
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
    parentId: req.body.parentId,
    siblingId: req.body.siblingId,
    title: req.body.title,
  };

  await Strategy.updateOne({ _id }, { $set: strategy }, (err, result) => {
    if (err) {
      console.log('-X Strategy update failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Strategy update failed!',
      });
      return err;
    }
    console.log(`--- Strategy ${_id} updated successfully`);
    res.status(200).json({
      message: 'Successfully updated strategy ' + _id,
    });
  });
});

export default router;