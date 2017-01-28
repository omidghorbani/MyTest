var odata = require('node-odata');

var server = odata('mongodb://localhost/app');

server.resource('books', {
    title: String,
    price: Number,
    key: String,
    Sex: Boolean
});

server.listen(3000);