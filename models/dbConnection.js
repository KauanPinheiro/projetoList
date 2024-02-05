//Importando módulo do MYSQL
    const mysql = require('mysql');

//Criando conexão com o banco
    const conecta = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbtodolist'
    });

        conecta.connect((err) => {
            if(err){
                console.log("Erro ao conecta ao banco,por favor verifique",err);
                    reject(err);
                        return;
            }
                console.log('Conetado ao banco, seja bem-vindo!');
        });

        
//Exportando a conexão com o banco
    module.exports = conecta;