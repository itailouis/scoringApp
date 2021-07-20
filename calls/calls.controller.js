
const express = require('express');
const router = express.Router();
const callService = require('./calls.service');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.post('/add',multipartMiddleware, addnewCall); 

module.exports = router;


function addnewCall(req, res, next) {
    
    req.body.filepath=req.files.file.path;
    console.log(req.body);
    callService.uploadsCall(req.body)
        .then(user => {
            console.log(user);
            return user ? res.json(user) : res.status(400).json({ message: 'error when adding call' })
        })
        .catch(err =>{
            console.log(err);
           return  next(err)
        });
}