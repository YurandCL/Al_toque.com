const express = require('express');
const router = express.Router();

const pagoModel = require('../models/pagos');

router.get('/',pagoModel.find);
router.get('/:id',pagoModel.findOne);
router.post('/',pagoModel.create);
router.put('/:id',pagoModel.update);
router.delete('/:id',pagoModel.delete);


module.exports = router;
