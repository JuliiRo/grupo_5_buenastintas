const path = require('path');
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const {check,validationResult ,body} = require('express-validator')
const bcrypt = require('bcrypt');
let db = require('../database/models')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('email')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar tu email'),

    check('password')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('La contraseña debe ser entre 6 y 12 caracteres'),

    body('password')
    .custom(function(value,{req}){
        return db.Users.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(user =>{
            if(!bcrypt.compareSync(value , user.password)){
                return Promise.rejact('Credenciales inválidas')
            }
        })
        .catch(err=>{
            return Promise.reject('Credenciales no inválidas')
        })
    })
]