const express = require('express');
const router = express.Router();

const envioModel = require('../models/envios');

router.get('/',envioModel.find);
router.get('/:id',envioModel.findOne);
router.post('/',envioModel.create);
router.put('/:id',envioModel.update);
router.delete('/:id',envioModel.delete);


module.exports = router;
