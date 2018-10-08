import express from 'express';
import Insight from './../mongoose/Insight';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await Insight.find({});
  await res.status(200).send(response);
});

module.exports = router;