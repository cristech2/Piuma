const { Schema, model } = require('mongoose'); // importo el esquema y el modelo de mongoose

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        }
    }
);

module.exports = model('Category', categorySchema); //exporto el modelo