const mysql = require('mysql');

    let op = {
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'my_db'
    }
    
    let myConnection = mysql.createConnection(op);
     
    myConnection.connect( (error) => {
        if (error) {
            console.log('Error connecting: ' + error.code);
        } else {
            console.log('Connection established to: ' + op.database);
        }
    } )
  

myConnection.query('SELECT * FROM diagram', function (error, results, fields) {
    if (error) {
        console.log(error);
    } else {
        console.log('The solution is: ', results);
    }
  });

 
 
    