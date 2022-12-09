const express = require('express')
const mysql = require('mysql')
const app = new express()
app.use(express.json())
const port = 3030

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_loja'
})


app.get('/usuarios', (req, res) => {
    //VISUALIZAÇÃO NO BANCO DE DADOS GERAL
    con.query('SELECT * FROM CADASTRO order by id_cliente;', (err, result)=> {
        res.status(200).send(result)
    })
})


app.get('/usuario/:id', (req, res) =>  {
    //VISUALIZAÇÃO NO BANCO DE DADOS POR ID
    let id = req.params.id
    con.query(`SELECT * FROM CADASTRO WHERE id_cliente = ${id};`, (err, result) => {
        res.status(200).send(result)
    })
})


app.post('/cadastro', (req, res) =>{
    //CADASTRO NO BANCO DE DADOS
    const user = req.body
    const nome = user.nome
    const cidade = user.cidade
    con.query(`INSERT INTO CADASTRO (nome, cidade) VALUES ("${nome}", "${cidade}";)`, (err, result) => {
        res.status(201).send(result)
    })
})

app.put('/edit/:id', (req, res)=> {
    //EDIÇÃO NO BANCO DE DADOS
    let id = req.params.id
    let updUser = req.body
    const updNome = updUser.nome
    const updCidade = updUser.cidade
    con.query(`UPDATE CADASTRO SET NOME = "${updNome}" , CIDADE = "${updCidade}" WHERE id_cliente = ${id}`, (err, resut) => {
        res.status(201).send(resut)
    })
})


app.delete('/delete/:id', (req, res)=>{
    //DELEÇÃO NO BANCO DE DADOS
    let idDelete = req.params.id
    con.query(`DELETE FROM cadastro WHERE id_cliente = ${idDelete};`, (err,result) =>{
        res.status(201).send(result)
    })
})  


//CONNECT
app.listen(3030, ()=> {
    console.log(`Running server at port ${port}`)
    console.log('Turn off Ctrl+C');
})