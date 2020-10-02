const {check,validationResult ,body} = require('express-validator')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('email')
    .isLength({
        min:1
    })
    .withMessage('Debes ingresar tu email'),

    check('pass')
    .isLength({
        min:6,
        max:12
    })
    .withMessage('La contraseña debe ser entre 6 y 12 caracteres'),


]