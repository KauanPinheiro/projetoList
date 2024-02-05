//Importando o express
    const express = require('express');

//Importando as rotas 
    const router = express.Router();

//Configurando a rota
    const listatarefasControllers = require('../controllers/listatarefasControllers');

//Configurando o modo de usar a rota
    router.use('/', listatarefasControllers);

//Exportando a rota
    module.exports = router;
