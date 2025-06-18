import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  repoUrl:     { type: String },
  liveUrl:     { type: String },
  techStack:   [String],
  createdAt:   { type: Date, default: Date.now },
});

export default mongoose.model('Project', projectSchema);