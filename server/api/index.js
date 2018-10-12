import express from 'express';

const router = express.Router();
router.use('/careers', require('./careers'));
router.use('/insights', require('./insights'));
router.use('/products', require('./products'));
router.use('/users', require('./users'));

module.exports = router;