  
const express = require('express');
const app = express();

const routeHome = require("./routes/home");
const routeSucursales = require("./routes/sucursales");
const routeMarcas = require("./routes/marcas")
const routeAutos = require("./routes/autos");
 

//servidor

app.use('/', routeHome)  //request,response
app.use('/sucursales', routeSucursales)
app.use('/marcas', routeMarcas)
app.use('/autos', routeAutos)//request, response*/

app.listen(3030,() =>console.log("Servidor Levantado!"))
