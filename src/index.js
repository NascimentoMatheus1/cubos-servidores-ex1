const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá mundo.')
}); 

app.get('/iniciar', (req, res) => {
    res.send('iniciar.')
}); 

app.get('/pausar', (req, res) => {
    res.send('pausar. 123')
}); 

app.listen(3000);