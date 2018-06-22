
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 7070;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Genial! Bienvenido a nuestra API' });
});
//-------------------------
var usuariosRouter = require('./routes/usuarios');
router.use('/usuarios', usuariosRouter);

//-------------------------
var datosRouter = require('./routes/datos');
router.use('/datos', datosRouter);

//-------------------------
var productosRouter = require('./routes/productos');
router.use('/productos', productosRouter);

//-------------------------
var enviosRouter = require('./routes/envios');
router.use('/envios', enviosRouter);

//-------------------------
var pagosRouter = require('./routes/pagos');
router.use('/pagos', pagosRouter);

//-------------------------
var proveedoresRouter = require('./routes/proveedores');
router.use('/proveedores', proveedoresRouter);

//-------------------------
var personalRouter = require('./routes/personal');
router.use('/personal', personalRouter);

app.use('/api', router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/proyecto');
mongoose.Promise = global.Promise;



app.listen(port);
console.log('La magia sucede en el puerto ' + port);
