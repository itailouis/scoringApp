const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const authorize = require('_helpers/authorize')
const Role = require('_helpers/role');

// routes
router.post('/authenticate', authenticate);     // public route
router.get('/', authorize(Role.Admin), getAll); // admin only
router.get('/users', getAll);
router.post('/add', addnew);
router.get('/me', getById);
router.get('/rates', getAllRates);
router.get('/status/:action/:id', setStatus);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => {
            console.log(user);
            return user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' })
        })
        //.err(()=>res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function addnew(req, res, next) {
    userService.addNewUser(req.body)
        .then(user => {
            console.log(user);
            return user ? res.json(user) : res.status(400).json({ message: 'error when adding user' })
        })
        .catch(err => {
            console.log(err);
            return next(err)
        });
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {

    userService.getById(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function getAllRates(req, res, next) {

    userService.getAllRates()
        .then(user => res.json(user))
        .catch(err => next(err));
}

function setStatus(req, res, next) {
    userService.setUserStatus(req.params.action, req.params.id)
        .then(user => {
        
            return res.json(user)

        })
        .catch(err => next(err));
}