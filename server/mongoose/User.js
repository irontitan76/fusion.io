import mongoose from 'mongoose';

const { Buffer, ObjectId } = mongoose.Schema.Types;

const validateUsername = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    _createdAt: Date,
    _modifiedAt: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateUsername, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: String
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

export default User;