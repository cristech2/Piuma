// traigo el squema y el modelo de mongoose
const { Schema, model } = require('mongoose');

//declaro como sera el formato de los datos de la collection users
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        name: String,
        password:{
            type: String,
            required: true,
        }

    }
);

module.exports = model('User', userSchema); //lo exporto