//-- importaciones  
const express = require('express');
const cors = require('cors');
const app = express();


// Settings
app.set('port', 4000); //Configuro el puerto de la app


//Middlewares
app.use(cors()); // uso Cors para pasar la info entre ambos servers
app.use(express.json()); // le digo a la app que la informacion se pasara como JSON file

//Routes
app.use('/api/users', require('./routes/usuarios'));
app.use('/api/products', require('./routes/productos'));
app.use('/api/category', require('./routes/categorys'));
module.exports = app; //exporto la app para iniciarla en el index.js

