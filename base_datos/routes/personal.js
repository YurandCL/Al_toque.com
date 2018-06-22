const express = require('express');
const router = express.Router();

const personaModel = require('../models/personal');

router.get('/',personaModel.find);
router.get('/:id',personaModel.findOne);
router.post('/',personaModel.create);
router.put('/:id',personaModel.update);
router.delete('/:id',personaModel.delete);


module.exports = router;
