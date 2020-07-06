const userCtrl = {}; // declaro el controller
const User = require('../models/User'); // traigo el modelo de datos de Usuarios

// creo la funcion de buscar usuarios
userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find(); //traigo de la db todos los usuarios y lo guardo en una constante
        res.json(users); //devuelvo en formato json los usuarios obtenidos


    } catch (err) {
        res.status(400).json({
            error: err
        });

    }
};

//creo la funcion de crear usuarios
userCtrl.createUser = async (req, res) => {
    try {
        const { username, name, password } = req.body;
        const newUser = new User({
            username,
            name,
            password
        });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);

    }
};
//creo la funcion de borrar usuarios
userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
};


module.exports = userCtrl; //exporto el controlador de usuarios