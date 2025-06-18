import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:     { type: String, required: true, trim: true },
    content:   { type: String, required: true },
    tags:      [String],
    featured:  { type: Boolean, default: false },
    createdAt: { type: Date,    default: Date.now },
});

export default mongoose.model('Post', postSchema);