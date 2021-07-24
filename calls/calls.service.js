var db = require("../database")

module.exports = {
   uploadsCall,
   rateCall,getAllCalls
};

async function uploadsCall({title, filepath, user}){
   
    return new Promise((res, rej) => {
       
        var sql = 'INSERT INTO voicecalls (title, filepath, user) VALUES (?,?,?)'
        var params = [title, filepath, user]
        db.run(sql, params, function(err, result) {
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

async function rateCall({point,voicecallid,userId}){
   
    return new Promise((res, rej) => {
       
        var sql = 'INSERT INTO scoreLog (point,voicecallid,user) VALUES (?,?,?)'
        var params = [point,voicecallid,userId]
        db.run(sql, params, function(err, result) {
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

async function getAllCalls() {
    var sql = "select voicecalls.id, voicecalls.filepath ,firstName from voicecalls join user on user.id = voicecalls.user"
    var params = []
    var users = []


    return new Promise((res, rej) => {

        db.all(sql, params, (err, rows) => {
            if (err) {
                return rej(err);;
            }
            return res(rows.map(u => {
                const { password, ...userWithoutPassword } = u;
                return userWithoutPassword;
            }));
        });


    });

}