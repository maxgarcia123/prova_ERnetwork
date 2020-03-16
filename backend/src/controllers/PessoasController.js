const Pessoa = require('../app/models/Pessoa')
module.exports = {
    async index(req,res){
     const pessoas = await Pessoa.findAll();

     return res.json(pessoas);
    },

    async store(req,res){
     const { name,sexo,cpf,rg,salario,cidade,codigo,data_nacimento } = req.body;
    
     
     const  pessoa = await Pessoa.create({name,sexo,cpf,rg,salario,cidade,codigo,data_nacimento});
     
     return res.json(pessoa);
    }
}