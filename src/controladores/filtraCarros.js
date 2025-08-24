const carros = require('../bancoDeDados'); 

const controladorFiltrarCarros = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;
    
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
    const { id } = req.params;
    let resultado = carros;
    if(id){
        resultado = carros.find((carro) => { return carro.id === Number(id) });
    }
    res.send(resultado);
}

module.exports = { controladorFiltrarCarros, controladorGeral }