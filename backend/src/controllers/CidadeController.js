const Cidade = require('../app/models/Cidade')

module.exports = {
    
    async index(req,res){
    const { name } = req.body;
     const cidades = await Cidade.findOne({name});

     return res.json(cidades);
    },

    async store(req,res){
     const { name, uf,codigo } = req.body;

     const  cidade = await Cidade.create({name,uf,codigo});
     
     return res.json(cidade);
    }
}