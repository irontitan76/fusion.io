import express from 'express';
import Standard from './../mongoose/Standard';

import mongoose from 'mongoose';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  const self = await Standard.findOne({ _id });

  await Standard.updateMany(
    { order: { $gt: self.order }},
    { $inc: { order: -1, id: -1 }},
  );

  const response = await Standard.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Standard delete failed ' + err);
      res.status(500).json({ error: err, message: 'Standard update failed!' });
      return err;
    }
    console.log(`--- Standard ${_id} deleted successfully`);
    res.status(200).json({ message: 'Successfully deleted Standard ' + _id});
  });
});

router.get('/', async (req, res) => {
  const response = await Standard.find({});
  await res.status(200).send(response);
});

router.get('/:id', async (req, res) => {
  const response = await Standard.findOne({ _id: req.params.id });
  await res.status(200).send(response);
});

router.post('/', async (req, res) => {
  const parent = await Standard.findOne({ id: req.body.parentId });
  const sibling = await Standard.findOne({ id: req.body.siblingId });
  const siblingChildrenCount = await Standard.countDocuments({
    parentId: req.body.siblingId
  });
  const count = await Standard.countDocuments() + 1;

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

  await Standard.updateMany(
    { order: { $gte: order }},
    { $inc: { order: 1 }},
    { multi: true }
  );

  const now = new Date();

  const standard = new Standard({
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

  standard.save((err, result) => {
    if (err) {
      console.log('-X Standard save failed ' + err);
      res.status(500).json({ error: err, message: 'Standard save failed!' });
      return err;
    }
    console.log(`--- Standard ${standard._id} saved successfully`);
    res.status(200).json({ message: 'Successfully saved a new standard' });
  })
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const parent = await Standard.findOne({ id: req.body.parentId });
  const self = await Standard.findOne({ _id });
  const sibling = await Standard.findOne({ id: req.body.siblingId });

  let level;
  if ( parent ) {
    level = parent.level + 1;
  } else {
    level = 0;
  }

  let order;
  if ( sibling ) {
    let next;
    next = await Standard.findOne({
      level: sibling.level,
      order: { $gt: sibling.order },
    }).sort({ order: 1 });

    if ( !next ) {
      next = await Standard.findOne({
        level: parent.level,
        order: { $gt: parent.order },
      }).sort({ order: 1 });
    }

    const nextChildren = await Standard.countDocuments({
      order: {
        $gt: sibling.order,
        $lt: (next && next.order) || await Standard.countDocuments({})
      },
    });

    order = sibling.order + nextChildren + 1;

  } else if ( parent ){
    order = parent.order + 1;
  } else {
    order = 0;
  }

  await Standard.updateMany(
    { order: { $gt: self.order, $lte: order }},
    { $inc: { order: -1 }},
  );

  const now = new Date();

  const standard = {
    _modifiedAt: now,
    content: req.body.content,
    level,
    order,
    parentId: req.body.parentId,
    siblingId: req.body.siblingId,
    title: req.body.title,
  };

  await Standard.updateOne({ _id }, { $set: standard }, (err, result) => {
    if (err) {
      console.log('-X Standard update failed ' + err);
      res.status(500).json({ error: err, message: 'Standard update failed!' });
      return err;
    }
    console.log(`--- Standard ${_id} updated successfully`);
    res.status(200).json({ message: 'Successfully updated standard ' + _id});
  });
});

module.exports = router;