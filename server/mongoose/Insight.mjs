import mongoose from 'mongoose';

const { Buffer, ObjectId } = mongoose.Schema.Types;

function generateSlug() {
  let slug = '';
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for ( let i = 0; i < 5; i++ ) {
    slug += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return slug;
}

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
    author: {
      _id: ObjectId,
      avatar: String,
      name: String,
      title: String
    },
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

insightSchema.pre('save', function (next) {
  this.slug = generateSlug();
  next();
});

const autoIndex = process.env.NODE_ENV !== 'production';
insightSchema.set('autoIndex', autoIndex, {
  collation: {
    locale: 'en',
    strength: 1,
  }
});

insightSchema.index({
  author: 'text',
  brief: 'text',
  slug: 'text',
  subtitle: 'text',
  title: 'text',
});

const Insight = mongoose.model('Insight', insightSchema);

export default Insight;