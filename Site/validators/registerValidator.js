const {check,validationResult,body} = require('express-validator');

let db = require('../database/models');

module.exports= [
    check('name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu nombre"),

    check('last_name')
    .isLength({
        min:2
    })
    .withMessage("Debes ingresar tu apellido"),

    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    body('email')
    .custom(function(value){
        return db.Users.findOne({
            where:{
                email:value
            }
        })
        .then(user=>{
            if(user){
                return Promise.reject('El email ingresado ya esta existente')
            }
        })
    }),
    
    check('date')
    .isLength({
        min:1
    })
    .withMessage('Debes ser mayor de 18 años'),

    check('photo')
    .custom((value,{req})=>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    })
    .withMessage("Solo se permite png, jpg, jpeg, gif"),
    
    check('phone')
    .isLength({
        min:8
    })
    .withMessage('Debes ingresar un numero de teléfono'),


    check('password')
    .isLength({
        min:8,
        max:12
    })
    .withMessage("Debes ingresar una contraseña entre 8 y 12 caracteres"),

    check('bases')
    .isString("on")
    .withMessage("Debes aceptar las bases y condiciones")
]