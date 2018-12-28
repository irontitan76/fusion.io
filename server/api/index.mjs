import express from 'express';
import careers from './careers';
import images from './images';
import insights from './insights';
import policies from './policies';
import products from './products';
import standards from './standards';
import strategies from './strategies';
import users from './users';

const router = express.Router();
router.use('/careers', careers);
router.use('/images', images);
router.use('/insights', insights);
router.use('/policies', policies);
router.use('/products', products);
router.use('/standards', standards);
router.use('/strategies', strategies);
router.use('/users', users);

export default router;