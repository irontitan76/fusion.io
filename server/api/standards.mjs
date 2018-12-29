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
      res.status(500).json({
        error: err,
        message: 'Standard delete failed!',
      });
      return err;
    }
    console.log(`--- Standard ${_id} deleted successfully`);
    res.status(200).json({
      message: 'Successfully deleted Standard ' + _id,
    });
  });
});

router.get('/', async (req, res) => {
  await Standard.find({}, (err, result) => {
    if ( err ) {
      console.log('-X Standards find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Standards find failed!',
      });
      return err;
    }
    console.log(`--- Standards found successfully`);
    res.status(200).json({
      items: result,
      message: 'Successfully found Standards',
    });
  });
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;

  await Standard.findOne({ _id }, (err, result) => {
    if ( err ) {
      console.log(`-X Standard ${_id} find failed ${err}`);
      res.status(500).json({
        error: err,
        message: `Standard ${id} find failed!`,
      });
      return err;
    }
    console.log(`--- Standard ${_id} found successfully`);
    res.status(200).json({
      item: result,
      message: `Successfully found Standard ${_id}`,
    });
  });
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
    siblingId: eq.body.siblingId === 'none' ? null : req.body.siblingId,
    title: req.body.title,
  });

  standard.save((err, result) => {
    if (err) {
      console.log('-X Standard save failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Standard save failed!',
      });
      return err;
    }
    console.log(`--- Standard ${standard._id} saved successfully`);
    res.status(200).json({
      message: 'Successfully saved a new standard',
    });
  })
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const { parentId, siblingId } = req.body;

  const parent = await Standard.findOne({ id: parentId });
  const self = await Standard.findOne({ _id });

  let sibling = null;
  if (siblingId && siblingId !== 'none') {
    sibling = await Standard.findOne({ id: siblingId });
  }

  let level = null;
  if (parent) {
    level = parent.level + 1;
  } else {
    level = 0;
  }

  let order = null;
  if (sibling) {
    order = sibling.order;
  } else if (parent) {
    order = parent.order;
  } else {
    order = 0;
  }

  const replace = await Standard.findOne({ order });

  if (replace) {
    if (replace.order > self.order) {
      await Standard.updateMany(
        { order: { $gt: self.order, $lte: replace.order }},
        { $inc: { order: -1 }},
      );
    } else if ( replace.order < self.order ) {
      await Standard.updateMany(
        { order: { $gt: replace.order, $lte: self.order }},
        { $inc: { order: 1 }},
      );
      order = order + 1;
    }
  } else {
    await Standard.updateMany(
      { order: { $gte: self.order }},
      { $inc: { order: -1 }},
    );
  }

  const now = new Date();
  const standard = {
    _modifiedAt: now,
    content: req.body.content,
    level,
    order,
    parentId: parentId,
    siblingId: siblingId === 'none' ? null : siblingId,
    title: req.body.title,
  };

  await Standard.updateOne({ _id }, { $set: standard }, (err, result) => {
    if (err) {
      console.log('-X Standard update failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Standard update failed!',
      });
      return err;
    }
    console.log(`--- Standard ${_id} updated successfully`);
    res.status(200).json({
      message: 'Successfully updated standard ' + _id,
    });
  });
});

export default router;