const { Schema, model } = require('mongoose'); // traigo schema y model de mongoose

//defino el esquema para productos

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        stock: Number,
        personalized: Boolean,
        sale: Boolean,
        nOfPruchased: Number
    }
);

module.exports = model('Product', productSchema);//lo exporto