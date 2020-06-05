//importar a dependencia do sqlite
const sqlite3 = require('sqlite3').verbose()

//iniiciar o objeto de banco de dados, ira operar no bd
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

//utilizar  o objeto  de banco de dados , para as operações


  // db.serialize(() => {
    //Criar a tabela com comandos sql
    // db.run(`
    //       CREATE TABLE IF NOT EXISTS places (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     image TEXT,
    //     name TEXT,
    //     address TEXT,
    //     address2 TEXT,
    //     state TEXT,
    //     city TEXT,
    //     items TEXT
    //   );
    // `)

    // //Inserir dados - sql
    // const query = `
    //     INSERT INTO places (
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items 
    //   ) VALUES (
    //     ?, ?, ?, ?, ?, ?, ?
    //   );
    // `
    // const values = [
    //   "urlDaImaggem",
    //   "nomeDoLocal",
    //   "rua/bairro",
    //   "numero",
    //   "estado",
    //   "cidade",
    //   "itens que a entidade coleta"
    // ]

    // function afterInsertData(err) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   console.log('Cadastrado com sucesso')
    //   console.log(this)
    // }

    //esta função ira receber a string no primeiro parametro, o segundo parmetro reflete os dados que serao trocados onde possui "?"
    //terceiro argumento é uma funcao que sera executado apos a query
    //passar por referencia, nao executadno diretamente

  //   FAZ A INSERÇÂO DE DADOS NO BD
  //   //db.run(query, values, afterInsertData)


  //  //consultar os dados - sql
    // db.all(`SELECT * FROM places`, function(err, rows){
    //   if(err) { 
    //     return console.log(err) 
    //   }

    //   console.log('Aqui estão os registros: ')
    //   console.log(rows)
    // })

    //Deletar um dado da tabela - sql
    // db.run(`DELETE FROM places WHERE id=?`, [8], function(err){
    //   if(err){
    //     return console.log(err)
    //   }
    //   console.log('Registro apagado com sucesso')
    // }) 
 // })
