//Essa constante tem todas as funcionalidades do express
const express = require('express');
//Modulo determina quem vai poder acessar a aplicação
const cors = require('cors')
//Importando modulo express
const app = express();

//Importando as rotas
const routes = require('./routes')

app.use(cors())
//Informando ao express utilizar JSON antes de todas as requições (req)
app.use(express.json());
//Informando ao express utilizar routes
app.use(routes)

//Criando a porta
app.listen(3333)


