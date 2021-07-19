var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text UNIQUE, 
            email text UNIQUE, 
            firstName text,
            lastName text,
            password text,
            role text,
            CONSTRAINT username_unique UNIQUE (username)			
            CONSTRAINT email_unique UNIQUE (email)
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (username, email,firstName ,lastName, password,role) VALUES (?,?,?,?,?,?)'
                db.run(insert, ["admin", "admin@example.com", "admin", "admin", md5("admin123456"), "admin"])
                db.run(insert, ["user", "user@example.com", "user", "user", md5("user123456"), "user"])
            }
        })

        const createItemsTable = "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMERIC)";
        db.run(createItemsTable,(err) => {
            if (err) {
                // Table already created
            } else {
                
            }
        });


    }
})


module.exports = db

