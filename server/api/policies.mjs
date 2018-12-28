import express from 'express';
import Policy from './../mongoose/Policy';
import omit from 'lodash.omit';

const router = express.Router();

router.delete('/:_id', async (req, res) => {
  const _id = req.params._id;

  await Policy.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Policy delete failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Policy delete failed!',
      });
      return err;
    }
    console.log(`--- Policy ${_id} deleted successfully`);
    res.status(200).json({
      message: 'Successfully deleted Policy ' + _id,
    });
  });
});

router.get('/', async (req, res) => {
  let filter = {};

  if ( req.query.search ) {
    const search = new RegExp(req.query.search, 'i');
    filter = { $text: { $search: search }};
  }

  filter = { ...filter, ...omit(req.query, [ 'search' ]) };

  await Policy.find(filter, (err, result) => {
    if ( err ) {
      console.log('-X Policy find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Policies found failed!',
      });
      return err;
    }
    console.log(`--- Policies found successfully`);
    res.status(200).json({
      items: result,
      message: 'Successfully found Policies',
    });
  });
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;
  await Policy.findOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Policy find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Policy find failed!',
      });
      return err;
    }
    console.log(`--- Policy ${_id} found successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully found Policy ' + _id,
    });
  });
});

router.post('/', async (req, res) => {
  const now = new Date();
  const policy = new Policy({
    _createdAt: now,
    _modifiedAt: now,
    ...req.body,
  });

  await policy.save((err, result) => {
    if (err) {
      console.log('-X Policy save failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Policy save failed!',
      });
      return err;
    }
    console.log(`--- Policy ${policy._id} saved successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully saved a new policy',
    });
  });
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const now = new Date();

  const policy = {
    _modifiedAt: now,
    ...req.body,
  };

  await Policy.findOneAndUpdate({ _id }, { $set: policy }, { new: true }, (err, result) => {
    if (err) {
      console.log('-X Policy update failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Policy update failed!',
      });
      return err;
    }
    console.log(`--- Policy ${_id} updated successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully updated Policy ' + _id,
    });
  });
});

export default router;