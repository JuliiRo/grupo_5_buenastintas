
const path = require('path');
const fs = require('fs');

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
        res.locals.user = req.session.user
        console.log(res.locals.user)
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
        
        return res.redirect('/')
    },
    agregarRegister: (req,res)=>{
        let idNuevo = 1;
        dbUsers.forEach(users=>{
           if(users.id > idNuevo){
               idNuevo = users.id
           }
        })
        let nuevoUsers={
            id: idNuevo + 1,
            categoría:'usuario',
            nombreCompleto: req.body.nombreCompleto.trim(),
            correo:req.body.correo.trim(),
            nacimiento: req.body.nacimiento,
            image:(req.files[0])?req.files[0].filename:"foto-undefined.png",
            telefono:Number(req.body.telefono),
            contraseña:bcrypt.hashSync(req.body.contraseña,10),
        }
        dbUsers.push(nuevoUsers);
        fs.writeFileSync(path.join(__dirname,"..","data","usersDataBase.json"),JSON.stringify(dbUsers),'utf-8')
        res.redirect('/users/login')
    },


}
