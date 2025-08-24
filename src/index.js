const carros = [
    { id: 1, nome: "corola", marca: "toyota", ano: "2021", cor: "preto"},
    { id: 2, nome: "uno", marca: "fiat", ano: "2010", cor: "azul"},
    { id: 3, nome: "celta", marca: "chevrolet", ano: "2011", cor: "prata"},
    { id: 4, nome: "ford ka", marca: "ford", ano: "2012", cor: "preto"},
    { id: 5, nome: "ranger", marca: "ford", ano: "2014", cor: "branco"},
    { id: 5, nome: "hilux", marca: "toyota", ano: "2015", cor: "cinza"},
    { id: 5, nome: "argo", marca: "fiat", ano: "2021", cor: "branco"},
    { id: 5, nome: "hb20", marca: "hyundai", ano: "2020", cor: "branco"},
];
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(carros)
}); 

app.get('/listagem/', (req, res) => {
    const { marca, cor } = req.query;
    let resultado = "nenhum filtro utilizado";
    
    if(marca && cor){
        resultado = carros.filter((carro) =>  carro.marca === marca && carro.cor === cor);
    }else if(marca){
        resultado = carros.filter((carro) =>  carro.marca === marca);
    }else if(cor){
        resultado = carros.filter((carro) =>  carro.cor === cor);
    }
    
    res.send(resultado);
}); 

app.listen(3000);