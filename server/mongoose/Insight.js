import mongoose from 'mongoose';

const { Buffer, ObjectId } = mongoose.Schema.Types;
const insightSchema = new mongoose.Schema({
    _createdAt: Date,
    _modifiedAt: { type: Date, default: Date.now },
    _publishedAt: Date,
    // authorId: ObjectId,
    body: String,
    // comments: [{
    //   author: {
    //     name: String
    //   },
    //   body: String,
    //   date: Date,
    //   discussionId: ObjectId,
    //   slug: String,
    // }],
    // meta: {
    //   likes: Number,
    // },
    // image: {
    //   contentType: String,
    //   data: Buffer,
    // },
    slug: String,
    subtitle: String,
    title: String,
}, { collection: 'insights' });

const Insight = mongoose.model('Insight', insightSchema);

export default Insight;