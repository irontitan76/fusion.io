import express from 'express';
import Product from './../mongoose/Product';

const router = express.Router();

router.get('/', async (req, res) => {
  await Product.find({}, (err, result => {
    if ( err ) {
      console.log('-X Products find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Products find failed!',
      });
      return err;
    }
    console.log('--- Products found successfully');
    res.status(200).json({
      items: result,
      message: 'Successfully found Products',
    });
  }));
});

router.get('/:_id', async (req, res) => {
  const _id = req.params._id;

  const response = await Product.find({ _id }, (err, result) => {
    if ( err ) {
      console.log('-X Product find failed ' + err);
      res.status(500).json({
        error: err,
        message: 'Product find failed!',
      });
      return err;
    }
    console.log('--- Product found successfully');
    res.status(200).json({
      items: result,
      message: `Successfully found Product ${_id}`,
    });
  });
});

export default router;