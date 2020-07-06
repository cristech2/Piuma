const app = require('./app'); //traigo la app del server backend
require('./database');


// iniciando el servidor
async function main() {
    await app.listen(app.get('port'));//le digo que se monte en el port configurado
    console.log('Server on Port:', app.get('port'));
}

main();