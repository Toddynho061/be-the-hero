//Esse arquivo vai ficar somente as rotas\\

//Importando as funcionalidades do express
const express = require('express');
//Importando os Controllers
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')



// Desacoplando modulo de Rotas do express, ou seja, chamando só a parte de Rotas
const routes = express.Router() ;

//Criando as rotas\\

//Listando todos os casos/incidents de uma ong
routes.get('/profile', ProfileController.index)
//Criando a rota para listar as ongs, com metodo diferente
routes.get('/ongs', OngController.index);
//Criando a rota '/ongs' para criar uma ONG, entao usa o metodo http POST
routes.post('/ongs', OngController.create);
//Criando a rota de login da ong -- CRIAR UMA SESSAO por isso que usa POST
routes.post('/sessions', SessionController.create)

//Listar os casos
routes.get('/incidents', IncidentsController.index);
//Criando uma rota '/incidents' para criar novos casos, usando metodo POST
routes.post('/incidents', IncidentsController.create);
//Deletar um caso
routes.delete('/incidents/:id', IncidentsController.delete)



//Exportando a variavel
module.exports = routes;