const mongoose = require('mongoose');

const URI = 'mongodb://localhost/webstore';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})
