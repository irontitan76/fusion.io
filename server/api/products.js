import express from 'express';
import Product from './../mongoose/Product';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Product.find({});
  await res.status(200).send(response);
});

router.get('/:id', async (req, res) => {
  const response = await Product.find({ id: req.params.id });
  await res.status(200).send(response);
});

module.exports = router;