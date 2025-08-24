const carros = require('../bancoDeDados'); 

const controladorFiltrarCarros = (req, res) => {
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
}

const controladorGeral = (req, res) => {
    res.send(carros)
}

module.exports = { controladorFiltrarCarros, controladorGeral }