const mongoose = require('mongoose') //trazendo o mongoose

//criando o modelo de mulher
const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true

    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema) //exportando o model

