const express = require ('express')
const bancoLoja = require ("./routesMysql.js")

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ Banco_Loja: "MySQL" })
    })

    app.use(
        express.json(),
        bancoLoja
    )
}

module.exports = routes



//ARQUIVOS RELACIONADOS AO EXERCÍCIO.
//princialMysql.js >> CHAMADA DAS ROTAS E CONEXÃO COM SERVIDOR
//routesMysql.js  >> DEFINICÃO DE ROTAS E ACESSO AO BANCO DE DADOS.
