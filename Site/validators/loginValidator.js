const path = require('path');
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const {check,validationResult ,body} = require('express-validator')
const bcrypt = require('bcrypt');

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

    body('email')
    .custom(function(value){
        let usuario = dbUsers.filter(user=>{
            return user.correo == value
        })
        if(usuario == false){
            return false
        }else{
            return true
        }

    })
    .withMessage("El usuario no está registrado"),
    body('password')
    .custom(function(value,{req}){
        let result = true;
        dbUsers.forEach(user => {
            if(user.correo == req.body.email){
                if(!bcrypt.compareSync(value,user.contraseña)){
                    result = false
                }
            }
        });
        if (result == false){
            return false
        }else{
            return true
        }
    })
    .withMessage('Contraseña incorrecta')
]