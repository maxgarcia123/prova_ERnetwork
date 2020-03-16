{/*config das rotas*/}
const { Router } = require('express');

const CidadesController = require("./controllers/CidadeController");
const PessoasController = require("./controllers/PessoasController");
const routes = Router();

routes.get('/',(req,res)=> res.send("hello"))
routes.post('/Cidade',CidadesController.store)
routes.get('/Cidade',CidadesController.index)

routes.post('/Pessoas',PessoasController.store)

module.exports = routes;