
const express = require('express');
const router = express.Router();
const callService = require('./calls.service');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.post('/add',multipartMiddleware, addnewCall); 

router.post('/rate', addCallRate); 
router.get('/calls', addAllCall); 

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

function addCallRate(req, res, next) {
    console.log(req.body);
    callService.rateCall(req.body)
        .then(user => {
            console.log(user);
            return user ? res.json(user) : res.status(400).json({ message: 'error when adding ratings' })
        })
        .catch(err =>{
            console.log(err);
           return  next(err)
        });
}

function addAllCall(req, res, next) {
    console.log(req.body);
    callService.getAllCalls(req.body)
        .then(user => {
            console.log(user);
            return user ? res.json(user) : res.status(400).json({ message: 'error when adding ratings' })
        })
        .catch(err =>{
            console.log(err);
           return  next(err)
        });
}