const ctrlCategory = {}; // creo la funcion  de control de categorias
const Category = require('../models/category'); // importo el modelo de categoria


ctrlCategory.getCategorys = async (req, res) => { // metodo para buscar las categorias
    try {
        const category = await Category.find(); //busco las categorias y las guardo en una constante
        res.json(category); //devuelvo las categorias
    } catch (err) { //en caso de error devuelvo el error
        res.status(400).json({
            error: err
        })
    }
};


ctrlCategory.createCategory = async (req, res) => { //metodo para crear categorias
    try {
        const { name } = req.body; // guardo la categoria del body de la peticion
        const category = new Category({ //guardo la categoria en el modelo de categoria
            name
        });
        await category.save(); // guardo la categoria en un db
        res.json('Category created'); //devuelvo una respuesta
    } catch (e) { //en caso de error
        console.log(e)
        res.json(e.errmsg);
    }
};

ctrlCategory.deleteCategory = async (req, res) => { // metodo para borrar una categoria

    const { id } = req.params // guardo el id de la categoria que quiero borrar
    await Category.findByIdAndDelete(id); // borro la categoria
    res.json('Category Deleted')//respondo

};

module.exports = ctrlCategory; //exporto el controlador