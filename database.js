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
            status text DEFAULT active,
            CONSTRAINT username_unique UNIQUE (username)			
            CONSTRAINT email_unique UNIQUE (email)
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (username, email,firstName ,lastName, password,role,status) VALUES (?,?,?,?,?,?,?)'
                db.run(insert, ["admin", "admin@example.com", "admin", "admin", md5("admin123456"), "admin","active"])
                db.run(insert, ["user", "user@example.com", "user", "user", md5("user123456"), "user",,"active"])
            }
        })

        const createVoicecallsTable = "CREATE TABLE IF NOT EXISTS voicecalls (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, filepath TEXT, user NUMERIC)";
        db.run(createVoicecallsTable,(err) => {
            if (err) {
                //Table already created
            } else {
                
            }
        });

        const createScoreLogTable = "CREATE TABLE IF NOT EXISTS scoreLog (id INTEGER PRIMARY KEY AUTOINCREMENT, point NUMERIC,voicecallid NUMERIC,user NUMERIC)";
        db.run(createScoreLogTable,(err) => {
            if (err) {
                //Table already created
            } else {
                
            }
        });


    }
})
module.exports = db

