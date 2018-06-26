const express = require('express');
const router = express.Router();

const datoModel = require('../models/datos');

router.get('/',datoModel.find);
router.get('/:id',datoModel.findOne);
router.post('/',datoModel.create);
router.put('/:id',datoModel.update);
router.delete('/:id',datoModel.delete);


module.exports = router;
