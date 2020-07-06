const productCtrl = {}; //declaro el controller
const Product = require('../models/product'); //traigo el modelo de productos



//creo la funcion para traer los productos
productCtrl.getProducts = async (req, res) => {
    try { //intento traer los productos
        const products = await Product.find(); // triago todos los productos de la db
        res.json(products) // devuelvo los productos en formato JSon
    } catch (err) { //en caso de error
        res.status(400).json({
            error: err
        });

    }
};


//creo la funcion para crear los productos
productCtrl.createProduct = async (req, res) => {
    try { //intento crear el producto
        const { productName, description, price, picture, category, stock, personalized, sale, nOfPruchased } = req.body;
        const newProduct = new Product({
            productName,
            description,
            price,
            picture,
            category,
            stock,
            personalized,
            sale,
            nOfPruchased
        });
        await newProduct.save(); //guardo el producto
        res.json('Product Created') //respondo 
    } catch (e) { //en caso de error
        console.log(e) //muestro el error en la consola
        res.json(e.errmsg); // devuelvo un mensaje de error

    }
};

//creo la funcion de borrar un producto

productCtrl.deleteProduct = async (req, res) => {
    const id = req.params.id; //guardo el id
    await Product.findByIdAndDelete(id);//borro el producto
    res.json('Product Deleted'); //respondo 
};


//creo la funcion de traer un solo producto

productCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id); // traigo el producto y lo guardo en una constante
    res.json(product); //devuelvo el producto en formato JSON
};

//creo la funcion para actualizar un producto

productCtrl.updateProduct = async (req, res) => {
    const { productName, description, price, picture, category, stock, personalized, sale, nOfPruchased } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        productName,
        description,
        price,
        picture,
        category,
        stock,
        personalized,
        sale,
        nOfPruchased
    });
    res.json('Product Updated') //respondo
};

module.exports = productCtrl;