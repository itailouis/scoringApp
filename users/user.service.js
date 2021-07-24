const config = require('config.json');
const jwt = require('jsonwebtoken');
const Role = require('_helpers/role');
var db = require("../database")
var md5 = require("md5")


// users hardcoded for simplicity, store in a db for production applications

module.exports = {
    authenticate,
    getAll,
    addNewUser,
    getById,
    getAllRates,
    setUserStatus
};

async function authenticate({ username, password }) {
    password = md5(password);
    //const user = user.find(u => u.username === username && u.password === password);

    var sql = "select * from user where username = ? and password= ? and status=?"
    var params = [username, password,'active']
    console.log(params);
    return new Promise((res, rej) => {
        db.get(sql, params, (err, user) => {
            if (err) {
                console.error(err.message);
                return rej(err);
            }
            console.error(" " + user);
            if (user) {
                const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
                const { password, ...userWithoutPassword } = user;

                return res({
                    ...userWithoutPassword,
                    token
                });
            } else {
                return rej({
                    "message": "wrong pass word or username",

                });

            }


        });
    });


}

async function getAll() {
    var sql = "select * from user"
    var params = []
    var users = []
    return new Promise((res, rej) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                return rej(err);
            }
            return res(rows.map(u => {
                const { password, ...userWithoutPassword } = u;
                return userWithoutPassword;
            }));
        });


    });

}

async function addNewUser({ username, email, firstname, lastname, password, role }) {
    console.log(username);
    return new Promise((res, rej) => {
        var sql = 'INSERT INTO user (username, email,firstName ,lastName, password,role) VALUES (?,?,?,?,?,?)'
        var params = [username, email, firstname, lastname, md5(password), role]
        db.run(sql, params, function (err, result) {
            if (err) {
                return rej(err);
            }
            return res({
                "message": "success",
                "data": result
            });
        });
    });




}
async function getById({ userId }) {

    return new Promise((res, rej) => {

        var sql = 'select SUM(point) callpoint, COUNT(*) totalCalls , user from scoreLog sl where user=?  group by  user '
        var params = [userId]
        db.each(sql, params, function (err, result) {
            if (err) {
                return rej(err);
            }
            console.error(result)
            return res(
                result
            );
        });
    });

}

async function getAllRates() {

    return new Promise((res, rej) => {

        var sql = ' select firstName, lastName, SUM(point) callpoint, COUNT(*) totalCalls , user from scoreLog sl join user on user.id=sl.user group by   user'
        var params = []
        db.all(sql, params, function (err, result) {
            if (err) {
                return rej(err);
            }
            console.error(result)
            return res(
                result
            );
        });
    });

}

async function setUserStatus(action, id) {

    return new Promise((res, rej) => {
        var sql = 'UPDATE user SET status=? WHERE id=?;select * from user'
        var params = [action, parseInt(id)]
        db.all(sql, params, function (err, rows) {
            if (err) {
                return rej(err);
            }
            return res({
                "message": "success"

            });
        });

    });

}


