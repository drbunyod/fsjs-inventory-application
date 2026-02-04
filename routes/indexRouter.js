const { Router } = require('express');
const controller = require('../controllers/indexController');

const router = Router();

router.get('/', controller.get);
router.get('/create', controller.getCreateItem);
router.post('/create', controller.postCreateItem);
router.get('/:id/edit', controller.getEditItem);
router.post('/:id/edit', controller.postEditItem);
router.get('/:id/delete', controller.getDeleteItem);

module.exports = router;