const express = require('express');

//Iniciando a aplicação
const app = express();

//Definindo a porta na qual o servisor vai rodar 
const port = 3000;

// Configuração da porta do servidor 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Teste para vê se o servidor esta rodando 
app.get('/',(req,res) => {
    res.json({mensagem: 'oba funciona'});
});

app.use(express.json());

//Importando as rota
const listatarefasRouters = require('./routers/listatarefasRouters');
app.use('/lista', listatarefasRouters);
