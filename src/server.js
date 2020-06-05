const express = require('express')
const server = express()

//pegar o banco de dados
const db = require('./database/db')

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplp
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configurar caminhos da aplicacao
//pagina inicial
//req -> requisicao
//res -> resposta
server.get('/', (req,res) => {
  return res.render('index.html')
})


//rotas que esta recebendo os dados do formulario
server.get('/create-point', (req,res) => {

  //req.query -> query strings da url
  //console.log(req.query)

  return res.render('create-point.html')
})

server.post('/savepoint', (req,res) => {
  //req.body -> corpo do formulario
  console.log(req.body)

  //inserir dados no banco de dados
  const query = `
      INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items 
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?
    );
  `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items 
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }
    console.log('Cadastrado com sucesso')
    console.log(this)

    return res.render('create-point.html', {saved:true})
  }


  db.run(query, values, afterInsertData)


})


server.get('/search-results', (req,res) => {

  const search = req.query.search

  if(search == ''){
    //oque fazer quando a pesquisa é vaiza
    return res.render('search-results.html', { total:0 })
  }



  //pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
    if(err){
      return console.log(err)
    }

    const total = rows.length

    console.log('Aqui estao os registros: ')
    console.log(rows)

    //mostrar a oagina html com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total })
  })

})

//ligar o servidor, porta a ser ouvidda
server.listen(3000)