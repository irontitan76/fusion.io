import express from 'express';
import Career from './../mongoose/Career';
import omit from 'lodash.omit';

const router = express.Router();

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

export default router;