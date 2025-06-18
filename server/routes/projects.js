import { Router } from 'express';
import * as projects from '../controllers/projectController.js';

const router = Router();

router.get('/',       projects.getAll);
router.get('/:id',    projects.getOne);
router.post('/',      projects.create);
router.put('/:id',    projects.update);
router.delete('/:id', projects.remove);

export default router;
