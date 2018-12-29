import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Buffer, ObjectId } = mongoose.Schema.Types;
const SALT_WORK_FACTOR = 10;

const validateUsername = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
  _createdAt: Date,
  _modifiedAt: { type: Date, default: Date.now },
  avatar: {
    type: String,
  },
  firstName: String,
  lastName: String,
  password: String,
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateUsername, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  title: {
    trim: true,
    type: String,
  }
}, { collection: 'users' });

UserSchema.pre('save', function(next) {
  const user = this;

  if ( !user.isModified('password') ) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if ( err ) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(passwordToCompare, cb) {
  bcrypt.compare(passwordToCompare, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

export default User;