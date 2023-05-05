const mongoose = require('mongoose')//Trazendo o mongoose pra dentro do projeto
require('dotenv').config()//trazendo o env
//funcao para conectar com o banco
async function conectaBancoDeDados(){
   try{
    console.log('conexão com o banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)//esperando conectar e permitindo o servidor atender os outros clientes 

    console.log('conexão com o banco de dados feita com sucesso')

   }catch(erro){
    console.log(erro)
   }

}

module.exports = conectaBancoDeDados //exportando a função 