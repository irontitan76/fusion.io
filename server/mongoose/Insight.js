import mongoose from 'mongoose';

const { Buffer, ObjectId } = mongoose.Schema.Types;

const mediaSchema = new mongoose.Schema({
  alt: { type: String },
  src: { type: String },
  type: { type: String, enum: ['img'] }
});

const insightSchema = new mongoose.Schema({
    _createdAt: {
      required: true,
      type: Date,
    },
    _modifiedAt: {
      default: Date.now,
      type: Date,
    },
    _publishedAt: {
      type: Date
    },
    // authorId: ObjectId,
    brief: {
      required: 'A short description is required',
      trim: true,
      type: String,
    },
    content: {
      required: 'Article content is required',
      trim: true,
      type: String,
    },
    // comments: [{
    //   author: {
    //     name: String
    //   },
    //   body: String,
    //   date: Date,
    //   discussionId: ObjectId,
    //   slug: String,
    // }],
    media: mediaSchema,
    meta: {
      likes: {
        default: 0,
        type: Number,
      },
    },
    slug: {
      trim: true,
      type: String,
    },
    subtitle: {
      trim: true,
      type: String,
    },
    title: {
      trim: true,
      type: String,
    },
}, { collection: 'insights' });

const Insight = mongoose.model('Insight', insightSchema);

export default Insight;