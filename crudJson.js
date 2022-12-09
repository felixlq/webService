const express = require ('express')
const mysql = require ('mysql')
const app = new express()
app.use(express.json())
const port = 3001

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro'
})

//ROTA GET {READ}
app.get('/funcionarios', (req, res) => {
    connect.query('SELECT * FROM funcionarios ORDER BY id;', (err, result)=>{
        res.status(200).send(result)
    })
})

//ROTA GET {READ} POR ID
app.get('/funcionario/:id', (req, res)=> {
    let id = req.params.id
    connect.query(`SELECT * FROM funcionarios WHERE id = ${id};`, (err, result)=>{
        res.status(200).send(result)
    })
})

//ROTA POST {CREATE}
app.post('/cadastro', (req, res) => {
    let user = req.body
    connect.query(`INSERT INTO funcionarios (nome, sexo, cargo, salario) VALUES ('${user.nome}','${user.sexo}', '${user.cargo}', '${user.salario}' );`, (err, result)=>{
        res.status(201).send(result)
    })
})

//ROTA PUT {UPDATE}
app.put('/edit/:id', (req, res)=>{
    let id = req.params.id
    let updUser = req.body
    connect.query(`UPDATE funcionarios SET nome = "${updUser.nome}", sexo = "${updUser.sexo}", cargo = "${updUser.cargo}", salario = "${updUser.salario}" where id = ${id}`, (err, result) => {
        res.status(201).send(result)            
    })
})


//ROTA DELETE {DELETE}
app.delete('/delete/:id', (req, res) => {
    let id = req.params.id
    connect.query(`DELETE FROM funcionarios WHERE id = ${id}`, (err, result) => {
        res.status(201).send(result)
    })
})

//CONNECT
    app.listen(port, () => {
        console.log('Servidor local rodando na porta', port)
        console.log('Use Ctrl + C para desligar.');
    })