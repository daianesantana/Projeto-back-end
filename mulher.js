const express = require("express")
const router = express.Router()

const app = express();
app.use(express.json())

const porta = 3333;

function mostraMulher(request, response){
    response.json({
        nome: 'Simara conceicao',
        minibio: 'Desenvolvedora e instrutora'
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);