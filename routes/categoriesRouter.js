const { Router } = require('express');
const controller = require('../controllers/categoriesController');

const router = Router();

router.get('/', controller.get);
router.get('/create', controller.getCreateCategory);
router.post('/create', controller.postCreateCategory);
router.get('/:id/edit', controller.getEditCategory);
router.post('/:id/edit', controller.postEditCategory);
router.get('/:id/delete', controller.getDeleteCategory);

module.exports = router;