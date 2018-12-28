import express from 'express';
import Insight from './../mongoose/Insight';

import mongoose from 'mongoose';

const router = express.Router();

router.delete('/:_id', async (req, res) => {
  const _id = req.params._id;

  await Insight.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Insight delete failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Insight delete failed!',
      });
      return err;
    }
    console.log(`--- Insight ${_id} deleted successfully`);
    res.status(200).json({
      message: 'Successfully deleted Insight ' + _id,
    });
  });
});

router.get('/', async (req, res) => {
  let filter = {};

  if ( req.query.search ) {
    const search = new RegExp(req.query.search, 'i');
    filter = { $text: { $search: search }};
  }

  await Insight.find(filter).select({ content: 0 }).exec((err, result) => {
    if ( err ) {
      console.log('-X Insights find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Insights find failed!',
      });
      return err;
    }
    console.log(`--- Insights found successfully, filter = ${JSON.stringify(req.query)}`);
    res.status(200).json({
      items: result,
      message: 'Successfully found Insights',
    });
  });
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;

  await Insight.findOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Insight find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Insight find failed!',
      });
      return err;
    }
    console.log(`--- Insight ${_id} found successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully found Insight ' + _id,
    });
  });
});

router.get('/author/:authorId', async (req, res) => {
  const authorId = req.params.authorId;

  await Insight.find({ 'author._id': authorId }, (err, result) => {
    if ( err ) {
      console.log('-X Insight find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Insight find failed!',
      });
      return err;
    }
    console.log(`--- Insight ${_id} found successfully`);
    res.status(200).json({
      items: result,
      message: 'Successfully found Insight ' + _id,
    });
  });
});

router.get('/slug/:slug', async (req, res) => {
  const slug = req.params.slug;

  await Insight.findOne({ slug }, (err, result) => {
    if ( err ) {
      console.log('-X Insight find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Insight fiind failed!',
      });
      return err;
    }
    console.log(`--- Insight ${slug} found successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully found Insight ' + slug,
    });
  });
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
      res.status(500).json({
        error: err,
        message: 'Insight save failed!',
      });
      return err;
    }
    console.log(`--- Insight ${insight._id} saved successfully`);
    res.status(200).json({
      item: insight,
      message: 'Successfully saved a new insight',
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
      res.status(500).json({
        error: err,
        message: 'Insight update failed!',
      });
      return err;
    }
    console.log(`--- Insight ${_id} updated successfully`);
    res.status(200).json({
      message: 'Successfully updated insight ' + _id,
    });
  });
});

export default router;