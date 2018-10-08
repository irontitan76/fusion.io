import express from 'express';

const router = express.Router();
router.use('/insights', require('./insights'));
router.use('/users', require('./users'));

module.exports = router;