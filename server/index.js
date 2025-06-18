import express  from 'express';
import mongoose from 'mongoose';
import cors     from 'cors';
import dotenv   from 'dotenv';

import postsRouter    from './routes/posts.js';
import projectsRouter from './routes/projects.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json());

app.use('/api/posts',    postsRouter);
app.use('/api/projects', projectsRouter);

const { MONGODB_URI, PORT = 5000 } = process.env;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server ready on ${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  });