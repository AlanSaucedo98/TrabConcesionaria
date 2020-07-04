const express =require('express');
const router = express.Router();

const sucursalesController = require ("../controllers/sucursalesController")

router.get('/', sucursalesController.Sucursales);
router.get('/:sucursal',sucursalesController.sucursal)

module.exports = router