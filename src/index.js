const {
    controladorFiltrarCarros, 
    controladorGeral
} = require('./controladores/filtraCarros');

const express = require('express');

const app = express();

app.get('/', controladorGeral); 

app.get('/listagem/', controladorFiltrarCarros); 

app.listen(3000);