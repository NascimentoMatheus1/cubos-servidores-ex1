const {
    controladorFiltrarCarros, 
    controladorGeral
} = require('./controladores/filtraCarros');

const express = require('express');

const app = express();

const primeiroIntermediario = (req, res, next) => {
    const { senha } = req.query;
    if(senha && senha === "123"){
        next()
    }else{
        res.send('Usuario não autorizado!');
    }
}

app.use(primeiroIntermediario);

app.get('/listagem/:id', controladorGeral); 

app.get('/listagem/', controladorFiltrarCarros); 

app.listen(3000);