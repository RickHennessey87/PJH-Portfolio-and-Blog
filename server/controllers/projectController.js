import Project from '../models/Project.js';

// GET /api/projects
export const getAll = async (req, res, next) => {
  try {
    const projects = await project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

// GET /api/projects/:id
export const getOne = async (req, res, next) => {
  try {
    const project = await project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
  } catch (err) {
    next(err);
  }
};

// project /api/projects
export const create = async (req, res, next) => {
  try {
    const newproject = await project.create(req.body);
    res.status(201).json(newproject);
  } catch (err) {
    next(err);
  }
};

// PUT /api/projects/:id
export const update = async (req, res, next) => {
  try {
    const updated = await project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/projects/:id
export const remove = async (req, res, next) => {
  try {
    await project.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
