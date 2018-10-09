import express from 'express';
import User from './../mongoose/User';

const router = express.Router();

const isAdmin = () => true;

router.get('/', isAdmin, (req, res) => {
  res.status(200).json({ message: 'Users' });
});

router.post('/login', (req, res) => {
  return User.find({
    // password: req.body.password,
    username: req.body.username,
  }).then(user => res.status(200).json(user))
});

router.post('/signup', (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
  });

  user.save((err, result) => {
    if (err) {
      console.log('-X User save failed ' + err);
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(400).json({ error: 'A user with that email address is already found' });
        return err;
      }
      res.status(500).json({ error: err, message: 'Sign up failed!' });
      return err;
    }
    console.log('--- User saved successfully ' + user._id);
    res.status(200).json({ message: 'Successfully signed up' });
  });
});

module.exports = router;