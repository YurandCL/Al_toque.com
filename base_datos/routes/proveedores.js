const express = require('express');
const router = express.Router();

const proveedorModel = require('../models/proveedores');

router.get('/',proveedorModel.find);
router.get('/:id',proveedorModel.findOne);
router.post('/',proveedorModel.create);
router.put('/:id',proveedorModel.update);
router.delete('/:id',proveedorModel.delete);


module.exports = router;
