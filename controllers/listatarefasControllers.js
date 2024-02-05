//Importando o express
    const express = require('express');

//Importando as rotas 
    const router = express.Router();

//Conectando com o banco de dados 
    const dbConexao = require('../models/dbConnection');


//Visualizando a estrutura da tabela
router.get('/', (req,res) => {
    const querySf = ('select * from tblistatarefas');
        dbConexao.query(querySf, (err,result) => {
            if(err) throw err;
                res.json(result);
        })
});

//Insírindo dados na tabela 
router.post('/', (req,res) => {
    const {titulo,descricao,dataTafera,statusTafera} = req.body;
    const queryIst = 'insert into tblistatarefas(titulo,descricao,dataTafera,statusTafera) values(?,?,?,?)';

    dbConexao.query(queryIst, [titulo,descricao,dataTafera,statusTafera], (err) =>{
        if(err) throw err;
            res.status(201).json({
                mensagem: 'Tarefa adicionada com sucesso!',
                    body: req.body
            });
    });
});

//apagando dados da tabela
router.delete("/:id", (req,res) => {
    const {id} = req.params;
    const queryDel = 'delete from tblistaTarefas where idTarefa = ?';

    dbConexao.query(queryDel, [id], (err,result) => {
        if(err) throw err;
            res.status(201).json({
                mensagem: `Tarefa de codígo ${id}, removida com sucesso!`
        });
    });
});

//atualizando dados da tabela
router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {idTarefa,titulo,descricao,dataTafera,statusTafera} = req.body;
    const queryUp = `update tblistaTarefas`;
})




module.exports = router;