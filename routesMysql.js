const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const app = new express()
app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_loja'
})


router
        .get('/bancoLoja', (req, res) => {
            //VISUALIZAÇÃO NO BANCO DE DADOS GERAL
            con.query('SELECT * FROM CADASTRO order by id_cliente;', (err, result)=> {
                res.status(200).send(result)
            })
        })


        .get('/bancoLoja/:id', (req, res) =>  {
            //VISUALIZAÇÃO NO BANCO DE DADOS POR ID
            con.query(`SELECT * FROM CADASTRO WHERE id_cliente = ${req.params.id};`, (err, result) => {
            res.status(200).send(result)
            })
        })


        .post('/bancoLoja', (req, res) =>{
            //CADASTRO NO BANCO DE DADOS
            con.query(`INSERT INTO CADASTRO (nome, cidade) VALUES ( "${req.body.nome}" , "${req.body.cidade}" ); `, (err, result) => {
            res.status(201).send(result)
            })
        })

        .put('/bancoLoja/:id', (req, res)=> {
            //EDIÇÃO NO BANCO DE DADOS
            con.query(`UPDATE CADASTRO SET NOME = "${req.body.nome}" , CIDADE = "${rec.body.cidade}" WHERE id_cliente = ${req.params.id}`, (err, resut) => {
            res.status(201).send(resut)
            })
        })


        .delete('/bancoLoja/:id', (req, res)=>{
            //DELEÇÃO NO BANCO DE DADOS
            let idDelete = req.params.id
            con.query(`DELETE FROM cadastro WHERE id_cliente = ${idDelete};`, (err,result) =>{
                res.status(201).send(result)
            })
        })  



module.exports = router