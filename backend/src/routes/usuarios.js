const { Router } = require('express'); // importo el enrutador de express
const router = Router(); // lo declaro en una constante

// traigo los metodos que cree en el controlador
const { getUsers, createUser, deleteUser } = require('../controllers/user.controller');

router.route('/') //creo los metodos para  el path /usuarios
    .get(getUsers) //method get para /usuarios
    .post(createUser); //method post para /usuarios
router.route('/:id') // creo el metodo para /usuarios/id
    .delete(deleteUser);

module.exports = router; //exporto el router de usuarios