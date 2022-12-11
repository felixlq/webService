
const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000
const routes = require ("./crudMysql.js")
app.use(bodyParser.json())

//UTILIZANDO AS ROTAS

routes(app)

app.listen(port, ()=>{
    console.log(`Server rodando na porta ${port}`);
})