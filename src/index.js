const {
    controladorFiltrarCarros, 
    controladorGeral
} = require('./controladores/filtraCarros');

const express = require('express');

const app = express();

app.get('/listagem/:id', controladorGeral); 

app.get('/listagem/', controladorFiltrarCarros); 

app.listen(3000);