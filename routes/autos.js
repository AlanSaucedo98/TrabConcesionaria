const express =require('express');
const router = express.Router();

const autosController = require ("../controllers/autosController");


router.get('/', autosController.autos);
router.get('/:marca',autosController.marca)
router.get('/:marca/:color/:anio?', autosController.dato)
module.exports = router