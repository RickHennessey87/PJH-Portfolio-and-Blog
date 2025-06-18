import { Router } from 'express';
import * as posts from '../controllers/postController.js';

const router = Router();

router.get('/',       posts.getAll);
router.get('/:id',    posts.getOne);
router.post('/',      posts.create);
router.put('/:id',    posts.update);
router.delete('/:id', posts.remove);

export default router;
