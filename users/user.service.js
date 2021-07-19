const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
var db = require("../database")
var md5 = require("md5")


// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];

module.exports = {
    authenticate,
    getAll,
    getById
};

async function authenticate({ username, password }) {
    password = md5(password);
    //const user = user.find(u => u.username === username && u.password === password);

    var sql = "select * from user where username = ? "
    var params = [username]

   return  new Promise((res, rej) =>{
       db.get(sql, params, (err, user) => {
        if (err) {
            console.error(err.message);
            return rej(err);
        }

        if (user) {
            const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
            const { password, ...userWithoutPassword } = user;
        
            return res({
                ...userWithoutPassword,
                token
            });
        }
    
    });
   });
   

}

async function getAll() {
    var sql = "select * from user"
    var params = []
    var users = []

    /* users = db.all(sql, params, (err, rows) => {
        if (err) {
          //res.status(400).json({"error":err.message});
          return _rows;
        }
        users = rows;
         return _rows;
        })
    }); */


    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function getById(id) {
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}