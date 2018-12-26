import express from 'express';
import Career from './../mongoose/Career';
import omit from 'lodash.omit';

const router = express.Router();

router.delete('/:_id', async (req, res) => {
  const _id = req.params._id;
  const response = await Career.deleteOne({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Career delete failed ' + err);
      res.status(500).json({ error: err, message: 'Career delete failed!' });
      return err;
    }
    console.log(`--- Career ${_id} deleted successfully`);
    res.status(200).json({ message: 'Successfully deleted Career ' + _id});
  });
  await res.status(200).send(response);
});

router.get('/', async (req, res) => {
  let filter = {};

  if ( req.query.search ) {
    const search = new RegExp(req.query.search, 'i');
    filter = { $text: { $search: search }};
  }

  filter = { ...filter, ...omit(req.query, [ 'search' ]) };

  const response = await Career.find(filter);
  await res.status(200).send(response);
});

router.get('/:_id', async (req, res) => {
  const response = await Career.findOne({ _id: req.params._id });
  await res.status(200).send(response);
});

router.post('/', async (req, res) => {
  const now = new Date();
  const career = new Career({
    _createdAt: now,
    _modifiedAt: now,
    ...req.body,
  });

  await career.save((err, result) => {
    if (err) {
      console.log('-X Career save failed ' + err);
      res.status(500).json({ error: err, message: 'Career save failed!' });
      return err;
    }
    console.log(`--- Career ${career._id} saved successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully saved a new career'
    });
  });
});

router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const now = new Date();

  const career = {
    _modifiedAt: now,
    ...req.body,
  };

  await Career.findOneAndUpdate({ _id }, { $set: career }, { new: true }, (err, result) => {
    if (err) {
      console.log('-X Career update failed ' + err);
      res.status(500).json({ error: err, message: 'Career update failed!' });
      return err;
    }
    console.log(`--- Career ${_id} updated successfully`);
    res.status(200).json({
      item: result,
      message: 'Successfully updated Career ' + _id
    });
  });
});

export default router;