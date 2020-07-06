const { Router } = require('express'); // importo el router de express
const router = Router(); // lo guardo en una constante

//traigo los controladores
const { createCategory, getCategorys, deleteCategory } = require('../controllers/category.controller');

router.route('/')
    .get(getCategorys)
    .post(createCategory);
router.route('/:id')
    .delete(deleteCategory);

module.exports = router;