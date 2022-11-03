const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql_server',
    user: 'app_nodejs',
    password: 'app_nodejs',
    database: 'app_nodejs'
}
const mysql = require('mysql')

app.get('/', (req, res) => {
    
    const connection = mysql.createConnection(config)
    connection.query(`SELECT * FROM people;`, function (err, result) {

        if (Array.isArray(result)) {
            let template = `<h1>Full Cycle Rocks!</h1>`;
        
            template += `<ul>`;
            result.forEach(function(item) {
                template += `<li>${item.name}</li>`
            })
            template += `</ul>`;
        
            res.send(template);
        }

    });
    connection.end();
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})