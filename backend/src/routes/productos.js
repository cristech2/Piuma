const { Router } = require('express');//traigo el Router de express
const router = Router(); // lo guardo en una constante
//traigo los metodos desde el controlador de producto
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct } = require('../controllers/product.controller');

router.route('/') // creo los methods para traer productos y crear uno
    .get(getProducts) //traigo los productos
    .post(createProduct); //creo un producto

router.route('/:id') // creo los methods para los productos en particular
    .get(getProduct) //traigo un unico producto
    .delete(deleteProduct) //elimino un producto
    .put(updateProduct); //actualizo un producto

module.exports = router; //exporto el router