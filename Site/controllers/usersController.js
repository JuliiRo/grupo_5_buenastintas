
const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const dbUsers = require(path.join(__dirname,'..','data','dbUsers'))
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')

module.exports = {
     // http://localhost:3000/users/
    login:function(req,res){
        res.render('users', { 
            title: 'Login | Buenas Tintas',
            css: 'users.css'
        })
    },
    // http://localhost:3000/users/register
    register:function(req,res){
        res.render('register', { 
            title: 'Registro | Buenas Tintas',
            css: 'users.css'
        })
    },
    processLogin:function(req,res){
        
        let errores = validationResult(req); //guardo los errores que me vienen de expressValidator
        if(errores.isEmpty()){ //si no hay errores
            dbUsers.forEach(user => {
                if(user.correo == req.body.email && bcrypt.compareSync(req.body.password, user.contraseña)){
                    req.session.user = {
                        nombre: user.nombreCompleto,
                        categoría: user.categoría,
                        email: user.correo,
                        id:user.id
                    }
                } 
            }) 
            if(req.body.recordar){
                res.cookie('userBuenasTintas' ,req.session.user,{maxAge:1000*60*60})
            }
            res.redirect('/')

        
        }else{
            res.render('users',{
                title: 'Login | Buenas Tintas',
                css: 'users.css',
                errores: errores.mapped(),
                old:req.body
            })
        }
        
    },
    logout: function(req,res){
        req.session.destroy()
        if(req.cookies.userBuenasTintas){
            res.cookie('userBuenasTintas',' ',{maxAge:-1});
        }
        return res.redirect('/')
    },
    agregarRegister: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Users.create({
                category: 'cliente',
                name: req.body.name.trim(),
                last_name: req.body.last_name.trim(),
                email: req.body.email.trim(),
                date: req.body.date,
                photo: req.body.photo,
                phone: req.body.phone,
                password:bcrypt.hashSync(req.body.password,10),
            })
            .then(usuario => {
                //console.log(usuario)
                return res.redirect('/users/login')
            })
            .catch(err => {
                res.send(err)
            })
        }else{
            res.render('register',{
                title:"Registrate",
                css:"users.css",
                errors:errors.mapped(),
                old:req.body,
            })
        }
    },


}
