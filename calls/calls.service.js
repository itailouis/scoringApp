var db = require("../database")

module.exports = {
   uploadsCall
};

async function uploadsCall({title, filepath, user}){
   
    return new Promise((res, rej) => {
       
        var sql = 'INSERT INTO voicecalls (title, filepath, user) VALUES (?,?,?)'
        var params = [title, filepath, user]
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